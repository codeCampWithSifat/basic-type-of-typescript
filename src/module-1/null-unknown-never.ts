// // null defination
// const search = (value:string | null) => {
//     if (value === null) {
//         return 'There is nothing to search'
//     } else {
//         return 'Searching something'
//     }
// }
// // console.log(search(""))

// // unknown type

// function getCarSpeed(speed:unknown) {
//     if (typeof speed === "number") {
//         return `The Speed Of Car ${((speed*1000)/3600).toFixed(2)}`
//     } else if (typeof speed === "string") {
//         const [value,unit] = speed.split(" ")
//         const convertedSpeed = ((Number(value)*1000)/3600).toFixed(3)
//         return `The String Speed ${convertedSpeed}`
//     } else {
//         return 'This is not a number'
//     }
// }
// console.log(getCarSpeed("250"))
