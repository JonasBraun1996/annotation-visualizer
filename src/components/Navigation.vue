<script>

import Logo from './Logo.vue';

export default {
  name: "Navigation",
  components: {
    Logo
  }
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <logo class="d-lg-none"></logo>  
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <logo class="d-none d-lg-block"></logo>
          <RouterLink class="nav-link" to="/">Home</RouterLink>
          <RouterLink class="nav-link" to="/image_slider">Image Slider</RouterLink>
        </div>
      </div>
    </div>
  </nav>   
</template>

<style scoped></style>