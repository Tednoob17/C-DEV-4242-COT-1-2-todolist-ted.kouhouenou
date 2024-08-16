<script setup>
import { ref } from "vue";
import { useTodoStore } from "./stores/todos";

const store = useTodoStore();
var ttl = ref("");
var ctn = ref("");
</script>

<template>
  <div>
    <div
      class="flex flex-col bg-white w-72 h-48 rounded-md py-4 px-6 border"
      v-for="(todo, index) in store.todos"
      :key="index"
    >
      <h3 class="text-center font-bold text-xl text-gray-800 pb-2">
        {{ todo.title }}
      </h3>
      <p class="text-sm text-gray-500 pb-3">{{ todo.content }}</p>
      <div class="flex gap-2 text-sm text-gray-500 border-b pb-2">
        <p class="">last update:</p>
        <p>{{ new Date(todo.date) }}</p>
      </div>
      <div class="flex justify-around items-center py-3">
        <div
          class="flex gap-2 text-gray-600 hover:scale-110 duration-200 hover:cursor-pointer"
        >
          <svg
            class="w-6 stroke-green-700"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
            ></path>
            <path
              d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
            ></path>
          </svg>
          <button
            class="font-semibold text-sm text-green-700"
            @click="store.editcontent(store.todos.id)"
          >
            Edit
          </button>
        </div>
        <div
          class="flex gap-2 text-gray-600 hover:scale-110 duration-200 hover:cursor-pointer"
        >
          <svg
            class="w-6 stroke-red-700"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path
              d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
            ></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
          <button
            class="font-semibold text-sm text-red-700"
            @click="store.deletecontent(todo)"
          >
            Delete
          </button>
        </div>
      </div>
    </div>

    <br />
    <br />
    <br />

    <form action="" @submit.prevent>
      <label> Title </label> <br />
      <input v-model="ttl" type="text" /> <br />
      <label> Content </label> <br />
      <input v-model="ctn" type="text" /> <br />
      <button type="button" @click="store.addcontent(ttl, ctn)">
        Add Input
      </button>
    </form>
  </div>
</template>
