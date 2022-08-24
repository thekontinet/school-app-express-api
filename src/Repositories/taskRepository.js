const Task = require('../Models/task');

/**
 * Get all task
 *
 * @return {Object}
 */
async function getAllTask() {
  return await Task.find();
}

/**
 * Create a new task in db
 * @param {String} title
 * @param {String} content
 * @return {Document}
 */
async function createTask(title, content) {
  const task = await Task.create({title, content});
  await task.save();
  return {
    id: task._id,
    title: task.title,
    content: task.content,
    created: task.created,
  };
}

module.exports = {
  getAllTask,
  createTask,
};
