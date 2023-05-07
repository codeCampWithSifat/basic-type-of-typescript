class Person1 {
    name: string;
    age : number ;
    address: string ;

    constructor(name:string, age:number, address:string) {
        this.name = name ;
        this.age = age ;
        this.address = address ;
    }

    addMoney(amount:number):string {
        return `${this.name} have money ${amount}`
    }
}


const sifat1 = new Person1("sifat", 32, "Gognagar") ;
console.log(sifat1.addMoney(20))