//=============================================================================
// How Redux Can Make You a Better Developer
// https://medium.cobeisfresh.com/how-redux-can-make-you-a-better-developer-30a094d5e3ec
//=============================================================================
const devSkills = [];
console.log("devSkills.length", devSkills.length); // 0 :(
const devSkillsFlux = [...devSkills, 'Flux architecture'];
const devSkillsImmutable = [...devSkillsFlux, 'Immutable data'];
// Primitive types are immutable by default
let x = 25
let y = x;
y = 100;
console.log("x", x) // 25
console.log("y", y) // 100
//=============================================================================
// Non-primitive types are mutable
let animal = {
    name: 'Mouse'
}
let anotherAnimal = animal
anotherAnimal.name = 'Elephant'
console.log("animal", animal) // {name: "Elephant"}
console.log("anotherAnimal", anotherAnimal) // {name: "Elephant"}
console.log("animal === anotherAnimal", animal === anotherAnimal) // true
//=============================================================================
const animalConst = { name: 'Mouse' }
// This will work because we're not reassigning variable
animalConst.favoriteFood = 'Cheese'
// This will fail
try {
    animalConst = { name: 'Elephant' }
}
catch (ex) {
    console.log("animalConst", ex.message);
}
//=============================================================================
