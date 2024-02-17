const reduce = require("../reduce");
const myArray = [1, 2, 3, 4, 5];
let startingValue;
 const result=reduce(myArray, function(accumulator,element) {
    if (accumulator !== undefined){
        accumulator = accumulator + element;
    } else {
        accumulator = element;
    }   
    return accumulator;
}, startingValue);

console.log(result);

