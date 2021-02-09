// for loop
for(let i= 0; i < 10; i++) {
    if (i === 5) {
    console.log('5 is my favorite number');
    continue;
    }
    if (i === 5) {
        console.log('NICE BOI!');
        break;
    }
    console.log(`Number ${i}`);
}
    
// while loop

let i = 0;

while (i<10) {
    console.log(`Number ${i}`);
    i++;
}

// do while
do {
    console.log(`Number ${i}`);
    i++
}

while (i > 10);

//loop through array
const cars =['Subaru', 'Jeep', 'Panther'];

for (let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}

//Foreach
cars.forEach(function(car, index, array){
    console.log(`${index} : ${cars}`);
    console.log(`${array}`);
    });
  

//Map
  const users = [{id: 1, name: 'Thanos'}, {id: 2, name: 'SpiderMan'}, {id: 3, name: 'HOK'}, {id: 4, name: 'Captain SEb'}];
  
  const ids = users.map(function(user){
      return user.name
  });
  
  console.log(ids);
  
  //For In Loop
  
  const pers = {
      firstName: 'Naruto',
      lastName: 'Shippuden',
      age: 237
  };
  
  for(let x in pers){
    console.log(`${x}: ${pers[x]}`);
  }

console.log(clear);