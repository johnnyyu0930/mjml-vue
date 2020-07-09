<template>
  <div>
    <OneButton ref="mj-1" />
    <TwoButton ref="mj-2" />
    <mjWrapper>
      <mjSection>
        <mjColumn>
          <mjSocial />
          <mjDivider />
          <mjImage />
          <mjText>
            <h1>hellow world</h1>
          </mjText>
        </mjColumn>
      </mjSection>
    </mjWrapper>

    <button @click="preview">preview</button>
    <div>
      <iframe
        :srcdoc="html"
        width="100%"
        style="background-color: white; min-height: 500px;"
        height="100%"
      ></iframe>
    </div>
  </div>
</template>

<script>
import OneButton from "./mjml-module/OneButton";
import TwoButton from "./mjml-module/TwoButton";
import mjDivider from "./mjml-vue/mj-divider";
import mjImage from "./mjml-vue/mj-image";
import mjText from "./mjml-vue/mj-text";
import mjColumn from "./mjml-vue/mj-column";
import mjSection from "./mjml-vue/mj-section";
import mjWrapper from "./mjml-vue/mj-wrapper";
import mjSocial from "./mjml-vue/mj-social";

import json2mjml from "json2mjml";
import { mjmlToHtml } from "../api";

export default {
  name: "HelloWorld",
  components: {
    OneButton,
    TwoButton,
    mjDivider,
    mjImage,
    mjText,
    mjColumn,
    mjSection,
    mjWrapper,
    mjSocial
  },
  props: {
    msg: String,
  },
  data() {
    return {
      html: "",
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

