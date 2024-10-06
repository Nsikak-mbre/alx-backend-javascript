export default function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
    if (filename instanceof String || typeof filename === 'string') {
      reject(new Error(`${filename} cannot be processed`));
    } else {
      resolve(filename);
    }
  });
}
