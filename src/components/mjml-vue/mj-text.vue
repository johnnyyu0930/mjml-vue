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
        :style="{background: settings['container-background-color'], padding: `${settings['padding-top']} ${settings['padding-bottom']}`}"
      >
        <div
          style="line-height:1"
          :style="{'font-family': settings['font-family'], 'font-size': settings['font-size'], 'font-style': settings['font-style'], 'font-weight': settings['font-weight'], 'text-align': settings['font-weight'], color: settings.color}"
        >
          <slot></slot>
        </div>
      </td>
    </tr>
  </table>
</template>
<script>
export default {
  data() {
    return {
      mjml: {
        tagName: "mj-text",
        attributes: {},
      },
      settings: {
        "padding-top": "10px",
        "padding-bottom": "13px",
        align: "right",
        "font-family": "Times new Roman",
        "font-size": "12px",
        "font-style": "italic",
        "font-weight": "900",
        "text-align": "right",
        "line-height": "2",
        color: "pink",
        "container-background-color": "aliceblue",
      },
    };
  },
};
</script>

<style></style>
