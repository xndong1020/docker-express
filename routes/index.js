var express = require('express');
var userRepo = require('../repos/userRepo.js');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  const [rows] = await userRepo.findAll();
  res.render('index', { title: 'Express' });
});

module.exports = router;
