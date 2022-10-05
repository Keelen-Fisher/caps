'use strict';

module.exports = (socket) => (payload) => {
  payload.event = 'IN-TRANSIT';
  socket.emit('log', payload);
  console.log(`DRIVER: order has been made and picked up: ${payload.orderId}`);
  socket.emit('DELIVERED', { payload });
};
