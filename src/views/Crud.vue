<template>
  <div class="about">
    <h1>Star Wars DMV Database Access</h1>
    <p>Here you can delete, and update entries to the searches database.
  </p>

    <Card v-for="search in renSearches" :key="search.id" :data="search">
    </Card>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
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
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json"
        },
        method: "PUT"
      }).then(response => response.json());
    },
    onClick(id, data) {
      fetch(`https://meyer-starships.herokuapp.com/searches/${id}`, {
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json"
        },
        method: "DELETE"
      }) 
    }
  }
};
</script>
