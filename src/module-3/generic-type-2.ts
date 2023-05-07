// type GenericTuple <X,Y> = [X,Y] ;

// interface RelatioWithSalaryInterface {
//     name : string,
//     salary : number,
// };

// const relationWithSalary: GenericTuple<RelatioWithSalaryInterface, string> = [
//     {name : "Sifat", salary : 25000}, "Sifat"
// ]

// // make a generic interface
// interface CrushInterface <T, U=undefined>{
//     name : string,
//     husband : T,
//     wife? : U
// };


// const crush1:CrushInterface<boolean, string> = {
//     name: "Nishat", 
//     husband : true,
//     wife : "Mariya",
// }

// const crush2:CrushInterface<string> = {name: "Jothi", husband : "Sifat"}

// // const crush3 :CrushInterface <object> = {
// //     name : "kate Winslate",
// //     husband : {
// //         name : "Persian",
// //         salary : 25000,
// //     }
// // } // this is not good practise


// interface HusbandInterface {
//     name : string,
//     salary : number,
// }
// const crush3 : CrushInterface <HusbandInterface> = {
//     name : "Sifat",
//     husband : {
//         name : "Nishat",
//         salary : 20000
//     }
// };

// interface PersonInterface {
//     name :string,
//     age : number
// }
// const crush4 : CrushInterface <PersonInterface,PersonInterface> = {
//     name : "sifat",
//     husband : {
//         name : "nai",
//         age : 2000
//     },
//     wife :{
//         name: "nothing",
//         age : 2100
//     }
// }