const express = require('express');
const router  = express.Router();
const controls = require('../controller/userController');

router.get('/',controls.index);
router.get('/search',controls.search);
router.get('/views/:id',controls.view);
router.get('/create',controls.getCreate);
router.post('/create',controls.postCreate);
module.exports = router;