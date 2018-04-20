<template>

<div id="demo">
  <form class="user-entry" action="index.html" method="post" v-on:submit.prevent="onSubmit">
     Enter a Vehicle <br>
     <input type="text" name="vehicle" v-model="vehicle">
     <input type="submit" value="Search the Galaxy">
   </form>
  <ul>
    <li>
      <span>{{answer}}</span>
    </li>
  </ul>
</div>
</template>

<script>
import people from '@/data/people.json'

export default {
  data: function () {
    return{
    testArr : [],
    vehicle : "",
    starships : [],
    pilots : [],
    finalResults : [],
    newArr : [],
    answer: ""
    }
  },
  created: function() {
    this.fetchData()

  },
  methods: {
    fetchData: function() {
      //const self = this;
      fetch("https://swapi.co/api/starships")
        .then(response => response.json())
        .then(response =>  {
          this.starships = response.results
        })
    },
    onSubmit : function() {
       var matchedStarship = this.starships.filter(starship => starship.name === this.vehicle)[0]
       console.log(matchedStarship.name, matchedStarship.pilots[0]);
       var newString = matchedStarship.pilots[0]
       console.log("hola", this.separateNum(newString));
       //console.log("finalAnswer", this.getPilot(separateNum));
    },
    separateNum : function(newString){
      var numberSlash = newString.replace( /^\D+/g, '');
      var finalIndex = numberSlash.slice(0, -1);
      console.log("hi", people[1].pk);
       console.log("hello", this.getPilot(finalIndex));

      return finalIndex;
    },
    getPilot : function(index){
      console.log("get pilot", index)
      for (var i = 0; i < people.length; i++) {
          //console.log("people", people[i].pk)
        if(people[i].pk == index){
          console.log(people[i].fields.name)
          var answer = people[i].fields.name;
          console.log("ANSWER", answer);
          this.answer = answer
          console.log(this.answer);
        }
      }
      }
      //getPilot(finalIndex)
    }
  };



</script>
