//Destructuring Object ES6 is syntax to extract value from object and assign to variable
//The Hard Way
// const person = {
// 	firstName: "John",
// 	lastName: "Doe",
// 	age: 18,
// };

// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;

// console.log(firstName, lastName, age);

//The ES6 Way --> Destructuring Object (shorter way)
const profile = {
	firstName: "Khalil",
	lastName: "Maulana",
	age: 18,
};

//should be same name with object property
const { firstName, lastName, age } = profile;
// ({ firstName, lastName, age } = profile);
console.log(firstName, lastName, age);
//John Doe 18

