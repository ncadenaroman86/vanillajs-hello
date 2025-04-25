// Arrays for each part of the excuse
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed on', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car', 'my project'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

// Function to generate a random excuse
function generateExcuse() {
  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
}

// When page loads, set a new excuse
window.onload = function() {
  document.getElementById("excuse").innerHTML = generateExcuse();
};
