const { google } = require('googleapis');

exports.handler = async (event, context) => {
    const client = new google.auth.JWT(
        process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL, 
        null, 
        process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY.replace(/\\n/g, '\n'), 
        ['https://www.googleapis.com/auth/spreadsheets']
    );

    const gsapi = google.sheets({ version: 'v4', auth: client });

    const opt = {
        spreadsheetId: process.env.SPREADSHEET_ID, 
        range: 'Sheet1!A1'
    };

    let data = await gsapi.spreadsheets.values.get(opt);
    let count = parseInt(data.data.values[0]) || 0;
    count++;

    const updateOptions = {
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: 'Sheet1!A1',
        valueInputOption: 'USER_ENTERED',
        resource: { values: [[count.toString()]] }
    };

    await gsapi.spreadsheets.values.update(updateOptions);

    return {
        statusCode: 200,
        body: JSON.stringify({ counter: count }),
    };
};