//Global Scope

var M = 5;
let N = 10;
const S = 15;

function attack(){
 var m = 20;
 let n = 25;
 const s = 30;
 console.log(`Mga Crush ko: ${m}, ${n}, ${s}`);
}

attack();

if(true){
  // Block Scope
 var m = 1.25;
 let n = 1.00;
 const s = 1.35;
  console.log(`Grades ko sa 2021: ${m}, ${n}, ${s}`);
}

for(var M = 0; M < 10; M++){
 console.log(`MMMMmmmMM ${M}`)
}

console.log(`Global Scope: ${M}, ${N}, ${S}`);

console.log(clear);