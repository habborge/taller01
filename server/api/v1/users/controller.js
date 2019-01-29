/* eslint-disable max-len */
/* eslint-disable indent */
/* eslint-disable prefer-const */
const Model = require('./model');
const functions = require('./functions');

let proyect = [];

exports.all = (req, res, next) => {
  Model.find().exec()
    .then((docs) => {
      res.json(docs);
    })
    .catch((err) => {
      next(new Error(err));
    });
};

exports.create = (req, res, next) => {
  const {
    body,
  } = req;
  const document = new Model(body);

  document.save()
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      next(new Error(err));
    });
};

exports.read = (req, res, next) => {
  const taskId = functions.read_task(req.params.id, proyect);
  if (taskId) {
    res.status(200);
    res.json(taskId);
  }
  next({
    message: `Task ID ${req.params.id} does not exist`,
    statusCode: 404,
  });
};

exports.update = (req, res, next) => {
  const taskId = functions.read_task(req.params.id, proyect);
  if (taskId) {
    const taskInfo = functions.update_task(req.params.id, req.body.description, req.body.author, proyect);
    if (taskInfo) {
      res.status(200);
      res.json(taskInfo);
    }
    next({
      message: 'Description: y Author: fields can not empty!!',
      statusCode: 400,
    });
  }
  next({
    message: `Task ID ${req.params.id} does not exist`,
    statusCode: 404,
  });
};

exports.delete = (req, res, next) => {
  const taskInfo = functions.delete_task(req.params.id, proyect);
  if (taskInfo) {
    res.status(204);
    res.json(taskInfo);
  }
  next({
    message: `Task ID ${req.params.id} does not exist`,
    statusCode: 404,
  });
};
