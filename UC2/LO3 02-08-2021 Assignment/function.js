//Function Declaration

function greet(firstName = 'AJ', lastName = 'Lumbes') {
    if(typeof firstName === 'undefined'){
        firstName = 'AJ';
    }
    if(typeof lastName === 'undefined'){
        lastName = 'Lumbes';
    }

    console.log('Hello');
    return `Hello ${firstName} ${lastName}`;

}

console.log(greet());

//Function Expression
const square = function(x = 3){
    return x * x;

}

console.log(square(2));

// Immediately Invokable Function Expressions - IIFEs

(function(name){
    console.log(`Name ${name}`)
})('SEEEEEEEEEEEB!');


// Property Methods

const todo = {
    add: function() {
        console.log('Add to do');
    },
    edit: function(id) {
        console.log(`Edit to do ${id}`)
    }
}

todo.delete = function(){
    console.log('Delete to do....');
}

todo.add();
todo.edit();
console.log(clear);


