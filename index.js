// 1.Basic Truthy/Falsy

const name = "Sateesh";

// Scenario1
if (!name) {
  console.log("no name");
} else {
  console.log(`Hey ${name}`); // Hey Sateesh
}

// Scenario2

const firstName = "";
if (!firstName) {
  console.log("no name"); // no name
} else {
  console.log(`Hey ${firstName}`);
}

// Scenario3

const middleName = null;
if (!middleName) {
  console.log("no name"); // no name
} else {
  console.log(`Hey ${middleName}`);
}

// Scenario4

const lastName = undefined;
if (!lastName) {
  console.log("no name"); // no name
} else {
  console.log(`Hey ${lastName}`);
}

// 2.Object vs Primitive equality
const person1 = {
  name: "Sateesh",
  age: 30,
};

const person2 = {
  name: "Sateesh",
  age: 30,
};

// Scenario1
console.log(person1 == person2); // false because both objects pointing to different memory location

// Scenario2
console.log(person1 === person2); // false because both objects pointing to different memory location

// Scenario3
const person3 = person2;
console.log(person2 == person3); // true because both objects pointing to same memory location

// Scenario4
console.log(person1.name == person2.name); // true
console.log(person1.name === person2.name); // true
console.log(person1.age == person2.age); // true
console.log(person1.age === person2.age); // true
