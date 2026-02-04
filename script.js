function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email === "karitik47@gmail.com" && password === "ritikkll") {
    window.location = "profile.html";
  } else {
    alert("Wrong email or password");
  }
}

/* ----------------------------
   SCREEN SYSTEM AFTER MENU
-----------------------------*/

// Track current screen
let currentScreen = "menu";

// Change background image
function showScreen(screenName) {
  document.body.style.backgroundImage = url("images/${screenName}.jpg");
  currentScreen = screenName;
}

// Click anywhere to open next image
document.addEventListener("click", function () {

  // 3rd Image → Menu
  if (currentScreen === "menu") {
    showScreen("results-list");   // 4th Image
  }

  // 4th Image → Results List
  else if (currentScreen === "results-list") {
    showScreen("final-result");  // 5th Image
  }

  // 5th Image → Stop
  else if (currentScreen === "final-result") {
    return;
  }

});
