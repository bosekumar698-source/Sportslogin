function account() {
  // declare variable
  var name = document.getElementById("regname").value.trim();
  var email = document.getElementById("mail").value.trim();
  var pswd111 = document.getElementById("pswd1").value.trim();
  var pswd11 = document.getElementById("pswd11").value.trim();

  // check name field
  if (name === "" || name === null) {
    document.getElementById("error1").innerHTML = "Please enter name";
    return false;
  }

  // check email field
  if (email === "" || email === null) {
    document.getElementById("error1").innerHTML = "Please enter mail";
    return false;
  }

  // check password
  if (pswd111 === "" || pswd111 === null) {
    document.getElementById("error1").innerHTML = "please enter password";
    return false;
  }

  // check confirm password
  if (pswd11 === "" || pswd11 === null) {
    document.getElementById("error1").innerHTML =
      "please enter confirm password";
    return false;
  }

  // check valid password
  if (pswd111 !== pswd11) {
    document.getElementById("error1").innerHTML = "Password do not match";
    return false;
  }

  // All field to fill return the success message
  if (name !== "" && email !== "" && pswd111 !== "" && pswd11 !== "") {
    var Modal1 = document.getElementById("modal2");
    Modal1.style.display = "block";

    setTimeout(function () {
      // Redirect to Sportsreg.html page after modal is shown
      window.location.href = "index.html";
    }, 1000);
    return true;
  }
}


