const numbers = [5,4,14,11,21,50]; 
const numbersjr = new Array(22,4,17,22);
const fruit = ['Mangga','Saging','Pakwan','Dalandan'];
const mixed = ['food','palamunin','goluts','are my hobbies',true,undefined,null,{a:1,b:2}];
let value;

// Get array Length

value = numbers.length;

// Check if is array

value = Array.isArray(numbers);

// Get single value 

value = numbers[2];
value = numbers[0];

// Insert to array

numbers[0] =  777;


// Find index value

value = numbers.indexOf(36);


//Mutating Arrays
//add to end

numbers.push(1);
// add to front

numbers.unshift(2);

// Take off from end

numbers.pop();
// Take off from front

numbers.shift();

// Splice value

numbers.splice(1-5);

// Reverse

numbers.reverse();

//Concatenate array

value = numbers.concat(mixed);

// Sorting arrays

value = fruit.sort();
value = numbers.sort();

// Compare function

value = numbers.sort(function(x, y) {
    return x - y;
});
// Reverse sort

value = numbers.sort(function(x, y) {
    return y - x;
});

// Find 

function over50(num) {
    return num>50; 
}

value = numbers.find(over50);
console.log(value);
console.log(mixed);
