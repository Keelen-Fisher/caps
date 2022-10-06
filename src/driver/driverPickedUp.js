'use strict';

module.exports = (socket) => (payload) => {
  setInterval(() => {
    console.log(`DRIVER: The order has been Picked up: ${payload.orderID}`);
    socket.emit('IN-TRANSIT', payload);
  }, 1000);

  setInterval(() => {
    console.log(`DRIVER: Order has been delivered ${payload.orderID}`);
    socket.emit('DELIVERED', payload);
  }, 3000);
};


// socket.emit('log', payload);
// console.log(`DRIVER: order has been made and picked up: ${payload.orderId}`);
// socket.emit('DELIVERED', { payload });

