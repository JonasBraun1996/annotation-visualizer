<script>
import { RouterLink, RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
export default {
  name: "App",
  components: {
    Navigation,
  },
  mounted() {
    this.$router.push("/image_slider");
  },
};
</script>

<template>
  <navigation></navigation>
  <RouterView />
</template>

<style scoped></style>
