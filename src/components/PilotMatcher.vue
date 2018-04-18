<template>

<div id="demo">
  <form class="user-entry" action="index.html" method="post" v-on:submit.prevent="onSubmit">
     Enter a Vehicle <br>
     <input type="text" name="vehicle" v-model = "vehicle">
     <input type="submit" value="Search the Galaxy">
   </form>
  <ul>
    <li v-for="pilot in pilots">
      <span>{{pilot.name}}</span>
    </li>
  </ul>
</div>
</template>

<script>

export default {
  data: function () {
    return{
    vehicle : "",
    pilots : []
    }
  },
  created: function() {
    this.fetchData()
  },
  methods: {
    fetchData: function() {
      const self = this;
      fetch("https://swapi.co/api/starships/")
        .then(function(response, request) {
          return response.json()
        })
        .then(function(response) {
          console.log(response.results[7].pilots);
          fetch(response.results[7].pilots)
          //return response.json()
          self.pilots = response.results
        })
    }
  }
}
</script>
