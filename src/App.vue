<template>
  <div class="container">
    <div class="row">
        <button class="btn btn-primary" @click="changeStatus">Change name</button>
        <app-header></app-header>
    </div>
    <hr>
    <div class="row">
      <app-servers :userAge="age"
                   @ageWasEdited="age = $event"></app-servers>

      <app-details :name="name" @nameWasReset="name = $event"
                   :resetFn="resetName"
                   :userAge="age"></app-details>
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
        name: 'Maja',
        age: 25
      }
    },
    methods:{
      changeStatus: function(){
        return this.name = 'Djole'
      }, 
      resetName(){
        this.name = 'Maja';
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
