//=============================================================================
// https://medium.com/codefiction/i%CC%87pin-ucunu-ka%C3%A7%C4%B1rmamak-redux-8d822da0d19b
//=============================================================================
// Ya da (ECMAScript 2015 ya da ES6) spread operator’ünü kullanabiliriz:
var a = { name: "Onur", age: 30 }
var b = { ...a };
a.age = 25;
console.log("a:");
console.log(a);
console.log("b:");
console.log(b);
//=============================================================================