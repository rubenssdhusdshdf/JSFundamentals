const elements = [1, 1, 2, 2];
const otherElements = [3, 3, 4, 4];

const newArray = [...elements];
for (let index = 0; index < array.lenght; index ++ ) {
    const element = array[index];
    newArray.push(element);
}

console.log('for', newArray);

// Output is [1, 1, 2, 2, 3, 3, 4, 4]

const rta = elements.concat(othersElements);
const rta2 = [...elements, ...otherElements];
const rta3 = [...elements, 'random'];
console.log('for', newArray);
console.log('concat', rta);
console.log('concat', rta2);
console.log('rta3', rta3) // We normally merge array but if we send an array, it will try to sparate the elements, so answer is [1, 1, 2, 2, 'random']
elements.push(otherElements);
console.log('elements', elements) // elements [1, 1, 2, 2, [3, 3, 4, 4]]
elements.push(...otherElements);
console.log('elements', elements) // elements [1, 1, 2, 2, 3, 3, 4, 4]