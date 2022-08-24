module.exports = function() {
  return {
    database: {
      url: process.env.MONGODB_URL,
    },
  };
};
