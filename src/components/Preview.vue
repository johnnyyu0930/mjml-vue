<template>
  <div class="preivew-container">
    <button @click="$emit('close')">關閉</button>
    <iframe style="background-color: white;
    min-height: 700px; width: 100%" :srcdoc="html" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  props: {
    html: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.preivew-container {
  position: absolute;
  top: 100px;
  left: 25%;
  width: 900px;
  height: 800px;
  z-index: 30;
  background: white;
}
</style>