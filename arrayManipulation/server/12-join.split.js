const elements = ['Fire', 'Air', 'Water'];
let rtaFinal = '';
const separator = '';

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    rtaFinal = rtaFinal + element + separator;
}

const rta = elements.join('--')
console.log('for', rtaFinal);
console.log('join', rta);

const title = 'Curso de manipulacion de arrays';
const titleFinal = title.split(' ').join('-'); //Each space will generate an array inside an array ['Curso', 'de', 'manipulacion', 'de', 'arrays'] and then will join it with the "-"
console.log(urlFinal);