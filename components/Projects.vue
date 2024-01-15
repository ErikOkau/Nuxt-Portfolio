<script setup lang="ts">
import { type Projects } from "@/utils/types";

const projects: Projects[] = [
    {
        title: "Kjøreskole",
        image: "/img/Kjoreskole.png",
    },
    {
        title: "OCR Program",
        description: "Lesing av PDF-er mottat på e-post og konvertere teksten til en tom fil.",
    },
    {
        title: "Valgomat",
        image: "/img/Valgomat.png",
    }
]

</script>

<template>
    <div class="boxes">
        <div class="box">
            <h3>{{ projects[0].title }}</h3>
            <img class="img" :src="projects[0].image">
            <div class="icons1">
                <img src="/img/vue.svg">
                <img src="/img/firebase.svg">
            </div>
            <Readmore />
        </div>
        <div class="box">
            <h3>{{ projects[1].title }}</h3>
            <p>{{ projects[1].description }}</p>
            <div class="icons2">
                <img src="/img/csharp.svg">
                <img src="/img/dotnet.svg">
            </div>
            <Readmore />
        </div>
        <div class="box">
            <h3>{{ projects[2].title }}</h3>
            <img class="img2" :src="projects[2].image">
            <div class="icons3">
                <img src="/img/vue.svg">
                <img src="/img/typescript.svg">
            </div>
            <Readmore />
        </div>
    </div>
</template>

<style scoped lang="scss">
.boxes {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 5rem;
    margin-bottom: 10rem;
    gap: 6rem;


    .box {
        display: flex;
        flex-direction: column;
        border: solid black 2px;
        padding: 1rem 3rem 2rem 1rem;
        width: 27rem;

        .icons2 {
            padding-top: 8rem;
            gap: 0.5rem;
        }

        .icons3 {
            padding-top: 3rem;
            gap: 0.5rem;
        }
    }

    h3 {
        font-size: 2rem;
        font-weight: 300;
    }

    p {
        margin-top: 0.5rem;
        font-size: 1.5rem;
        width: 25rem;
    }

    .img {
        width: 25rem;
        height: 11.5rem;
        margin-top: 1rem;
    }

    .img2 {
        width: 25rem;
        height: 8rem;
        margin-top: 1rem;
    }

    .icons1, .icons2, .icons3 {
        display: flex;
        
        img {
            transition: all 0.3s ease-in-out;
            width: 3rem;
            height: 3rem;
            margin-top: 2rem;

            &:hover {
                transform: scale(1.2);
                cursor: pointer;
            }
        }
    }
}
</style>