<template>
  <div class="toDoMain">
    <!-- <ToDoInput v-bind:toDoListData="toDoListData" v-on:addToDoFN="addToDo" /> -->
    <ToDoHeader />
    <ToDoList
      v-bind:toDoListData="toDoListData"
      v-on:deleteToDoFN="deleteToDo"
      v-on:addToDoFN="addToDo"
      v-on:updateToDoFN="updateToDo"
    />
  </div>
</template>

<script>
import ToDoList from "./ToDoList";
import ToDoHeader from "./ToDoHeader";

export default {
  name: "ToDoMain",
  components: {
    ToDoList,
    ToDoHeader,
  },
  data() {
    return {
      toDoListData: [
        { id: 1, text: "i want to learn vue.js", isComplete: false },
        { id: 2, text: "i want to learn angular", isComplete: false },
        { id: 3, text: "i want to learn graphql", isComplete: false },
      ],
    };
  },
  methods: {
    addToDo(data) {
      const newToDo = {
        id: data.id,
        text: data.toDoText,
        isComplete: false,
      };
      this.toDoListData = [...this.toDoListData, newToDo];
    },
    deleteToDo(index) {
      this.toDoListData.splice(index, 1);
    },
    updateToDo(data) {
      console.log(data);
      this.toDoListData[data.index] = data.text;
      // this.toDoListData.filter(item=>item.id ===data.id && item.text = data.text )
    },
  },
};
</script>

<style scoped>
</style>