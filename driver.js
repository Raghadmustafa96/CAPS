const events = require('./events.js');

events.on('pickup', (e) => {
    function eventFun(event) {
        const EVENT = {
            event: event,
            time: e.time,
            payload:
            {
                store: e.payload.storeName,
                orderID: e.payload.orderId,
                customer: e.payload.customerName,
                address: e.payload.address
            }
        }

        return EVENT;
    }

    setTimeout(() => {
        console.log('EVENT', eventFun('pickup'));
        console.log(`DRIVER: pick up ${e.payload.orderId}`);
    }, 1000);

    events.on('in-transit', () => {
        console.log('EVENT', eventFun('in-transit'));
        console.log(`DRIVER: delivered up  ${e.payload.orderId}`);
    });

    events.on('in-delivered', () => {
        console.log(`VENDOR: Thank you for delivering ${e.payload.orderId}`);
        console.log('EVENT', eventFun('in-delivered'));
    });
});
