// type User = {
//     name : string,
//     age : number,
// };

// interface IUser {
//     name : string,
//     age : number ,
// };

// type extendedUser =  User & {
//     roll : string
// }

// interface IExtendedUser extends IUser {
//     roll : string
// }

// // const userWithTypeAlias:User = {
// //     name : "Sifat",
// //     age : 260,
// // };


// // const userWithTypeInterface : IUser = {
// //     name : "Interface",
// //     age  :200
// // }

// // const user : IExtendedUser = {
// //     name : "Sifat",
// //     age : 20,
// //     roll : "Admin",
// // }

// const user : extendedUser = {
//     name : "Rifat",
//     age : 29,
//     roll : "Owner"
// }

// // type addNumberTypes = (num1:number, num2:number) => number 
// interface IAddNumberTypes {
//     (num1:number, num2:number):number
// }

// // const addNumber:addNumberTypes = (num1,num2) =>  num1 + num2 ;
// const addNumber:IAddNumberTypes = (num1,num2) =>  num1 + num2 ;


// type rollNumberType = number[] 
// interface IRollNuberType {
//     [index:number] :number // this type is called index signature
// }
// const rollNumber:rollNumberType = [1,2,3];
// const interfaceRollNumber:IRollNuberType = [5,3,6]; // array er modha index thakay
