/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable indent */

const config = require('./../../../config');

// const logger = require.main.require('./server/config/logger');

const {
  paginationParseParams,
} = require.main.require('./server/utils/');
const {
  sortParseParams,
  sortCompactToStr,
} = require.main.require('./server/utils');
const {
  Model,
  fields,
} = require('./model');

const {
  pagination,
} = config;

exports.id = (req, res, next, id) => {
  Model.findById(id)
    .exec()
    .then((doc) => {
      if (!doc) {
        const message = `${Model.modelName} not found`;

        next({
          message,
          statusCode: 404,
          type: 'warn',
        });
      } else {
        req.doc = doc;
        next();
      }
    })
    .catch((err) => {
      next(new Error(err));
    });
};

exports.all = (req, res, next) => {
  const {
    query = {},
  } = req;
  const {
    limit,
    page,
    skip,
  } = paginationParseParams(query);
  const {
    sortBy,
    direction,
  } = sortParseParams(query, fields);

  const all = Model.find()
    .sort(sortCompactToStr(sortBy, direction))
    .limit(limit)
    .skip(skip);
  const count = Model.countDocuments();

  Promise.all([all.exec(), count.exec()])
    .then((data) => {
      const [docs, total] = data;
      const pages = Math.ceil(total / limit);

      res.json({
        success: true,
        items: docs,
        meta: {
          limit,
          skip,
          total,
          page,
          pages,
          sortBy,
          direction,
        },
      });
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
      const message = 'The Task was created!!';
      res.status(201);
      res.json({
        success: true,
        message,
        item: doc,
      });
    })
    .catch((err) => {
      next(new Error(err));
    });
};

exports.read = (req, res, next) => {
  const {
    doc,
  } = req;

  res.json({
    success: true,
    item: doc,
  });
};

exports.update = (req, res, next) => {
  const {
    doc,
    body,
  } = req;

  Object.assign(doc, body);

  doc.save()
    .then((updated) => {
      const message = 'User was updated!!';
      res.json({
        success: true,
        message,
        item: updated,
      });
    })
    .catch((err) => {
      next(new Error(err));
    });
};

exports.delete = (req, res, next) => {
  const {
    doc,
  } = req;

  doc.remove()
    .then((removed) => {
      const message = 'User was deleted!!';
      res.json({
        success: true,
        message,
        item: removed,
      });
    })
    .catch((err) => {
      next(new Error(err));
    });
};
