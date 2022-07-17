var fnameError = document.getElementById('fname-error')
var emailError = document.getElementById('email-error')
var submitError = document.getElementById('btnError')
var passError = document.getElementById('pass-error')
var unameError = document.getElementById('uname-error')
function validateFName(){
    var name = document.getElementById('fname_id').value;

    if(name.length == 0){
        fnameError.innerHTML = 'Name required';
        return false;
    }
    if(!name.match(/^[a-zA-Z ]+$/)){
        fnameError.innerHTML = 'Name cannot contain numbers';
        console.log("Name error")
        return false;
    }
    console.log("Name error")
    fnameError.innerHTML = '<p>Name Error</p>'
    return true;
}
function validateUName(){
    var uname = document.getElementById('uname_id').value;

    if(uname.length == 0){
        unameError.innerHTML = 'User name required';
        return false;
    }
    if(!uname.match(/^[a-zA-Z ]+$/)){
        unameError.innerHTML = 'User name cannot contain numbers';
        console.log("username Eror")
        return false;
    }
    // unameError.innerHTML = '<i class="fa fa-check" aria-hidden="true" style="color:green;"></i>';
    return true;
}

function validateEmail(){
    var email =  document.getElementById('email_id').value;
    if(email.length==0){
        emailError.innerHTML = 'Email required'
        console.log("Email error")
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email Invalid'
        return false;
    }
    emailError.innerHTML = '<i class="fa fa-check" aria-hidden="true" style="color:green;"></i>';
    return true;
}
function validatePassword(){
    var pass= document.getElementById('pass_id').value;
    console.log(pass)
    if(pass.length==0){
        passError.innerHTML="Please include password"
        console.log("Password error")
        return false;
    }
    if(!pass.match(/^[A-Za-z]\w{7,14}$/)){
        passError.innerHTML ='Password must contain 6 to 20 characters  '
        return false;

    }
    passError.innerHTML ='<i class="fa fa-check" aria-hidden="true" style="color:green;"></i>';
    return true;
}


function validateForm(){
    if(!validateFName() ||  !validateEmail() || !validatePassword() || !validateUName()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit'
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
    }
}