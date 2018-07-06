<template>
  <div>

  </div>
</template>

<script>
import {Line, mixins} from 'vue-chartjs'
const { reactiveProp } = mixins

export default Line.extend({
  name: 'LineChart',
  mixins: [reactiveProp],
  data () {
    return {
      options: { //Chart.js options
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: true
            }
          }],
          xAxes: [ {
            gridLines: {
              display: false
            }
          }]
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  mounted() {
    this.renderChart(this.chartData, this.options)
  }
})
</script>
