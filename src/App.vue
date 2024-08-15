<script setup>
import { ref } from 'vue';
import { useTodoStore } from './stores/todos';

const store = useTodoStore()
var td = ref("")

</script>

<template>
  <form>
    Content of todolist
    <ul>
      <li v-for="(todo, index) in store.todos" :key="todo">
        {{ todo }}
        <button @click="store.deletecontent(index)">Delete</button>
        <button @click="store.editcontent(index)">Edit</button>
      </li>
    </ul>

    <br />
    <br />
    <br />

    <label> Input </label> <br />
    <input v-model="td" type="text" @keyup.enter="store.addcontent(td)" /> <br />
    <button type="button" @click="store.addcontent(td)">Add Input</button>
  </form>
</template>
