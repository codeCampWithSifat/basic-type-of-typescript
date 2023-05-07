// // generic constraints full example

// const addCrush = <T extends MyInfoType>(myInfo:T):T => {
//     const crush = "Nishat" ;
//     const newData = {crush,...myInfo} ;
//     return newData
// }

// // type MyInfoType = {
// //     readonly name : string,
// //     age: number,
// //     salary? : number,
// //     profession: string
// // }
// interface MyInfoType{
//     readonly name: string,
//     age: number ,
//     salary? : number,
//     profession: string
// }

// const myInfo:MyInfoType = {
//     name: 'Sifat',
//     age: 29,
//     salary: 100000,
//     profession : "Full Stack Web Developer"
// }

// const result = addCrush(myInfo)
// console.log(result)