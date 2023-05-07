// type CrushType = {
//     readonly name: string,
//     age?: number,
//     profession: string,
//     address: string
// }

// const crush1:CrushType =  {
//     name: "Nishat",
//     age : 21 ,
//     profession: "House Wife",
//     address: "Gognagar"
// }

// const crush2:CrushType =  {
//     name: "Alpona",
//     age : 27 ,
//     profession: "Sojib Wife",
//     address: "Gudara Ghat"
// }

// const crush3:CrushType =  {
//     name: "Maria",
//     // age : 27 ,
//     profession: "janina kar Wife",
//     address: "Aam Bagan"
// }

// type CrushMarriedType = boolean ;
// const crushIsMarried:CrushMarriedType = false ;

// type CourseNameType = string ;
// const courseNameType = "Hello Developer How Are You";
// console.log(courseNameType)

type DifferentWorkType = (x:number,y:number) => number
const calculate = (
  num1: number,
  num2: number,
  differentWord: DifferentWorkType 
): number => {
  return differentWord(num1, num2);
};

console.log(calculate(50, 20, (x, y) => x + y));
console.log(calculate(50, 20, (x, y) => x * y));
console.log(calculate(50, 20, (x, y) => x / y));
