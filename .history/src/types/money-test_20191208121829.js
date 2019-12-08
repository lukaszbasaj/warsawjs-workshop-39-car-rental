const Money = require('./Money')
const price = new Money({amount: 25, currency: 'PLN'})

console.log('before: ', price)
price.amount = 30
console.log('after: ', price)
