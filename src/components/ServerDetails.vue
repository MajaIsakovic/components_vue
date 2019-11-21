<template>
     <div class="col-xs-12 col-sm-6">
        <p>{{ serverDetails }}</p>
        <p>User name: {{ name }}</p>
    </div>
</template>

<script>
    export default {        
        // props: ['name'],
        //or with type:
        props: {
            name: String
        },
        data: function(){
            return {
                serverDetails: "Server Details are currently not updated"
            }
        },
    }
</script>