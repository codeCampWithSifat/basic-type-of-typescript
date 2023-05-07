// type AreaVolume = {
//     height: number,
//     width: number ,
//     depth: number,
// }

// type Area = {
//     [key in keyof AreaVolume]: AreaVolume[key]
// }


// generic map type 
// type Area<T> = {
//     [key in keyof T]: T[key]
// }
// const result: Area<{name:string, age:number}> = {name:'sifat', age:120}
// console.log(result)