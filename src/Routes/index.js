const {Router} = require('express');

const router = new Router();

router.use('/tasks', require('./task'));

module.exports = router;
