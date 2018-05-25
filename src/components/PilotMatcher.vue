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
import people from "@/data/people.json";

export default {
  data: function() {
    return {
      testArr: [],
      vehicle: "",
      starships: [],
      pilots: [],
      finalResults: [],
      newArr: [],
      answer: ""
    };
  },
  created: function() {
    this.fetchData();
  },
  methods: {
    fetchData: function() {
      fetch("https://swapi.co/api/starships")
        .then(response => response.json())
        .then(response => {
          this.starships = response.results;
        });
    },
    trackSearch: function() {
      fetch("https://meyer-starships.herokuapp.com/searches", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          search: { searchTerm: this.vehicle }
        })
      })
        .then(response => response.json())
        .then(response => {});
    },
    trackResult: function() {
      fetch("https://meyer-starships.herokuapp.com/results", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          result: { resultsTerm: this.answer }
        })
      })
        .then(response => response.json())
        .then(response => {});
    },
    onSubmit: function() {
      var matchedStarship = this.starships.filter(
        starship => starship.name === this.vehicle
      )[0];
      var newString = matchedStarship.pilots[0];
      console.log(this.separateNum(newString));
      this.trackSearch();
      this.trackResult();
    },
    separateNum: function(newString) {
      var numberSlash = newString.replace(/^\D+/g, "");
      var finalIndex = numberSlash.slice(0, -1);
      console.log("hello", this.getPilot(finalIndex));
      return finalIndex;
    },
    getPilot: function(index) {
      for (var i = 0; i < people.length; i++) {
        if (people[i].pk == index) {
          var answer = people[i].fields.name;
          this.answer = answer;
        }
      }
    }
  }
};
</script>
