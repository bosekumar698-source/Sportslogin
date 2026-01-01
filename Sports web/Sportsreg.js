function register() {
  // Get the values of each field
  const fname = document.getElementById("fname").value; // Corrected: Add quotes to getElementById('fname')
  const gender = document.querySelector('input[name="Gender"]:checked')?.value;
  const dob = document.querySelector('input[type="date"]').value;
  const age = document.getElementById("age").value;
  const address = document.getElementById("address").value;
  const mobile = document.getElementById("mobile").value;
  const email = document.getElementById("email").value;
  const Sport = document.getElementById("Sport").value;

  // Check if all required fields are filled
  if ( !fname ||!gender ||!dob ||!age ||!address ||!mobile ||!email ||!Sport ) {
    
    //alert("Please fill in all the fields.");
    // return;

    //show eror message
    var notify = document.getElementById ("Notify");
    notify.style.display = "block";
    
     // Show the overlay
    document.getElementById("overlay").style.display = "block";
    return ;
    
  }
  else {
  //const message=document.getElementById(register);
  //alert("Registration Successful!");

  // var popup = document.getElementById("message");
  // popup.textContent = "Registration Successful!";

  //show success message
  
    // Show success message if all fields are filled
    var SuccessModal = document.getElementById("modal");
    SuccessModal.style.display = "block";

    // Show the overlay (background blur)
    document.getElementById("overlay").style.display = "block";

    // After 1 second, hide the success message and redirect to Sportsreg.html
    setTimeout(function() {
      SuccessModal.style.display = "none";  // Hide the success message
      document.getElementById("overlay").style.display = "none"; 

      

      // Redirect to Sportsreg.html
      window.location.href = "Sportsreg.html";
    }, 1000);  // 1000ms = 1 second
  }

  return true;  // Allow form submission if everything is correct
}
function closeModal() {

  //close the error modal
  var notify = document.getElementById("Notify");
  notify.style.display = "none";
  
  // close the overlay  
  var overlay = document.getElementById("overlay");
  overlay.style.display = "none";

  // Reset the form
  document.getElementById("register").reset();
  
}
