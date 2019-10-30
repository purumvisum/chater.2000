<template>
  <v-container>
    <v-card  class="mx-auto"
             max-width="500"
             :style=" {'padding':'15px'} "
             outlined>
      <v-form
        @submit.prevent="submit"
        ref="form"
      >
        <v-text-field
          v-model="name"
          label="Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="room"
          label="Room"
          required
        ></v-text-field>

        <v-btn
          class="booking-submit-button"
          color="secondary"
          type="submit"
        >
          Create Room
        </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>
<script>
export default {
    data: () => ({
        name: '',
        room: ''
    }),
    sockets: {
        connect: function () {
            console.log('socket connected')
        },
        customEmit: function (data) {
            console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
        }
    },
    methods: {
        enterTheRoom() {
            this.$router.push('/non-existing');
            let value = 'test';
            this.$socket.emit('createMessage','TEST')
        },
        submit() {
          this.enterTheRoom();
        }
    }
}
</script>
