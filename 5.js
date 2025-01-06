let arrayLikeObject = { 0: "a", 1: "b", 2: "c", length: 3 };
let array = Array.from(arrayLikeObject);

console.log(array); 
