'use strict';

module.exports = (socket) => (payload) => {
  setTimeout(() => {
    console.log(`DRIVER: The order has been Picked up: ${payload.orderId}`);
    socket.emit('IN-TRANSIT', payload);
  }, 4000);

  setTimeout(() => {
    console.log(`DRIVER: Order has been delivered ${payload.orderId}`);
    socket.emit('DELIVERED', payload);
  }, 10000);
};



