<script setup lang="ts">

</script>

<template>
    <!-- Search menu component -->
    <div class="search_menu">
        <img class="search" src="/img/search.svg">
    </div>
</template>

<style scoped lang="scss">
.search_menu {
    display: flex;
    gap: 2rem;
    cursor: pointer;

    .search {
        height: 50px;
        width: 50px;
        transition: 0.3s ease-in-out;
    }

    .search:hover {
        transform: scale(1.3);
    }
}
</style>