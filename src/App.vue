<template>
  <div class="container">
    <div class="row">
        <app-header></app-header>
    </div>
    <hr>
    <div class="row">
      <app-servers></app-servers>
      <app-details></app-details>
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
