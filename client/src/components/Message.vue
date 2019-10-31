<template>
    <div  v-bind:class="[testYou ? 'activeClass' : 'nonActiveClass']" >
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
    .activeClass .author-info {
        text-align: right;
    }

    .activeClass .card-text{
        background: #424242;
        color: white;
    }

    .nonActiveClass {
        align-self: flex-start;
    }

     .activeClass {
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
        props: ['author', 'text', 'time', 'testYou'],
        // components: {ChooseFileButton, FilesGroups, AddFileGroup},
        data: () => ({
            isYou: true
        })
    };
</script>
