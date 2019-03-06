<template>
  <b-list-group-item class="row" v-bind:class="{ checked: item.done }">
    <b-col cols="1">
      <b-form-checkbox
        :checked="item.done"
        @change="changeItemStatus(item)"
      >
      </b-form-checkbox>
    </b-col>
    <b-col cols="10">
      <span v-if="!editing" @dblclick="editing = true">{{ item.name }}</span>
      <input class="edit"
        v-show="editing"
        v-focus="editing"
        :value="item.name"
        @keyup.enter="doneEdit"
        @keyup.esc="cancelEdit"
        @blur="doneEdit"
      >
    </b-col>
    <b-col cols="1">
      <b-button-close @click="removeItem(item)"></b-button-close>
    </b-col>
  </b-list-group-item>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'TodoItem',
  props: ['item'],
  data () {
    return {
      editing: false
    }
  },
  directives: {
    focus (el, { value }, { context }) {
      if (value) {
        context.$nextTick(() => {
          el.focus()
        })
      }
    }
  },
  methods: {
    ...mapActions('todo', [
      'toggleItem',
      'editItem'
    ]),
    changeItemStatus(item) {
      this.toggleItem(item);
    },
    removeItem(item) {
      this.$store.commit("todo/removeItem", item)
    },
    doneEdit(event) {
      const value = event.target.value.trim();
      const { item } = this;
      if (!value) {
        this.removeItem(item)
      } else if (this.editing) {
        this.editItem({ item, name:value });
        this.editing = false
      }
    },
    cancelEdit(event){
      event.target.value = this.item.name;
      this.editing = false;
    }
  }
}
</script>