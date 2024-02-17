function find(elements, cb) {
  if (Array.isArray(elements)) {
    for (let index = 0; index < elements.length; index++) {
      if (cb(elements[index]) === true) {
        return elements[index];
      }
    }
  }

  return;
}

module.exports = find;
