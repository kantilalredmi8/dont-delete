function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email === "karitik47@gmail.com" && password === "ritikkll") {
    window.location = "profile.html";
  } else {
    alert("Wrong email or password");
  }
}

let currentScreen = "";

window.onload = function () {
  if (document.body.classList.contains("profile")) {
    currentScreen = "profile";
  } else if (document.body.classList.contains("menu-page")) {
    currentScreen = "menu";
    showScreen("menu");
  }
};

function showScreen(screenName) {
  document.body.style.backgroundImage =
    url("images/${screenName}.jpg");
  currentScreen = screenName;
}

document.addEventListener("click", function (e) {

  if (currentScreen === "profile") {
    if (e.clientX < 80 && e.clientY < 80) {
      window.location = "menu.html";
    }
  }

  else if (currentScreen === "menu") {
    showScreen("results-list");
  }

  else if (currentScreen === "results-list") {
    showScreen("final-result");
  }

});
