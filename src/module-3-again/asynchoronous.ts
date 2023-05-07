// // const makePromise = ():Promise <string> => {
// //     return new Promise<string> ((resolve,reject) => {
// //         const data:string = "I Love Javascript" ;
// //         if(data) {
// //             resolve(data)
// //         } else {
// //             reject("Failed To Fetch Data")
// //         }
// //     })
// // }

// // const getPromiseData = async(): Promise <string> => {
// //     const res = await makePromise();
// //     return res
// // }
// // console.log(getPromiseData())


// const makePromiseBoolean = ():Promise<boolean> =>{
//     return new Promise<boolean>((resolve,reject) => {
//         const data:boolean = false
//         if(data) {
//             resolve(data)
//         } else {
//             reject("Failed To Fetch Data")
//         }
//     })
// }

// const getPromiseData = async():Promise<boolean> => {
//     const res = await makePromiseBoolean();
//     return res
// }