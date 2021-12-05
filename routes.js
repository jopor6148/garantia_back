'use strict'

var express = require('express');
var user = require('./controllers/CtrlUser');
var profile = require('./controllers/CtrlProfile');
var auth = require('./controllers/Auth');

var router = express.Router();

router.post('/login',auth.run);

router.get('/users', user.all);
router.get('/user/:id', user.get);
router.put('/user/:id', user.update);

router.get('/perfiles', profile.all);
router.get('/perfil/:id', profile.get);
router.put('/perfil/:id', profile.update);
router.delete('/perfil/:id', profile.delete);

module.exports = router;