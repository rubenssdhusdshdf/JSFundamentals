const months = ["March", "Jan", "Feb", "Dec"];
months.sort()
console.log(months); // ['Dec', 'Feb', 'Jan', 'March']

const numbers = [1, 30, 4, 21, 100000];
numbers.sort()
console.log(numbers); // [1, 100000, 21, 30, 4]

const numbers2 = [1, 30, 4, 21, 100000];
numbers.sort((a, b) => a - b);
console.log(numbers2); // [1, 100000, 21, 30, 4]

const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];

words.sort();
// words.sort((a, b) => a.localeCompare(b));
console.log(words);

const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];

orders.sort((a, b) => b.total - a.total);
console.log(orders);
