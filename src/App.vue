<template>
  <topBar />
  
  <Footer />

</template>
<script>
  import topBar from "./components/navigation.vue";
  import Footer from "./components/Footer.vue";
    export default {
      name: "App",
      components: {topBar,Footer},
      // computed: {
      //   ...mapGetters(['authenticated']),
      // },
      // methods: {
      //   SignIn () {
      //     const google = new this.$fireAuthObj.GoogleAuthProvider();
      //     this.$fireAuth.signInWithPopup(google);
      //   },
      //   signOut () {
      //     this.$fireAuth.signOut();
      //   },
      // },
  };
</script>
<style>
  @import "./assets/css/main.css";
</style>