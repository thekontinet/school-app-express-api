const {Router} = require('express');
const router = new Router();
const {index, create} = require('../Controllers/taskController');

router.get('/', index);

router.post('/', create);

module.exports = router;
