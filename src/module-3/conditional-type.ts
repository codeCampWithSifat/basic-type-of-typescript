// // a type is depend on another type

// type a1 = string;
// type a2 = a1 extends string ? string : null;

// // nested conditional type
// type a3 = undefined;
// type a4 = number;

// type d = a1 extends null
//   ? null
//   : a3 extends number
//   ? number
//   : a4 extends null
//   ? null
//   : never;

// // example of type conditional
// type shiekh = {
//   wife1: string;
//   wife2: string;
// };

// type A = keyof shiekh; // "wife1" | "wife2" ;
// // check korbay ei sheikh type wife1 asa kina ? true : false 
// // type CheckProperty<T> = T extends {wife1: string} ? true : false;
// // type CheckWife1 = CheckProperty<shiekh>;

// type CheckProperty<T,U>= U extends keyof shiekh ? true : false ;
// type CheckWife1 = CheckProperty<shiekh,"wife2">

// // matha nosto example
// type GirlFriend = "a" | "b" | "c" ;

// // type RemovedGirlFriend<T> = T extends "a" ? never : T ;
// // type CurrentGirlFriend = RemovedGirlFriend<GirlFriend>;

// type RemovedGirlFriend<T, K> = T extends K ? never : T ;
// type CurrentGirlFriend = RemovedGirlFriend<GirlFriend,"a">