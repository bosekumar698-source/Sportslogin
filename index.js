function loginform() {
  // Declare the variables for username and password
  var user = document.getElementById("uname").value;
  var pass = document.getElementById("pswd").value;

  // Check if username is empty and display an error message
  if (user === "" || user === null) {
    document.getElementById("error").innerHTML = "Please enter username";
    return false;
  }

  // Check if password is empty and display an error message
  if (pass === "" || pass === null) {
    document.getElementById("error").innerHTML = "Please enter password";
    return false;
  }

  // If both fields are not empty, show success message and redirect
  if (user !== "" && pass !== "") {
    var Modal1 = document.getElementById("modal1");
    Modal1.style.display = "block";


    setTimeout(function () {
      // Redirect to Sportsreg.html page after modal is shown
      window.location.href = "Sportsreg.html";
    }, 1000);
    return true;
   }
}



