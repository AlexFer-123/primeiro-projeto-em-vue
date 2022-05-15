<template>
    <footer>
        <a class="social-link" v-for="(socialLink,index) in socialLinks" :key="index" :href="socialLink.link" target="blank"> 
            <img :src="socialLink.icon" :title="socialLink.label" :alt="socialLink.label">
        </a>
    </footer>
</template>

<script>
    import api from  '@/services/api'

    export default {
        name: 'FooterWebsite',
        data() {
            return {
                socialLinks: []
            }
        },
        mounted() {
            api.get('/social-links.json').then(response => {
                this.socialLinks = response.data;
            });
        }
    }
</script>

<style scoped>
    footer {
    height: 60px;
    width: 100%;
    background-color: var(--color-background-nav);
    display: flex;
    justify-content: center;
    align-items: center;
    } 
    .social-link {
        border: 1px solid var(--color-text-light);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        margin: 0 10px;
    }  
    .social-link img {
        width: 20px;

    }
</style>