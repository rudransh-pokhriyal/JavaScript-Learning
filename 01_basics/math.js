//Math is inbuilt library in JS which has similar functions as Java's Math library
let num=new Number(-3)
console.log(Math.abs(num))

let deci=new Number(12.6)
console.log(Math.round(deci));
console.log(Math.floor(deci));
console.log(Math.ceil(deci));

let num2=new Number(64)
console.log(Math.sqrt(num2));

console.log(Math.max(num,deci,num2))
console.log(Math.min(num,deci,num2))

//Math.random function --> it returns and floating pointing number between 0 and 1(exclusive)
console.log(Math.random())

// to generate a random integer between a range we can
console.log(Math.floor(Math.random()*10) + 1) 

let min=10,max=20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)