const person = {
    firstName: 'Lapu-',
    lastName: 'Lapu',
    age: 131,
    email: 'PugotLapu@gmail.com',
    hobbies: ['Bantay Konoha'],
    address: {
        city: 'Cebu City',
        street: 'Mactan'
    },
    quotes: ["I Protecc" , "I Atacc" , "But" , "Most Important" , "I Pugot Ulo"],
    getBirthYear: function() {
        return 2020 - this.age;
        
    }
};

let value;

value = person;

value = person.firstName;
value = person.age;
value = person.hobbies[1];
value = person.address.city;
value = person.address.street;
value = person.getBirthYear();
value = person.quotes;

console.log(value);

const people = [{name: 'Lapu' , age: 131}, {name: 'Magellan' , age: 121}, {name: 'Cong' , age: 321}];

for(let i= 0; i < people.length; i++){
    console.log(people[i].age);

};

console.log(clear);
