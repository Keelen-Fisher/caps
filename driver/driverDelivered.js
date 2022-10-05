'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3001');

module.exports = (socket) => (payload) => {
  payload.event = 'DONE';
  socket.emit('logging', payload);
  console.log(`DRIVER: The order is officially delivered: ${payload.orderId}`);
};

