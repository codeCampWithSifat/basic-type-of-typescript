// interface IVehicle {
//     startEngine():void,
//     stopEngine():void,
//     move():void
// }

// class Vehicle implements IVehicle {
//     name: string;
//     model: string;
//     year: number

//     constructor(name:string, model:string, year:number) {
//         this.name = name ;
//         this.model = model ;
//         this.year = year
//     }

//     startEngine(): void {
//         console.log(`Start the engine`)
//     } 
//     stopEngine(): void {
//         console.log(`stop the engine`)
//     }
//     move(): void {
//         console.log(`move the engine`)
//     }
//     test():void {
//         console.log(`move the engine carefully`)
//     }
// }

// const vehicle1 = new Vehicle("Car","Audi",2023)
// vehicle1.startEngine()

// abstract class Vehicle {
//     name: string;
//     model: string;
//     year: number

//     constructor(name:string, model:string, year:number) {
//         this.name =name ;
//         this.model = model ;
//         this.year = year
//     }

//    abstract startEngine():void
//    abstract stopEngine():void
//    abstract move():void
// }

// class Car extends Vehicle {
//     startEngine(): void {
//         console.log(`start the engine`)
//     }
//     stopEngine(): void {
//         console.log(`stop the engine`)
//     }
//     move(): void {
//         console.log(`move the engine`)
//     }
// }
// const car1 = new Car("Car","Audi",2023)
// car1.stopEngine()