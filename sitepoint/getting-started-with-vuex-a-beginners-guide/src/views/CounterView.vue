<template>
  <div class="counter-page">
    <h2>Counter Demo</h2>
    <hr>
    <Counter />
  </div>
</template>

<script>
  import Counter from '@/components/Counter.vue'

  export default {
    name: 'CounterView',
    components: {
      Counter
    }
  }
</script>
