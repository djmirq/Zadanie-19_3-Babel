//Zadanie pierwsze---------------------------------------------
const name = "Hello",
  name2 = "world";

console.log(`${name} ${name2}`);

var names = new Array("Hello", "world2");

console.log(`${names[0]} ${names[1]}`);

//Zadanie drugie---------------------------------------------
let multiply = (x, y = 1) => x * y;
console.log(multiply(2, 5));
console.log(multiply(6, 6));
console.log(multiply(5));

//Zadanie trzecie---------------------------------------------
const average = list => list.reduce((prev, curr) => prev + curr) / list.length;
console.log(average([1]));
console.log(average([1, 3]));
console.log(average([1, 3, 6, 6]));

//Zadanie czwarte---------------------------------------------
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(grades));

//Zadanie piąte---------------------------------------------
const names2 = [1, 4, "Iwona", false, "Nowak"];
var [first, second, firstname, fouth, lastname] = names2;
console.log(`${firstname} ${lastname}`);
