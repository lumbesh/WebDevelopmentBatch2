//Replacing Elements

// Create Element
const newHeading = document.createElement('h2');

//Add ID
newHeading.id = 'task-title';

//New Text Node
newHeading.appendChild(document.createTextNode('Task List'));

//Get  the Old Head
const oldHeading = document.querySelector('#task-title');

//Parent
const cardAction = document.querySelector('.card-action'); 

//Replace
cardAction.replaceChild(newHeading, oldHeading);

//Remove List Item
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

//Removing List Item
lis[1].remove();

//Remove Child Element
list.removeChild(lis[2]);

//Classes and Attribute
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let value;

//Classes
value = link.className;
value = link.classList;
value = link.classList[0];
link.classList.add('force');
link.classList.remove('force');

//Attributes
value = link.getAttribute('href');
value = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
value = link.hasAttribute('title');
value = link;

console.log(link);