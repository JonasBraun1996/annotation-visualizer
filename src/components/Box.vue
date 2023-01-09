<template>
  <div>
    <canvas
      id="myCanvas"
      :width="width"
      :height="height"
      style="border: 1px solid #000000"
    ></canvas>
  </div>
</template>

<script>
export default {
  name: "Box",
  created() {},
  data() {
    return {};
  },
  props: {
    top: Number,
    left: Number,
    width: Number,
    height: Number,
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
