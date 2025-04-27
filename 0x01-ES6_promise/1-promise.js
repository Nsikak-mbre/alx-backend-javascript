// export default function getFullResponseFromAPI(success) {
//   return new Promise((resolve, reject) => {
//     if (success) {
//       resolve({
//         status: 200,
//         body: 'Success',
//       });
//     } else {
//       reject(new Error('The fake API is not working currently'));
//     }
//   });
// }


export default async function getFullResponseFromAPI(success) {
  if (success) {
    return { status: 200, body: "Success" };
  } else {
    throw new Error("The fake API is not working currently");
  }
}
