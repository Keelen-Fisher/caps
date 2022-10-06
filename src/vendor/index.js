'use strict';

const { io } = require('socket.io-client')
const socket = io('http://localhost:3002/caps');
// const driverPickedUp = require('./driverPickedUp');
// const driverDelivered = require('./driverDelivered');

const pickupRequest = require('./venderPickUp');
// socket.on('PICKUP', driverPickedUp(socket));
// socket.on('DELIVERED', driverDelivered(socket));

socket.on('DELIVERED', (payload) => {
  console.log(`A thank you for the delivery service ${payload.orderID}`);
  socket.disconnect();
});


setInterval(() => {
  pickupRequest(socket);
}, 2000);


