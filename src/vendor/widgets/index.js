'use strict';

const { io } = require('socket.io-client')
const socket = io('http://localhost:3002/caps');
// const createPickupRequest = require('../vendorPickUp');
// const pickupRequest = createPickupRequest(socket);
const Chance = require('chance');
let chance = new Chance();
const MessageClient = require('../lib/messageClient');
const widgetVendor = new MessageClient('acme-widgets')
// const driverPickedUp = require('./driverPickedUp');
// const driverDelivered = require('./driverDelivered');
// socket.on('PICKUP', driverPickedUp(socket));
// socket.on('DELIVERED', driverDelivered(socket));

widgetVendor.publish('GETALL', {queueId: 'acme-widgets'});

widgetVendor.subscribe('DELIVERED', (payload) => {
  console.log(`A thank you for the delivery service ${payload.orderID}`);
  widgetVendor.publish('RECEIVED', payload.messageId);
});

setInterval(() => {
  console.log('-----------------------Order Has Started, Ready for Pickup----------------');
  const payload = {
    messageId: chance.guid(),
    store: 'acme-widgets',
    orderID: chance.integer({min: 1, max: 1000}),
    customer: chance.name(),
    address: `${chance.address()}, ${chance.city()}, ${chance.state()}`,
  };
  widgetVendor.subscribe('PICKUP', payload);
}, 5000);


