<template>
  <div
    class="mj-section"
    style="margin:0px auto;"
    :style="{background: settings['background'], 'background-color': settings['background'], 'max-width': maxWidth}"
  >
    <table
      align="center"
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="width:100%;"
      :style="{background: settings['background'], 'background-color': settings['background'], 'max-width': maxWidth}"
    >
      <tbody>
        <tr>
          <td
            style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"
          >
            <slot></slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    settings: {
      type: Object,
      default: function() {
        return {
          'full-width': true,
          background: "#eeeeee"
        }
      }
    }
  },
  data() {
    return {
      mjml: {
        tagName: "mj-section",
        attributes: {},
        children: [],
      }
    };
  },
  computed: {
    maxWidth() {
      return this.settings['full-width'] ? "100%" : "600px"
    }
  },
};
</script>

<style></style>
