<template>
    <div  v-bind:class="[owner ? 'owner-message ' : 'guest-message']" >
        <small class="author-info">{{author}}</small>
        <v-card
            class="mx-auto"
            max-width="344"
            outlined
        >
            <v-card-text class="card-text ">
                <span>{{text}}</span>
                <span class="overline">{{time}}</span>
            </v-card-text>
        </v-card>
    </div>
</template>

<style scoped>
    .owner-message .author-info {
        text-align: right;
    }

    .owner-message .card-text{
        background: #424242;
        color: white;
    }

    .guest-message {
        align-self: flex-start;
    }

     .owner-message {
         align-self: flex-end;
    }

    .card-text {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .card-text .overline {
        padding-left: 10px;
    }
</style>

<script>

    export default {
        props: ['author', 'text', 'time', 'owner'],
        // components: {ChooseFileButton, FilesGroups, AddFileGroup},
        data: () => ({
            isYou: true
        })
    };
</script>
