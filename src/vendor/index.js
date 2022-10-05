'use strict';

const io = require('socket.io-client')
const socket = io('http://localhost:3002/caps');
const driverPickedUp = require('./driverPickedUp');
const driverDelivered = require('./driverDelivered');


socket.on('joining', () => {
  console.log(`Thank you for ordering: ${socket.id}`);
});


driverPickedUp(socket);

spcket.on('DELIVERED', driverDelivered(socket));

module.exports = socket;
