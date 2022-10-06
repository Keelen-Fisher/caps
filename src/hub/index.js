'use strict';

const { Server } = require('socket.io');

const PORT = process.env.PORT || 3002;

const io = new Server(PORT); // http://localhost:3002
// Namespace created
const caps = io.of('/caps');


const Queue = require('./queue');
const infoQueue = new Queue();
// function eventLog(event, payload) {
//   let date = new Date;
//   let time = date.toTimeString();
//   console.log('EVENT', { event, time, payload });
// }

caps.on('connection', (socket) => {
  console.log('This socket is now connect to the Event Server!', socket.id);

  socket.onAny((event, payload) => {
    let date = new Date;
    let time = date.toTimeString();
    console.log('EVENT', { event, time, payload });

  });

  socket.on('JOIN', (queueID) => {
    socket.joing(queueID);
    socket.emit('JOIN', queueID);
  });

  socket.on('JOIN', (room) => {
    console.log(`You've joined the ${room} room`);
    // how to actually join a room
    socket.join(room);
  });

  socket.on('PICKUP', (payload) => {
    // eventLog('PICKUP', payload);
    socket.broadcast.emit('PICKUP', payload);
  });

  socket.on('IN-TRANSIT', (payload) => {
    // eventLog('IN-TRANSIT', payload);
    socket.broadcast.emit('IN-TRANSIT', payload);
  });

  socket.on('DELIVERED', (payload) => {
    // eventLog('DELIVERED', payload);
    socket.broadcast.emit('DELIVERED', payload);
  });

});
