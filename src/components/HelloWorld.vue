<template>
  <mjBody>
    <mjWrapper>
      <Picture />
      <Divider />
      <Text />
      <Button />
    </mjWrapper>
  </mjBody>
</template>

<script>
import Divider from "./mjml-module/Divider";
import Picture from "./mjml-module/Picture";
import Text from "./mjml-module/Text";
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
    Divider,
    Picture,
    Text,
    mjWrapper,
    // Social,
    mjBody,
    // mjGroup,
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
