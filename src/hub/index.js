'use strict';

const { Server } = require('socket.io');

const PORT = process.env.PORT || 3002;

const io = new Server(PORT); // http://localhost:3002
// Namespace created
const caps = io.of('/caps');

// Creating Queue
const Queue = require('../lib/queue');
const messageQueue = new Queue();

caps.on('connection', (socket) => {
  console.log('This socket is now connect to the Event Server!', socket.id);

  socket.onAny((event, payload) => {
    let date = new Date;
    let time = date.toTimeString();
    console.log('EVENT', { event, time, payload });

  });


  socket.on('JOIN', (room) => {
    console.log(`You've joined the ${room} room`);
    // how to actually join a room
    socket.join(room);
  });

  socket.on('PICKUP', (payload) => {
    let currentQueue = messageQueue.read(payload.queueId);
    if(!currentQueue){
      let queueKey = messageQueue.store(payload.queueId, new Queue());
      currentQueue = messageQueue.read(queueKey);
    }
    currentQueue.store(payload.messageId, payload);
    socket.broadcast.emit('PICKUP', payload);
  });

  socket.on('IN-TRANSIT', (payload) => {
    socket.broadcast.emit('IN-TRANSIT', payload);
  });

  socket.on('DELIVERED', (payload) => {
    socket.broadcast.emit('DELIVERED', payload);
  });

  socket.on('RECEIVED', (payload) => {
    let currentQueue = messageQueue.read(payload.queueId);
    if(!currentQueue){
      throw new Error('No Queue Created, messaging error');
    }
    let deleteMessage = currentQueue.remove(payload.messageId);
  });

  socket.on('GETALL', (payload) => {
    console.log(`getting all messages for ${payload.queueId}` );

    let currentQueue = messageQueue.read(payload.queueId);
    if(currentQueue && currentQueue.data){
      Object.keys(currentQueue.data).forEach(messageId => {
        socket.emit('DELIVERED', currentQueue.read(messageId));
      });
    }
  });

});
