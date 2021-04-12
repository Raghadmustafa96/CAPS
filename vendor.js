const events = require('./events.js');
var faker = require('faker');
require('dotenv').config();
require('./caps');


class Order{
    constructor(){
      this.payload ={
        storeName: process.env.STORENAME,
        orderId: faker.datatype.uuid(),
        customerName: faker.name.findName(),
        address: faker.address.city(),
      } 
    }
}

function orderPickUp(){
setInterval(function() {
    
    events.emit('pickup', { event: 'pickup',
    time: new Date().toISOString(),
    payload: new Order().payload,});

   }, 5000);
}

module.exports = orderPickUp();