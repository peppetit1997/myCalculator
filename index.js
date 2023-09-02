// Get references to the display and all buttons
const display = document.getElementById("calculator-displayInput");
const buttons = document.querySelectorAll(".button");

// Add a click event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Get the value of the clicked button
    const buttonValue = button.textContent;
    if (buttonValue === "AC") {
      display.textContent = " ";
    } else if (buttonValue === "DE") {
      display.textContent = display.textContent.slice(0, -1);
    } else if (buttonValue === "=") {
      display.textContent = eval(display.textContent);
    } else {
      display.textContent += buttonValue;
    }
  });
});
