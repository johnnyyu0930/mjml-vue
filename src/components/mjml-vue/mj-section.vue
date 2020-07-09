<template>
  <div @mouseover="toolbarShow = true" @mouseleave="toolbarShow = false" class="session" style="margin:0px auto;max-width:600px;" @click="$emit('click')">
    <ToolBar v-if="toolbarShow" @delete="$emit('delete')"/>
    <table
      align="center"
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="width:100%;"
    >
      <tbody>
        <tr>
          <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
            <slot></slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ToolBar from "../ToolBar";
export default {
  components: {
    ToolBar
  },
  data() {
    return {
      toolbarShow: false,
      mjml: {
        tagName: "mj-section",
        attributes: {},
        children: []
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.session {
  position: relative;
}
</style>