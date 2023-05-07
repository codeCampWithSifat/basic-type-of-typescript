// type PersonType = {
//     name : string,
//     age : number,
//     address : string,
// };

// type newType = "name" | "age" | "address" ; // done manually


// type newTypeUsingKeyof = keyof PersonType ;

// // const a : newType ="address"; 
// // const b : newTypeUsingKeyof = "name" // same as above

// function getProperty <X,Y extends keyof X>(obj:X, key:Y) {
//     obj[key]
// };

// const property = getProperty({name:"Sifat", age : 520}, "age")