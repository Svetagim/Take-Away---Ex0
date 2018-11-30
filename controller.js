var log = [];

    exports.displayNumOrders = (orders) => {
    console.log(`Number of orderss is: ${orders}`);
    log.push(`Number of orderss is: ${orders}`);
}
exports.checkEndOfDay = (orders) => {
    if (orders == 0) {
        console.log(`Finished for today!!!`);
        log.push(`Finished for today!!!`);
    }
}
exports.checkLimit = (orders, limit) => {
    if (orders > limit) {
        console.log(`Stop taking orders!!! You took ${orders - limit} orders too much`);
        log.push(`Stop taking orders!!! You took ${orders - limit} orders too much`);
    }
}

exports.log = () => {
    return log;
};
