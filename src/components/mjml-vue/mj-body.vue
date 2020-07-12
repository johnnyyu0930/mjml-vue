<template>
  <body :style="{'background-color': settings['background-color']}" class="mj-body">
    <slot></slot>
  </body>
</template>

<script>
export default {
  props: {
    settings: {
      type: Object,
      default: function() {
        return {
          'background-color': '#ffffff'
        }
      }
    }
  },
qdata() {
    return {
      mjml: {
        tagName: "mj-body",
        attributes: {},
        children: []
      }
    };
  }
}
</script>

<style>
</style>