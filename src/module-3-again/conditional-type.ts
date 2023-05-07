// what is condition ?
// a type is depend on another
// type a1 = string;
// type a2 = a1 extends string ? string : "null";

// // nested conditional typing
// type a3 = undefined;
// type a4 = number;

// type d = a1 extends null
//   ? null
//   : a3 extends number
//   ? number
//   : a4 extends null
//   ? null
//   : never;

//   type Sheikk = {
//     wife1 : string ,
//     wife2: string
//   }

// type CheckProperty<T> = T extends {wife1: string} ? true : false 
// type CheckWife = CheckProperty<Sheikk>

// type A = keyof Sheikk
// type CheckProperty<T,U> = U extends keyof Sheikk ? true : false ;
// type CheckWife = CheckProperty<Sheikk, "wife1"> 

// matha nosto example
// type GirlFrinds = "a" | "b" | "c" ;

// // type CheckFrind <T>= T extends "a" ? never : T ;
// // type Current = CheckFrind<GirlFrinds> 

// type CheckFriend <T,U>= T extends U ? never : T ;
// type Current = CheckFriend<GirlFrinds,"a"> 