const sayHello = () => alert("Hello world!");
//sayHello();

var greeting = "Hello User!";
function greetWorld(isGreeting) {
  if (isGreeting) {
    // kod wykona się jeśli flaga isGreeting = true
    var greeting = "Hello World!"; // (A) zasięg: cała funkcja
    return greeting;
  }
  return greeting; // zadziała hoisting i greeting nie będzie tym czym się spodziewamy
}
console.log(greetWorld(false)); // undefined

let powitianie = "Hello User!";
function gteetWorld2(isGreeting) {
  if (isGreeting) {
    let powitianie = "Hello World!";
    return powitianie;
  }
  return powitianie;
}
console.log(gteetWorld2(false)); // 'Hello User!'

const length = 10;
for (let i = 0; i < length; i++) {
  console.log(i);
}

(function() {
  // rozpoczęcie IIFE
  var hello = "fff";
  ("...");
})(); // zakończenie IIFE

{
  // rozpoczęcie bloku
  let hello = "...;";
  ("...");
} // zakończenie bloku

// ES6
const bumbersy = [1, 2, 3];
const numbersPlusOnetest = bumbersy.map(x => x + 10);
console.log(numbersPlusOnetest);

//ES5
var numbers = [1, 2, 3];
var numbersPlusOne = numbers.map(function(x) {
  return x + 1;
});

console.log(numbersPlusOne);

function sayHelloTo(person) {
  console.log(`Hello, ${person}, nice to meet you!`);
}
sayHelloTo("Mirek");

const HTML5_TEMPLATE = `
    <!DOCTYPE HTML>
    <html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
    </body>
    </html>`;

() => {
  "...";
}; // bez parametru
x => {
  "...";
}; // jeden parametr
(x, y) => {
  "...";
}; // kilka parametrów

x => {
  return x * x;
}; // blok
x => x * x; // wyrażenie, takie samo jak powyższy kod

function getCoords() {
  return {
    xx: 2,
    yy: 5
  };
}

//stare
const coords = getCoords();
const x = coords.x;
const y = coords.y;

//nowe
const { xx, yy } = getCoords();
console.log(xx);
console.log(yy);

const names = ["Jan", "Zosia", "Zbyszek", "Kacper", "Tomek", "Magda"];
const [first, second, , fourth] = names; // puste miejsce pomiędzy second a fourth
// first = 'Jan', second = 'Zosia', fourth = 'Kacper'

//Domyślne wartości parametrów funkcji

//stare
function sayHello2(name) {
  name = name || "World";
  console.log("Hello " + name);
}
sayHello2();

//nowe
function sayHello3(name = "World") {
  console.log("Hello " + name);
}
sayHello3();
//nowe
const sayHello4 = (name = "World") => console.log(`Hello ${name}!`);
sayHello4();

//Rest params

function logAllArguments() {
  const arguments = ["dd", "dd2"];
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
logAllArguments();

//nowe
const arguments = ["dd4", "dd5"];
const logAllArguments2 = (...args) => args.forEach(arg => console.log(arg));
logAllArguments2(arguments);

const names2 = ["Jan", "Zosia", "Zbyszek", "Kacper", "Tomek", "Magda"];
 const [first2, second2, ...rest2] = names2;

// function sayHello55(first2, second2, ...rest2) {
//   // ciało funkcji
// }

 const newNames = [...names, 'Tadeusz'];
 //const table = [...table1, ...table2, ...table3];