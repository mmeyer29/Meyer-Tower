<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
    This is a wonderful app that will match Star Wars vehicles with their registered <br>
    owners and then keep track of the records and graph the frequency they're searched.
    </p>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div {
  color: pink;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
