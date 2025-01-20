// type = converting a type innto another type

let age = 23;
console.log(typeof age);

let ageInString = String(age);
console.log(typeof ageInString);


let score = "33a4b";
let convert = Number(score);
console.log(convert);// NaN not a number means impure number alphanumeric type

let sum = "plus";
let any = Number(sum);
console.log(typeof any);// number but NaN

console.log(any);// not a number


let a = null;
let b = Number(a)
let c = String(a)
console.log(c); // null

console.log(b);// 0

let a1 = undefined;
let b1 = Number(a1)
let c1 = String(a1)
console.log(c1);// undefined

console.log(b1);// NaN


// if you are converting a number to boolean 0 is false and 1 is true

let check = 2;
// let chck2 = Boolean(chck2)// error
// console.log(chck2); // error
