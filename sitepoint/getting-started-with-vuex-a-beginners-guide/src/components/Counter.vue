<template>
  <div class="counter">
    <b-row align="center">
      <b-col>
        <h1>Clicked <b-badge> {{ count }} </b-badge> times! Count is <b-badge>{{ parity }}</b-badge> </h1>
      </b-col>
    </b-row>
    <b-row align="center">
      <b-col>
         <b-button-group>
          <b-button @click="increment" variant="success">Increment</b-button>
          <b-button @click="decrement" variant="danger">Decrement</b-button>
          <b-button @click="incrementIfOdd" variant="info">Increment if Odd</b-button>
          <b-button @click="incrementAsync" variant="warning">Increment Async</b-button>
        </b-button-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'Counter',
  computed: {
    ...mapState('counter', [
      'count'
    ]),
    ...mapGetters('counter', [
      'parity'
    ])
  },
  methods: mapActions('counter',[
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ])
}
</script>

<style scoped>
.counter {
  margin-top: 25px;
}
h1 {
  font-size: 48px;
}
.btn-group {
  margin-top: 25px;
}
</style>
