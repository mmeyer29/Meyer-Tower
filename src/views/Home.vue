<template>
  <div class="home">
    <img src="../assets/sw-logo.png">
    <HelloWorld msg="Welcome to Star Wars DMV!"/>
    <PilotMatcher/>
  </div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import PilotMatcher from '@/components/PilotMatcher.vue'
console.log("star wars is rad");
var arr = [1, 2, 3];
function demo (arr) {
  console.log(arr[2]);
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
