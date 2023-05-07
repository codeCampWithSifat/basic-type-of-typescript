// type User = {
//     name: string,
//     age: number ,
// }

//  type AdminUser = User & {
//     role : string
//  }
// const user1:User = {
//     name: "Sifat",
//     age: 250
// }
// const adminUser:AdminUser = {
//     name : "Jhankar",
//     age: 52,
//     role: "admin"
// }

// interface IUser {
//     name: string,
//     age: number
// }

// interface IExtendedUser extends IUser {
//     role: string
// }

// const user3:IUser = {
//     name : "Rifat",
//     age: 56
// }

// const user4:IExtendedUser = {
//     name : "Forhan",
//     age : 32,
//     role: "Admin"
// }
// // console.log(user4)

// // function er jonno type alias
// // type AddNumberType = (num1:number, num2:number) => number ;
// interface TAddNumber {
//     (num1:number, num2:number): number
// }

// const addNumbers:TAddNumber = (num1, num2) =>  num1 + num2 ;
// console.log(addNumbers(20,20))

// type RollNumbers = number[];

// const rollNumbers:RollNumbers = [1,2,3,]

// interface IRollNumber {
//     [index:number]:number
// }

// const rollNumber2:IRollNumber = [1,2,3]
