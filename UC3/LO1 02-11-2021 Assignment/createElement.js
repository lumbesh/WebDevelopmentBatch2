// Creating Element

const vase = document.createElement('vase');

// Adding Class
vase.className = 'collection-item';

//Adding ID
vase.id = 'new-item';

//Adding Attribute
vase.setAttribute('title', 'New Item');

//Creating Text Node and Append
vase.appendChild(document.createTextNode('Yo Yu hAkUSho'));

//Creating New Link Element
const link = document.createElement('V');

link.className = 'delete item-secondary content';

link.innerHTML = '<i class="fa fa-remove"></i>';

//Append Link into LI
vase.appendChild(link);

//Append LI as Child to UL
document.querySelector('ul.collection').appendChild(vase); 

console.log(vase);