<template>
  <mjBody>
    <mjWrapper>
      <modulePicture :settings="setPicture" />
      <moduleDivider :settings="setDivider" />
      <moduleText :settings="setText" />
      <moduleButton :settings="setButton" />
    </mjWrapper>
  </mjBody>
</template>

<script>
import moduleDivider from "./mjml-module/moduleDivider";
import modulePicture from "./mjml-module/modulePicture";
import moduleText from "./mjml-module/moduleText";
import moduleButton from "./mjml-module/moduleButton";
// import mjColumn from "./mjml-vue/mj-column";
// import mjSection from "./mjml-vue/mj-section";
import mjWrapper from "./mjml-vue/mj-wrapper";
// import Social from "./mjml-module/Social";
import mjBody from "./mjml-vue/mj-body";
// import mjGroup from "./mjml-vue/mj-group";

import json2mjml from "json2mjml";
import { mjmlToHtml } from "../api";

export default {
  name: "HelloWorld",
  components: {
    moduleDivider,
    modulePicture,
    moduleText,
    moduleButton,
    mjWrapper,
    // mj-Social,
    mjBody,
    // mjGroup,
  },
  data() {
    return {
      html: "",
      setDivider: {
        "padding-top": "10px",
        "padding-bottom": "10px",
        "container-background-color": "",
        "border-color": "#ccc",
        "border-style": "solid",
        "border-width": "1px",
        columnWidth: "100%"
      },
      setPicture: [
        {
          align: "center", // left center right
          alt: "image description1",
          "container-background-color": "",
          href: "https://133.com",
          src: "https://www.online-image-editor.com//styles/2014/images/example_image.png",
          target: "_blank",
          width: "120px", //px
          height: "auto", // px or auto
          "padding-top": "10px",
          "padding-bottom": "10px",
          "fluid-on-mobile": "true", // true or false
        },
        {
          align: "center", // left center right
          alt: "image description2",
          "container-background-color": "",
          src: "https://www.online-image-editor.com//styles/2014/images/example_image.png",
          target: "_blank",
          width: "220px", //px
          height: "auto", // px or auto
          "padding-top": "10px",
          "padding-bottom": "25px",
          "fluid-on-mobile": "true", // true or false
        },
        {
          align: "center", // left center right
          alt: "image description3",
          "container-background-color": "",
          src: "https://www.online-image-editor.com//styles/2014/images/example_image.png",
          target: "_blank",
          width: "290px", //px
          height: "auto", // px or auto
          "padding-top": "10px",
          "padding-bottom": "25px",
          "fluid-on-mobile": "true", // true or fals
        }
      ],
      setButton: {
        align: "center",
        content: "meow~~",
        "font-size": "15px",
        "color": "#ffffff",
        "border": "2px solid navy",
        "border-radius": "20px",
        "padding-top": "10px",
        "padding-bottom": "10px",
        "padding-left": "25px",
        "background-color": "#345e32"
      },
      setText: [
        {
          "font-size": "16px",
          "padding-bottom": "30px",
          "line-height": "1.4",
          color: "#ababab",
          content: "等不及放暑假(?)就在市區玩(car)2天1夜祕境旅行(shiny)原來基隆就是地球村(lips)給你台南小吃地圖下次直奔這家！"
        },
        {
          "font-size": "12px",
          "padding-bottom": "10px",
          "line-height": "1.4",
          color: "#ababab",
          content: "就是今天(!)先來領200元再訂電影票(eh?!)2020最強《屍速列車2》重磅上映中！"
        }
      ]
    };
  },
  methods: {
    async preview() {
      let mjml = {
        tagName: "mjml",
        children: [
          {
            tagName: "mj-head",
            children: [
              { tagName: "mj-preview", content: "test", id: "8SWC6Hn0Zitv" },
            ],
            attributes: {},
            id: "dfG1V6YPXqqV",
          },
          {
            tagName: "mj-body",
            children: [],
          },
        ],
      };
      const vm = this;
      console.log(this.$refs);

      Object.keys(this.$refs).forEach((el) => {
        if (el.includes("mj-")) {
          console.log(vm.$refs[el]);
          mjml.children[1].children.push(...vm.$refs[el].mjml);
        }
      });

      const { data } = await mjmlToHtml(json2mjml(mjml));
      this.html = data.html;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
