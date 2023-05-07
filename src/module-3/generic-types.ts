// // const rollNumber:number[] = [1,2,3];
// // const rollNumber2:string[] = ["a","b","c"]  // same as

// // const rollNumber1: Array<number> = [1, 2, 3];
// // const rollNumber2: Array<string> = ["1", "2", "3"];
// // const rollNumber3: Array<boolean> = [true, false];

// // const userNameAndRoll: Array<{ name: string; roll: number }> = [
// //   { name: "Sifat", roll: 2 },
// //   { name: "Rifat", roll: 25 },
// // ];

// type GenericArray<T> = Array<T>; // T means Type

// const rollNumber1 :GenericArray<number> = [1,2,3]
// const rollNumber2 :GenericArray<string> = ["1","2","3"]
// const rollNumber3 :GenericArray<boolean> = [true,false];

// type NameRollType = {name: string, roll:number}
// const userNameAndRoll: GenericArray<NameRollType> = [
//   { name: "Sifat", roll: 2 },
//   { name: "Rifat", roll: 25 },
// ];


// type GenericTuple <X,Y> = [X,Y] ;
// const relation :GenericTuple <string, string> = ["Sifat", "Rifat"] ;

// // const relationWithSalary:GenericTuple<object,string> = [{
// //     name : "Sifat",
// //     salary : 12000} ,
// //     "Sifat Sayed"
// // ] // this is not best practise

// // const relationWithSalary : GenericTuple <{name : string, salary: number},string> = [{
// //     name : "Sifat",
// //     salary : 120000
// // },
// // "Angelina White"
// // ]

// // type RelationWithSalaryType = {name : string, salary : number,}
// // interface RelationWithSalaryType {
// //     name : string,
// //     salary : number
// // }
// // const relationWithSalary2:GenericTuple<RelationWithSalaryType,string> = [{
// //     name : "Sifat",
// //     salary : 12000} ,
// //     "Sifat Sayed"
// // ] // this is best practise