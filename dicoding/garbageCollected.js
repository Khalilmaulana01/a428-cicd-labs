let visitsCountMap = new Map(); //menyimpan data user

const userCount = (user) => {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1)
}

let john = { name: "John"}
userCount(john) // menambahkan user john
visitsCountMap.delete(john)
//john = null // --> Data object "john" dihapus
//console.log(userCount(john)) // --> return undefined karena user john telah dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(() => {
  console.log(visitsCountMap)
}, 1000);


