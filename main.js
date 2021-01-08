// Selectors
const input = document.querySelector(`input`);
const div = document.querySelector(`div`);

// Function arrays
const passwords = ["jedEN", "DwA"];
const messages = ["super", "działa!"];

// Map on passwords
const lowerCasePasswords = passwords.map((password) => password.toLowerCase());

// Function
const showMessage = (e) => {
  let textInput = e.target.value.toLowerCase();

  for (let i = 0; i < lowerCasePasswords.length; i++) {
    if (textInput === lowerCasePasswords[i]) {
      div.textContent = messages[i];
      e.target.value = "";
    }
  }
};

// Listener
input.addEventListener(`input`, showMessage);
