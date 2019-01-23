const router = require('express').Router();

router.route('/posts')
  .get((req, res, next) => {
    res.json({
      message: 'GET all posts',
    });
  });

router.route('/tasks')
  .get((req, res, next) => {
    res.json({
      message: 'GET all tasks',
    });
  });
module.exports = router;
