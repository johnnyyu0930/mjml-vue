<template>
  <table
    border="0"
    cellpadding="0"
    cellspacing="0"
    role="presentation"
    style="vertical-align:top;"
    width="100%"
    class="mj-wrapper"
  >
    <tr>
      <td
        align="right"
        style="background:aliceblue;font-size:0px;padding:10px 13px;word-break:break-word;"
      >
        <div
          style="font-family:Times new Roman;font-size:12px;font-style:italic;font-weight:900;line-height:1;text-align:right;color:pink;"
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
        tagName: "mj-wrapper",
        attributes: {},
        text: "mj text example content text",
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
