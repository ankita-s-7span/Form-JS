document.getElementById("myButton").onclick = function () {
  event.preventDefault();
  let company = document.getElementById("company");
  let designation = document.getElementById("designation");
  let app_link = document.getElementById("application-link");

  if (company.value == "") {
    alert("Please provide your comapny name!");
    company.focus();
    return false;
  }

  if (designation.value == "") {
    alert("Please provide your Designation!");
    designation.focus();
    return false;
  }

  if (app_link.value == "") {
    alert("Please provide your Application Link!");
    app_link.focus();
    return false;
  }

  validateEmail();
  return (true);

}

function validateEmail() {
  let email = document.getElementById("email");
  atpos = email.value.indexOf("@");
  dotpos = email.value.lastIndexOf(".");
  console.log(`atpos: ${atpos}`);
  console.log(`dotpos: ${dotpos}`);

  if (email.value == "" || atpos < 1 || dotpos - atpos < 2) {
    alert("Please enter valid EMail!");
    email.focus();
    return false;
  }
  // return (true);
}
