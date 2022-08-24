const {Schema, default: mongoose} = require('mongoose');

const taskSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Task', taskSchema);
