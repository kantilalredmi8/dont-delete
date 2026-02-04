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

function goMenu() {
  window.location = "menu.html";
}

function openMyPhoto() {
  window.location = "me.html";
}

function openFatherPhoto() {
  window.location = "father.html";
}
