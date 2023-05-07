
// Alhamdullaiha Problem 1 Solved
// const userInfo:[number,string,string,boolean,undefined,string] = [101, "Ema", "John", true,  , "2023"];


// 1.Create a function that takes an array of numbers as input and returns the sum of all the numbers in the array. Make sure to define the types for the input parameter and return value.

function sumOfNumber(numbers:number[]):number {
    let sum:number = 0 
    for(let x of numbers) {
        sum +=   x
    }
    return sum
};
// console.log(sumOfNumber([1,2,3,4]))

// 2. Define an interface called Person that has the following properties: name (string), age (number), and email (string). Create an object based on this interface and print out its properties.
interface IPerson {
    name: string,
    age: number,
    email: string
}

const person:IPerson = {
    name: "Sifat",
    age : 90,
    email: "sayedhossainshifat706@gmail.com"
}

// 3. Write a function called calculateArea that takes the length and width of a rectangle as parameters and returns its area. Define the types for the input parameters and return value.

function calculateArea (length:number, width:number):number {
    return length * width
}
// console.log(calculateArea(20,10))

// 4. Implement a generic function called reverseArray that takes an array of any type and returns the reversed version of the array. Test it with different types of arrays (e.g., numbers, strings) to ensure it works correctly.

function reverseArray <T>(param:T[]):T[] {
    return param.reverse()
}
const numbers:number[] = [1,2,3]
// console.log(reverseArray(numbers))

// 11. Declare a variable with an initial value of null and type it as string. Use type assertion to assign a string value to this variable and then print its length.

let myString = null
myString = "Hello Next Level Developer"  as string;
console.log(myString.length)

// 12. Create a function that takes an input parameter of type unknown. Inside the function, implement type guards to check if the input is of type string or number and perform different operations based on the type.

function processInput (param:unknown) {
    if (typeof param === "string") {
        return `Input is the string ${param.toUpperCase()}`
    } if (typeof param === "number") {
        return `Your Input Is Number ${param}`
    } else {
        return `Input Unknown Type`
    }
}
// console.log(processInput(undefined))

