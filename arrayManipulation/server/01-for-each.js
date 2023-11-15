const letters=['a','b','c']

// Utilizando la estructura repetitiva for
for(let index=0; index<letters.length; index++){
    const element=letters[index]
    console.log('for',element)
}

// Utilizando el método forEach
letters.forEach(item => console.log('forEach',item))