<template>
  <div class="about">
    <h1>Star Wars DMV Database Access</h1>
    <p>Here you can delete, and update entries to the results database.
  </p>
  <!-- <CrudStuff2/> -->
    <div>
      <v-card v-for="result in renResults" :key="result.id">
              <v-card-title class="primary white--text">I'm a Result Card</v-card-title>
              <v-card-text>
                {{ result.resultsTerm }}
                <form class="user-entry" v-on:submit.prevent="onSubmit">
                   Change Entry <br>
                   <input type="text" name="vehicle" >
                   <input type="submit" value="submit">
                 </form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>

      <v-btn flat class="green--text darken-1">edit</v-btn>
      <v-btn flat class="green--text darken-1">delete</v-btn>
    </v-card-actions>
  </v-card>
    </div>
  </div>
</template>


<script>
  import CrudStuff2 from '@/components/CrudStuff2.vue'
  export default {
    //name: "crudFunctionality",
    components:{CrudStuff2},
    data(){
      return {
        renSearches: [],
        renResults: []
      }
    },
    mounted(){
      fetch('https://meyer-starships.herokuapp.com/results')
        .then(response =>{
          return response.json();
        })
        .then(myJson =>{
          this.renResults = myJson.results;
        })
    }
  }
</script>
