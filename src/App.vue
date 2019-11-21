<template>
  <div class="container">
    <div class="row">
        <button class="btn btn-primary" @click="changeStatus">Change name</button>
        <app-header></app-header>
    </div>
    <hr>
    <div class="row">
      <app-servers></app-servers>
      <app-details :name="name" @nameWasReset="name = $event"></app-details>
    </div>
    <hr>
    <div class="row">
        <app-footer></app-footer>
    </div>
  </div>
</template>

<script>

  import Header from './components/Header.vue';
  import Servers from './components/Servers.vue';
  import ServerDetails from './components/ServerDetails.vue';
  import Footer from './components/Footer.vue';

  export default{
    data: function(){
      return {
        name: 'Maja'
      }
    },
    methods:{
      changeStatus: function(){
        return this.name = 'Djole'
      }
    },
    components:{
          'app-header': Header,
          'app-servers': Servers,
          'app-details': ServerDetails,
          'app-footer': Footer
    }
  }
</script>

<style>

</style>
