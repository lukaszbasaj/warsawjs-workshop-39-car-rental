'use strict';
const ValueObject = require('./ValueObject');


class Money extends ValueObject { 
    constructor ({amount, currency}) {
        if(typeof amount !== 'number' || isNaN(amount)) {
            throw new TypeError('Money.amou')
        }
        super({amount, currency});
    }
}

module.exports = Money;