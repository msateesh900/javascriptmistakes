// 1.Basic Truthy/Falsy

const name = "Sateesh";

// Scenario1
if (!name) {
  console.log("Basic Truthy/Falsy Scenario1 no name");
} else {
  console.log(`Basic Truthy/Falsy Scenario1 Hey ${name}`); // Hey Sateesh
}

// Scenario2

const firstName = "";
if (!firstName) {
  console.log("Basic Truthy/Falsy Scenario2 no name"); // no name
} else {
  console.log(`Basic Truthy/Falsy Scenario2 Hey ${firstName}`);
}

// Scenario3

const middleName = null;
if (!middleName) {
  console.log("Basic Truthy/Falsy Scenario3 no name"); // no name
} else {
  console.log(`Basic Truthy/Falsy Scenario1 Hey ${middleName}`);
}

// Scenario4

const lastName = undefined;
if (!lastName) {
  console.log("Basic Truthy/Falsy Scenario4 no name"); // no name
} else {
  console.log(`Basic Truthy/Falsy Scenario4 Hey ${lastName}`);
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
console.log("Object vs Primitive equality Scenario1", person1 == person2); // false because both objects pointing to different memory location

// Scenario2
console.log("Object vs Primitive equality Scenario2", person1 === person2); // false because both objects pointing to different memory location

// Scenario3
const person3 = person2;
console.log("Object vs Primitive equality Scenario3", person2 == person3); // true because both objects pointing to same memory location

// Scenario4
console.log(
  "Object vs Primitive equality Scenario4",
  person1.name == person2.name
); // true
console.log(
  "Object vs Primitive equality Scenario4",
  person1.name === person2.name
); // true
console.log(
  "Object vs Primitive equality Scenario4",
  person1.age == person2.age
); // true
console.log(
  "Object vs Primitive equality Scenario4",
  person1.age === person2.age
); // true

// 3.Numbers and Strings can be Equal .. and you can add them??

// Scenario1
const age = 30;
const ageStr = "30";

console.log("Numbers and Strings can be Equal Scenario1", age == ageStr);

console.log("Numbers and Strings can be Equal Scenario2", age === ageStr);
