<script>
export default {
  name: "Logo",
  methods: {
    routeToBasePath() {
      this.$router.push("/image_slider");
    },
  },
};
</script>

<template>
  <img
    id="logo"
    alt="understand.ai logo"
    src="../assets/understandai.png"
    @click="routeToBasePath"
  />
</template>

<style scoped>
#logo {
  width: 10%;
  cursor: pointer;
}
</style>
