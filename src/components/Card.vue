<template>
<v-card>
  <v-card-title class="primary white--text">I'm a Search Card</v-card-title>
  <v-card-text>
    {{ data.searchTerm }}
    <form class="user-entry" v-on:submit.prevent="onSubmit(data.id, vehicle)">
      Change Entry <br>
      <input type="text" name="searchEntry" v-model='vehicle'>
      <input type="submit" value="submit">
    </form>
  </v-card-text>
  <v-divider></v-divider>
  <v-card-actions>

    <v-btn flat class="green--text darken-1">edit</v-btn>
    <v-btn flat class="green--text darken-1">delete</v-btn>
  </v-card-actions>
</v-card>
</template>
<script>
export default {
  name: "card",
  props: ['data'],
  data: () => ({
    vehicle: ""
  }),
  methods: {
    onSubmit(id, searchTerm) {
      fetch(`https://meyer-starships.herokuapp.com/searches/${id}`, {
        body: JSON.stringify({searchTerm}), // must match 'Content-Type' header
        headers: {
          "content-type": "application/json"
        },
        method: "PUT"
      }).then(response => response.json()); // parses response to JSON
    }
  }
}

</script>
<style lang="scss" scoped>
</style>
