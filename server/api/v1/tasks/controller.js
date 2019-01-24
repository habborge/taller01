exports.all = (req, res, next) => {
  res.json({});
};

exports.create = (req, res, next) => {
  res.json({
    title: req.body.title,
  });
};

exports.read = (req, res, next) => {
  res.json({
    id: req.params.id,
  });
};

exports.update = (req, res, next) => {
  res.json({});
};

exports.delete = (req, res, next) => {
  res.json({});
};
