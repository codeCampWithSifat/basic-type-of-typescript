
// // normal function
// const genericFunction = (param:string) : string[] => {
//     return [param]
// }
// // console.log(genericFunction("Sifat"))

// // generic-function just amazing
// // const genericFunction2 = <T>(param:T):T[] => {
// //     return [param]
// // }

// // const result = genericFunction2<number>(250)
// // const result2 = genericFunction2("250")
// // const result3 = genericFunction2<boolean>(false)
// // console.log(result3)


// // another example on generic function
// const array3 = <X,Y>(param1:X,param2:Y):[X,Y] => {
//     return [param1 , param2]
// }

// // const array4 = array3<string,string>("Sifat","Rifat")
// // const array5 = array3<string,Array<string>>("Sifat",["Nishat"])
// // console.log(array5)


// // use generic array on spread operator

// const addCrush = <T>(myInfo:T):T => {
//     const crush1 = "Nishat";
//     const newData = {crush1,...myInfo}
//     return newData
// }

// const myInfo = {
//     name : "Sifat",
//     profession : "Web Developer",
//     Education : "BBA And MBA"
// }

// console.log(addCrush(myInfo))