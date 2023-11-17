const numbers = [1, 2, 3, 4];

let rta = false;

for (let index = 0; index < numbers.length; index ++ ) {
    const element = numbers [index];
    if(element % 2 === 0) {
        rta = true;
        break;
    }
}
console.log(rta);
// true
// Same result with only a line
const rta2 = numbers.some(item => item % 2 === 0);
console.log('rta2', rta2);

// Objetos

const myArray = [
    {
      customerName: "Nicolas",
      total: 600,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: true,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: false,
    },
    {
      customerName: "Valentina",
      total: 600,
      delivered: true,
    },
  ];

  const rta3 = orders.some(item => item % 2 ===0);
  console.log('rta2', rta);

// Segundo ejemplo

const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];

  // instalamos npm i date-fns --> helps to know if two dates collides

  const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

  const isOverlap = (newDate) => { 
    return dates.some(date => {
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate},
            {start: newDate.startDate, end: newDate.endDate},
        )
    })
  }

  console.log(isOverlap(newAppointment));