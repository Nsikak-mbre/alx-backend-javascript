// import the readline module
const readline = require('readline');

// Create the readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Display a message to the user
console.log('Welcome to Holberton School, what is your name?');

// make a prompt & Read the user's input
rl.question('', (name) => {
  console.log(`Your name is: ${name}`);
  rl.close();
});

// Handle the close event to display the closing message
rl.on('close', () => {
  console.log('This important software is now closing');
  process.exit(0);
});
