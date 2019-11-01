import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateRoom from '../components/CreateRoom'
import Chat from '../components/Chat'
import PageNotFound from '../components/PageNotFound'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: CreateRoom },
        { path: '/chat', component: Chat, props: (route) => ({
            name: route.query.name,
            room: route.query.room
        }) },
        { path: "*", component: PageNotFound }
    ]
});

export default router
