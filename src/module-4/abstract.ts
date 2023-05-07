// // interface abstract

// // interface IVehicle {
// //   startEngine(): void;
// //   stopEngine(): void;
// //   move(): void;
// // }

// // class Vehicle implements IVehicle {
// //     name: string ;
// //     model: string ;
// //     year : number ;
// //     constructor(name:string, model:string, year:number) {
// //         this.name = name ;
// //         this.model = model;
// //         this.year= year
// //     }
// //     startEngine(): void {
// //         console.log("this is start engine")
// //     }
// //     stopEngine(): void {
// //         console.log("this is stop engine")
// //     }
// //     move(): void {
// //         console.log("this is move engine")
// //     }
// //     test() {
// //         console.log("I Am For Testing Purpose")
// //     }
// // };

// // const vehicle1 = new Vehicle("Car","Audi",2020);
// // console.log(vehicle1)

// // abstract class

// abstract class Vehicle {
//   name: string;
//   model: string;
//   year: number;

//   constructor(name: string, model: string, year: number) {
//     this.name = name;
//     this.model = model;
//     this.year = year;
//   }

//   abstract startEngine(): void ;
//   abstract stopEngine(): void ;

  
// }

//  class Car extends Vehicle {
//     startEngine(): void {
//         console.log("start engine")
//     } 
//     stopEngine(): void {
//         console.log("stop engine")
//     } 
    
//  }

// // const car1 = new Vehicle("Car","Audi",2022);
// // console.log(car1.)