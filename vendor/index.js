'use strict';

const { io } = require('socket.io-client')
const socket = io('http://localhost:3002/caps');
// const driverPickedUp = require('./driverPickedUp');
// const driverDelivered = require('./driverDelivered');

socket.emit('JOIN', 'Caps');

// const chance = new Chance();

socket.on('connect', () => {
  console.log(`Thank you for delivering: ${socket.id}`);
});

socket.on('disconnect', () => {
  console.log(socket.id);
});

socket.on('connect', () => {
  console.log(`Thank you for delivering: ${socket.connected}`);
});

socket.on('disconnect', () => {
  console.log(socket.connected);
});

// socket.on('PICKUP', driverPickedUp(socket));
// socket.on('DELIVERED', driverDelivered(socket));

// module.exports = socket;

