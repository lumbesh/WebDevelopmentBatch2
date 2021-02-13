//String 
const firstName = 'AJ';
const lastName = 'Lumbes';
const age = '21';
const str = 'Ako si Siri';
const tags = 'Web Development, Web Design, Progamming';
const quote = 'pag sinabi kong yoyo sabihin mo yoyo';



let val; 

val = firstName + lastName;
console.log(val);

//Concatenation

val = firstName +' '+ lastName;


//Append

val = "Dunk It ";
val += "Jonathan";


val = "My name is " + firstName +" " + lastName + " and I'm " + age;
console.log(val); 

//Escaping

Escape = "Tatakas na talaga ako";
console.log(Escape);

//Length

haba = firstName.length;
console.log(haba);

//concat

icekrim = firstName.concat(' ' + lastName);
console.log(icekrim);

//Change case

me = firstName.toLowerCase()+ " ";
me += lastName.toUpperCase();
console.log(me);

val = firstName[1];
val1 = firstName.charAt('1')
console.log(val1);

//indexof()
val = firstName.indexOf('j');
val = firstName.lastIndexOf('a')
console.log(val);

//Substring

subs = firstName.substring(4, 2);
console.log(subs);

//Slice

slays = firstName.slice(2,5);
slaysulet = firstName.slice(-2);
console.log(slaysulet);

//split

val = quote.split(" ");
console.log(val);

//Replace

reps = str.replace('Ako si Siri', 'SEEEEEEEB!');
console.log(reps);

//Inlcludes

inc = quote.includes('pag');
console.log(inc);
console.log(clear);