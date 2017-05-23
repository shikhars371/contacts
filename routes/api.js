var express = require('express');
var router = express.Router();
var server= require('../api/server');

/* GET home page. */
router.post('/saveform',server.saveformdata);
router.get('/getform',server.getformdata);
router.post('/deleterow',server.deleterow);
router.post('/saveeditform',server.saveeditform);

router.post('/saveuseradmin',server.saveuseradmin);
router.post('/checkuseradmin',server.checkuseradmin);
router.get('/logout',server.logout);



module.exports = router;
