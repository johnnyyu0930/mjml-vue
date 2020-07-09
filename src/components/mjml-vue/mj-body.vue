<template>
  <body :style="{'background-color': settings['background-color']}" class="mj-body">
    <div :style="{'background-color': settings['background-color']}">
      <slot></slot>
    </div>
  </body>
</template>

<script>
export default {
data() {
    return {
      mjml: {
        tagName: "mj-body",
        attributes: {},
        children: []
      },
      settings: {
        'background-color': ''
      }
    };
  }
}
</script>

<style>
</style>