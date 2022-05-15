import Vue from "vue";
import VueRouter from  'vue-router';

Vue.use(VueRouter);

import HomeWebsite from '@/pages/Home';
import VideoPage from '@/pages/Videos';
import SobreWebsite from '@/pages/Sobre';
import ContatoWebsite from '@/pages/Contato';

const routes = [
    {
    path: '/',
    component: HomeWebsite
    },
    {
    path: '/videos',
    component: VideoPage
    },
    {
    path: '/sobre',
    component: SobreWebsite
    },
    {
    path: '/contato',
    component: ContatoWebsite
    },
]

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;