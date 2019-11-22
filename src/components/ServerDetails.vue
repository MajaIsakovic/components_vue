<template>
     <div class="col-xs-12 col-sm-6">
        <p>{{ serverDetails }}</p>
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
                serverDetails: "Server Details are currently not updated"
            }
        },
        methods: {
           resetName: function(){
                this.name = 'Maja';
                this.$emit('nameWasReset', this.name);
           }
        },
        created(){
            eventBus.$on('ageWasEdited', (data) =>{
                this.userAge = data;
            })
        }
    }
</script>