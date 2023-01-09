<template>
  <canvas
    id="myCanvas"
    :width="width"
    :height="height"
    style="border: 1px solid #000000"
  ></canvas>
</template>

<script>
export default {
  name: "Box",
  props: {
    //TODO: use top to move box away from x-axis
    top: Number,
    //TODO: use top to move box away from y-axis
    left: Number,
    width: Number,
    height: Number,
  },
};
</script>

<style></style>
