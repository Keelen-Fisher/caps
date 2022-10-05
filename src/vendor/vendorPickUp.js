'use strict';

const Chance = require('chance');

let chance = new Chance();

const payload = {
  storeId: chance.integer({min: 1, max: 1000}),
  orderId: chance.integer({min: 1, max: 1000}),
  customer: chance.name(),
  address: chance.address(),
};

module.exports = (socket) => {
  payload.event = 'PICKUP';
  socket.emit('logging', payload);
  console.log(`VENDOR: order is ready for pick up, starting now. Here is the orderId: ${payload.orderId}`);
  socket.emit('PICKUP', payload)
}
