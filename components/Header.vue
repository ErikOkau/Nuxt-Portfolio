<script setup lang="ts">

defineProps<{
    title: string,
    text: string
}>()

</script>

<template>
    <div class="header">
        <h1>{{ title }}</h1>
        <h2>{{ text }}</h2>
    </div>

</template>

<style scoped lang="scss">
.header {
   margin-left: 6.4rem;
   margin-top: 5rem;
   max-width: 31rem;

   h1 {
      font-size: 3rem;
      font-weight: 300;
   }

   h2 {
      font-size: 1.5rem;
      font-weight: 300;
      margin-top: 1rem;
   }
}
</style>