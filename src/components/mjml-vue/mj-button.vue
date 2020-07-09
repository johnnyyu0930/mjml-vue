<template>
  <tr>
    <td
      :align="settings.align"
      vertical-align="middle"
      style="font-size:0px;word-break:break-word;"
      :style="{background: settings['container-background-color'], paddingTop: settings['padding-top'], paddingBottom: settings['padding-bottom']}"
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
              :style="{width: settings['width'], background: settings['background-color'], color: settings['color'], fontFamily: settings['font-family'], fontSize: settings['font-size'], fontWeight: settings['font-weight'], borderRadius: settings['border-radius']}"
              target="_blank"
            >
              {{ text }}
            </a>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</template>
<script>
export default {
  data() {
    return {
      mjml: {
        tagName: "mj-button",
        content: "example text",
        attributes: {},
      },
      text: "example text",
      settings: {
        "align": "right",
        "width": "220px",
        "height": "50px",
        "href": "#",
        "font-family": "Times New Roman",
        "font-size": "10px",
        "font-weight": "900",
        "color": "plum",
        "border": "2px solid yellow",
        "border-radius": "8px",
        "padding-top": "10px",
        "padding-bottom": "25px",
        "background-color": "#414141",
        "container-background-color": ""
      },
    };
  },
};
</script>

<style></style>
