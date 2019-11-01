<template>
    <v-container class="chat-container">

        <div class="users-list">

            <v-chip v-for="(user, idx) in usersInTheRoom" pill class="user">
                <v-avatar
                    left
                    color="#afadad"
                >
                    {{user.name.split('')[0]}}
                </v-avatar>
                {{user.name}}
            </v-chip>
        </div>

        <div  class="messages-container">
            <v-card  class="mx-auto messages-wrapper"
                     outlined>
                <Message v-for="(message, idx) in messages"
                    :author="message.author"
                    :text="message.text"
                    :time="message.date"
                    :owner="message.id === user.id"
                    :key="idx"
                ></Message>
            </v-card>

            <div style="display: flex; align-items: center;">
                <v-textarea
                    v-model.trim = "message"
                    autocomlete='false'
                    @keydown.enter="sendMessage"
                    color="secondary"
                    rows="1"
                    :auto-grow="true"
                    :clearable="true"
                    :single-line="true"
                    :placeholder="`Type your text`"
                ></v-textarea>
                <v-btn class="ma-2"
                    @click="sendMessage"
                    :disabled="!message.length"
                    color="secondary">
                    <v-icon dark left>mdi-send</v-icon>Send
                </v-btn>
            </div>
        </div>
    </v-container>
</template>

<style scoped>
    .chat-container {
        height: 100%;
        width:100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }

    .users-list {
        flex: 1;
    }

    .user {
        color: white;
        display: block;
        margin-bottom: 10px;
        width: 90%;
    }

    .messages-container {
        flex: 3;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .messages-wrapper {
        height: 90%;
        width: 100%;
        padding: 15px;
        display: flex;
        /*flex-direction: column-reverse;*/
        flex-direction: column;
    }
</style>

<script>
    import Message from "./Message";

    export default {
        props:['name', 'room'],
        components: {Message},
        data: () => ({
            message: '',
            messages: [],
            usersInTheRoom: [],
            user: {
                name: "",
                room: ""
            }
        }),
        sockets: {
            'message:new': function (data) {
                this.messages.push(data);
            },
            'users:updated':  function(usersInTheRoom) {
                this.usersInTheRoom = [...usersInTheRoom];
            },
        },
        methods: {
            sendMessage() {
                const message = {
                    text: this.message,
                    author: this.user.name,
                    id: this.user.id
                };

                this.$socket.emit('message:create',message, err => {
                    if(err) {
                        console.log(err);
                    } else {
                        this.message = "";
                    }
                })
            },
        },
        mounted(){
            this.user= {
                name: this.name,
                room: this.room
            };
            this.$socket.emit('user:join',this.user, data=> {
                if(typeof data === 'string') {
                    console.error(data);
                } else {
                    this.user.id=data.userId;
                    console.log('this.user', this.user)
                }
            })
        }
    };
</script>
