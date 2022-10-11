'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3002/caps');
const driverMessage = require('./driverPickedUp');
const driverPickedUp = driverMessage(socket);


socket.on('PICKUP', driverPickedUp);
