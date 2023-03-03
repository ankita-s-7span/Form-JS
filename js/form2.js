//window.location.href = "https://www.google.com";
let myForm = document.getElementById("myForm");

myForm.addEventListener("submit", function (event) {
  // stop form submission
  event.preventDefault();
  console.log("inside event listener");

  let company = document.getElementById("company");
  let designation = document.getElementById("designation");
  let app_link = document.getElementById("application-link");
  let error_msg = document.getElementById("error_msg");

  const isValidUrl = (urlString) => {
    var urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + // validate protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // validate fragment locator
    return !!urlPattern.test(urlString);
  };

  if (company.value == "") {
    company.focus();
    error_msg.innerHTML = "Please fill out this field.";
    return false;
  }  

  if (designation.value == "") {
    alert("Please provide your Designation!");
    designation.focus();
    return false;
  }

  if (app_link.value == "" || !isValidUrl(app_link.value)) {
    alert("Please provide valid Application Link!");
    app_link.focus();
    return false;
  }

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
  
  myForm.reset();
});
