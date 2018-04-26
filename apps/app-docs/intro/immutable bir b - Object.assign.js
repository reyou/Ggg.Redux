//=============================================================================
// https://medium.com/codefiction/i%CC%87pin-ucunu-ka%C3%A7%C4%B1rmamak-redux-8d822da0d19b
//=============================================================================
var a = { name: "Onur", age: 30 }
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
/*The Object.assign() method is used to copy the values of all enumerable own properties 
from one or more source objects to a target object. It will return the target object. */
// Object.assign(target, ...sources)
var b = Object.assign({}, a);
a.age = 25;
console.log(a); //{name:”Onur”, age:25}
console.log(b); //{name:”Onur”, age:30}
//=============================================================================