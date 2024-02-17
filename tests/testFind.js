const find = require("../find");
const myArray = [1, 2, 3, 4, 5];
const result = find(myArray, (item) => {
    return item > 4;
});

console.log(result);
