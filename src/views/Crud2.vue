<template>
  <div class="about">
    <h1>Star Wars DMV Database Access</h1>
    <p>Here you can delete, and update entries to the results database.
  </p>
  <!-- <CrudStuff/> -->
    <Card2 v-for="result in renResults" :key="result.id" :data="result">
    </Card2>
  </div>
</template>


<script>
import Card2 from "@/components/Card2.vue";
export default {
  //name: "crudFunctionality",
  components: { Card2 },
  data() {
    return {
      renResults: [],
      renResults: []
    };
  },
  mounted() {
    fetch("https://meyer-starships.herokuapp.com/results")
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.renResults = myJson.results;
      });
  },
  methods: {
    onSubmit(id, data) {
      fetch(`https://meyer-starships.herokuapp.com/results/${id}`, {
        body: JSON.stringify(data), // must match 'Content-Type' header
        headers: {
          "content-type": "application/json"
        },
        method: "PUT"
      }).then(response => response.json()); // parses response to JSON
    }
  }
};
</script>
