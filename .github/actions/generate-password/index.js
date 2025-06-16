// index.js
// Generates a random password of length 10 with at least 1 letter, 1 number, and 1 special character
const core = require('@actions/core');

function generatePassword() {
  const length = 10;
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const specials = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  let password = [];
  // Ensure at least one of each required type
  password.push(letters[Math.floor(Math.random() * letters.length)]);
  password.push(numbers[Math.floor(Math.random() * numbers.length)]);
  password.push(specials[Math.floor(Math.random() * specials.length)]);
  // Fill the rest with random chars from all sets
  const all = letters + numbers + specials;
  for (let i = 3; i < length; i++) {
    password.push(all[Math.floor(Math.random() * all.length)]);
  }
  // Shuffle the password array
  for (let i = password.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [password[i], password[j]] = [password[j], password[i]];
  }
  return password.join('');
}

try {
  const password = generatePassword();
  core.setOutput('password', password);
  console.log(`Generated password: ${password}`);
} catch (error) {
  core.setFailed(error.message);
}
