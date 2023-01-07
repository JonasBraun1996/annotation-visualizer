<script lang="js">

import {mapState, mapMutations} from 'vuex'

export default {
  name: "Annotation",
  methods: {
    ...mapMutations(['setCurrentAnnotations']),
    getAnnotationsForImage(currentImage, apiResult) {
      let annotationArray = [];
      let index = 0;
      currentImage = currentImage.replace(".jpg", "");
      while(apiResult[index]) {
        if(apiResult[index].frameId === currentImage) {
          annotationArray.push(this.reduceResult(apiResult[index]));
        }
        index++;
      }
      this.setCurrentAnnotations(annotationArray);
    },
    reduceResult(apiResult) {
      return {
            "x": apiResult.x,
            "y": apiResult.y,
            "z": apiResult.z,
            "height": apiResult.height,
            "width": apiResult.width,
            "label": apiResult.label
          }
    }
  },
  computed: {
    ...mapState({
      apiResult: (state) => state.apiResult,
      currentImage: (state) => state.currentImage,
      currentAnnotations: (state) => state.currentAnnotations
    })
  },
  watch: {
    currentImage() {
      this.getAnnotationsForImage(this.currentImage, this.apiResult);
    }
  }

};
</script>

<template>
  {{ currentAnnotations[0] }}<br />
  {{ currentAnnotations[1] }}<br />
  {{ currentAnnotations[2] }}
</template>

<style scoped></style>
