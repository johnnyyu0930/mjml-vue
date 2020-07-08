import axios from 'axios';

export const mjmlToHtml = (mjml) => axios.post(
  'https://api.mjml.io/v1/render',
  {mjml},
  {
    headers: {
      'Authorization': `Basic ${process.env.VUE_APP_MJML_TOKEN}`,
    },
  },
);