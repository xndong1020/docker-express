var express = require('express');
var userRepo = require('../repos/userRepo.js');
var router = express.Router();

/* GET users listing. */
router.get('/', async (req, res, next) => {
  res.render('userList', { title: 'User list' });
});

router.get('/', async (req, res, next) => {
  const [rows] = await userRepo.findAll();
  console.log('rows', rows);
});

router.get('/details/:id', async (req, res) => {
  const { id } = req.params;
  console.log('id', id);
  const user = await userRepo.findById(id);
  console.log('findbyid', user);
});

router.get('/reg', async (req, res) => {
  console.log('rendering form blank');
  res.render('userReg', { title: 'User register' });
});

router.post('/reg', async (req, res) => {
  console.log('processing form submission');
  const newUser = await userRepo.createUser(req.body);
  res.send(newUser);
});

router.get('/update', async (req, res, next) => {
  res.render('userUpdate', { title: `User update` });
});

router.post('/update', async (req, res) => {
  const { id } = req.params;
  const user = req.body;
  console.log('update id', id);
  await userRepo.update(id, user);
  res.send(user);
});

router.get('/delete', async (req, res, next) => {
  res.render('userDelete', { title: 'Delete user' });
});

router.post('/delete', async (req, res, next) => {
  const { id } = req.params;
  await userRepo.del(id);
  res.send('deleted');
});

module.exports = router;
