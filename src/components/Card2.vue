<template>
<v-card>
  <v-card-title class="primary white--text">I'm a Result Card</v-card-title>
  <v-card-text>
    {{ data.resultsTerm }}
    <form class="user-entry" v-on:submit.prevent="onSubmit(data.id, person)">
      Change Entry <br>
      <input type="text" name="resultEntry" v-model='person'>
      <input type="submit" value="submit">
    </form>
  </v-card-text>
  <v-divider></v-divider>
  <v-card-actions>

    <v-btn flat class="green--text darken-1">edit</v-btn>
    <v-btn flat class="green--text darken-1" v-on:click="onClick(data.id)">delete</v-btn>
  </v-card-actions>
</v-card>
</template>
<script>
export default {
  name: "card2",
  props: ['data'],
  data: () => ({
    person: ""
  }),
  methods: {
    onSubmit(id, searchTerm) {
      fetch(`https://meyer-starships.herokuapp.com/results/${id}`, {
        body: JSON.stringify({searchTerm}), // must match 'Content-Type' header
        headers: {
          "content-type": "application/json"
        },
        method: "PUT"
      }).then(response => response.json()); // parses response to JSON
    },
    onClick(id, data) {
      fetch(`https://meyer-starships.herokuapp.com/results/${id}`, {

        headers: {
          "content-type": "application/json"
        },
        method: "DELETE"
      }).then(response => response.json()); // parses response to JSON
    }
  }
}

</script>
<style lang="scss" scoped>
</style>
