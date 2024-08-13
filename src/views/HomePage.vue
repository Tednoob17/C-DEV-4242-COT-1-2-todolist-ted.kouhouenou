<!-- <template>
  <div>
    <form action="" @submit.prevent="addTodo"></form>
    <fieldset role="group">
      <input v-model="newTodo" type="text" placeholder="Task to do" />
      <button :disabled="newTodo.length === 0" @click="redirectToNote">Add Tasks</button>
    </fieldset>
    <div v-if="newTodo.length === 0" class="flex flex-row min-h-screen justify-center items-center">
      No task to do for the moments
    </div>
    <div v-else>
      <v-col
        v-for="todo in todos"
        :key="todo.date"
        :class="{ completed: todo.completed }"
        cols="12"
        md="6"
      >
        <v-card :color="color" :variant="variants" class="mx-auto">
          <v-card-item>
            <div>
              <div class="text-h6 mb-1">{{ todo.title }}</div>
              <div class="text-caption">{{ todo.content }}</div>
            </div>
          </v-card-item>

          <v-card-actions>
            <v-btn variant="outlined" v-model="todo.completed"> Done </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const newTodo = ref({})
const variants = 'elevated'
const color = ref('indigo')
const todos = ref([])

const router = useRouter()
router.push('/')

const redirectToNote = () => {}

const addTodo = () => {
  todos.value.push({
    title: newTodo.value.title,
    content: newTodo.value.content,
    completed: true,
    date: Date.now()
  })
  newTodo.value
}
const sortedTodos = () => {
  todos.value.sort = todos.value.toSorted((a, b) => (a.completed > b.completed ? 1 : -1))
}
</script>

<style>
.completed {
  opacity: 5;
  text-decoration: line-throught;
}
</style> -->

<template>
  <form @submit.prevent="addTask">
    <label>Title</label>
    <input type="text" v-model="todo.title" />
    <label> Content</label>
    <input type="text" v-model="todo.content" />
    <button type="submit">Add new task</button>
  </form>

  <div
    class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <a href="#">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {{ store.todo }}
      </h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
      {{ store.todo }}
    </p>
    <a
      href="#"
      class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Edit

      <svg
        class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </a>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTodo } from '@/stores/todo'

const todo = ref({
  title: '',
  content: '',
  completed: false,
  date: Date.now()
})

const store = useTodo()

function addTask() {
  store.addTodo(todo.value)
  console.log(store.todo)
}
</script>
