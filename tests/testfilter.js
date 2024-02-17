const filter = require("../filter");
const myArray = [1, 2, 3, 4, 5];

const result = filter(myArray, function (element) {
  
  if (element > 3) {
    return true;
  }
   return false;
});
console.log(result);

