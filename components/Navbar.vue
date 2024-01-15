<script setup lang="ts">
// Array of navbar links
const navbarLinks = [
    {
        name: "Hjem",
        link: "/"
    },
    {
        name: "Om",
        link: "/about"
    },
    {
        name: "Projekter",
        link: "/projects"
    },
    {
        name: "Kontakt",
        link: "/contact"
    }
]
</script>

<template>
    <div class="navbar">
        <div class="left_navbar">
            <div class="navbar__logo">
                <img class="logo" src="/img/logo.svg"/>
            </div>
        </div>
        <div class="middle_navbar">
            <div class="routerlinks" v-for="navbar in navbarLinks">
                <NuxtLink class="RouterLink" :to="{ path: navbar.link }">{{ navbar.name }}</NuxtLink>
            </div>
        </div>
        <div class="right_navbar">
            <Search />
        </div>
    </div>
</template>

<style scoped lang="scss">
// Navbar styling
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1.5rem 5rem 0rem 5rem;
    margin-left: 1rem;
    margin-right: 1rem;

    font-size: 1.25rem;
    color: 000000;

    a {
        text-decoration: none;
        color: black;
        transition: 0.3s ease-in-out;
    }

    // Login link styling, right navbar
    .right_navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;

        .login_link {
            text-decoration: none;
            transition: 0.3s ease-in-out;

            &:hover {
                transform: scale(1.2);
                cursor: pointer;
            }
        }
    }

    // Navbar link styling, middle navbar    
    .middle_navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 4rem;

        .routerlinks {
            display: flex;
            justify-content: space-between;
            gap: 7.5rem;

            a:hover {
                transform: scale(1.2);
            }
        }
    }

    // Navbar logo styling, left navbar
    .left_navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;

        .logo {
            height: 125px;
            width: 125px;

            &:hover {
                pointer-events: none;
            }
        }
    }
}
</style>


