import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import vuetify from './plugins/vuetify'

import VueSocketIO from 'vue-socket.io'
import VueRouter from 'vue-router'
import Messages from './components/messages'

Vue.use(new VueSocketIO({
    debug: true,
    connection: 'http://localhost:3000'
}));

const routes = [
    { path: '/foo', component: Messages },
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
