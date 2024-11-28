// Import the readline module
const readline = require('readline');

// Create the readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Flag to track if input was processed
let inputHandled = false;

// Display a message to the user and prompt for input
rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
  console.log(`Your name is: ${name}`);
  inputHandled = true; // Mark that input has been processed
  rl.close(); // Explicitly close the readline interface
});

// Handle the close event to display the closing message
rl.on('close', () => {
  if (inputHandled) {
    console.log('This important software is now closing');
  }
});
