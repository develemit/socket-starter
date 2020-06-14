const knex = require('../db/knex');
const safetyNet = require('../utils/safetyNet');

const usersSocket = socket => {
  safetyNet(async () => {
    const users = await knex('users').select();
    socket.emit('usersSocket', users);
  }, 'usersSocket');
};

module.exports = usersSocket;
