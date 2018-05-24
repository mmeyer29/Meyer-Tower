<template>
  <ul id="searches-list">
    <li v-for="search in renSearches">
      {{ search.searchTerm }}
    </li>
  </ul>
</template>

<script>
export default {
  data(){
    return {
      renSearches: [],
      renResults: []
    }
  },
  mounted(){
    fetch('https://meyer-starships.herokuapp.com/searches')
      .then(response =>{
        return response.json();
      })
      .then(myJson =>{
        this.renSearches = myJson.searches;
      })
}};
</script>
