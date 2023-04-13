

const addition = (x, y) => x + y;
const subtraction = (x, y) => x - y;
const multiplication = (x, y) => x * y;
const division = (x, y) => x / y;

// to use this math module , we should export it using module.exports keyword 
// ---> we have two ways CommonJs using module.exports and NodeJS using exports.default

module.exports = {addition, subtraction, multiplication, division}