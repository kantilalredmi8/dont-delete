function login() {

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email === "karitik47@gmail.com" && password === "ritikkll") {
    window.location = "profile.html";
  }
  else {
    alert("Wrong email or password");
  }
}

// Step 2 → Profile → Menu
function goMenu() {
  window.location = "menu.html";
}

// Step 3 → Menu → Your Photo
function openMyPhoto() {
  window.location = "me.html";
}

// Step 4 → Your Photo → Father Photo
function openFatherPhoto() {
  window.location = "father.html";
}
