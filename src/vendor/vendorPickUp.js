'use strict';

const Chance = require('chance');
const { socket } = require('../driver');

let chance = new Chance();


function pickupRequest(socket){
  console.log('-----------------------Order Has Started, Ready for Pickup----------------');
  const payload = {
    storeId: chance.integer({min: 1, max: 1000}),
    orderId: chance.integer({min: 1, max: 1000}),
    customer: chance.name(),
    address: `${chance.address()}, ${chance.city()}, ${chance.state()}`,
  };
  
  
  function joinRoom(socket, payload){
    socket.emit('JOIN', `${payload.store}`)
    
  }
  
  joinRoom(socket, payload);
  socket.emit('PICKUP', payload);
}


module.exports = pickupRequest;
