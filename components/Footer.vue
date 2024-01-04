<script setup lang="ts">

</script>

<template>
    
    <div class="footer">

        <div class="line"></div>

        <div class="footer_social">
            <img href="https://github.com/ErikOkau" target="_blank" src="/img/github-142-svgrepo-com.svg" alt="Github">
            <img href = "mailto: ersor29@gmail.com" target="_blank" src="/img/gmail-svgrepo-com (1).svg" alt="Gmail">
            <img href="sms://+14035550185?body=I%27m%20interested%20in%20your%20product.%20Please%20contact%20me." target="_blank" src="/img/messages-svgrepo-com (1).svg" alt="Messages">
            <img href="https://facebook.com" target="_blank" src="/img/facebook-svgrepo-com.svg" alt="Facebook">
            <img href="https://instagram.com" target="_blank" src="/img/instagram-svgrepo-com.svg" alt="Instagram">
        </div>
        <div class="footer_links">
            <NuxtLink to="" class="link">Hjem</NuxtLink>
            <NuxtLink to="" class="link">Om</NuxtLink>
            <NuxtLink to="" class="link">Projekter</NuxtLink>
            <NuxtLink to="" class="link">Kontakt</NuxtLink>
        </div>
        <div class="copyright">
            <p>© 2024 Erik Sørheim. Ingen rettigheter forbeholdes</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
/* Footer styling */
.footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    gap: 1rem;

    .line {
        width: 75%;
        height: 0.1rem;
        background-color: #000000;
    }

    .footer_social {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        margin-top: 1rem;

        img {
            transition: all 0.3s ease-in-out;
            width: 2rem;
            height: 2rem;

            &:hover {
                transform: scale(1.2);
                cursor: pointer;
            }
        }
    }

    .footer_links {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        .link {
            text-decoration: none;
            color: black;
            transition: 0.3s ease-in-out;

            &:hover {
                transform: scale(1.2);
                cursor: pointer;
            }
        }
    }

    .copyright {
        margin-top: 1rem;
        font-size: 0.75rem;
    }
}
</style>