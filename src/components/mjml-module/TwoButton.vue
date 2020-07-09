<template>
  <MjSection @click="$emit('click')">
    <MjColumn style="width: 50%">
      <MjButton :content="settings.content1"/>
    </MjColumn>
    <MjColumn style="width: 50%">
      <MjButton :content="settings.content2"/>
    </MjColumn>
  </MjSection>
</template>

<script>
import MjSection from "../mjml-vue/mj-section";
import MjColumn from "../mjml-vue/mj-column";
import MjButton from "../mjml-vue/mj-button";
import mjModuleMixin from "../../mixins/mjModuleMixin";

export default {
  components: {
    MjSection,
    MjColumn,
    MjButton
  },
  mixins: [mjModuleMixin],
  props: {
    settings: {
      type: Object
    }
  },
};
</script>

<style>
</style>