const knex = require('../db/knex');
const safetyNet = require('../utils/safetyNet');

const deleteUser = async (socket, io) => {
  safetyNet(() => {
    socket.on('deleteUser', async id => {
      console.log('heard deleteUser request', id);
      await knex('users')
        .delete()
        .where('id', id);
      console.log(`user with id ${id} deleted`);
      const users = await knex('users').select();
      io.emit('usersSocket', users);
    });
  }, 'deleteUser');
};

module.exports = deleteUser;
