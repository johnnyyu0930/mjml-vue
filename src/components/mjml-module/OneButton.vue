<template>
  <MjSection
    @click="$emit('click')"
    @delete="$emit('delete')"
    @drop="$emit('drop')"
    @moveUp="$emit('moveUp')"
    @moveDown="$emit('moveDown')"
    @edit="$emit('edit')"
    @clone="$emit('clone')"
  >
    <MjColumn>
      <MjButton :content="settings.content" />
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
  mixins: [mjModuleMixin]
};
</script>

<style>
</style>