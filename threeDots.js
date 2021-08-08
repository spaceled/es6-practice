const ages = [12, 14, 16, 13, 17];
const ages2 = [34, 27, 38, 40];
const ages3 = [40, 50, 60, 70];
const allAges = ages.concat(ages2).concat(ages3);
const allAges2 = [...ages, ...ages2, ...ages3];
const maximum = Math.max(...ages2);
console.log(maximum);