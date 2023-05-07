// type PersonType = {
//     name: string,
//     age: number ,
//     address: string
// }

// type newType = "name" | "age" | "address"; // done manullay
// type newTypeUsingKey = keyof PersonType;

// const a:newTypeUsingKey = "address" ;
// const b:newType = "age";


// function getProperty <X,Y extends keyof X>(obj:X,key:Y) {
//     return obj[key]
// }

// const property = getProperty({name:"Sifat", age:250}, "age")
// console.log(property)