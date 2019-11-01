<template>
    <v-app>
        <router-view class="view"></router-view>
    </v-app>
</template>

<style>
    html, body, .v-application {
        height: 100%;
    }
</style>

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
