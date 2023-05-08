
// // Alhamdullaiha Problem 1 Solved
// // const userInfo:[number,string,string,boolean,undefined,string] = [101, "Ema", "John", true,  , "2023"];


// // 1.Create a function that takes an array of numbers as input and returns the sum of all the numbers in the array. Make sure to define the types for the input parameter and return value.

// function sumOfNumber(numbers:number[]):number {
//     let sum:number = 0 
//     for(let x of numbers) {
//         sum +=   x
//     }
//     return sum
// };
// // console.log(sumOfNumber([1,2,3,4]))

// // 2. Define an interface called Person that has the following properties: name (string), age (number), and email (string). Create an object based on this interface and print out its properties.
// interface IPerson {
//     name: string,
//     age: number,
//     email: string
// }

// const person:IPerson = {
//     name: "Sifat",
//     age : 90,
//     email: "sayedhossainshifat706@gmail.com"
// }

// // 3. Write a function called calculateArea that takes the length and width of a rectangle as parameters and returns its area. Define the types for the input parameters and return value.

// function calculateArea (length:number, width:number):number {
//     return length * width
// }
// // console.log(calculateArea(20,10))

// // 4. Implement a generic function called reverseArray that takes an array of any type and returns the reversed version of the array. Test it with different types of arrays (e.g., numbers, strings) to ensure it works correctly.

// function reverseArray <T>(param:T[]):T[] {
//     return param.reverse()
// }
// const numbers:number[] = [1,2,3]
// // console.log(reverseArray(numbers))






// missing
// 5. Create a generic interface called Repository that represents a generic data repository. It should have methods like getAll, getById, create, update, and delete. Define the types for the methods and create a class that implements this interface

interface Repository {

}

// 6. Define a type alias called Coordinates that represents the latitude and longitude of a location. It should be an object with latitude and longitude properties, both of which are numbers. Create a variable of type Coordinates and assign some sample values to it

// type Coordinates = {
//     latitude : number ,
//     longitude: number,
// }

// const locations:Coordinates = {
//     latitude : 55.2365 ,
//     longitude: 215200
// }


// 7.Define an enum called Color with values representing different colors (e.g., Red, Green, Blue). Create a function that takes a Color value as input and prints out a corresponding message (e.g., "You selected Red").

// enum Color{
//     Red = "Red",
//     Green = "Green",
//     Blue= "Blue"
// }

// function printColor (color:Color) {
//     if(color === "Red") {
//         console.log(`you have selected red`)
//     } else if (color === "Green") {
//         console.log(`selected green`)
//     } else if (color === "Blue") {
//         console.log(`selected Blue`)
//     } else {
//         console.log(`no color selected`)
//     }
// }


// const newColor = Color.Blue
// printColor(newColor)

// another solution problem-7
/*
 enum Color {
  Red = "Red",
  Green = "Green",
  Blue = "Blue",
}

function printColorMessage(color: Color): void {
  switch (color) {
    case Color.Red:
      console.log("You selected Red");
      break;
    case Color.Green:
      console.log("You selected Green");
      break;
    case Color.Blue:
      console.log("You selected Blue");
      break;
    default:
      console.log("Unknown color");
  }
}
const selectedColor: Color = Color.Red;
printColorMessage(selectedColor);  // Output: "You selected Red"
*/


// 8. Create a base class called Shape with a method calculateArea that returns the area of the shape. Extend this class to create subclasses for specific shapes like Rectangle and Circle. Implement the calculateArea method in each subclass and test it with different dimensions.

// class Shape {
//     calculateArea ():number {
//         return 0
//     }
// }

// class Rectangle extends Shape {
//     height: number ;
//     width : number ;

//     constructor(height:number, width:number) {
//         super()
//         this.height = height ;
//         this.width = width
//     }
//     calculateArea(): number {
//         return this.height * this.width
//     }
// };

// class Circle extends Shape {
//     radius: number 
//     constructor(radius:number) {
//         super()
//         this.radius = radius
//     }
//     calculateArea(): number {
//         return Math.PI * this.radius * this.radius
//     }
// }

// 9. Define two interfaces: Car with properties like make, model, and year, and Driver with properties like name and licenseNumber. Create a function that takes objects of type Car and Driver and returns an object with the combined properties of both types.

// interface Car {
//     make: string ,
//     model: string ,
//     year: number ,
// }

// interface Driver {
//     name: string ,
//     licenseNumber: number ,
// }

// function carDriver (car:Car, driver:Driver) {
//     return {car,driver}
// }

// const car:Car = {
//     make: "Honda",
//     model: "Hornet",
//     year: 2019
// };

// const driver:Driver = {
//     name: "Sifat",
//     licenseNumber: 20134
// }
// console.log(carDriver(car,driver))


//  10.Create a function that takes a parameter which can be either a string or an array of strings. If it's a string, return the uppercase version of the string. If it's an array of strings, return an array with each string in uppercase.

// function convertedToUpperCase(param:string | string[]) {
//     if (typeof param === "string") {
//         return param.toUpperCase()
//     } else if ( Array.isArray(param)) {
//         return param.map(input => input.toUpperCase())
//     } else {
//         throw new Error ("Invalid Input")
//     }
// }
// const arrayString:string[] =[ "nest"]
// console.log(convertedToUpperCase(arrayString))

// // 11. Declare a variable with an initial value of null and type it as string. Use type assertion to assign a string value to this variable and then print its length.

// let myString = null
// myString = "Hello Next Level Developer"  as string;
// console.log(myString.length)


// // 12. Create a function that takes an input parameter of type unknown. Inside the function, implement type guards to check if the input is of type string or number and perform different operations based on the type.

// function processInput (param:unknown) {
//     if (typeof param === "string") {
//         return `Input is the string ${param.toUpperCase()}`
//     } if (typeof param === "number") {
//         return `Your Input Is Number ${param}`
//     } else {
//         return `Input Unknown Type`
//     }
// }
// // console.log(processInput(undefined))


// 13. Create a generic function that takes an array of elements and returns the first element of the array. Add a constraint to ensure that the generic type can be compared using the > operator.

// function genericFunction <T>(param:T[]):T|undefined|string {
//     if (param.length > 0) {
//         return param[0]
//     } else {
//         return "It's not an array"
//     }
// }
// const namee:string[] = ["Sifat","Rifat","Kadir","Shabok","Asfak","Emon"]
// console.log(genericFunction(namee))

 // 14. Create a function that takes two parameters: one can be either a string or number, and the other can be either a boolean or an array of strings. Implement logic in the function to perform different operations based on the types of the parameters.

//  function performDifferentOperation (param1:string|string[], param2: number|boolean ) {
//     if(typeof param1 === "string") {
//         return `This is your input ${param1.toUpperCase()}`
//     } else if (Array.isArray(param1)) {
//         return param1.map(input => input.toUpperCase())
//     } else if (typeof param2 === "number") {
//         return `your input will double ${param2*2}`
//     } else if (typeof param2 === "boolean") {
//         return `your written value ${param2}`
//     } else {
//         return `Invalid Input`
//     }
//  }
//  const names = ["Sfiat","Rifat","Kadir"]
//  console.log(performDifferentOperation( names, false))