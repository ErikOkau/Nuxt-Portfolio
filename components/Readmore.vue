<script setup lang="ts">

</script>

<template>
    <div class="read_more">
        <div class="read_more_text">
            <span>
                <p>Les mer</p><img src="/img/arrow-up-right.svg" />
            </span>
        </div>
        <div class="read_more_line">

        </div>
    </div>
</template>

<style scoped lang="scss">
.read_more {
    display: flex;
    flex-direction: column;
    max-width: 8rem;
    margin-top: 2rem;
    margin-bottom: 1rem;

    .read_more_text {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;

        span {
            display: flex;
            flex-direction: row;
            transition: all 0.3s ease-in-out;

            p {
                font-size: 1.5rem;
                font-weight: 300;
                color: #000000;
            }

            img {
                margin-top: 0.2rem;
                width: 1.5rem;
                height: 1.5rem;
            }
        }
    }

    .read_more_line {
        height: 0.1rem;
        background-color: #000000;
        width: 7rem;
        transition: all 0.3s ease-in-out;
    }

    &:hover {
        cursor: pointer;

        span {
            transform: translate(0.6rem, -0.4rem);
        }
        // .read_more_line {
        //     transform: translate(0.5rem, 0rem);
        // }
    }
}
</style>