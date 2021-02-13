  
// Set Local Storage Item   

localStorage.setItem('name', 'SEEEEEEEB');
localStorage.setItem('age', 29);

// // Set Session Storage Item

// sessionStorage.setItem('name', 'Magellan')

// // Remove from Storage
// localStorage.removeItem('name');

// Get from Storage
const name = localStorage.getItem('name');
const age = localStorage.getItem('age');

// Clear Local Storage
// localStorage.clear();
// console.log(name, age);

document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();

    const task = document.querySelector('#task').value;

    let tasks;
if(localStorage.getItem('tasks') === null){
    tasks = [];
}else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
}
tasks.push(task);

localStorage.setItem('tasks', JSON.stringify(tasks));

// console.log(task);

    alert('Task Saved');
    tasks.forEach(function(task) {
console.log(task);
    });
});