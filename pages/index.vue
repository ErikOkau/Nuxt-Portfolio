<script setup lang="ts">

// import { headerText } from "../utils/text"
const title = headerText[0].title
const text = headerText[0].text

</script>

<template>
    <Header :title="title" :text="text" />
    
    <div class="threeJS">
       <threeJS />
    </div>
</template>
   
<style scoped lang="scss">
.threeJS {
   margin-left: 60%;
   margin-top: -22rem;
}
</style>