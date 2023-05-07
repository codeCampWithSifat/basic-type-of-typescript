class BankBalance {
   readonly id: number;
    name: string;
   private balance: number;

    constructor(id:number, name:string, balance:number) {
        this.id = id ;
        this.name = name;
        this.balance = balance
    }
    // getter keyword
    get addBalance():number {
        return this.balance
    };

    // another getter
    private get getTestBalance():number {
        return this.balance
    }

    // another getter 2 
    get Test ():number {
        return this.getTestBalance
    }
   
    // setter keyword 
    set setBalance (amount:number) {
       this.balance = this.balance + amount
    }
};


class StudentAccount extends BankBalance {
    test() {
        return this.Test 
    }
}



const myAccount = new BankBalance (444, "Sifat",1000);
console.log(myAccount.addBalance)
myAccount.setBalance = 12052 ;
console.log(myAccount.addBalance)