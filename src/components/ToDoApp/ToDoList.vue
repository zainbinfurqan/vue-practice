<template>
  <div class="d-flex p-2 toDoListMainContainer">
    <div class="form-group">
      <label for="exampleInputEmail1">Enter to do</label>
      <input
        type="text"
        v-model="toDoText"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
    </div>
    <button
      v-on:click="addToDo_"
      type="button"
      class="btn btn-success btn-lg btn-block"
    >{{this.isupdate ? "Update":"Add"}}</button>
    <div class="border item-main" v-bind:key="item.id" v-for="(item, index) in toDoListData">
      <ToDoItem
        v-bind:data="item"
        v-on:delete-todo="deleteToDo_"
        v-bind:index="index"
        v-on:update-todo="updateToDoFN_"
      />
    </div>
  </div>
</template>

<script>
import ToDoItem from "./ToDoItem";
export default {
  name: "ToDoList",
  components: {
    ToDoItem,
  },
  props: ["toDoListData"],
  data() {
    return {
      isupdate: false,
      id: 0,
      toDoText: "",
      currentIndex: 0,
    };
  },
  methods: {
    deleteToDo_(index) {
      this.$emit("deleteToDoFN", index);
    },
    addToDo_() {
      this.isupdate
        ? this.$emit("addToDoFN", {
            id: this.toDoListData.length + 1,
            toDoText: this.toDoText,
          })
        : this.$emit("updateToDoFN", {
            id: this.id,
            toDoText: this.toDoText,
            index: this.currentIndex,
          });
      this.toDoText = "";
      this.isupdate = false;
    },
    updateToDoFN_(data) {
      (this.toDoText = data.text),
        (this.id = data.id),
        (this.isupdate = true),
        (this.currentIndex = data.index);
    },
  },
};
</script>

<style scoped>
.item-main {
  flex-direction: column;
}
.toDoListMainContainer {
  flex-direction: column;
}
</style>