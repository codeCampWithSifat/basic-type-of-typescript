// function add (num1:number, num2:number=20):number {
//     return num1 + num2
// };

// console.log(add(20))

// const friend1:string[] = ["a","b","c","d"];
// const friend2: string[] = ["e","f","g","h"]

// friend1.push(...friend2)
// console.log(friend1)

// rest oprator
// const greentFriend = (
//   friend1: string,
//   friend2: string,
//   friend3: string,
//   ...restFriend: string[]
// ): string[] => {
//   return [friend1, friend2, friend3, ...restFriend];
// };

// console.log(
//   greentFriend("Sifat", "Rifat", "Kipat", "Shabok", "Kadir", "Mukta", "Amala")
// );


// const greentFriend = (...friends: string[] ) =>  {
//     return friends.map((friend) => friend.toUpperCase())
// }
// console.log(greentFriend("rifat", "kadir","object"))
// greentFriend("sfiat")