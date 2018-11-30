const events = require('events');

class TakeAway extends events.EventEmitter {
    constructor(){
        super();
        this.orders = 0;
    }
    addOrders(amount) {
        this.orders += amount;
        this.emit('ordersChanged',this.orders);
    }
    sendOrder(amount) {
        if (amount > this.orders)
            this.orders = 0;
        else
            this.orders -= amount;
        this.emit('ordersChanged',this.orders);
    }
    clearOrders() {
        this.orders = 0;
        this.emit('ordersChanged',this.orders);
    }
    checkOrders() {
        this.emit('checkorders',this.orders);
    }
}

module.exports = () => {
    var takeAway = new TakeAway();
    return takeAway;
};
