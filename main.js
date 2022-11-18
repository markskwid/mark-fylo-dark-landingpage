let myForm = document.getElementById("myForm");
let email = document.getElementById("email");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  var regexEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gim;

  if (!email.value.match(regexEmail)) {
    document.querySelector("#myForm span").style.display = "block";
  } else {
    myForm.reset();
    document.querySelector("#myForm span").style.display = "none";
  }
});
