const safetyNet = require('../utils/safetyNet');

const connectedUsers = async (socket, io, count) => {
  safetyNet(() => {
    console.log('heard connectedUsers', count);
    io.emit('connectedUsers', count);
  }, 'connectedUsers');
};

module.exports = connectedUsers;
