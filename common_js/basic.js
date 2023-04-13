// Using common core modules using CommonJS imports instead of ES6 modules imports.

const os = require('os');
const path = require('path');
const { constrainedMemory } = require('process');

console.log(os.hostname());
console.log(os.type());
console.log(os.homedir());
console.log(os.version());

console.log('--------------');

console.log(__dirname);
console.log(__filename);

console.log('--------------');

console.log(path.extname(__filename));
console.log(path.parse(__filename));