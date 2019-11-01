<template>
    <v-container class="chat-container">

        <div class="users-list">

            <v-chip pill class="user">
                <v-avatar
                    left
                    color="#afadad"
                >
                    P
                </v-avatar>
                Pill
            </v-chip>

            <v-chip pill class="user">
                <v-avatar
                    left
                    color="#afadad"
                >
                    P
                </v-avatar>
                Pill
            </v-chip>

        </div>

        <div  class="messages-container">
            <v-card  class="mx-auto messages-wrapper"
                     outlined>

                <Message  v-for="message in messages"
                    :author="`sdvfdvfd`"
                    :text="message.text"
                    :time="message.date"
                    :testYou="false"
                ></Message>
<!--                <Message-->
<!--                    :author="`sdvfdvfd`"-->
<!--                    :text="`test texttest texttest texttest texttest texttest texttest text`"-->
<!--                    :time="`13.50`"-->
<!--                    :testYou="false"-->
<!--                ></Message>-->
<!--                <Message-->
<!--                :author="`TestAuthor`"-->
<!--                :text="`test text`"-->
<!--                :time="`13.45`"-->
<!--                :testYou="true"-->
<!--                ></Message>-->
<!--                <Message-->
<!--                    :author="`sdvfdvfd`"-->
<!--                    :text="`test texttest texttest texttest texttest texttest texttest text`"-->
<!--                    :time="`13.50`"-->
<!--                    :testYou="false"-->
<!--                ></Message>-->
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
        flex-direction: column-reverse;
    }
</style>

<script>
    import Message from "./Message";

    export default {
        components: {Message},
        data: () => ({
            message: '',
            messages: []
        }),
        sockets: {
            connect: function () {
                console.log('socket connected')
            },
            'message:new': function (data) {
                this.messages.push(data);
            }
        },
        methods: {
            sendMessage() {
                const message = {
                    text: this.message
                };

                this.$socket.emit('message:create',message, err => {
                    if(err) {
                        console.log(err);
                    } else {
                        this.message = "";S
                    }
                })
            },
        }
    };
</script>
