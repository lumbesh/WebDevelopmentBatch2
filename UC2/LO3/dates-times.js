let val;

const today = new Date();
let birthday =  new Date('02-08-20 10:25:30');
birthday = new Date('February 12 1222');
birthday = new Date('02-12-1216');

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(0);
birthday.setDate(11);
birthday.setFullYear(1224);
birthday.setHours(14);
birthday.setMinutes(2);
birthday.setSeconds(61);

console.log(birthday);
console.log(clear);