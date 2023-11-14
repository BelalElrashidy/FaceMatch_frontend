<template>
  <div class="colored" v-if="color">
    <div class="container">
        <h1>{{ title }}</h1>
        <hr>
        <slot></slot>
    </div>
  </div>
  <div class="white" v-else>
    <div class="container">
        <h1>{{ title }}</h1>
        <hr>
      <slot></slot>
    </div>
      
  </div>
</template>

<script>
export default {
  name: "container",
  props: {
    title: String,
    color: { require: false, type: Boolean, default: false },
  },
};
</script>
<style>
@import "../assets/css/main.css";
</style>
