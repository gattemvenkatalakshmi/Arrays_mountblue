function reduce(elements, cb, startingValue) {
    if (Array.isArray(elements)) {
        for (let index = 0; index < elements.length; index++) {
            startingValue = cb(startingValue, elements[index]);
        }
    }
    return startingValue;
}

module.exports = reduce;

