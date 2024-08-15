<script setup>
const todos = ['Cars', 'Kurt']
var td = '';
function addcontent() {
  if (td.trim() !== '') {
    todos.push(td)
    console.log(todos);
  }
  
}
function deletecontent(index) {
  todos.splice(index, 1)
  console.log(todos);
}
function editcontent (index) {
  const edited = prompt('Edit this todo : ');
  if (edited.trim() !== '' && edited != null)
  todos[index] = edited;
  console.log(todos);
}
</script>

<template>
  <form action="" @submit.prevent>
     Content of todolist
    <ul>
      <li v-for="(todo, index) in todos" :key="todo" > 
        {{ todos[index] }}
        <button @click="deletecontent(index)">Delete</button>
        <button @click="editcontent(index)">Edit</button>
      </li>
    </ul>

    <br />
    <br />  
    <br />

    
      <label > Input </label> <br />
        <input v-model="td" type="text" @keyup.enter="addcontent()"/> <br />
        <button @click="addcontent()"> Add Input </button>
    </form>
</template>
