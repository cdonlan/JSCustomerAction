// index.js
// Generates a random password of length 1 with at least 1 letter, 1 number, and 1 special character
const core = require('@actions/core');

function generatePassword() {
  // Since length is 1, only one character can be chosen, so we must pick one of the required types
  // We'll randomly pick one of: letter, number, special
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const specials = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  const all = [letters, numbers, specials];
  const type = Math.floor(Math.random() * 3);
  const chars = all[type];
  return chars[Math.floor(Math.random() * chars.length)];
}

try {
  const password = generatePassword();
  core.setOutput('password', password);
  console.log(`Generated password: ${password}`);
} catch (error) {
  core.setFailed(error.message);
}
