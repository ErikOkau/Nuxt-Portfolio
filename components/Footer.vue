<script setup lang="ts">
// Array of social image icons and links
const socialImages = ref([
    {
        name: "Github",
        url: "/img/github.svg",
        link: "https://github.com/ErikOkau"
    },
    {
        name: "Gmail",
        url: "/img/gmail.svg",
        link: "mailto: ersor29@gmail.com"
    },
    {
        name: "Facebook",
        url: "/img/facebook.svg",
        link: "https://facebook.com"
    },
    {
        name: "Instagram",
        url: "/img/instagram.svg",
        link: "https://instagram.com"
    }
])


// Array of footer links
const footerLinks = ref([
    {
        name: "Hjem",
        link: "/"
    },
    {
        name: "Om",
        link: "/"
    },
    {
        name: "Projekter",
        link: "/"
    },
    {
        name: "Kontakt",
        link: "/"
    }
])

</script>

<template>
    <div class="footer">
        <div class="line">

        </div>
        <div class="social_icons">
            <div class="icons" v-for="social in socialImages">
                <NuxtLink :to="social.link" target="_blank"><img :src="social.url"></NuxtLink>
            </div>
        </div>
        <div class="social_links">
            <div class="footer_links" v-for="footer in footerLinks">
                <NuxtLink class="link" :to="footer.link">{{ footer.name }}</NuxtLink>
            </div>
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
    align-items: center;
    margin-top: 5rem;
    gap: 1rem;

    .line {
        width: 75%;
        height: 0.1rem;
        background-color: #000000;
    }

    .social_icons {
        display: flex;
        gap: 1rem;

        .icons {
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
    }

    .social_links {
        display: flex;
        gap: 1.5rem;
    }

    .footer_links {
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
        margin-bottom: 1rem;
        font-size: 0.75rem;
    }
}
</style>