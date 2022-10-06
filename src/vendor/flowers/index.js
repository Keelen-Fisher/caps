'use strict';

const { io } = require('socket.io-client')
const socket = io('http://localhost:3002/caps');
// const createPickupRequest = require('../vendorPickUp');
// const pickupRequest = createPickupRequest(socket);
const Chance = require('chance');
let chance = new Chance();
const MessageClient = require('../lib/messageClient');
const flowerVendor = new MessageClient('1-800-flowers')
// const driverPickedUp = require('./driverPickedUp');
// const driverDelivered = require('./driverDelivered');
// socket.on('PICKUP', driverPickedUp(socket));
// socket.on('DELIVERED', driverDelivered(socket));

flowerVendor.publish('GETALL', {queueId: '1-800-Flowers'});

flowerVendor.subscribe('DELIVERED', (payload) => {
  console.log(`A thank you for the delivery service ${payload.orderID}`);
  flowerVendor.publish('RECEIVED', payload.messageId);
});

setInterval(() => {
  console.log('-----------------------Order Has Started, Ready for Pickup----------------');
  const payload = {
    messageId: chance.guid(),
    store: '1-800-flowers',
    orderID: chance.integer({min: 1, max: 1000}),
    customer: chance.name(),
    address: `${chance.address()}, ${chance.city()}, ${chance.state()}`,
  };
  flowerVendor.subscribe('PICKUP', payload);
}, 5000);


