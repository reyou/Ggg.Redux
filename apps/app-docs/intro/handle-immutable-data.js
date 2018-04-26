// How Redux Can Make You a Better Developer
// https://medium.cobeisfresh.com/how-redux-can-make-you-a-better-developer-30a094d5e3ec
//=============================================================================
const animal = { name: 'Mouse' }
// Object.assign
// When you want to update an object you should create a completely new object, 
// thus keeping it immutable. For that purpose you can use the Object.assign 
// method or object spread syntax:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
// Object.assign(target, ...sources)
const anotherAnimal = Object.assign({}, animal, {
    name: 'Elephant'
})
// Object spread operator
const yetAnotherAnimal = {
    ...animal,
    name: 'Crocodile'
}
console.log("animal", animal) // {name: "Mouse"}
console.log("anotherAnimal", anotherAnimal) // {name: "Elephant"}
console.log("yetAnotherAnimal", yetAnotherAnimal) // {name: "Crocodile"}
console.log("animal === anotherAnimal", animal === anotherAnimal) // false
console.log("animal === yetAnotherAnimal", animal === yetAnotherAnimal) // false

//=============================================================================
