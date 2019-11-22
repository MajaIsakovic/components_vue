<template>
    <li class="list-group-item"
        style="cursor: pointer"
        @click="onserverSelect">
        Server #{{ server.id }}
    </li>
</template>

<script>
    import { eventBus } from '../main';

    export default {
        props: ['server'],
        methods:{
            onserverSelect: function(){
                eventBus.$emit('serverSelected', this.server)
            }
        }
    }
</script>