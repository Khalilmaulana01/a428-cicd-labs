function unique(arr) {
 //your code here 
//  let set = new Set()
  //set.entries(arr);

  //for (let val of arr) {
    //console.log(val)
  //}
  
  let set = new Set(arr)
  set.add('khalil')
  return Array.from(set)
}

let values = ['Hare', 'Krisna', "Hare", "Krisna", 'Krisna', 'Krisna', 'Hare', 'Hare']

console.log(unique(values))
