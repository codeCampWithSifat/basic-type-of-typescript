// class Person {
//     takeNap ():void {
//         console.log(`I am sleeping for 8 hours a day`)
//     }
// }

// class Student extends Person {
//     takeNap(): void {
//         console.log("I am sleeping 10 Houres per day")
//     }
// };

// class Developer extends Person {
//     takeNap(): void {
//         console.log("I am sleeping 5 hours per day")
//     }
// }

// function getNap (param:Person) {
//     param.takeNap();
// }

// const person1 = new Person()
// const person2 = new Student()
// const person3 = new Developer()

// // getNap(person1)
// // getNap(person2)
// // getNap(person3)


// class Shape {
//     getArea ():number {
//         return 0
//     }
// }

// // area -> pi * r * r
// class Circle extends Shape {
//     radius: number ;

//     constructor(radius:number) {
//         super() 
//         this.radius = radius
//     }

//     getArea(): number {
//         return Math.PI* this.radius * this.radius
//     }
// }

// class Rectangle extends Shape {
//     heigth:number;
//     width : number;
//     constructor(height:number, width:number) {
//         super()
//         this.heigth = height ;
//         this.width = width
//     }
//     getArea ():number {
//         return this.heigth * this.width
//     }
// }


// function getAreaOfShape(param:Shape) {
//    return (param.getArea())
// }

// const circle1 = new Circle(10);
// const rectangle1 = new Rectangle(8,5)
// console.log(getAreaOfShape(circle1))
// console.log(getAreaOfShape(rectangle1))