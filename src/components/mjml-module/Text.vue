<template>
  <MjSection>
    <MjColumn :columnWidth="columnWidth">
      <MjText :settings="settings[0]" />
    </MjColumn>
    <MjColumn :columnWidth="columnWidth" v-if="this.settings.length > 1">
      <MjText :settings="settings[1]" />
    </MjColumn>
  </MjSection>
</template>

<script>
import MjSection from "../mjml-vue/mj-section";
import MjColumn from "../mjml-vue/mj-column";
import MjText from "../mjml-vue/mj-text";
import mjModuleMixin from '../../mixins/mjModuleMixin';

export default {
  components: {
    MjSection,
    MjColumn,
    MjText
  },
  mixins: [mjModuleMixin],
};
</script>

<style>
</style>