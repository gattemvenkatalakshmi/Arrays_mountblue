const each = require("../each");
const myArray = [1, 2, 3, 4, 5];


each(myArray, function (element, index) {
    console.log(`Element at index ${index}: ${element}`);
});
