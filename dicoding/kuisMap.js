const currency = new Map()
.set('USD', 14000)
.set('JPY', 131)
.set('SGD', 11000)
.set('MYR', 3500)

const priceInJPY = 5000;

let priceInIDR = priceInJPY * currency.get('JPY')
console.log(priceInIDR)
