<template>
  <tr class="mj-social">
    <td
      :align="settings.align"
      style="font-size:0px;padding:10px 25px;word-break:break-word;"
    >
      <mjSocialElement
        v-for="(child, index) in children"
        :key="index"
        :children="child"
        :vertival="settings.vertical"
      />
    </td>
  </tr>
</template>

<script>
import mjSocialElement from "./mj-social-element";

export default {
  props: {
    settings: {
      type: Object,
      default: function() {
        return { align: "right", vertical: false };
      },
    },
    children: {
      type: Array,
      default: function() {
        return [
          {
            text: "Line",
            align: "right",
            "font-family": "Times new Roman",
            "font-size": "12px",
            "font-style": "italic",
            "font-weight": "900",
            "line-height": "22px",
            color: "black",
            src: require("../../assets/fb.png"),
            href: "",
          },
          {
            text: "Line",
            align: "right",
            "font-family": "Times new Roman",
            "font-size": "12px",
            "font-style": "italic",
            "font-weight": "900",
            "line-height": "22px",
            color: "black",
            src: require("../../assets/fb.png"),
            href: "",
            alt: "",
          },
        ];
      },
    },
  },
  data() {
    return {
      mjml: {
        tagName: "mj-social",
        attributes: {},
        children: [],
      },
    };
  },
  components: {
    mjSocialElement,
  },
};
</script>

<style>
.social-vertical {
  margin: 0px;
}
.social-horizontal {
  float: none;
  display: inline-table;
  margin: 0px;
}
</style>
