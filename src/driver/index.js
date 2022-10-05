'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3001');
const Chance = require('chance');
const driverPickedUp = require('./driverPickedUp');
const driverDelivered = require('./driverDelivered');

const chance = new Chance();

socket.on('joining', () => {
  console.log(`Thank you for delivering: ${socket.id}`);
});

socket.on('PICKUP', driverPickedUp(socket));
socket.on('DELIVERED', driverDelivered(socket));

module.exports = socket;
