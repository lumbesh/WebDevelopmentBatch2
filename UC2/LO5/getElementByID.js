  
// document.getElementById();

// console.log(document.getElementById('task-title'));

// const taskTitle = document.getElementById('task-title');

// taskTitle.style.background = 'yellow';
// taskTitle.style.color = '#012';
// taskTitle.style.padding = '10px';
// taskTitle.style.display ='none';
// taskTitle.style.fontStyle = 'italic';

// taskTitle.textContent = 'YOOO';
// taskTitle.innerText = 'G!!';
// taskTitle.innerHTML = '<h1 style="color: white">Task List</h1>';


// document.querySelector();
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

// By Font Style Color
document.querySelector('li').style.color = 'purple';
document.querySelector('ul li').style.color = 'purple';


document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'orange';
document.querySelector('li:nth-child(2)').style.color = 'yellow';

// By Text Content
document.querySelector('li:nth-child(1)').textContent = "Meepo";
document.querySelector('li:nth-child(2)').textContent = "Invoker";
document.querySelector('li:nth-child(3)').textContent = "SF";
document.querySelector('li:nth-child(4)').textContent = "ES";



// Odd & Even Color Design 
document.querySelector('li:nth-child(odd)').style.background = "grey";
document.querySelector('li:nth-child(even)').style.background = "orange";
document.querySelector('li:nth-child(3)').style.background = "black";
document.querySelector('li:nth-child(4)').style.background = "indigo";

console.log(clear);