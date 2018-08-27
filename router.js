// Define all the handlers
const handlers = {};

// Sample handler
handlers.sample = function (data, callback) {
  callback(406, { name: 'sample handler' });
};

// Not found handler
handlers.notFound = function (data, callback) {
  callback(404);
};

// Define the request router
const router = {
  sample: handlers.sample,
};

module.exports = { router, handlers };
