function login(){
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if(email === "karitik47@gmail.com" && password === "ritikkll"){
    window.location = "profile.html";
  } else {
    alert("Wrong Email or Password");
  }
}
