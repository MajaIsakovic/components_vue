<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li v-bind:key="index"
                class="list-group-item"
                v-for="index in 5">
                Server #{{ index }}
            </li>
        </ul>
         <p>User age: {{ userAge }}</p>
        <button class="btn btn-dark" @click="changeAge">Change user age</button>
    </div>
</template>

<script>
    export default {
        props: ['userAge'],
        methods:{
            changeAge(){
                this.userAge = 33;
                this.$emit('ageWasEdited', this.userAge);
            }
        }
    }
</script>