document.querySelector('.clear-tasks').addEventListener
('click', function(){
    console.log('Hola Amigos');
});

document.querySelector('.clear-tasks').addEventListener('click', onClick );

function onClick(a){
//  console.log('FINISHED');
 let value;

value = a;

// Event Target Element
value = a.target
value = a.target.id;
value = a.target.className;
value = a.target.classList;

// Event Type
value = a.type;

// Timestamp
value = a.timeStamp;

// Coords Event Relative to The Window
value = a.clientY;
value = a.clientX;

// Coords Event Relative to The Element
value = a.offsetY;
value = a.offsetX;




}

 console.log(value);
