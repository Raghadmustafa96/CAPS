const events = require('./events.js');
const orderPickUp = require('./caps');
require('./driver');

setInterval(function() {
    events.emit('in-transit', { event: 'in-transit',
    time: new Date().toISOString(),});
   }, 8000);

   setInterval(function() {
    events.emit('in-delivered', { event: 'in-delivered',
    time: new Date().toISOString(),});
   }, 9000);