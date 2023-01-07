<script lang="js">

import apiResultJson from './../apiResults/annotations.json'
import {mapState} from 'vuex'

export default {
  name: "Annotation",
  data() {
    return {
      apiResult: apiResultJson
    }
  },
  computed: {
    ...mapState({
      apiResult: (state) => state.apiResult
    })
  }
};
</script>

<template>
  <div class="centering mt-5">
    <h1>Annotation</h1>
  </div>
</template>

<style scoped></style>
