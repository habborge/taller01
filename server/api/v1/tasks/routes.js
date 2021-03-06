const router = require('express').Router();
const controller = require('./controller');
/*
 * /api/posts/     POST   - CREATE
 * /api/posts/     GET    - READ ALL
 * /api/posts/:id  GET    - READ ONE
 * /api/posts/:id  PUT    - UPDATE
 * /api/posts/:id  DELETE - DELETE
 */
router
  .param('id', controller.id);

router.route('/')
  .post(controller.create)
  .get(controller.all);

router.route('/:id')
  .get(controller.read)
  .put(controller.update)
  .patch(controller.update)
  .delete(controller.delete);

module.exports = router;
