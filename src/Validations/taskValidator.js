const joi = require('joi');
const createTaskValidation = joi.object({
  title: joi.string().max(200).required(),
  content: joi.string().required(),
});

module.exports = {
  createTaskValidation,
};
