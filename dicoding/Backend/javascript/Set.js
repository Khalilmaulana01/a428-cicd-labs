const set = new Set();

let john = { name : 'John' }
let pete = { name : 'Pete' }
let mary = { name : "Mary" }

//visits, some users come multiple times
set.add(john)
set.add(pete)
set.add(mary)

console.log(set.size)

for (let user of set) {
 console.log(user.name) 
}

set.forEach((val, valAgain, set) => {
 console.log(val) 
});


