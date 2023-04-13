

const ages = [12, 14, 16, 19];

// iterate each element without using map
// for(let i = 0; i< ages.length ; i++){
//     ages[i] = ages[i] * 2;
// }

// console.log(ages);

// doubling array using map opeation  --> returns array

const newAges = ages.map(item => item * 2);
console.log(`Doubled each element ${newAges}`);

// without using filter to show greater than 15
const new_ages_ = [];
for(let i = 0; i < ages.length; i++){
    if(ages[i] > 15){ 
        new_ages_.push(ages[i]);
    }
        
}

console.log(`Age greater than 14 without using filter operation : ${new_ages_}`);


// using filter operation --> returns array
const filtered_ages = ages.filter( item => item > 14);
console.log(`Age greater than 14 using filter operation : ${filtered_ages}`);


// without using reduce operation 
let sum = 0;
for(let i = 0; i < ages.length; i++){
    sum += ages[i];
        
}
console.log(`Toatal sum of each element without using reduce opertion : ${sum}`); 


// using reduce operation  --> returns single value

const total = ages.reduce((previousValue, cuurentValue) => previousValue += cuurentValue, 0);
console.log(`Total sum of each element : ${total}`);