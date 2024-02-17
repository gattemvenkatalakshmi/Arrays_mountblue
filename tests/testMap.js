const map = require("../map");
const myArray = [1, 2, 3, 4, 5];

 const result =map(myArray, function (element) {
  
    return element*3;
});
console.log(result);
