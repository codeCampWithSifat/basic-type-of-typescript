
// // this is of guard
// type AddNumber = number | string;
// const addNumber = (param1: AddNumber, param2: AddNumber):AddNumber => {
//   if (typeof param1 === "number" && typeof param2 === "number") {
//     return param1 + param2;
//   } else {
//     return param1.toString() + param2.toString();
//   }
// };
// // console.log(addNumber(230,20,))
// // console.log(addNumber("Sifast","Rifat"))


// // this is in_guard
// type NormalUserType1 = {
//     name: string
// }
// type AdminUserType1 = {
//     name: string,
//     role: "admin"
// }

// const normalUserType1:NormalUserType1 = {
//     name: "Sifat"
// };

// const adminUserType1:AdminUserType1 = {
//     name: "Rifat",
//     role: "admin"
// }

// function checkAdminUser (param:NormalUserType1| AdminUserType1) {
//     if("role" in param) {
//         return `This is the ${param.role}`
//     } else {
//         return 'This is normal user'
//     }
// };

// // console.log(checkAdminUser(adminUserType1))


// // now this is instance of guard
// class AnimalPower {
//     name: string;
//     species: string

//     constructor(name:string, species:string) {
//         this.name = name;
//         this.species = species
//     }

//     makeSound ()  {
//         return "I am making sound"
//     }
// };


// class DogPower extends AnimalPower {
//     constructor(name:string,species:string) {
//         super(name,species) 
//     }

//     makeBark() {
//        return "I am making bark"
//     }
// };


// class CatPower extends AnimalPower {
//     constructor(name:string, species:string) {
//         super(name,species)
//     }

//     makeMew () {
//       return "I am making mew"
//     }
// }

// // function getPowerOfAnimal(animal:AnimalPower) {
// //     if(animal instanceof DogPower) {
// //        return animal.makeBark()
// //     } else if (animal instanceof CatPower) {
// //         return animal.makeMew()
// //     } else {
// //        return animal.makeSound()
// //     }
// // }

// function isDogPower(animal:AnimalPower):animal is DogPower {
//     return animal instanceof DogPower
// }
// function isCatPower(animal:AnimalPower):animal is CatPower {
//     return animal instanceof CatPower
// }

// function getPowerOfAnimal(animal:AnimalPower) {
//     if(isDogPower(animal)) {
//        return animal.makeBark()
//     } else if (isCatPower(animal)) {
//         return animal.makeMew()
//     } else {
//         animal.makeSound()
//     }
// }

// const catPower = new CatPower("SonaMoni","Cat");
// console.log(getPowerOfAnimal(catPower))