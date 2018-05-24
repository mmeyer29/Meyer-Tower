<template>
  <ul id="results-list">
    <li v-for="result in renResults">
      {{ result.resultsTerm }}
    </li>
  </ul>
</template>
<script>
export default {
  data(){
    return {
      //renSearches: [],
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
}};
</script>
