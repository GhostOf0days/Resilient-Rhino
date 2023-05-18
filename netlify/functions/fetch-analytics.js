exports.handler = async () => {
    const uniqueVisitors = process.env.UNIQUE_VISITORS;
    return {
      statusCode: 200,
      body: JSON.stringify({ secretValue })
    };
  };  