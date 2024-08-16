import { ref } from "vue";
import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";

export const useTodoStore = defineStore("todo", () => {
    const todos = ref([{}]);

    function addcontent(ttl, ctn) {
      console.log(todos);
      if (ttl.trim() !== "" ||
        ctn.trim() !== "" ||
        ctn !== null ||
        ttl !== null
      ) {
        todos.value.push({
          id: uuidv4(),
          title: ttl.substring(0, 15),
          content: ctn.substring(0, 20),
          completed: false,
          date: Date.now(),
        });
        console.log(todos);
      }
      localStorage.setItem("todos", JSON.stringify(todos.value));
    }

    function deletecontent(todo) {
      var index = todos.value.indexOf(
        todos.value.find((value) => {
          value.id == todo.id;
        })
      );

      todos.value.splice(index, 1);

      localStorage.setItem("todos", JSON.stringify(todos.value));
      console.log(todos.value);
    }

    function completed(index) {
      todos[index].completed.value = !todos[index].completed.value;
      console.log(todos[index].completed.value);
      localStorage.setItem("todos", JSON.stringify(todos.value));
    }

    function editcontent(todo) {
      console.log(todos.value);

      const title = prompt("Edit this todo : ");
      const console = prompt("Content");
      if (edited.trim() !== "" && edited != null || console !== null) todos.value = edited.trim();
      todo.value.title = title;
      todo.value.content = console; 
      console.log(todos.value);
    }

    return { todos, addcontent, deletecontent, editcontent, completed };
  },
  {
    persist: true,
  }
);
