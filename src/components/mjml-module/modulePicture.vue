<template>
  <MjSection>
    <MjColumn :columnWidth="columnWidth" v-for="image in settings" :key="image.index" >
      <MjImage :settings="image" />
    </MjColumn>
  </MjSection>
</template>

<script>
import MjSection from "../mjml-vue/mj-section";
import MjColumn from "../mjml-vue/mj-column";
import MjImage from "../mjml-vue/mj-image";
import mjModuleMixin from '../../mixins/mjModuleMixin';

export default {
  components: {
    MjSection,
    MjColumn,
    MjImage
  },
  mixins: [mjModuleMixin]
};
</script>

<style>
</style>