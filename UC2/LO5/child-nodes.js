let value;

const list = document.querySelector('ul.collection');
const listItems = document.querySelector('li.collection-item:first-child');

value = listItems
value = list;

// Get Child Nodes
value = list.childNodes;
value = list.childNodes[1];
value = list.childNodes[4].nodeType;
value = list.childNodes[5].nodeName;

/*
1 - Element
2 - attribute (deprecated)
3 - text node
8 - comment
9 - document itself
10 - doctype 
*/


// Get Children Element Nodes
value = list.children;
value = list.children[0];
list.children[0].textContent = 'AkO sI lAPu-LapU';




console.log(value);
console.log(clear);