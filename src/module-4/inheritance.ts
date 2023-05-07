// class Parent {
//     name: string ;
//     age: number;
//     address: string; 

//     constructor(name:string, age:number, address: string) {
//         this.name = name;
//         this.age = age ;
//         this.address = address ;
//     }
//     // first method
//     makeSleep (hours:number):string {
//         return `This ${this.name} Will  Sleep For ${hours} Hours`
//     }
// }


// class Student extends Parent {    
//     constructor(name:string, age:number, address: string) {
//         super(name,age,address)     
//     }
// };

// const student1 = new Student("Sifat", 22, "Gognagar");
// // console.log(student1.makeSleep(9))

// // Second Example
// class Teacher extends Parent {
//     expertIn: string ;

//     constructor(name:string, age:number, address:string, expertIn:string) {
//         super(name,age,address)
//         this.expertIn = expertIn;
//     }
//      // second method
//     takeClass (classes:number):string {
//         return `${this.name} will take ${classes} class in a day`
//     }
// }
// const teacher1 = new Teacher ("Robiul Awal", 38, "Chasara","Accounting");
// console.log(teacher1.takeClass(5))