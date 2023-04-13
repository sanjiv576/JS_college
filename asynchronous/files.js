
const fs = require('fs');

// Example of Synchronous operation
console.log('Data from Synchronous operation'); 

// readFileSync ---> returns Buffer ---> Buffer contains Hexcode data
const fileData = fs.readFileSync('./sample.txt');
console.log(fileData.toString());


// Example of Asynchronous operation

console.log('Read data from Asynchronous operaiton')

// call-back hell --> negative effect 
fs.readFile('./sample.txt', (err, data) => {
    if (err) throw new err
    console.log(data.toString())

    // write data of sample.txt to output.txt
    fs.writeFile('./output.txt', data, (err) => {
        if(err) throw new err
        console.log('Write file successed')
    })
})

