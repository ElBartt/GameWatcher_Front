const dotenv = require('dotenv');
const path = require('path');

const env = process.env.NODE_ENV || 'dev';
const result = dotenv.config({ path: path.join(__dirname, "..", `.env.${env}`) });
if (result.error) {
    throw result.error;
}
