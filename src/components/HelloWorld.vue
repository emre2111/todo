<template>
  <div class="hello">
    <div class="left">
      <h1>{{ title }}</h1>
      <form @submit.prevent="addTodo">
        <input class= "todo-input" type="text" placeholder="Add a ToDo" v-model="newTodo" />
      </form>
      <ul>
        <li v-for="(todo, index) in todos" v-bind:key="index">
          {{ todo }}
          <button v-on:click="removeTodo(index)" class="rm">Done</button>
        </li>
      </ul>
    </div>
    <div class="right">
      <stats />
    </div>
  </div>
</template>

<script>
import Stats from '@/components/Stats.vue';
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  name: 'HelloWorld',
  data() {
    return {
      newTodo: '',
    };
  },
  components: {
    Stats,
  },
  computed: {
    ...mapState([
      'title',
      'todos',
    ]),
  },
  methods: {
    ...mapMutations([
      'ADD_TODO',
    ]),
    ...mapActions([
      'removeTodo',
    ]),
    addTodo() {
      this.ADD_TODO(this.newTodo);
      this.newTodo = '';
    },
    removeTodos(todo) {
      this.removeTodo(todo);
    },
  },
};
</script>
<style>
  html, #app, .home {
    height: 100%;
  }
  body {
    background-color: #F4F4F4;
    margin: 0;
    height: 100%;
  }

  .hello {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: 100%;
    grid-template-areas:
      "left right";
    height: 100%;
  }

  .left, .right {
    padding: 30px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
  ul li {
    padding: 20px;
    background: white;
    margin-bottom: 8px;
  }

  .right {
    grid-area: right;
    background-color: #E9E9E9;
  }

  input {
    border: none;
    padding: 20px;
    width: calc(100% - 40px);
    box-shadow: 0 5px 5px lightgrey;
    margin-bottom: 50px;
    outline: none;
  }

  .rm {
    float: right;
    text-transform: uppercase;
    font-size: .8em;
    background: #f9d0e3;
    border: none;
    padding: 5px;
    color: #ff0076;
    cursor:pointer;
  }

</style>
