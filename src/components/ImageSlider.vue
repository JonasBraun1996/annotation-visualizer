<script>
import { mapState, mapMutations } from "vuex";
import Annotation from "./Annotation.vue";
import Box from "./Box.vue";

export default {
  name: "Imageslider",
  components: {
    Annotation,
    Box,
  },
  data() {
    return {
      images: [
        "002_RgbMaster_69426.jpg",
        "005_RgbMaster_69432.jpg",
        "008_RgbMaster_69438.jpg",
        "011_RgbMaster_69444.jpg",
        "014_RgbMaster_69450.jpg",
        "017_RgbMaster_69456.jpg",
      ],
      currentIndex: 0,
    };
  },
  mounted() {
    this.next();
  },
  methods: {
    ...mapMutations(["setCurrentImage"]),
    next() {
      this.currentIndex += 1;
    },
    prev() {
      if (this.currentIndex > 0) {
        this.currentIndex -= 1;
      }
    },
  },
  computed: {
    ...mapState({
      currentImage: (state) => state.currentImage,
      imageFolderPath: (state) => state.imageFolderPath,
    }),
    currentSlide: function () {
      let currentImage = this.images[this.currentIndex % this.images.length];
      this.setCurrentImage(currentImage);
      return this.imageFolderPath + currentImage;
    },
  },
};
</script>

<template>
  <div v-for="i in [currentIndex]" :key="i">
    <img :src="currentSlide" />
  </div>
  <annotation></annotation>
  <a class="prev" @click="prev" href="#">&#10094; Previous</a>
  <a class="next" @click="next" href="#">Next &#10095;</a>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
}

img {
  height: 100%;
  width: 100%;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 20%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.9);
}
</style>
