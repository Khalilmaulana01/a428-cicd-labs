const { inspect } = require('util')

let visitCountMap = new WeakMap();

const countUser = user => {
  let count = visitCountMap.get(user) || 0;
return  visitCountMap.set(user, count + 1)
}

let john = { name : "john"}
countUser(john) // Menambahkan user "john"
console.log(countUser(john))

john = null //Data object "john" dihapus

//delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(() => {
  console.log(inspect(visitCountMap, {showHidden: true}))
}, 10000);
