function validate(){
    event.preventDefault();
    if(document.myForm.Company.value == ""){
        alert("Please provide your comapny name!");
        document.myForm.Company.focus();
        return false;
    }

    if(document.myForm.Designation.value == ""){
        alert("Please provide your Designation!");
        document.myForm.Designation.focus();
        return false;
    }
    validateEmail();
    // return (true);
}

function validateEmail(){
    console.log("inside validateEmail")
    var emailID = document.myForm.EMail.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");

    if (emailID == "" || atpos < 1 || (dotpos - atpos < 2)){
        alert("Please enter valid EMail!");
        document.myForm.EMail.focus();
        return false;
    }

    // return (true);
}