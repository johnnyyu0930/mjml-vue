<template>
  <MjSection>
    <MjColumn :columnWidth="columnWidth">
      <MjText :settings="settings[0]" />
    </MjColumn>
    <MjColumn :columnWidth="columnWidth" v-if="settings[1] !== undefined">
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
  mixins: [mjModuleMixin]
  // watch: {
  //   settings: {
  //     immediate: true,
  //     handler(newSettings) {
  //       if (newSettings.length > 1) {
  //         this.$refs.firstColumn.append(
  //           `
  //           <MjColumn :columnWidth="columnWidth" v-if="this.settings.length > 1">
  //             <MjText :settings="settings[1]" />
  //           </MjColumn>
  //           `
  //         )
  //       }
  //     }
  //   }
  // }
};
</script>

<style>
</style>