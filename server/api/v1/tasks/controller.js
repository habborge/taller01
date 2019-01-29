/* eslint-disable max-len */
/* eslint-disable indent */
/* eslint-disable prefer-const */
const functions = require('./functions');

let proyect = [{
    _id: 1,
    description: 'Node.js es una plataforma que nos permite ejecutar código JavaScript fuera del navegador.',
    author: 'Hab Borge',
    created_at: '2018-12-30',
    updated_at: '2019-01-02',
  },
  {
    _id: 2,
    description: 'Muchas personas creen que Node.js se utiliza sólo para crear aplicaciones Web.',
    author: 'Jesús Osorio',
    created_at: '2019-01-03',
    updated_at: '2019-01-04',
  },
];

exports.all = (req, res, next) => {
  res.json(proyect);
};

exports.create = (req, res, next) => {
  const newTask = functions.create_task(req.body.description, req.body.author, proyect);
  if (newTask) {
    res.status(201);
    res.json(newTask);
  }
  next({
    message: 'Description: y Author: fields can not empty!!',
    statusCode: 400,
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
