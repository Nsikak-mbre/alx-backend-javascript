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

export default function getFullResponseFromAPI(success) {
  return new Promise((resolve) => {
    try {
      if (!success) throw new Error("The fake API is not working currently");
      resolve({ status: 200, body: "Success" });
    } catch (error) {
      resolve({ status: 500, body: error.message }); // Handling error inside function
    }
  });
}



// export default async function getFullResponseFromAPI(success) {
//   if (success) {
//     return new { status: 200, body: "Success" };
//   } else {
//     throw new Error("The fake API is not working currently");
//   }
// }

