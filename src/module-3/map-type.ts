// const arrayOfNumbers = [1,2,3];
// const newArray = arrayOfNumbers.map((number) => number.toString());
// // console.log(newArray)

// type AreaNumber = {
//     height : number,
//     width : number ,
// };

// type AreaNumberReadOnly = {
//     readonly height : number,
//     readonly width : number ,
//  };

// const areaRectangular:AreaNumber = {
//     height : 10,
//     width : 10
// };

// type AreaString = {
//     height : string ,
//     width : string
// }

// type A = AreaNumber["height"] // Look Up type
// type B = keyof AreaNumber     // "height" | "width"

// // const obj = {
// //     name : "Sifat"
// // };

// // obj["name"]

// type areaVolume = {
//     height : number,
//     width : number,
//     depth : number
// }

// // type Area = {
// //     [key in keyof areaVolume] :  areaVolume[key]   //string // number // boolean
// // }

// // generic map-type
// type Area<T> = {
//     [key in keyof T] : T[key]
// };

// const area1:Area<{name :string}> = {name : "Sifat"}
// function getArrayItem<T, K extends keyof T>(arr: T[], index: number, key: K): T[K] {
//     const item = arr[index];
//     return item[key];
//   }
//   const users = [ { name: 'John', age: 30 }, { name: 'Mary', age: 25 },];
//   console.log(getArrayItem(users, 0, 'name'))

// type Data = { num1: number };
// type B = {
//   [key in keyof Data]: string;
// };

// const numbers: B = { num1: 20 };
// console.log(numbers)

// interface Person {
//     firstName: string;
//     lastName: string;
//   } 
//   function fullName<T extends Person>(person: T): string {
//     return `${person.firstName} ${person.lastName}`;
//   }
// console.log(fullName())