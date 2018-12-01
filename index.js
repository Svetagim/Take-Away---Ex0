const eventsConfig = require('./eventconfig').events,
      takeaway     = require('./take_away'),
      controller   = require('./controller');
const express      = require('express'),
      app          = express(),
      port         = process.env.PORT || 8080;

app.listen(port); //creating server
console.log(`Listening to port ${port}`);

var ta1 = takeaway(); //new instance of TakeAway object

ta1.on(eventsConfig.ORDERCHANGED, controller.displayNumOrders); //event emitter
ta1.on(eventsConfig.ORDERCHANGED, controller.checkEndOfDay);
ta1.on(eventsConfig.ORDERCHANGED, () =>{
    controller.checkLimit(ta1,20);
});
ta1.on(eventsConfig.CHECKORDERS, controller.displayNumOrders);

//TakeAway methods
ta1.addOrders(10);
ta1.addOrders(12);
ta1.sendOrder(15);
ta1.checkOrders();
ta1.clearOrders();

//the response to the client
app.get('/', (req, res) => {
    res.send(JSON.stringify(controller.log()));
});