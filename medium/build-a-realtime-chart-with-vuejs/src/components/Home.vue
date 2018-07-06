<template>
  <div class="hello">
    <div class="container">
      <div class="row">
        <h2 class="title">Realtime Chart with Vue and Pusher</h2>
        <h3 class="subtitle">Expense and Income Tracker</h3>
        <LineChart :chartData="dataCollection" />
      </div>
    </div>
    <div class="container">
      <div class="row">
        <form class="form" @submit.prevent="addExpense">
          <h4>Add new entry</h4>
          <div class="form-group">
            <label>Expenses</label>
            <input type="number" class="form-control" placeholder="How much did you spend?" v-model="expenseAmount" required />
          </div>
          <div class="form-group">
            <label>Income</label>
            <input type="number" class="form-control" placeholder="How much did you earn?" v-model="incomeAmount" required />
          </div>
          <div class="form-group">
            <label>Date</label>
            <input type="date" class="form-control" placeholder="Date" v-model="entryDate" required />
          </div>
          <div class="form-group">
            <button class="btn btn-primary">Add New Entry</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import Pusher from 'pusher-js'
import LineChart from './LineChart.vue'
export default {
  name: 'Home',
  components: {LineChart},
  data () {
    return {

    }
  }
}
</script>
