'use strict';
const ValueObject = require('./ValueObject');


class Money extends ValueObject { 
    constructor ({amount, currency}) {
        if(typeof amount !== 'number' )
        super({amount, currency});
    }
}

module.exports = Money;