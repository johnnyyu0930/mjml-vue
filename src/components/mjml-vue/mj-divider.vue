<template>
  <tr class="mj-divider">
    <td 
      style="font-size:0px;word-break:break-word;"
      :style="{background: settings['container-background-color'], padding: `${settings['padding-top']} ${settings['padding-bottom']}`}"
    >
      <p
        style="font-size:1px;margin:0px auto;width:100%;"
        :style="{border: `${settings['border-width']} ${settings['border-style']} ${settings['border-color']}`, }"
      >
      </p>
    </td>
  </tr>
</template>
<script>
export default {
  data() {
    return {
      mjml: {
        tagName: "mj-divider",
        attributes: {},
      },
      settings: {
        "padding-top": "10px",
        "padding-bottom": "25px",
        "container-background-color": "pink",
        "border-color": "#000000",
        "border-style": "solid",
        "border-width": "2px"
      }
    };
  }
};
</script>

<style>
</style>