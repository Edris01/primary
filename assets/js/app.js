
const form = document.querySelector("form");
usernameField = form.querySelector(".username"),
usernameInput = usernameField.querySelector("input"),
passwordField = form.querySelector(".password"),
passwordInput = passwordField.querySelector("input");

form.onsubmit = (e)=>{
  e.preventDefault();
  (usernameInput.value == "") ? usernameField.classList.add("shake", "error") : checkUsername();
  (passwordInput.value == "") ? passwordField.classList.add("shake", "error") : checkPassword();

  setTimeout(()=>{
    usernameField.classList.remove("shake");
    passwordField.classList.remove("shake");
  }, 500);

  usernameInput.onkeyup = ()=>{checkUsername();}
  passwordInput.onkeyup = ()=>{checkPassword();}

  function checkUsername(){
    let pattern = /^[a-zA-Z0-9]*/;
    if(!usernameInput.value.match(pattern)){
      usernameField.classList.add("error");
      usernameField.classList.remove("valid");
      let errorTxt = usernameField.querySelector(".error-txt");
      (usernameInput.value != "") ? errorTxt.innerText = "Enter a valid Username" : errorTxt.innerText = "Username Required";
    }else{
      usernameField.classList.remove("error");
      usernameField.classList.add("valid");
    }
  }

  function checkPassword(){ 
    if(passwordInput.value == ""){
      passwordField.classList.add("error");
      passwordField.classList.remove("valid");
    }else{
      passwordField.classList.remove("error");
      passwordField.classList.add("valid");
    }
  }


  if(!usernameField.classList.contains("error") && !passwordField.classList.contains("error")){
    window.location.href = form.getAttribute("action"); //redirecting user to the specified url which is inside action attribute of form tag
  }
}




















// btn = document.getElementById('btn-login')
// teacherName = document.getElementById('name')
// subjectCode = document.getElementById('code')
// password = document.getElementById('passcode')

// btn.addEventListener('click',
// function validate(teacherName, subjectCode, password){
//     if (teacherName == ""  || subjectCode == "" || password == ""){
//        console.log("please fill in all the fleids thanks")
//     }
// })