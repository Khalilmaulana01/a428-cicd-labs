const profile = {
	firstName: "John",
	lastName: "Doe",
};

// let firstName = "khalil";
// let age = 21;

//initiate a new variable using destructuring assignment
//Block statement can't be in the left side of assignment
//Should put into the bracket to make it an expression
({ firstName, lastName, age = 19 } = profile);

console.log(firstName, lastName, age);
//John Doe 18

//Assigning to Different local variable name
const person = {
	firstName: "Khalil",
	lastName: "Maulana",
	age: 18,
};

const { firstName: fn, lastName: ln, age: a } = person;
console.log(fn, ln, a);

//Destructuring Assignment Array
const favorites = ['salad', 'seafood', 'nugget', 'soup']
const [myfood, yourfood] = favorites

console.log(myfood)

const favo = ['salada']
const [ourfood, hisfood = 'nasgor'] = favo
console.log(hisfood)
