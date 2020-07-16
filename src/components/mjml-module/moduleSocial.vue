<template>
  <MjSection>
    <MjColumn :columnWidth="columnWidth">
      <MjSocial :settings="settings[0]" />
    </MjColumn>
    <MjColumn :columnWidth="columnWidth" v-if="this.settings.length > 1">
      <MjSocial :settings="settings[1]" />
    </MjColumn>
  </MjSection>
</template>

<script>
import MjSection from "../mjml-vue/mj-section";
import MjColumn from "../mjml-vue/mj-column";
import MjSocial from "../mjml-vue/mj-social";
import mjModuleMixin from '../../mixins/mjModuleMixin';

export default {
  components: {
    MjSection,
    MjColumn,
    MjSocial
  },
  mixins: [mjModuleMixin],
};
</script>

<style>
</style>