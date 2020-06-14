const knex = require('../db/knex');
const safetyNet = require('../utils/safetyNet');

const editUser = async (socket, io) => {
  safetyNet(() => {
    socket.on('editUser', async ({ id, newValue }) => {
      console.log('heard editUser request', id, newValue);
      await knex('users')
        .where('id', id)
        .update('first_name', newValue);
      console.log(`user with id ${id} updated!`);
      const users = await knex('users').select();
      io.emit('usersSocket', users);
    });
  }, 'editUser');
};

module.exports = editUser;
