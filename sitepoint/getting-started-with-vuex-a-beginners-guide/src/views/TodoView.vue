<template>
  <div class="todo-page">
    <h2>Shopping List</h2>
    <hr>
    <TodoList />
  </div>
</template>

<script>
  import TodoList from '@/components/TodoList.vue'

  export default {
    name: 'TodoView',
    components: {
      TodoList
    }
  }
</script>
