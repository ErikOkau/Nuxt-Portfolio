<script setup lang="ts">

</script>

<template>
    <div class="boxes">
        <div class="box1">
            <h2>Kjøreskole</h2>
            <img src="" alt="">
        </div>
        <div class="box2">
            <h2>OCR Program</h2>
            <p>Lesing av PDF-er mottat på
                e-post og konvertere teksten
                til en tom fil.</p>
        </div>
        <div class="box3">
            <h2>Valgomat</h2>
            <img src="" alt="">
        </div>
    </div>
</template>

<style scoped lang="scss">
.boxes {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 5rem;
    gap: 5rem;


    .box1,
    .box2,
    .box3 {
        display: flex;
        flex-direction: column;
        border: solid black 2px;
        padding: 1rem 3rem 2rem 1rem;
        width: 22rem;
    }

    p {
        font-size: 1.5rem;
        width: 21rem;
    }
}
</style>