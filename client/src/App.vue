<template>
    <v-app>
        <router-view class="view"></router-view>
    </v-app>
</template>

<script>
import HelloWorld from './components/CreateRoom'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data: () => ({
    //
  })
}
</script>
