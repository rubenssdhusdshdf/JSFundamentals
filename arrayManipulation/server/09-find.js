const numbers = [1, 30, 49, 29, 10, 13];

let rta = undefined;
for (let index = 0; index < Array.length; index ++ ) {
    const element = array[index];
    if (element === 30) {
    break;
    }
}
console.log('for', rta);
const rta2 = numbers.find(item => item === 30)
console.log('find', rta2);

// Objects

const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];
  
  const rta3 = numbers.find(item => item === '🍔')
  console.log('find', rta2);
  const rta4 = numbers.findIndex(item => item === '🍔')
  console.log('find', rta2); // returns the position of the element