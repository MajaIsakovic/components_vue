<template>
    <div>
        <app-server-status v-bind:key="status" v-for="status in 5"></app-server-status>
    </div>
</template>

<script>
    import ServerStatus from './ServerStatus.vue';

    export default {
        components:{
            'app-server-status': ServerStatus
        }
    }
</script>

<style scoped>

</style>