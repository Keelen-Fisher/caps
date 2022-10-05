'use strict';

const Event = require('events');

// event where things can happen
const eventPool = new Event();

module.exports = eventPool
