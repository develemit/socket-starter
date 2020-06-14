var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', async (req, res, next) => {
  const users = await knex('users').select();

  res.send(users);
});

router.post('/user', async (req, res) => {
  await knex('users').insert(req.body);
  const newUsers = await knex('users').select();
  res.send(newUsers);
});

module.exports = router;
