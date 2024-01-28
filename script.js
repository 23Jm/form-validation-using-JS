let nameError=document.querySelector("#name-error");
let phoneError=document.querySelector("#phone-error");
let emailError=document.querySelector("#email-error");
let messageError=document.querySelector("#message-error");
let submitError=document.querySelector("#submit-error");

function validateName(){
    let fullName=document.getElementById("name").value;
    if(fullName.length==0){
        nameError.innerHTML="Name is required";
        return false;
    }
    if (!fullName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
      nameError.innerHTML = "Write full name";
      return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
function validatePhone(){
    let phoneNumber=document.getElementById("phone").value;
    if(phoneNumber.length==0)
    {
        phoneError.innerHTML="phone number is required"
        return false;
    }
    if(phoneNumber.length!==10)
    {
       phoneError.innerHTML="Phone number is required";
       return false;
    }
    if(!phoneNumber.match(/^[0-9]{10}$/))
    {
       phoneError.innerHTML="Phone number must be 10 digits"
    }
    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
function validateEmail(){
    let email=document.getElementById("email").value;
    if(email.length==0)
    {
        emailError.innerHTML="Email is required";
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
      // includes("@"&&".com")
      emailError.innerHTML = "Email Invalid";
      return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
function validateMessage()
{
    let message=document.getElementById("message").value;
    let required=30;
    let left=required-message.length;
    if(left>0)
    {
        messageError.innerHTML=left+" more characters required";
        return false;
    }
    messageError.innerHTML='<i class="fas fa-check-circle"></i>';
    return true;
}
function validateForm(){
    if(!validateEmail() || !validateName() || !validatePhone() || !validateMessage())
     {
        submitError.style.display="block";
        submitError.innerHTML="Please fix the error to submit"
        setTimeout(function(){submitError.style.display = 'none';},3000);
        return false;
     }
}