<template>
  <div>
    <form action="" @submit.prevent="addTodo"></form>
    <fieldset role="group">
      <input v-model="newTodo" type="text" placeholder="Task to do" />
      <button :disabled="newTodo.length === 0">Add Tasks</button>
    </fieldset>
    <div v-if="newTodo.length === 0" class="flex flex-row min-h-screen justify-center items-center">
      No task to do for the moments
    </div>
    <div v-else>
      <v-col v-for="todo in todos" :key="todo.date" cols="12" md="6">
        <v-card :color="color" :variant="variants" class="mx-auto">
          <v-card-item>
            <div>
              <div class="text-h6 mb-1">{{ todo.title }}</div>
              <div class="text-caption">{{ todo.content }}</div>
            </div>
          </v-card-item>

          <v-card-actions>
            <v-btn variant="outlined"> Done </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const newTodo = ref('')
const variants = 'elevated'
const color = ref('indigo')
const todos = ref({
  title: '',
  content: ''
})

const addTodo = () => {
  todos.value.push({
    title: newTodo.value.title,
    content: newTodo.value.content,
    completed: false,
    date: Date.now()
  })
  newTodo.value
}
</script>
