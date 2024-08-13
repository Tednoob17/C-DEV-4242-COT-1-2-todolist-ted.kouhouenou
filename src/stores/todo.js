import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTodo = defineStore('add', () => {
  const todo_done = ref(false)
  const todo = ref('')

  function addTodo(tod) {
    todo.value += JSON.stringify(tod)
  }
  const json = JSON.parse(todo.value)
  console.log(json)

  return { todo_done, todo, addTodo }
})
