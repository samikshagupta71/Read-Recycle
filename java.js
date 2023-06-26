const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
const show = () => {
  var input = document.getElementById("password");
  if (input.type === "password") {
    input.type = "text";
    $("#eye").attr("class","fa-solid fa-eye");
  } else {
    input.type = "password";
    $("#eye").attr("class","fa-solid fa-eye-slash");

  }
};
const showpass = () => {
  var input = document.getElementById("signup_password");
  if (input.type === "password") {
    input.type = "text";
    $("#eye1").attr("class","fa-solid fa-eye");
  } else {
    input.type = "password";
    $("#eye1").attr("class","fa-solid fa-eye-slash");
  }
};

const showpassword = () => {
  var input = document.getElementById("signuppassword");
  if (input.type === "password") {
    input.type = "text";
    $("#eye2").attr("class","fa-solid fa-eye");
  } else {
    input.type = "password";
    $("#eye2").attr("class","fa-solid fa-eye-slash");
  }
};
function Formchecking(){
  var check = true;
  clear();
  var passwordcheck = document.forms['signup']["pass"].value;
  var cpasswordcheck = document.forms['signup']["cpass"].value;
  if (cpasswordcheck != passwordcheck){
      set("cpasswordcheck", "*Password and Confirm password does not match");
      check = false;
  }
  return check;
}
function clear(){
  errors = document.getElementsByClassName('errormessage');
  for(let item of errors)
  {
      item.innerHTML = "";
  }
}
function set(id, error){
  element = document.getElementById(id);
  element.getElementsByClassName('errormessage')[0].innerHTML = error;
}

