/* eslint-disable vars-on-top */
/* eslint-disable no-plusplus */
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
  let major = 0;
  if (description != null && author != null) {
    for (let i = 0; i < project.length; i++) {
      if (project[i]._id > major) {
        major = project[i]._id;
      }
    }
    const id = major + 1;
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
    const index = project.findIndex(proje => proje._id === +taskid);
    const taskdate = dateFns.format(new Date(), 'YYYY-MM-DD');

    const data = {
      _id: project[index]._id,
      description,
      author,
      created_at: project[index].created_at,
      updated_at: taskdate,
    };

    project.splice(index, 1, data);
    message = 'Task was updated successfully!!';
  }

  return message;
};

exports.delete_task = function (id, project) {
  let message = '';
  const index = project.findIndex(t => t._id === +id);
  if (index != null) {
    project.splice(index, 1);
    message = 'Task was deleted successfully!!';
  }

  return message;
};
