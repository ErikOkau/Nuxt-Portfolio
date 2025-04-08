<script setup lang="ts">
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { EdgesGeometry, LineBasicMaterial, LineSegments } from 'three'
import { gsap } from 'gsap'
import { onMounted, ref } from 'vue'

const canvas = ref<HTMLCanvasElement>()
const raycaster = new THREE.Raycaster()
const mouse = new THREE.Vector2()

onMounted(() => {
    // ---------------------------
    // INITIAL SCENE: Spinning Cube
    // ---------------------------
    if (!canvas.value) {
        console.error("Canvas element not found")
        return
    }

    const scene = new THREE.Scene()
    const sizes = { width: window.innerWidth, height: window.innerHeight }

    const camera = new THREE.PerspectiveCamera(
        45,
        sizes.width / sizes.height,
        0.1,
        100
    )
    camera.position.z = 20
    scene.add(camera)

    const light = new THREE.AmbientLight(0xffffff, 0.5)
    light.position.set(0, 10, 10)
    light.intensity = 2
    scene.add(light)

    const renderer = new THREE.WebGLRenderer({
        canvas: canvas.value,
        alpha: true
    })
    renderer.setClearColor('#ffffff')
    renderer.setSize(sizes.width, sizes.height)

    // Use OrbitControls for the initial scene
    const orbitControls = new OrbitControls(camera, canvas.value)
    orbitControls.enableDamping = true
    orbitControls.enablePan = false
    orbitControls.enableZoom = false

    // Create the initial cube with edges
    const cubeGeometry = new THREE.BoxGeometry(5, 5, 5)
    const cubeMaterial = new THREE.MeshPhongMaterial({ color: '#000000' })
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
    scene.add(cube)

    const cubeEdgesGeometry = new EdgesGeometry(cubeGeometry)
    const cubeEdgesMaterial = new LineBasicMaterial({ color: '#ffffff' })
    const cubeEdges = new LineSegments(cubeEdgesGeometry, cubeEdgesMaterial)
    scene.add(cubeEdges)

    gsap.timeline({ defaults: { duration: 1 } })
        .fromTo(cube.scale, { x: 0, y: 0, z: 0 }, { x: 1, y: 1, z: 1 })

    window.addEventListener('resize', () => {
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()
        renderer.setSize(sizes.width, sizes.height)
    })

    function animateInitial() {
        cube.rotation.x += 0.01
        cube.rotation.y += 0.01
        cubeEdges.rotation.copy(cube.rotation)
        orbitControls.update()
        renderer.render(scene, camera)
        requestAnimationFrame(animateInitial)
    }
    animateInitial()

    // Raycasting: Listen for cube clicks
    canvas.value.addEventListener('click', (event) => {
        const rect = canvas.value!.getBoundingClientRect()
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

        raycaster.setFromCamera(mouse, camera)
        const intersects = raycaster.intersectObjects([cube])
        if (intersects.length > 0) {
            console.log("Cube clicked!")
            startTeleportation()
        }
    })

    // ---------------------------
    // TELEPORTATION & NEW WORLD
    // ---------------------------
    // Global variables for camera control in the new world
    let yaw = 0, pitch = 0
    const mouseSensitivity = 0.002
    // Clamp pitch between -45° and +45° (in radians)
    const pitchMin = -Math.PI / 4, pitchMax = Math.PI / 4
    // Desired camera follow distance from player
    const chaseDistance = 10

    function startTeleportation() {
        gsap.to(cube.scale, {
            x: 0, y: 0, z: 0,
            duration: 1,
            onComplete: () => {
                gsap.to(renderer.domElement, {
                    opacity: 0,
                    duration: 0.5,
                    onComplete: () => {
                        loadNewWorld()
                        gsap.to(renderer.domElement, { opacity: 1, duration: 0.5 })
                        // Request pointer lock to capture mouse movement
                        canvas.value!.requestPointerLock()
                    }
                })
            }
        })
    }

    function loadNewWorld() {
        // Clear scene and re-add camera and light
        scene.clear()
        scene.add(camera)
        scene.add(light)

        // Create interior room: an inverted cube with gray-blue walls
        const interiorSize = 20
        const interiorGeometry = new THREE.BoxGeometry(interiorSize, interiorSize, interiorSize)
        const interiorMaterial = new THREE.MeshBasicMaterial({
            color: '#5F6A82',
            side: THREE.BackSide,
        })
        const interiorCube = new THREE.Mesh(interiorGeometry, interiorMaterial)
        scene.add(interiorCube)

        // Add visible edges for the interior
        const interiorEdgesGeometry = new THREE.EdgesGeometry(interiorGeometry)
        const interiorEdgesMaterial = new THREE.LineBasicMaterial({ color: '#ffffff' })
        const interiorEdges = new THREE.LineSegments(interiorEdgesGeometry, interiorEdgesMaterial)
        scene.add(interiorEdges)

        // Optional floor
        const floorGeometry = new THREE.PlaneGeometry(100, 100)
        const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x222222 })
        const floor = new THREE.Mesh(floorGeometry, floorMaterial)
        floor.rotation.x = -Math.PI / 2
        scene.add(floor)

        // Create the player as a ball
        const playerGeometry = new THREE.SphereGeometry(1, 32, 32)
        const playerMaterial = new THREE.MeshStandardMaterial({ color: '#ffff00' })
        const player = new THREE.Mesh(playerGeometry, playerMaterial)
        player.position.set(0, 1, 0) // Slightly above the floor
        scene.add(player)

        // Initialize camera chase parameters
        // Set initial yaw to player's facing direction (e.g., 0) and pitch to 0
        yaw = 0; pitch = 0;
        const mouseSensitivity = 0.002
        // Adjusted pitch clamp so you can't look too far down/up:
        const pitchMin = -0.4, pitchMax = 0.3
        // Desired camera follow distance from the player
        const chaseDistance = 1

        // Request pointer lock to capture free mouse movement.
        canvas.value!.requestPointerLock()

        // Set up pointer lock mouse movement (for free-look)
        document.addEventListener('pointerlockchange', onPointerLockChange, false)
        document.addEventListener('mousemove', onMouseMove, false)

        // Set up keyboard movement (WASD) for the player
        setupPlayerMovement(player)
        // Start render loop for the new world with chase camera
        animateChaseCamera(player)
        // Optionally, set up an enemy as before
        setupEnemy()
    }

    function onPointerLockChange() {
        if (document.pointerLockElement === canvas.value) {
            console.log("Pointer locked")
        } else {
            console.log("Pointer unlocked")
        }
    }

    // Mouse move handler for pointer lock:
    function onMouseMove(event: MouseEvent) {
        if (document.pointerLockElement !== canvas.value) return
        yaw -= event.movementX * mouseSensitivity
        pitch -= event.movementY * mouseSensitivity
        // Clamp pitch within our new limits:
        pitch = Math.max(pitchMin, Math.min(pitchMax, pitch))
    }
    // Update camera so that it follows the player using a chase-camera system.
    // The camera's ideal offset is computed using spherical coordinates
    // where yaw and pitch control the camera's position relative to the player.
    // Update the chase camera position relative to the player:
    function updateCamera(player: THREE.Mesh) {
        const offset = new THREE.Vector3()
        // Compute offset using spherical coordinates.
        offset.x = chaseDistance * Math.cos(pitch) * Math.sin(yaw)
        offset.y = chaseDistance * Math.sin(pitch)
        offset.z = chaseDistance * Math.cos(pitch) * Math.cos(yaw)
        offset.negate() // so camera is behind the player

        // Compute ideal camera position relative to player:
        const idealCamPos = player.position.clone().add(offset)
        // Smoothly interpolate camera position to ideal position.
        camera.position.lerp(idealCamPos, 0.2)
        // Always look at the player.
        camera.lookAt(player.position)
    }

    // The chase-camera animation loop for the new world:
    function animateChaseCamera(player: THREE.Mesh) {
        updateCamera(player)
        renderer.render(scene, camera)
        updateEnemy()
        requestAnimationFrame(() => animateChaseCamera(player))
    }

    // Compute movement relative to the current yaw angle.
    function setupPlayerMovement(player: THREE.Mesh) {
        const movement = {
            moveForward: false,
            moveBackward: false,
            moveLeft: false,
            moveRight: false,
        }

        document.addEventListener('keydown', (event: KeyboardEvent) => {
            switch (event.code) {
                case 'KeyS': movement.moveForward = true; break
                case 'KeyW': movement.moveBackward = true; break
                case 'KeyD': movement.moveLeft = true; break
                case 'KeyA': movement.moveRight = true; break
            }
        })

        document.addEventListener('keyup', (event: KeyboardEvent) => {
            switch (event.code) {
                case 'KeyS': movement.moveForward = false; break
                case 'KeyW': movement.moveBackward = false; break
                case 'KeyD': movement.moveLeft = false; break
                case 'KeyA': movement.moveRight = false; break
            }
        })

        const clock = new THREE.Clock()
        function animateMovement() {
            const delta = clock.getDelta()
            const speed = 10
            let moveDir = new THREE.Vector3(0, 0, 0)
            // For forward/back, use the camera's yaw direction.
            const forward = new THREE.Vector3(0, 0, -1).applyAxisAngle(new THREE.Vector3(0, 1, 0), yaw)
            const right = new THREE.Vector3(1, 0, 0).applyAxisAngle(new THREE.Vector3(0, 1, 0), yaw)
            if (movement.moveForward) moveDir.add(forward)
            if (movement.moveBackward) moveDir.sub(forward)
            if (movement.moveLeft) moveDir.sub(right)
            if (movement.moveRight) moveDir.add(right)
            if (moveDir.length() > 0) {
                moveDir.normalize().multiplyScalar(speed * delta)
                player.position.add(moveDir)
                // Optionally, clamp player to room boundaries
                const boundary = 9
                player.position.x = THREE.MathUtils.clamp(player.position.x, -boundary, boundary)
                player.position.z = THREE.MathUtils.clamp(player.position.z, -boundary, boundary)
            }
            requestAnimationFrame(animateMovement)
        }
        animateMovement()
    }

    // ---------------------------
    // ENEMY SETUP (Unchanged)
    // ---------------------------
    let enemy: THREE.Mesh
    function setupEnemy() {
        const enemyGeometry = new THREE.SphereGeometry(1, 16, 16)
        const enemyMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 })
        enemy = new THREE.Mesh(enemyGeometry, enemyMaterial)
        enemy.position.set(10, 0, 10)
        scene.add(enemy)
    }

    function updateEnemy() {
        if (!enemy) return
        // Enemy moves toward the player (approximately toward the camera position)
        const enemyDir = new THREE.Vector3().subVectors(camera.position, enemy.position).normalize()
        enemy.position.add(enemyDir.multiplyScalar(0.05))
    }
})
</script>

<template>
    <canvas class="position" ref="canvas"></canvas>
</template>

<style scoped>
.position {
    cursor: pointer;
    display: block;
    width: 100%;
    height: 100vh;
}
</style>
