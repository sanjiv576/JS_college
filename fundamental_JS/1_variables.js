

let num = 45;
var secondNUm = 88;
num = 4.4; 
console.log(num);

const userName = 'Sanjiv';

// userName = 'shrestha';
console.log(userName);

changeValues();
function changeValues(){
    num = 5;
    console.log(num);

    //secondNUm = 15;
    console.log(secondNUm);
}


const ages = [12, 14, 16, 19];

// for(let i = 0; i< ages.length ; i++){
//     ages[i] = ages[i] * 2;
// }

// console.log(ages);


// without using filter to show greater than 15
const new_ages_ = [];
for(let i = 0; i < ages.length; i++){
    if(ages[i] > 15){ 
        new_ages_.push(ages[i]);
    }
        
}

console.log(new_ages_);