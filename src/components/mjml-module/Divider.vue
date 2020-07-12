<template>
  <MjSection>
    <MjColumn :columnWidth="columnWidth">
      <MjDivider :settings="settings" />
    </MjColumn>
  </MjSection>
</template>

<script>
import MjSection from "../mjml-vue/mj-section";
import MjColumn from "../mjml-vue/mj-column";
import MjDivider from "../mjml-vue/mj-divider";
import mjModuleMixin from '../../mixins/mjModuleMixin';

export default {
  components: {
    MjSection,
    MjColumn,
    MjDivider
  },
  mixins: [mjModuleMixin]
};
</script>

<style>
</style>