<template>
  <table width="100%" style="background-color: white;">
    <tr>
      <td align="center">
        <table
          role="presentation"
          cellpadding="0"
          cellspacing="0"
          style="border-collapse:separate;"
          align="center"
          border="0"
        >
          <tr>
            <td
              style="border:none;border-radius:3px;color:#ffffff;cursor:auto;padding:10px 25px;"
              align="center"
              valign="middle"
              :bgcolor="settings['background-color']"
            >
              <a
                :href="settings['href']"
                style="display:inline-block;background:#414141;color:#ffffff;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:3px;"
              >
                <p
                  :style="settings"
                  style="text-decoration:none;font-family:Ubuntu, Helvetica, Arial, sans-serif;
                  font-size:13px;font-weight:normal;line-height:120%;text-transform:none;margin:0px;"
                >{{text}}</p>
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
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
        "padding-top": "0px",
        "padding-bottom": "0px",
        "padding-left": "0px",
        "padding-right": "0px",
        "background-color": "#414141",
        href: "#",
        color: "#ffffff"
      }
    };
  }
};
</script>

<style>
</style>