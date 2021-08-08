const person = {name: 'Jack William', age: 17, job: 'Facebook', gfName: 'Ema Watson', address: 'Kochukhet', phone: '01717', friends: ['Tonu', 'monu', 'sonu']};

const {job, gfName, fax, address} = person;

const friends = ['Tonu', 'monu', 'sonu'];
const [first, ...rest] = friends;
console.log(first);
console.log(rest);