// // use generic in arrow function
// // const createArray = (param:string):string[] => {
// //     return [param]
// // }

// // // generic array
// // const createArray2 = <T>(param:T):T[] => {
// //     return [param]
// // }
// // const array1 = createArray2<string>("Bangladesh")
// // const array2 = createArray2<boolean>(false)
// // const array3 = createArray2<object>({name: "Bangladesh"}) // this is not good practise

// // type Name = {name : string}
// // const array4 = createArray2<Name>({name: "Bangladesh"})

// const createArray3 = <X,Y>(param1:X, param2:Y):[X,Y] => {
//     return [param1,param2]
// }
// const result1 = createArray3<string,string>("Bangladesh", "I Love my country");
// const result2 = createArray3<boolean,number> (false, 250);
// const result3 = createArray3<number,Array<string>>(120, ["Sifat"]);
// type Name = {name: string};
// const result4 = createArray3<Name,boolean>({name:"Arafat"}, false)


// // Spreed Operator
// const crush = "abc";


// // const newData ={crush, ...myInfo};
// const addMyCrush = <T>(myInfo:T) => {
//     const crush2 = "kens winslet";
//     const newData = {crush2, ...myInfo};
//     return newData;
// };
// const myInfo = {
//     name : "Persian",
//     age : 100,
//     salary : 125000
// };
// const result5 = addMyCrush(myInfo)