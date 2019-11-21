<template>  
    <div class="col-xs-12">
        <footer>
            <p>{{ footerDescription }}</p>
        </footer>
    </div>
</template>

<script>
    export default {
         data: function(){
            return {
                footerDescription: "All Servers are managed here"
            }
        },
    }
</script>