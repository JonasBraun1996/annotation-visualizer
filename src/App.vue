<script>
import { RouterLink, RouterView } from "vue-router";
import Navigation from './components/Navigation.vue';
export default {
  name: "App",
  components: {
    Navigation
  }
};
</script>

<template>
  <navigation></navigation>
  <RouterView/>
</template>

<style scoped></style>
