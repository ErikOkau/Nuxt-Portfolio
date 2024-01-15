<script setup lang="ts">
import '../assets/scss/animations.scss'
</script>
<template>
  <NuxtLayout>
    <Navbar />
    <NuxtPage></NuxtPage>
    <Footer />
  </NuxtLayout>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

* {
    margin: 0;
    padding: 0;  
}

body {
    font-family: 'Inter', sans-serif;
}
</style>