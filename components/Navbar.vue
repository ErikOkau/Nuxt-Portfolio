<script setup lang="ts">

</script>

<template>
    <div class="navbar">

        <div class="navbar__logo">
            <img class="logo" src="/img/logo.svg" onclick="" />
        </div>
        <div class="routerlinks">
            <RouterLink class="RouterLink" to="/">Hjem</RouterLink>
            <RouterLink class="RouterLink" to="/">Om</RouterLink>
            <RouterLink class="RouterLink" to="/">Projekter</RouterLink>
            <RouterLink class="RouterLink" to="/">Kontakt</RouterLink>
        </div>


        <div class="search_menu">

            <img class="search" src="/img/search.svg">

            <Dropdown />

        </div>

    </div>
</template>

<style scoped lang="scss">
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
}


.routerlinks {
    display: flex;
    justify-content: space-between;
    gap: 7.5rem;

    a:hover {
        transform: scale(1.2);
    }
}




/* Search and menu icon css */
.menu_padding {
    padding-left: 4rem;
}

.search_menu {
    display: flex;
    gap: 2rem;
    cursor: pointer;
}

.menu {
    height: 50px;
    width: 50px;
}

.search {
    height: 50px;
    width: 50px;
    transition: 0.3s ease-in-out;
}

.menu,
.search:hover {
    transform: scale(1.3);
}


/* logo image css */
.logo {
    height: 125px;
    width: 125px;
}

.logo:hover {
    pointer-events: none;
}
</style>


