<template>
  <div style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
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
export default {
data() {
    return {
      mjml: {
        tagName: "mj-section",
        attributes: {},
        children: []
      }
    };
  }
}
</script>

<style>

</style>