// class Parenet {
//     takeNap():void {
//         console.log('I am sleeping 8 houres a day')
//     }
// }

// class Children1 extends Parenet {
//     takeName():void {
//         console.log('Children is sleeping 10 hours a day')
//     }
// }

// class Children2 extends Parenet {
//     takeNap ():void {
//         console.log('Developer is sleeping 5 hours a day')
//     }
// }

// function getNap (param:Parenet) {
//     param.takeNap()
// }

// const person11 = new Children1()
// getNap(person11)



// another example
// class Shape {
//     getArea ():number {
//         return 0
//     }
// }

// class Circle extends Shape {
//     radius: number

//     constructor (redius:number) {
//         super()
//         this.radius = redius
//     }

//     getArea(): number {
//         return Math.PI * this.radius * this.radius
//     }
// }

// class Rectangle extends Shape {
//     height: number;
//     width:number ;

//     constructor(height:number, width:number) {
//         super()
//         this.height = height ;
//         this.width = width
//     }

//     getArea(): number {
//         return this.height * this.width
//     }
// };

// function getAreaCalculation(param:Shape) {
//     return param.getArea()
// }

// const circle1 = new Circle(10)
// console.log(getAreaCalculation(circle1).toFixed(3))
// const rectangular1 = new Rectangle(20,10)
// console.log(getAreaCalculation(rectangular1))