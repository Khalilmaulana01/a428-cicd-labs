//Collection of key-ed data items, just like "Object". But the main difference it that "Map" allow keys of any type
//Object are used for storing key-ed collections
//Array are used for storing ordered collections

let map = new Map()
.set('1', 'str1')
.set(1, 'num1')
.set(true, 'bool1')

console.log(map.get(1))
console.log(map.has(1))
console.log(map.size)
console.log(map.clear())


//Iteration over Map
let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion', 50]
])

//iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable)
}

for (let amout of recipeMap.values()) {
  console.log(amout)
}


//map.entries() --> is not used the .entries()
for (let all of recipeMap) {
  console.log(all)
}

//Map has a built-in forEach method, similar to Array:
recipeMap.forEach((val, key, map) => {
  console.log(`${key}:${val}`)
});

//if we have a plain object, and we'd like to create a "Map" from it,
//then we can use built-in method "Object.entries(obj) that return an array of key/value pairs for an object exactly in that format
let obj = {
  name: 'john',
  age: 30
}

let createdObj = new Map(Object.entries(obj));
//the argument should be in a string
console.log(createdObj.get("name"))

//to do the reseve using
//Object.fromEntries()
let map2 = new Map()
.set('banana', 1)
.set('orange', 2)
.set('meat', 3)

//console.log(map2.get('banana'))
let reverseObj = Object.fromEntries(map2)

console.log(reverseObj.banana)
console.log(reverseObj.meat)
console.log(map2.get('orange'))
