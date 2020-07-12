<template>
  <table
    border="0"
    cellpadding="0"
    cellspacing="0"
    role="presentation"
    style="vertical-align:top;"
    width="100%"
    class="mj-text"
  >
    <tr>
      <td
        :align="settings.align"
        style="font-size:0px;word-break:break-word;"
        :style="{
          background: settings['container-background-color'],
          padding: `${settings['padding-top']} ${settings['padding-right']} ${settings['padding-bottom']} ${settings['padding-left']}`,
        }"
      >
        <div
          style="line-height:1"
          :style="{
            'font-family': settings['font-family'],
            'font-size': settings['font-size'],
            'font-style': settings['font-style'],
            'font-weight': settings['font-weight'],
            'text-align': settings['font-weight'],
            color: settings.color,
          }"
        >
          <slot></slot>
        </div>
      </td>
    </tr>
  </table>
</template>
<script>
export default {
  props: {
    settings: {
      type: Object,
      default: function() {
        return {
          "padding-top": "10px",
          "padding-right": "20px",
          "padding-left": "20px",
          "padding-bottom": "10px",
          align: "center",
          "font-family": "Halvatica",
          "font-size": "12px",
          "font-style": "normal",
          "font-weight": "400",
          "text-align": "center",
          "line-height": "1.2",
          color: "black",
          "container-background-color": "",
        };
      },
    },
  },
  data() {
    return {
      mjml: {
        tagName: "mj-text",
        attributes: {},
      },
    };
  },
};
</script>

<style></style>
