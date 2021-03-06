const mongoose = require('mongoose');

const {
  Schema,
} = mongoose;

const fields = {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    required: true,
    trim: true,
  },
};

const references = {
  authorId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
};

const task = new Schema(Object.assign(fields, references), {
  timestamps: true,
});

module.exports = {
  Model: mongoose.model('task', task),
  fields,
  references,
};
