/*
Descripción de la tarea (description) (Texto)
Autor de la tarea (author) (Texto, por ahora)
Fecha de creación (createdAt) (Fecha y hora, calculada a la hora de crear el
contenido)
Fecha de edición (updatedAt) (Fecha y hora, actualizada a la hora de editar el
contenido)
*/
const dateFns = require("date-fns");

var proyect = [{
    _id: 1,
    "description": "Node.js es una plataforma que nos permite ejecutar código JavaScript fuera del navegador.",
    "author": "Hab Borge",
    "created_at": "2018-12-30",
    "updated_at": "2019-01-02",
  },
  {
    "_id": 2,
    "description": "Muchas personas creen que Node.js se utiliza sólo para crear aplicaciones Web.",
    "author": "Jesús Osorio",
    "created_at": "2019-01-03",
    "updated_at": "2019-01-04",
  },
  {
    "_id": 3,
    "description": "Node.js es equivalente a otros lenguajes de programación como Ruby, Python y Java, por nombrar algunos.",
    "author": "Michelle Licona",
    "created_at": "2019-01-05",
    "updated_at": "2019-01-07",
  },
  {
    "_id": 4,
    "description": "Todo lo que sabes actualmente de JavaScript te va a servir para crear aplicaciones con Node.js",
    "author": "Samantha Solano",
    "created_at": "2019-01-06",
    "updated_at": "2019-01-09",
  },
];

function read_task(taskid, project) {

  const id = parseInt(taskid);
  let info = project.find(proje => proje._id === id);

  if (info == null) {
    info = "Id de tarea no Existe!!"
  }

  return info;
}

function create_task(description, author, project) {
  if ((description != null) && (author != null)) {
    const id = project.length + 1;
    const taskdate = dateFns.format(new Date(), "YYYY-MM-DD");
    const data = {
      _id: id,
      description: description,
      author: author,
      created_at: taskdate,
      updated_at: taskdate,
    };
    project.push(data);
    message = "Tarea creada con exito!!";

  } else {
    message = "Los campos description: y author: no pueden estar vacios!!";

  }
  const vec = [message, project];
  return vec;
}

function update_task(taskid, description, author, project) {
  if ((description != null) && (author != null)) {
    let id = parseInt(taskid);
    let info = project.find(proje => proje._id === id);
    const taskdate = dateFns.format(new Date(), "YYYY-MM-DD");

    if (info != null) {
      const data = {
        _id: id,
        description: description,
        author: author,
        created_at: info.created_at,
        updated_at: taskdate,
      };
      project.splice(id - 1, 1);
      project.splice(id - 1, 0, data);
      message = "Tarea actualizada con exito!!";
    }
  } else {
    message = "Los campos description: y author: no pueden estar vacios!!";

  }

  const vec = [message, project];
  return vec;
}

function delete_task(taskid, project) {
  let id = parseInt(taskid);
  let info = project.find(proje => proje._id === id);
  if (info != null) {
    project.splice(id - 1, 1);
    message = "Tarea Borrada con exito!!";
  } else {
    message = "Id de tarea no Existe!!";
  }

  return message

}
exports.all = (req, res, next) => {
  res.json(proyect);
};

exports.create = (req, res, next) => {
  const newTask = create_task(req.body.description, req.body.author, proyect)
  res.json(newTask);
};

exports.read = (req, res, next) => {
  const taskId = read_task(req.params.id, proyect);
  res.json(taskId);
};

exports.update = (req, res, next) => {
  const taskId = update_task(req.params.id, req.body.description, req.body.author, proyect);
  res.json(taskId);
};

exports.delete = (req, res, next) => {
  const taskId = delete_task(req.params.id, proyect);
  res.json(taskId);
};
