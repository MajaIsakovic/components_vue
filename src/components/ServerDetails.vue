<template>
     <div class="col-xs-12 col-sm-6">
        <!-- <p>{{ serverDetails }}</p> -->
        <p v-if="!server">Please select a Server</p>
        <p v-else>Server #{{ server.id }} <br> Status: {{ server.status }}</p>
        <br>
        <button class=" btn btn-info" @click="resetServerStatus">Reset status</button>
        <br>
        <br>
        <p>User name: {{ name }}</p>
         <p>User age: {{ userAge }}</p>
        <button class="btn btn-success" @click="resetName">Reset name</button><br><br>
        <button class="btn btn-secondary" @click="resetFn()">Reset name</button>
    </div>
</template>

<script>
    import { eventBus } from '../main';

    export default {        
        // props: ['name'],
        //or with type:
        props: {
            name: String,
            resetFn: Function,
            userAge: Number
        },
        data: function(){
            return {
                serverDetails: "Server Details are currently not updated",
                server: null
            }
        },
        methods: {
           resetName: function(){
                this.name = 'Maja';
                this.$emit('nameWasReset', this.name);
           },
           resetServerStatus: function(){
               this.server.status = 'Normal';
           }
        },
        created(){
            eventBus.$on('ageWasEdited', (data) =>{
                this.userAge = data;
            });

            eventBus.$on('serverSelected', (server) =>{
                this.server = server;
            });
        }
    }
</script>