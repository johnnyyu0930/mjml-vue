<template>
  <div
    style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
  ><slot>
    </slot></div>
</template>

<script>
export default {
  data() {
    return {
      mjml: {
        tagName: "mj-column",
        attributes: {},
        id: this._uid,
        children: []
      }
    };
  }
};
</script>

<style>
</style>