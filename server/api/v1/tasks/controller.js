const {
  Model,
  references,
  fields,
} = require('./model');

const {
  paginationParseParams,
  sortParseParams,
  sortCompactToStr,
} = require.main.require('./server/utils');

const referencesNames = Object.getOwnPropertyNames(references);

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
    query,
  } = req;
  const {
    limit,
    skip,
    page,
  } = paginationParseParams(query);
  const {
    sortBy,
    direction,
  } = sortParseParams(query, fields);

  const populate = referencesNames.join(' ');

  const all = Model.find()
    .sort(sortCompactToStr(sortBy, direction))
    .limit(limit)
    .skip(skip)
    .populate(populate);
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
    body = {}, decoded = {},
  } = req;
  const {
    _id = null,
  } = decoded;
  if (_id) {
    body.authorId = _id;
  }
  const document = new Model(body);

  document
    .save()
    .then((doc) => {
      res.json(doc);
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
    items: doc,
  });
};

exports.update = (req, res, next) => {
  const {
    doc = {}, body = {}, decoded = {},
  } = req;
  const {
    _id = null,
  } = decoded;
  if (_id) {
    body.authorId = _id;
  }

  Object.assign(doc, body);

  doc
    .save()
    .then((updated) => {
      res.json(updated);
    })
    .catch((err) => {
      next(new Error(err));
    });
};

exports.delete = (req, res, next) => {
  const {
    doc,
  } = req;

  doc
    .remove()
    .then((removed) => {
      res.json(removed);
    })
    .catch((err) => {
      next(new Error(err));
    });
};
