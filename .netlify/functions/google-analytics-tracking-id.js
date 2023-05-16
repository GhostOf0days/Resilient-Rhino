exports.handler = async (event, context) => {
    return {
      statusCode: 200,
      body: JSON.stringify({ trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID }),
    };
  };