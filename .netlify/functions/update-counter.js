exports.handler = async (event) => {
    const { counter } = JSON.parse(event.body);

    // Update the environment variable value
    process.env.VISITOR_COUNTER = String(counter);

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Counter updated successfully' }),
    };
};