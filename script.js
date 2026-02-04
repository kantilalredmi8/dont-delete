function login(){
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if(email === "karitik47@gmail.com" && password === "ritikkll"){
    window.location = "profile.html";
  }else{
    alert("Wrong email or password");
  }
}
// Track which screen is active
let currentScreen = "login";

// Change screen function
function showScreen(screenName) {
  document.body.style.backgroundImage = url("images/${screenName}.jpg");
  currentScreen = screenName;
}

// Click handling
document.addEventListener("click", function (e) {

  // MENU → RESULTS LIST
  if (currentScreen === "menu") {
    // Result button area (adjust if needed)
    if (e.clientX > 250 && e.clientX < 360 && e.clientY > 120 && e.clientY < 180) {
      showScreen("results-list");
    }
  }

  // RESULTS LIST → INDIVIDUAL RESULTS
  if (currentScreen === "results-list") {

    // Result 1
    if (e.clientY > 200 && e.clientY < 260) {
      showScreen("result-1");
    }

    // Result 2
    else if (e.clientY > 260 && e.clientY < 320) {
      showScreen("result-2");
    }

    // Result 3
    else if (e.clientY > 320 && e.clientY < 380) {
      showScreen("result-3");
    }

    // Result 4
    else if (e.clientY > 380 && e.clientY < 440) {
      showScreen("result-4");
    }

    // Result 5
    else if (e.clientY > 440 && e.clientY < 500) {
      showScreen("result-5");
    }
  }
});
