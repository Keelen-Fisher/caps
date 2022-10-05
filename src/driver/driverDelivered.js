'use strict';

module.exports = (socket) => (payload) => {
  payload.event = 'DONE';
  socket.emit('logging', payload);
  console.log(`DRIVER: The order is officially delivered: ${payload.orderId}`);
};
