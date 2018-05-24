<template>
  <div class="about">
    <h1>Star Wars DMV Database Access</h1>
    <p>Here you can delete, and update entries to the searches database.
  </p>
  <!-- <CrudStuff/> -->
    <Card v-for="search in renSearches" :key="search.id" :data="search">
    </Card>
  </div>
</template>


<script>
import Card from "@/components/Card.vue";
export default {
  //name: "crudFunctionality",
  components: { Card },
  data() {
    return {
      renSearches: [],
      renResults: []
    };
  },
  mounted() {
    fetch("https://meyer-starships.herokuapp.com/searches")
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.renSearches = myJson.searches;
      });
  },
  methods: {
    onSubmit(id, data) {
      fetch(`https://meyer-starships.herokuapp.com/searches/${id}`, {
        body: JSON.stringify(data), // must match 'Content-Type' header
        headers: {
          "content-type": "application/json"
        },
        method: "PUT"
      }).then(response => response.json()); // parses response to JSON
    },
    onClick(id, data) {
      fetch(`https://meyer-starships.herokuapp.com/searches/${id}`, {
        body: JSON.stringify(data), // must match 'Content-Type' header
        headers: {
          "content-type": "application/json"
        },
        method: "DELETE"
      }) // parses response to JSON
    }
  }
};
</script>
