'use strict';
const ValueObject = require('./ValueObject');


class Money extends ValueObject { 
    constructor ({amount, currency}) {
        if(typeof amount !== 'number' || isNaN(amount))
        super({amount, currency});
    }
}

module.exports = Money;