const arr = [175,50,25];
const average = arr.reduce((a, b) => a + b, 0) / arr.length;
const add = arr.reduce((a, b) => a + b, 0) ;
const sub = (a, b) => a - b ;
console.log(average);
console.log(add);
console.log(arr.reduce(sub));
