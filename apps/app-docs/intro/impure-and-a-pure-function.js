//=============================================================================
// How Redux Can Make You a Better Developer
// https://medium.cobeisfresh.com/how-redux-can-make-you-a-better-developer-30a094d5e3ec
//=============================================================================
function impureAddFood(animal) {
    animal.food = ['banana', 'pizza']
}
function pureAddFood(animal) {
    return {
        ...animal,
        food: ['banana', 'pizza']
    }
}
const donkey = { name: 'Donkey' }
const monkey = { name: 'Monkey' }
impureAddFood(donkey);
console.log("donkey", donkey);
const monkeyWithFood = pureAddFood(monkey);
console.log("monkeyWithFood", monkeyWithFood);
//=============================================================================
function makeNoise(animalName) {
    return function (noise) {
        console.log("makeNoise.function", `${animalName} says ${noise}`)
    }
}
const mouseNoise = makeNoise('Mouse')
mouseNoise("rooooooooar! I'm a lion!!!")
//=============================================================================
