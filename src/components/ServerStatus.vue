<template>
    <div>
        <h1>Server status: {{ status }}</h1>
        <button @click="changeStatus">Change status</button>
        <hr>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                status: "Critical"
            }
        },
        methods: {
            changeStatus() {
                this.status = "Normal";
            }     
        }
    }
</script>

<style scoped>

</style>