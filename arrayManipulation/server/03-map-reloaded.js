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

const totales = orders.map(order => order.total)
console.log(totales) // [ 60, 120, 180, 240 ]

/* const rta2 = orders.map((item) => {
    item.tax = .19;
    return item;
})

console.log('rta2', rta2);
console.log('original', orders); */

const rta3 = orders.map((item) => {
    return {
        ...item, //clonamos los atributos del objeto sin la referencia en memoria
        tax: .19
    };
});

console.log("rta3", rta3);
console.log("original", orders);
