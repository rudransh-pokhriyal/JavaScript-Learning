let v=22
const name="Rudransh Pokhriyal"
//to print a variable or const we can use +
console.log("Value of V is "+v)
//but we can use placeholders and back ticks ` this is the right and modern way
console.log(`My name is ${name} and my age is ${v}`);

//if we use new keyword then we can create a string which is fundamentally an object with key value pairs where key is indices and value is a character.This gives us the capability to use many inbuilt functions most of which are same as Java but we can use these functions on normal strings declared in variables and constants

let nam=new String(" Rudransh Pokhriyal ")
console.log(nam[1])
console.log(nam.length)
console.log(nam.charAt(1))
console.log(nam.indexOf('a'))
console.log(nam.trim())
nam=nam.trim()
console.log(nam.split(" "))//seprates the contents using the seprator and place it in a array

//slice method takes two parameters: the starting index and the ending index (exclusive). If no end index is specified, the slice will include all characters from the start index to the end of the string
//startIndex:If negative, it is treated as counting from the end of the string. If omitted, it starts from index 0.
//endIndex:If negative, it is treated as counting from the end of the string. If omitted, it extracts all characters from the start index to the end of the string

console.log(nam.slice(1))
console.log(nam.slice(1,7))
console.log(nam.slice(-4))