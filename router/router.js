const { Router } = require('express');
const controller = require('../controller/route_controller');
const router = Router();

router.get('/', controller.getIndexPage);
router.get('/home', controller.getIndexPage);

router.post('/', controller.postIndexPage);
router.post('/home', controller.postIndexPage);

module.exports = router;