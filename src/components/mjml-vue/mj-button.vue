<template>
  <tr>
    <td
      :align="settings.align"
      vertical-align="middle"
      style="font-size:0px;word-break:break-word;"
      :style="{paddingTop: settings['padding-top'], paddingLeft: settings['padding-left'], paddingBottom: settings['padding-bottom'], paddingRight: settings['padding-right']}"
    >
      <table
        border="0"
        cellpadding="0"
        cellspacing="0"
        role="presentation"
        style="border-collapse:separate;line-height:100%;"
        :style="{width: settings.width}"
      >
        <tr>
          <td
            align="center"
            :bgcolor="settings['background-color']"
            role="presentation"
            style="cursor:auto;mso-padding-alt:10px 25px;"
            :style="{height: settings['height'], border: settings['border'], borderRadius: settings['border-radius'], background: settings['background-color']}"
            valign="middle"
          >
            <a
              :href="settings.href"
              style="display:inline-block;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;"
              :style="{width: buttonWidth, background: settings['background-color'], color: settings['color'], fontFamily: settings['font-family'], fontSize: settings['font-size'], fontWeight: settings['font-weight'], borderRadius: settings['border-radius']}"
              target="_blank"
            >
              {{ settings.content }}
            </a>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</template>
<script>
export default {
  props: {
    settings: {
      type: Object,
      default: function () {
        return {
          content: "button",
          "align": "center",
          "width": "",
          "height": "",
          "href": "#",
          "font-family": "Halvatica",
          "font-size": "13px",
          "font-weight": "500",
          "color": "#ffffff",
          "border": "",
          "border-radius": "8px",
          "padding-top": "10px",
          "padding-bottom": "25px",
          "padding-left": "10px",
          "padding-right": "25px",
          "background-color": "#aaaaaa"
        }
      }
    }
  },
  data() {
    return {
      mjml: {
        tagName: "mj-button",
        attributes: {},
      }
    };
  },
  computed: {
    buttonWidth() {
      let borderWidth = 0;
      if (this.settings.border !== undefined && this.settings.border !== '') {
        const _array = this.settings.border.split(' ');
        borderWidth = _array[0].replace('px', '');
      }
      if (this.settings.width !== undefined && this.settings.width !== '') {
        return this.settings.width - this.settings['padding-left'] - this.settings['padding-right'] - borderWidth;
      } else {
        return ''
      }
    }
  },
};
</script>

<style></style>
