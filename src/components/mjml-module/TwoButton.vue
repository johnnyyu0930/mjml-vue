<template>
  <MjSection @click="$emit('click')" @delete="$emit('delete')">
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
};
</script>

<style>
</style>