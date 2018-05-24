<template>
  <div class="home">
    <img src="../assets/sw-logo.png">
    <HelloWorld msg="Welcome to Star Wars DMV!"/>
    <PilotMatcher/>
      <!-- <div>
      <v-btn color="success">Success</v-btn>
      <v-btn color="error">Error</v-btn>
      <v-btn color="warning">Warning</v-btn>
      <v-btn color="info">Info</v-btn>
    </div> -->
  </div>


</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import PilotMatcher from '@/components/PilotMatcher.vue'
import people from '@/data/people.json'
import CrudStuff from '@/components/CrudStuff.vue'
//console.log("star wars is rad");
//console.log(people[0]);
var arr = [1, 2, 3];
function demo (arr) {
  //console.log(arr[2]);
  return arr[2];
}
demo(arr);

export default {
  name: 'home',
  components: {
    HelloWorld,
    PilotMatcher

  }
}

</script>
<style media="screen">
  div {
    color: pink;
    background-color: black;
  }
</style>
