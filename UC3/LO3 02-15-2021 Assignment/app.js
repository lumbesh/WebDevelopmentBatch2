// // Object literal
// const person = {
//     name: 'whoPsie'
// }

// console.log(person);

// // Person constructor
// function person() {
//     this.name = 'Oka'
// }

// const me = new person();

// console.log(me);

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// const me = new Person('aywan', 21);
// const ser = new Person('SER', 21);
// console.log(me);
// console.log(ser);


// CONSTRUCTOR AND THIS. KEYWORD
// Person constructor
function Person(name, dob) {
    this.name = name;
    this.birthdate = new Date();
    this.calculateAge = function() {
        const diff = Date.now() - this.birthdate.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}


const me = new Person('mAgiLan', '2-26-1999');
const darwin = new Person('Darwin', '02-13-95');

console.log(me.calculateAge());