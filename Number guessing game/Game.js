// Get references to HTML elements
var ele = document.getElementById("hide"); // Element to display the result message
var guess = document.getElementById("num"); // Input field for the user's guess
var surprise = document.getElementById("hide2"); // Element to display a surprise message
var ran = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10

// Function to start or restart the game
function startGame() {
  ran = Math.floor(Math.random() * 10) + 1; // Generate a new random number
  guess.value = ""; // Clear the input field
  ele.style.display = "none"; // Hide previous messages
  surprise.style.display = "none"; // Hide surprise message
}

// Function to check the user's guess
function show() {
  var a = guess.value; // Get the value from the input field

  // Check if the user's guess matches the random number
  if (ran == a) {
    alert("YOU WON!!!"); // Alert the user that they won
    surprise.style.display = "block"; // Show the surprise message
    ele.textContent = "Your Guess Is RIGHT!!"; // Update the result message
    ele.style.color = "green"; // Change the text color to green
    ele.style.display = "block"; // Display the result message
  } else {
    surprise.style.display = "none"; // Hide the surprise message
    ele.textContent = "Your Guess Is WRONG!!"; // Update the result message
    ele.style.color = "red"; // Change the text color to red
    ele.style.display = "block"; // Display the result message
  }
}