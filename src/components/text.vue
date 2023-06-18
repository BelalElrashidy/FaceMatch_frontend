<template>
    <div class="container">
      <h1>{{ title }}</h1>
      <p>{{ msg }}</p>
    </div>
</template>

<script>
    export default{
        name: "container",
        props: {
            title: String,
            msg: String
        }
    }
</script>
<style>
    @import "../assets/css/main.css";
</style>