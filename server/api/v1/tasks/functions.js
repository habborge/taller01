/* eslint-disable no-underscore-dangle */
/* eslint-disable radix */
/* eslint-disable func-names */
const dateFns = require('date-fns');

exports.read_task = function (taskid, project) {
  const id = parseInt(taskid);
  const info = project.find(proje => proje._id === id);

  return info;
};

exports.create_task = function (description, author, project) {
  let message = '';
  if (description != null && author != null) {
    const id = project.length + 1;

    const taskdate = dateFns.format(new Date(), 'YYYY-MM-DD');
    const data = {
      _id: id,
      description,
      author,
      created_at: taskdate,
      updated_at: taskdate,
    };
    project.push(data);
    message = 'Task was created successfully!!';
  }

  return message;
};

exports.update_task = function (taskid, description, author, project) {
  let message = '';
  if (description != null && author != null) {
    const id = parseInt(taskid);
    const info = project.find(proje => proje._id === id);
    const taskdate = dateFns.format(new Date(), 'YYYY-MM-DD');

    if (info != null) {
      const data = {
        _id: id,
        description,
        author,
        created_at: info.created_at,
        updated_at: taskdate,
      };
      project.splice(id - 1, 1);
      project.splice(id - 1, 0, data);
      message = 'Task was updated successfully!!';
    }
  }

  return message;
};

exports.delete_task = function (taskid, project) {
  let message = '';
  const id = parseInt(taskid);

  if (id != null) {
    project.splice(id - 1, 1);
    message = 'Task was deleted successfully!!';
  }

  return message;
};
