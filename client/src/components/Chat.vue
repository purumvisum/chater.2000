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
                <Message
                    :author="`sdvfdvfd`"
                    :text="`test texttest texttest texttest texttest texttest texttest text`"
                    :time="`13.50`"
                    :testYou="false"
                ></Message>
                <Message
                    :author="`sdvfdvfd`"
                    :text="`test texttest texttest texttest texttest texttest texttest text`"
                    :time="`13.50`"
                    :testYou="false"
                ></Message>
                <Message
                :author="`TestAuthor`"
                :text="`test text`"
                :time="`13.45`"
                :testYou="true"
                ></Message>
                <Message
                    :author="`sdvfdvfd`"
                    :text="`test texttest texttest texttest texttest texttest texttest text`"
                    :time="`13.50`"
                    :testYou="false"
                ></Message>
            </v-card>

            <div style="display: flex; align-items: center;">
                <v-textarea
                    color="secondary"
                    rows="1"
                    v-model="model"
                    :auto-grow="true"
                    :clearable="true"
                    :single-line="true"
                    :placeholder="`Type your text`"
                ></v-textarea>
                <v-btn class="ma-2"  color="secondary">
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
            // filterTitle: ''
        })
    };
</script>
