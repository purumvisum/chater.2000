import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import VueSocketIO from 'vue-socket.io'

// Vue.use(new VueSocketIO({
//     debug: true,
//     connection: 'http://localhost:3000'
// }))

Vue.use(Vuetify);
// Vue.use(socketIO, 'http://localhost:5000');

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  }
})
