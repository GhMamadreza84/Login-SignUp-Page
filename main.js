// ELEMENTS
const loginButton = document.querySelector(".login-btn");
const registerButton = document.querySelector(".register-btn");
const formTitle = document.querySelector(".form-title");
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");
const eyeButtons = document.querySelectorAll(".eye-btn");
const navigateLinks = document.querySelectorAll(".navigate-link")
const headerButtons = document.querySelectorAll(".header-btn");
const alertTexts = document.querySelectorAll(".alert-text")

// LOGIN ELEMENTS
const loginEmailInput = document.getElementById("login-email-input")
const loginEmailAlert = document.getElementById("login-email-alert")
const loginPasswordInput = document.getElementById("login-password-input")
const loginPasswordAlert = document.getElementById("login-password-alert")
// REGISTER ELEMENTS
const registerEmailInput = document.getElementById("register-email-input");
const registerEmailAlert = document.getElementById("register-email-alert");
const registerPasswordInput = document.getElementById("register-password-input")
const registerPasswordAlert = document.getElementById("register-password-alert")
const registerConfirmPasswordInput = document.getElementById("register-confirm-passowrd-input");
const registerConfirmPasswordAlert = document.getElementById("register-confirm-password-alert");

// EVENT
registerButton.addEventListener('click',()=>{
  formTitle.innerText = "Register Form";
  // TOGGLE FORM BUTTONS
  registerButton.classList.add("active");
  loginButton.classList.remove("active");
  // SHOW REGISTER FORM AND HIDE LOGIN FORM
  registerForm.classList.add("active");
  loginForm.classList.remove("active");
})

loginButton.addEventListener("click", ()=>{
  formTitle.innerText = "Login Form";
  // TOGGLE FORM BUTTONS
  registerButton.classList.remove("active");
  loginButton.classList.add("active");
  // SHOW LOGIN FORM AND HIDE REGISTER FORM
  registerForm.classList.remove("active");
  loginForm.classList.add("active");
})

// SHOW PASSWORD WHEN CLICK EYE BUTTONS
eyeButtons.forEach((eye)=>{
  eye.addEventListener('click',()=>{
    const input = eye.previousElementSibling;
    if(input.type === "password"){
      // CHANGE INPUT TYPE INTO TEXT
      input.type = "text";
      eye.firstElementChild.classList.replace("fa-eye","fa-eye-slash")
    }else{
      // CHANGE INPUT TYPE INTO PASSWORD
      input.type = "password"
      eye.firstElementChild.classList.replace("fa-eye-slash","fa-eye")
    }
  })
})

// TOGGLE BETWEEN LOGIN & REGISTER FORMS
navigateLinks.forEach((link)=>{
  link.addEventListener("click",(e)=>{
    e.preventDefault;
    const dataLink = link.dataset.link;

    if( dataLink === "register"){
      registerButton.click();
    }else if( dataLink === "login"){
      loginButton.click();
    }
  })
})
//  VALIDATE LOGIN FORM 
loginForm.addEventListener("submit",(e)=>{
  if(!validateLoginForm()){
    e.preventDefault();
  }
})
// VALIDATE LOGIN EMAIL 
loginEmailInput.addEventListener('input',()=>{
  const emailFormat = 
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  if(!loginEmailInput.value.match(emailFormat)){
    loginEmailInput.classList.add('wrong-input')
    loginEmailAlert.innerHTML = "Enter valid email baby! 😐"
  }else{
    loginEmailInput.classList.remove('wrong-input')
    loginEmailAlert.innerHTML = ""
  }
})

// VALIDATE LOGIN PASSWORD
loginPasswordInput.addEventListener("input",()=>{
  if(loginPasswordInput.value.length < 6){
    loginPasswordInput.classList.add('wrong-input')
    loginPasswordAlert.innerText = "Enter 6 character or more"
  }else{
    loginPasswordInput.classList.remove('wrong-input')
    loginPasswordAlert.innerText = ""
  }
})

const validateLoginForm = ()=>{
  // EMAIL 
  const emailFormat = 
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  if(!loginEmailInput.value.match(emailFormat)){
    loginEmailInput.classList.add('wrong-input');
    loginEmailAlert.innerHTML = "Enter valid email baby! 😐";
    return false ;
  }
  // PASSWORD
  if(loginPasswordInput.value.length < 6){
    loginPasswordInput.classList.add('wrong-input');
    loginPasswordAlert.innerHTML = "Enter 6 character or more";
    return false;
  }
  return true ; // if inputs was currect
}

// VALIDATE REGISTER FORM
registerForm.addEventListener("submit",(e)=>{
  if(!validateRegisterForm()){
    e.preventDefault();
  }
})

// VALIDATE REGISTER EMAIL
registerEmailInput.addEventListener('input',()=>{
  const emailFormat = 
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  if(!registerEmailInput.value.match(emailFormat)){
    registerEmailInput.classList.add('wrong-input')
    registerEmailAlert.innerHTML = "Enter valid email baby! 😐"
  }else{
    registerEmailInput.classList.remove('wrong-input')
    registerEmailAlert.innerHTML = ""
  }
})

// VALIDATE REGISTER PASSWORD
registerPasswordInput.addEventListener("input",()=>{
  if(registerPasswordInput.value.length < 6){
    registerPasswordInput.classList.add('wrong-input')
    registerPasswordAlert.innerText = "Enter 6 character or more"
  }else{
    registerPasswordInput.classList.remove('wrong-input')
    registerPasswordAlert.innerText = ""
  }
})

// VALIDATE REGISTER CONFIRM PASSWORD
registerConfirmPasswordInput.addEventListener('input',()=>{
  if(registerConfirmPasswordInput.value.length < 6){
    registerConfirmPasswordInput.classList.add('wrong-input')
    registerConfirmPasswordAlert.innerText = "Enter 6 character or more"
  }else if(registerConfirmPasswordInput.value !== registerPasswordInput.value){
    registerConfirmPasswordInput.classList.add('wrong-input')
    registerConfirmPasswordAlert.innerText = "Password Do Not Match"
  }else{
    registerConfirmPasswordInput.classList.remove('wrong-input')
    registerConfirmPasswordAlert.innerText = ""
  }
})

// VALIDATE REGISTER FORM 
const validateRegisterForm = ()=>{
  // VALIDATE EMAIL 
  const emailFormat = 
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  if(!registerEmailInput.value.match(emailFormat)){
    registerEmailInput.classList.add('wrong-input')
    registerEmailAlert.innerHTML = "Enter valid email baby! 😐"
    return false;
  }
  // VALIDATE PASSWORD
  if(registerPasswordInput.value.length < 6){
    registerPasswordInput.classList.add('wrong-input')
    registerPasswordAlert.innerText = "Enter 6 character or more"
    return false;
  }
  // VALIDATE CONFIRM PASSWORD
  if(registerConfirmPasswordInput.value.length < 6){
    registerConfirmPasswordInput.classList.add('wrong-input')
    registerConfirmPasswordAlert.innerText = "Enter 6 character or more"
    return false;
  }else if(registerConfirmPasswordInput.value !== registerPasswordInput.value){
    registerConfirmPasswordInput.classList.add('wrong-input')
    registerConfirmPasswordAlert.innerText = "Password Do Not Match"
    return false;
  }
  return true; // IF INPUTS WAS CURRECT
}

// RESET ALERT WHEN CLICK TO ANOTHER FORMS
headerButtons.forEach((btn=>{
  btn.addEventListener('click',()=>{
    alertTexts.forEach((alert)=>{
      alert.innerText = "";
    })
  })
}))