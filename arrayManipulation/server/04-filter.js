const words = ['spray', 'limit', 'elite', 'exuberant'];

const newArray = []
for (let index = 0; index < words.lengh; index ++) {
	const item = words [index];
	if (item.lenght > 6) {
		newArray.push(item);
}
}

console.log(newArray, newArray);
console.log(newArray, words );

// Same result but with filter method 

const rta = words.filter(item => item.lenght >= 6)
console.log('rta', newArray);
console.log('original', words);

// Filter results

const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ]
  
const rta3 = orders.filter(item => item.delivered && item.total >= 100)
console.log('rta3', rta3)

/* rta3 [
    { customerName: 'Santiago', total: 180, delivered: true },
    { customerName: 'Valentina', total: 240, delivered: true }
  ] */
  
  // Si tienes una base de datos que puedes consultar, usa el lenguage de SQL pero si no usa filter en Js

  const searrch = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
  }

  console.log(search('Nico'));