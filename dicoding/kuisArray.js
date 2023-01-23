const evenNumber = (val) => {

for (let i = 0; i <= val; i++) {
  if(i % 2 === 0) {
    console.log(i)
  }
  else {
    console.log('angka ganjil')
  }
}
}

console.log(evenNumber(100))
