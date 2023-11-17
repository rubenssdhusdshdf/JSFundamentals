const numbers = [1, 30, 49, 29, 10, 13];

let rta = true;
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element >= 40) {
        rta = false;
    }
    
}

// Same way doing it with every.js

console.log('for', rta);
const rta2 = numbers.every(item => item <= 40 )
console.log('rta2', rta)