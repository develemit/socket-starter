const knex = require('../db/knex');
const safetyNet = require('../utils/safetyNet');

const postNewUser = async (socket, io) => {
  safetyNet(() => {
    socket.on('postNewUser', async user => {
      await knex('users').insert(user);
      console.log('New User Added!', user);
      const users = await knex('users').select();
      io.emit('usersSocket', users);
    });
  }, 'postNewUser');
};

module.exports = postNewUser;
