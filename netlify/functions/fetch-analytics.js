exports.handler = async () => {
    const potentialRescues = process.env.POTENTIAL_RESCUES;
    return {
      statusCode: 200,
      body: JSON.stringify({ potentialRescues })
    };
  };  