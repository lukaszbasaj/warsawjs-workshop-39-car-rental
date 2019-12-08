'use strict';
const ValueObject = require('./ValueObject');


class Money extends ValueObject { 
    constructor ({amount, currency}) {
        
        super({amount, currency});
    }
}

module.exports = Money;