const aclean = (arr) => {
  let map = new Map();

  for (let word of arr) {
    //split the word by letters, sort them and join back
   let sorted = word.toLowerCase().split('').sort().join();
    
    //console.log(sorted)
    //console.log(word)
    map.set(sorted, word)
  }

  //return map.values()
  return Array.from(map.values())

}


let arr = ['nap', 'teacher', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

console.log(aclean(arr))
