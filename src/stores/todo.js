import { defineStore } from 'pinia'
import { ref } from 'pinia'

export const addtodo = defineStore('add', () => {
  const todo_done = ref(false)
  const todo = ref([])

  function addTodo(todo) {
    todo.value.push(todo)
  }

  return { todo_done, todo, addTodo }
})
