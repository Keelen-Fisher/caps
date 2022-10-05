'use strict';

const eventPool = require('./src/eventPool');

const Chance = require('chance');
let chance = new Chance();


const payload = {
  storeId: chance.integer({min: 1, max: 1000}),
  orderId: chance.integer({min: 1, max: 1000}),
  customer: chance.name(),
  address: chance.address(),
};


setInterval(() => {
  console.log('--------------New Interval Begins----------------');

}, 3000)
