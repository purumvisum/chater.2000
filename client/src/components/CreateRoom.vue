<template>
  <v-container>
    <v-card  class="mx-auto"
             max-width="500"
             :style=" {'padding':'15px'} "
             outlined>
      <v-form
        @submit.prevent="submit"
        ref="form"
        v-model="valid"
        :lazy-validation='false'
      >
        <v-text-field
          v-model="name"
          label="Name"
          :rules="[v => !!v || 'Item is required']"
          required
        ></v-text-field>

        <v-text-field
          v-model="room"
          label="Room"
          :rules="[v => !!v || 'Item is required']"
          required
        ></v-text-field>

        <v-btn
          style="margin-top: 10px; width: 100%"
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
        room: '',
        valid: true,
        nameRules: [
            v => !!v || 'Name is required'
       ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required'
        ],
    }),
    methods: {
        enterTheRoom() {
            if (this.$refs.form.validate()) {
                this.$router.push('/chat');
                let value = 'test';
                // this.$socket.emit('createMessage','TEST')
            }
        },
        submit() {
          this.enterTheRoom();
        }
    }
}
</script>
