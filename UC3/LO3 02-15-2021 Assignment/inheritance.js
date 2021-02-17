// Prototype Inheritance
// Person Constructor

function Person(firstName , lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function() {
    return `OI! MATE! ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('AKO TO SI HAHAHAHAHA' , 'BASTA HAHAHAHA');

console.log(person1.greeting());

// Customer Constructor
function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
}

// Inherit the person prototype method
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer
Customer.prototype.constructor = Customer;


// Create customer
const customer1 = new Customer('David', 'Neil', '0918562222','Avengers' )

console.log(customer1);