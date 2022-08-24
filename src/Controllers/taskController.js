const createHttpError = require('http-errors');
const asyncHander = require('express-async-handler');
const container = require('../container');
const {taskRepository} = container.get('repositories');
const {createTaskValidation} = require('../Validations/taskValidator');
/**
 * List of all task
 * @param {Request} req
 * @param {Response} res
 *
 * @return {String}
 */
async function index(req, res) {
  return res.json(await taskRepository.getAllTask());
}

/**
 * create new task
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
async function create(req, res, next) {
  const {value, error} = createTaskValidation.validate(req.body);
  if (error) {
    throw new createHttpError.Forbidden(error.message);
  }
  const {title, content} = value;
  const task = await taskRepository.createTask(title, content);
  res.json(task);
}

module.exports = {
  index: asyncHander(index),
  create: asyncHander(create),
};
