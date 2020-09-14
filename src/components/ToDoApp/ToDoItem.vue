<template>
  <div class="d-flex flex-row m-3">
    <div class="p-2 d-sm-flex border bd-highlight">
      <p class="m-0">{{data.id}}</p>
    </div>
    <div class="p-2 flex-grow-1 border bd-highlight">
      <p class="text-left m-0">{{data.text}}</p>
    </div>
    <div class="p-2 d-sm-flex border bd-highlight">
      <i
        class="fa fa-edit click-on"
        @click="$emit('update-todo',{text:data.text,id:data.id,index:index})"
      />
    </div>
    <div class="p-2 d-sm-flex border bd-highlight">
      <i class="fa fa-trash click-on" @click="$emit('delete-todo',index)" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ToDoItem",
  props: ["data", "index"],
};
</script>

<style scoped>
.single-item {
  flex-direction: row;
}
.click-on {
  cursor: pointer;
}
</style>