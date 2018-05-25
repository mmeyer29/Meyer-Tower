<template>
  <div class="home">
    <img src="../assets/sw-logo.png">
    <Welcome msg="Welcome to Star Wars DMV!"/>
    <PilotMatcher/>
  </div>

</template>

<script>

import Welcome from '@/components/Welcome.vue'
import PilotMatcher from '@/components/PilotMatcher.vue'
import people from '@/data/people.json'
import CrudStuff from '@/components/CrudStuff.vue'

export default {
  name: 'home',
  components: {
    Welcome,
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
