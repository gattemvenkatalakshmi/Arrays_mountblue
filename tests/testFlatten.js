const nestedArray = [1, [2], [[3]], [[[4]]]];
const flatten = require("../flatten");
const result = flatten(nestedArray);
 console.log(result);
