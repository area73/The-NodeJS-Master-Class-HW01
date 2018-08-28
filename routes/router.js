const notFound = require('./notFound');
const greetings = require('./greetings');

// Define the request router
module.exports = {
  hello: greetings,
  default: notFound
};
