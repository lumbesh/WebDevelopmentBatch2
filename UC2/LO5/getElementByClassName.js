//document.getElementsByClassName
const items = document.getElementsByClassName('collection-item');
console.log(items);

console.log(items[1]);
items[1].style.color = 'orange';
items[1].textContent = "HELLO LODS";

const listItems = document.querySelector('ul').getElementsByClassName
('collection-item');
console.log(listItems);

//document.getElementByTagName();
 let lis = document.getElementsByTagName('li');
 console.log(lis);
 console.log(lis[0]);
lis[0].style.color = 'orange';
lis[0].textContent = 'greed';

// Convert HTML Collection to Array
lis = Array.from(lis);
lis.reverse();
lis.forEach(function(li, index){
  console.log(li.className);
  li.textContent = `${index}: SEEEEEEEEEB!`;
});


console.log(lis);

// document.querySelectorAll()
const bogart = document.querySelectorAll
('ul.collection li.collection-item');

console.log(bogart);

bogart.forEach(function(bogart, index){
    bogart.textContent = `${index}: RUDOLPO HEHE SINO YON`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)')
const liEven = document.querySelectorAll('li:nth-child(even)')

liOdd.forEach(function(li){
  li.style.background = 'purple';
  li.style.color = '#fff';
})

for(let a = 0; a < liEven.length; a++) {
    liEven[a].style.background = '#ccc';
}

console.log(clear);