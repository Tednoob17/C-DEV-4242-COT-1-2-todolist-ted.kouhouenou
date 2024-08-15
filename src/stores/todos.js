import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', () => {
  const todos = ref([])
  
  function addcontent(td) {
    if (td.trim() !== '' || td === null) {
      todos.value.push(td)
      console.log(todos)
    }
  }
  function deletecontent(index) {
    todos.value.splice(index, 1)
    console.log(todos)
  }
  
  function editcontent(index) {
    const edited = prompt('Edit this todo : ')
    if (edited.trim() !== '' && edited != null) todos.value[index] = edited
    console.log(todos.value)
  }

  return { todos, addcontent, deletecontent, editcontent }
})
