'use strict';

const { Server } = require('socket.io');

const PORT = process.env.PORT || 3002;

const server = new Server(PORT);

const caps = server.of('/caps');

server.on('connection', (socket) => {
  console.log('This socket is now connect to the Event Server!', socket.id);

  socket.on('IN-TRANSIT', (payload) => {
    console.log('Server IN-TRANSIT event', payload);

    socket.broadcast.emit('IN-TRANSIT', payload);
  });

  socket.on('DELIVERED', (payload) => {
    console.log('Server DELIVERED EVENT', payload);
    socket.broadcast.emit('DELIVERED', payload);
  });
});

caps.on('connection', (socket) => {
  console.log('Socket is officially connected to caps!', socket.id);

  socket.on('JOIN', (room) => {
    console.log(`You've joined the ${room} room`);
  });

});



// const eventPool = require('../eventPool');

// const Chance = require('chance');
// let chance = new Chance();


// const payload = {
//   storeId: chance.integer({min: 1, max: 1000}),
//   orderId: chance.integer({min: 1, max: 1000}),
//   customer: chance.name(),
//   address: chance.address(),
// };

// function logEvent(event, payload){

//   storeId = chance.integer({min: 1, max: 1000}),
//   orderId =  chance.integer({min: 1, max: 1000}),
//   customer = chance.name(),
//   address = chance.address(),
  
//   console.log('EVENT', {event, storeId, orderId, customer, address});
// }
// setInterval(() => {
//   console.log('--------------New Interval Begins----------------');

// }, 3000);
