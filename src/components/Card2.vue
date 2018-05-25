<template>
<v-card>
  <v-card-title class="primary white--text">Result</v-card-title>
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
        body: JSON.stringify({searchTerm}),
        headers: {
          "content-type": "application/json"
        },
        method: "PUT"
      }).then(response => response.json());
    },
    onClick(id, data) {
      fetch(`https://meyer-starships.herokuapp.com/results/${id}`, {
        headers: {
          "content-type": "application/json"
        },
        method: "DELETE"
      }).then(response => response.json());
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
