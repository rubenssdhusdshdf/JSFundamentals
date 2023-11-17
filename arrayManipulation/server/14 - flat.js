const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const newArray = [];
for (let index = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.lengh; j++ ) {
        const element = matriz[i][j];
        newArray.push(element);
        
    }
    
}
// The flat method flattens the matrix no matter how much levels
const rta = matriz.flat(3); // (3) indicates the level
console.log('for', newArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log('flat', newArray);

