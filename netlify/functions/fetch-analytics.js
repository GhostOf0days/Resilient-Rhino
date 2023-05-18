const axios = require('axios');

exports.handler = async (event, context) => {
  try {
    const response = await axios.get(`https://api.netlify.com/api/v1/sites/${process.env.NETLIFY_SITE_ID}/analytics/data`, {
      headers: {
        'Authorization': `Bearer ${process.env.NETLIFY_ACCESS_TOKEN}`
      }
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        uniqueVisitors: response.data.data.unique_visitors
      })
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
