<script setup lang="ts">

// import { headerText } from "../utils/text"
const title = headerText[1].title
const text = headerText[1].text

</script>

<template>
    <Header :title="title" :text="text" />

    <Projects />
</template>

<style scoped lang="scss">

</style>