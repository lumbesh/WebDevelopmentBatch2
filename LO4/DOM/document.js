let value;

value = document;
value = document.all;
value = document.all[5];
value = document.all.length;
value = document.body; // can go head, body
value = document.doctype;
value = document.domain; // https://httpstatuses.com/
value = document.URL;
value = document.characterSet;
value = document.contentType;


value = document.forms;
value = document.forms[0].id;
value = document.forms[0].method;
value = document.forms[0].action; // materializecss.com //code.jquery.com //fontawesome.com

value = document.links;
value = document.links[0];
value = document.links[3].id;
value = document.links[0].className;
value = document.links[0].classList[0];


value = document.images;

value = document.scripts;

//value = document.scripts[1].getAttribute('src');

let scripts = document.scripts;

let scriptsArray = Array.from(scripts);

scriptsArray.forEach(function(script){
    console.log(script.getAttribute('src'));

});


//console.log(scriptsArray);

console.log(clear);