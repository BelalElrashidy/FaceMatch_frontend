<template>
  <header>
    
    <nav>
      <img src="../assets/pictures/logo.svg" alt="Logo">
      <ul>
        <li>
          <RouterLink to="/">home</RouterLink>
        </li>
        <li>
          <RouterLink to="/projects">Projects</RouterLink>
        </li>
        <li>
          <RouterLink to="/about">About</RouterLink>
        </li>
      </ul>
      <button  class="Buttton" >
        <img src="../assets/pictures/Google.svg" alt="google"> Sign in with Google
      </button>
    </nav>
  </header>
  <RouterView/>
</template>
<script>
  import { RouterLink, RouterView } from 'vue-router';

  export default {
    name: "topBar"
  }
</script>
<style scoped>
  @import "../assets/css/main.css";
  img{
    width: 2rem;
  }
</style>