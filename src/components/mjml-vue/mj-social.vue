<template>
  <tr class="mj-social">
    <td
      :align="settings.align"
      style="font-size:0px;padding:10px 25px;word-break:break-word;"
    >
      <mjSocialElement
        v-for="child in children"
        :key="child.text"
        :children="child"
        :vertival="settings.vertical"
      />
    </td>
  </tr>
</template>

<script>
import mjSocialElement from "./mj-social-element";

export default {
  data() {
    return {
      mjml: {
        tagName: "mj-social",
        attributes: {},
        children: [],
      },
      settings: {
        align: "right",
        vertical: false,
      },
      children: [
        {
          settings: {
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
        },
        {
          settings: {
            text: "Facebook",
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
        },
        {
          settings: {
            text: "Facebook",
            align: "right",
            "font-family": "Times new Roman",
            "font-size": "12px",
            "font-style": "italic",
            "font-weight": "900",
            "line-height": "22px",
            color: "black",
            src: require("../../assets/line.png"),
            href: "",
            alt: "",
          },
        },
      ],
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
