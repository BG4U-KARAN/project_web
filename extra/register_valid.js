
// function clearErrors(){

//     errors=document.getElementsByClassName('fromerror');
//     for(let item of errors)
//     {
//         item.innerHTML="";
//     }
// }
// function seterror(id,error){
// //sets error inside tag of id
// element=document.getElementById(id);
// element.getElementsByClassName('fromerror')[0].innerHTML=error;
// }
// function validateForm(){
// let returnval=true;
// clearErrors();
// let name=document.forms['myform']["fname"].value;
// if(name.length<5){
//     seterror("name","Length of name is too short");
//     returnval=false;

// }

// if(name.length==0){
//     seterror("name","Enter your name");
//     returnval=false;
// }
// var email=document.forms['myform']["femail"].value;
// if(email.length>20){
// seterror("email","enter valid email");
// returnval=false;
// }
// var phone=document.forms['myform']["fphone"].value;
// if(phone.length!=10){
// seterror("phone","enter valid phone number");
// returnval=false;
// }
// var pass=document.forms['myform']["fpass"].value;
// if(pass.length<6){

// seterror("pass","Password must be atleast 6 charecters");
// returnval=false;
// }
// var cpass=document.forms['myform']["fcpass"].value;
// if(cpass!=pass){

// seterror("cpass","Password and confirm password should be matched");
// returnval=false;
// }

// return returnval;
// }

const clearErrors = () => {
    errors = document.getElementsByClassName('fromerror');
    for (let item of errors) {
        item.innerHTML = "";
    }
}


const setError = (id, err) => {
    let ele = document.getElementById(id);
    ele.getElementsByClassName('fromerror')[0].innerHTML = err;
    ele.style.color = "red";
}

const validation = () => {
    returnval = true;
    clearErrors();
    let name = document.forms["Form"]["username"].value;
    if (name.length < 3) {
        setError("name", "Length of name is too short");
        returnval = false;
    }
    if (name.length == 0) {
        setError("name", "Enter your name");
        returnval = false;
    }

    let enroll = document.getElementById('enrollment').value;
    if(enroll.length < 16 || enroll.length<14) {
        setError("enroll", "please enter valid enrollment number.");
        returnval = false;
    }

    if(!enroll.test(/[0-9]$/)) {
        setError("enroll", "please enter only number");
        returnval = false;
    }

    let pass = document.getElementById('password').value;
    if(pass.length < 8) {
        setError('pass', 'password at least 8 characters long!');
        returnval = false;
    }
}