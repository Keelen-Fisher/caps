'use strict';

module.exports = (socket) => (payload) => {
  payload.event = 'DELIVERED';
  socket.emit('log', payload);
  console.log(`VENDOR: ${payload.customer}, thank you your order. It has been delivered. Here is the confirmation Id: ${payload.orderId}`);
  socket.emit('DELIVERED', payload)
}
