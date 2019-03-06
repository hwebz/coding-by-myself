<template>
  <div class="todo-list">
    <b-row>
      <b-col style="paddingLeft:0">
         <b-alert v-if="errors.has('item')" show dismissible variant="danger">
          {{ errors.first('item') }}
        </b-alert>
      </b-col>
    </b-row>
    <b-form class="row" @submit.prevent="onSubmit">
      <b-col cols="10" style="paddingLeft:0">
        <b-form-input
            id="item"
            class="w-100"
            name="item"
            type="text"
            placeholder="Enter Item"
            v-model="item"
            v-validate="'required'"
            autocomplete="off"
          >
          </b-form-input>
      </b-col>
      <b-col cols="2">
        <b-button type="submit" variant="primary">Add Task</b-button>
      </b-col>
    </b-form>
    <b-row>
      <b-col>
        <b-list-group class=" mb-1">
          <TodoItem v-for="(item, index) in items" :key="index" :item="item" />
        </b-list-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'TodoList',
  components: {
    TodoItem
  },
  data() {
    return {
      item:''
    }
  },
  computed: {
    ...mapState('todo', [
      'items'
    ])
  },
  methods: {
    ...mapActions('todo', [
      'addItem',
    ]),
    async onSubmit() {
      const isvalid = await this.$validator.validateAll();
      if(isvalid) {
        await this.addItem(this.item);
        this.item=''; // Clear form after successful save
        this.$validator.reset();
      }
    },
  }
}
</script>

<style>
form {
  margin-bottom: 25px;
}
.list-group-item {
  display: flex;
}
.list-group-item:hover{
  background-color: aliceblue;
}
.checked {
  font-style: italic;
  text-decoration: line-through !important;
  color: gray;
  background-color: #eeeeee;
}
</style>
