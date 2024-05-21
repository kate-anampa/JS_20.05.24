
// 1. Listar del 100 al 0
for (let i = 100; i >= 0; i--) {
    console.log(i);
}


// 2. Listar numeros pares del 0 al 100

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0){
    console.log(i);
    }

}

// 3. Listar numeros impares del 0 al 100

for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}


//FOREACH



const num = [1, 2, 3, 4, 5];

num.forEach(function(num) {
  console.log(num * 2);
});

// MAP

const numeros = [1, 2, 3, 4, 5];

const doubledNumbers = numeros.map(function(numeros) {
  return numeros * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]




//SOME

const numbers = [1, 2, 3, 4, 5];

const hasEvenNumber = numbers.some(function(number) {
  return number % 2 === 0;
});

console.log(hasEvenNumber); 

// EVERY


const nu = [2, 4, 6, 8, 10];

const allEvenNumbers = numbers.every(function(nu) {
  return nu % 2 === 0;
});

console.log(allEvenNumbers); 

// FIND

const numers = [10, 20, 30, 40, 50];

const foundNumber = numbers.find(function(numers) {
  return numers > 25;
});

console.log(foundNumber); 

// FILTER

const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = n.filter(function(n) {
  return n % 2 === 0;
});

console.log(evenNumbers); 