const knex = require('../db/knex');
const safetyNet = require('../utils/safetyNet');

const getUser = async socket => {
  safetyNet(() => {
    socket.on('reqUser', async first_name => {
      const requestedUser = await knex('users')
        .where('first_name', first_name)
        .first();
      console.log(
        requestedUser ? 'New Found Added!' : 'not found!',
        requestedUser
      );
      socket.emit('getUser', requestedUser || {});
    });
  }, 'getUser');
};

module.exports = getUser;
