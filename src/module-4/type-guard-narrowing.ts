
type AlphaNumeric = number | string;
// key of guard
function add (param1:AlphaNumeric, param2:AlphaNumeric):AlphaNumeric {
    if (typeof param1 === "number" && typeof param2 === "number") {
        return param1 + param2
    } else {
        return param1.toString() + param2.toString()
    }
};

// console.log(add("20","20"))
// console.log(add(20,20))

// right now we see in guard
// in basically use on object

type NormalUserType = {
    name: string
};

type AdminUserType = {
    name : string,
    role : "admin"
};

const normalUser1:NormalUserType = {
    name : "Sifat"
};

const normalUser2:AdminUserType= {
    name : "Rifat",
    role : "admin"
}

function getUser(user:NormalUserType | AdminUserType) {
    if ("role" in user) {
        return `i am admin my role is ${user.role}`
    } else {
        return `I am normal user`; 
    }
}

// console.log(getUser(normalUser2))

// instanceof guard
class Animal {
    name: string;
    species: string

    constructor (name:string, species:string) {
        this.name = name ;
        this.species = species
    }

    makeSound () {
       console.log("I am making sound")
    }
};

class Dog extends Animal {
    constructor(name:string, species:string) {
        super(name,species)
    }

    makeBark () {
        console.log("I am barking")
    }
}



class Cat extends Animal {
    constructor(name:string, species:string) {
        super(name,species)
    }
    
    makeMeow () {
        console.log(`I am mew mew`)
    }
}

// function getAnimal (animal:Animal) {
//     if(animal instanceof Dog) {
//         animal.makeBark()
//     } else if (animal instanceof Cat) {
//         animal.makeMeow()
//     } else {
//         animal.makeSound()
//     }
// }

function isDog (animal:Animal):animal is Dog {
    return animal instanceof Dog
}
function isCat (animal:Animal):animal is Cat {
    return animal instanceof Cat
}

function getAnimal (animal:Animal) {
    if(isDog(animal)) {
        animal.makeBark()
    } else if (isCat(animal)) {
        animal.makeMeow()
    } else {
        animal.makeSound()
    }
}

const animal1 = new Dog("Bangla Tiger","Dog"); // instance dog
const animal2 = new Cat("Sona moni","Cat")  // instance cat

getAnimal(animal2)