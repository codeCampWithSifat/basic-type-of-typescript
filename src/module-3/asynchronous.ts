// const makePromise = (): Promise<string> => {
//   return new Promise<string>((resolve, reject) => {
//     const data: string = "I Love Javascript";
//     if (data) {
//       resolve(data);
//     } else {
//       reject("Failed To Fetch Data");
//     }
//   });
// };

// const getPromiseData = async (): Promise<string> => {
//   const res = await makePromise();
//   return res;
// };

// const makePromiseBoolean = (): Promise<boolean> => {
//   return new Promise<boolean>((resolve, reject) => {
//     const data: boolean = false;
//     if (data) {
//       resolve(data);
//     } else {
//       reject("Something Went Wrong");
//     }
//   });
// };

// const getPromiseBoolean = async (): Promise<boolean> => {
//   const res = makePromiseBoolean();
//   return res;
// };

// // type DataType = {
// //     name : string
// // }
// interface DataType {
//   name: string;
// }
// const makePromiseObject = (): Promise<DataType> => {
//   return new Promise<DataType>((resolve, reject) => {
//     const data: DataType = { name: "I Love Pythone" };
//     if (data) {
//       resolve(data);
//     } else {
//       reject("No Data Will Found");
//     }
//   });
// };

// const getPromiseObject = async (): Promise<DataType> => {
//   const res = await makePromiseObject();
//   return res;
// };

// // Json Placeholder api calling
// interface ITodo {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// }

// const getTodo = async ():Promise<ITodo> => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const data = await res.json();
//   return data;
// };

// const getPromiseTodo = async():Promise<void> => {
//     const res = await getTodo()
//     console.log(res)
// };

// getPromiseTodo();
