// class Parent {
//     name: string;
//     age: number;
//     address: string
    
//     constructor(name:string, age:number, address:string) {
//         this.name = name ;
//         this.age = age ;
//         this.address = address
//     }

//     makeSleep () {
//         return `This Person is sleeping 8 Hours a Day`
//     }
// }

// class Children extends Parent {
//     hobby : string

//     constructor(name:string,age:number, address:string,hobby:string) {
//         super(name,age,address)
//         this.hobby = hobby
//     }
//     takeNap() {
//         return `${this.name}  Take Nap Only 10 Hours On A Day`
//     }
// }

// const children = new Children("Sifat",30,"Narayangonj","Coding")
// console.log(children.takeNap());


// class GirlFriend extends Parent {
//     profession: string ;

//     constructor (name:string, age:number, address:string,profession:string) {
//         super(name,age,address) 
//         this.profession = profession
//     }

// }