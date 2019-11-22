<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <app-server
                v-bind:key="server"
                v-for="server in servers"
                :server="server"></app-server>
        </ul>
         <p>User age: {{ userAge }}</p>
        <button class="btn btn-dark" @click="changeAge">Change user age</button>
    </div>
</template>

<script>
    import { eventBus } from '../main';
    import Server from '../components/Server.vue';

    export default {
        data: function(){
            return{
                servers: [
                    { id: 1, status: 'Normal'},
                    { id: 2, status: 'Critical'},
                    { id: 3, status: 'Unknown'},
                    { id: 4, status: 'Critical'},
                    { id: 5, status: 'Unknown'},
                    { id: 6, status: 'Unknown'}
                ]
            };
        },
        //local component
        components:{
            'app-server': Server
        },
        props: ['userAge'],
        methods:{
            changeAge(){
                this.userAge = 33;
                // this.$emit('ageWasEdited', this.userAge);
                // eventBus.$emit('ageWasEdited', this.userAge);
                eventBus.changeAge(this.userAge);
            }
        }
    }
</script>