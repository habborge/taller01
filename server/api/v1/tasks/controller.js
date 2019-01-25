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
  res.json(newTask);
};

exports.read = (req, res, next) => {
  const taskId = functions.read_task(req.params.id, proyect);
  res.json(taskId);
};

exports.update = (req, res, next) => {
  const taskId = functions.update_task(req.params.id, req.body.description, req.body.author, proyect);
  res.json(taskId);
};

exports.delete = (req, res, next) => {
  const taskId = functions.delete_task(req.params.id, proyect);
  res.json(taskId);
};
