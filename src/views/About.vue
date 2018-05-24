<template>
  <div class="about">
    <h1>Star Wars DMV Analytics</h1>
    <p>This graphs show frequency
    that each vehicle is searched.
  </p>
  <vue-chart type="bar" :data="chartData" :options="options"></vue-chart>
  </div>
</template>
<script>
  import VueChart from "vue-chart-js";
  export default {
    name: "About",
  	components: {
  		VueChart
  	},
    data: () => ({
    chartData: {
        labels: ['Millennium Falcon', 'Slave 1'],
        datasets: [
            {
                label: 'vehicles',
                data: [5, 10],
                backgroundColor: [
               'rgb(0,173,115)',
               'pink',
               'rgb(29,197,204)',
               'rgba(75, 192, 192, 0.2)',
               'rgba(153, 102, 255, 0.2)',
               'rgba(255, 159, 64, 0.2)'
           ]
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
  }),
}
</script>
