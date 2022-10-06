'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3002/caps');
const driverPickedUp = require('./driverPickedUp')(socket);
// const Chance = require('chance');
// const driverDelivered = require('./driverDelivered');
// socket.emit('JOIN', 'Caps');
// const chance = new Chance();
// socket.on('PICKUP', driverPickedUp(socket));
// socket.on('DELIVERED', driverDelivered(socket));

// module.exports = socket;
socket.io('PICKUP', driverPickedUp);
module.exports = {driverPickedUp, socket};
