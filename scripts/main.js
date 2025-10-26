// Store a reference to the <h1> in a variable
const myHeading = document.querySelector("h1");

// Update the text content of the <h1>
myHeading.textContent = "Hello world!";

// Store a reference to the <button> in a variable
const myImage = document.querySelector("img");

// Add an event listener to the image
myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
});

// Store a reference to the <button> in a variable
let myButton = document.querySelector("button");
//let myHeading = document.querySelector("h1");
//In JavaScript, when you use let to declare a variable with the same name 
// in the same scope, it overwrites the previous declaration, leading to unexpected behavior.

// Function to set the user's name
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

// Check if a name is already stored
if (!localStorage.getItem("name")) {
  setUserName();
} else {// if already stored, Retrieve the stored name
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

// Add an event listener to the button
myButton.addEventListener("click", () => {
  setUserName();
});