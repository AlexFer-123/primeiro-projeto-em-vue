<template>
    <header>
        
        <nav class="container">
            <a href="/"><img src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg" alt="site" id="logo"></a>
        
            <img v-on:click="openMenu" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg" alt="Abrir menu" id="nav-menu-logo">

            <div v-on:click="closeMenu" id="menu-overlay" v-if="menuActive"></div>

            <!-- se menuActive for true ele vai inserir a classe active dentro, é um toggle (lembrar sintaxe)  -->
            <div id="menu-items" :class="{active:menuActive}">
                <a href="/"><img src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg" alt="site" id="menu-logo"></a>
                
                <ul>
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/videos">Vídeos</router-link></li>
                    <li><router-link to="/sobre">Sobre</router-link></li>
                    <li><router-link to="/contato">Contato</router-link></li>
                </ul>

            </div>
        </nav>

    </header>
</template>

<script>

export default {
    name: 'HeaderWebsite',
    data() {
        return {
            menuActive: false
        }
    },
    methods:{
        openMenu: function() {
            this.menuActive = true;
        },
        closeMenu: function() {
            this.menuActive = false;
        }
    }
}
</script>

<!-- A tag escoped faz com que o style colocado funcione somente a apartir desse escopo -->
<style scoped> 

    header {
        background-color: var(--color-background-nav);
        height: 60px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    nav {
        display: flex;
        justify-content: space-between;
        height: 60px;
        align-items: center;
    }
    #logo {
        width: 130px; 
    }
    #nav-menu-logo {
        width: 30px;
    }
    #menu-overlay {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        background-color: black;
        opacity: .8;
        width: 40%;
    }
    #menu-logo {
        width: 110px;
        margin-bottom: 10px;
        margin-top: 30px;
    }
    #menu-items {
        position: fixed;

        top: 0;
        right: 0;
        background-color: var(--color-background-nav);
        width: 60%;
        height: 100vh;
        display: none;
        align-items: center;
        flex-direction: column;
        justify-content: flex-start;
    }
    #menu-items.active {
        display: flex;
    }
    ul {
        list-style: none;
        text-align: center;
    }
    ul li {
        margin: 20px 0px;
    }
    ul li a {
        color: var(--color-text-light);
    }

    @media (min-width: 700px) {
        #menu-button, #nav-menu-logo, #menu-logo, #menu-overlay {
            display: none;
        }
        #menu-items {
            display: flex;
            position: static;
            height: 60px;
            width: auto;
        }
        ul {
            display: flex;
            align-items: center;
            height: 60px;
        }
        ul li {
            margin: 0;
            margin-left:20px;
        }
    }

</style>