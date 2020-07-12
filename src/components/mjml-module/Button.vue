<template>
  <MjSection>
    <MjColumn :columnWidth="columnWidth">
      <MjButton :setting="settings" />
    </MjColumn>
  </MjSection>
</template>

<script>
import MjSection from "../mjml-vue/mj-section";
import MjColumn from "../mjml-vue/mj-column";
import MjButton from "../mjml-vue/mj-button";
import mjModuleMixin from '../../mixins/mjModuleMixin';

export default {
  components: {
    MjSection,
    MjColumn,
    MjButton
  },
  mixins: [mjModuleMixin]
};
</script>

<style>
</style>