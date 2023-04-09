
function user_validation(event) {
    event.preventDefault(); // prevent form submission

    // get input field values
    const Form = document.getElementById("form");
    const name = document.getElementById("name").value;
    const enroll = document.getElementById("erollment").value;
    const password = document.getElementById("password").value;


    const user_err = document.getElementById("user_error");
    const pass_err = document.getElementById("password_error");
    const enroll_err = document.getElementById("enroll_error");

    // validate input field values
    if (name === "") {
        Form.classList.add("invalid")
        Form.classList.remove("valid")

        user_err.innerHTML = "please fill your name";
        user_err.style.color = "red";

        return false;
    }
    else if (name.length < 3) {
        Form.classList.add("invalid")
        Form.classList.remove("valid")
        user_err.innerHTML = "name must be at least 3 characters long"
        user_err.style.color = "red"
    }
    else {
        Form.classList.remove("valid");
        Form.classList.remove("invalid")
        user_err.innerHTML = "name is successfully entered"
        user_err.style.color = "green"
    }


   
    
    if (enroll == "") {
        Form.classList.add("invalid");
        Form.classList.remove("valid");
        enroll_err.innerHTML = "please fill in filled"
        enroll_err.style.color = "red";
    }
    if (enroll.length < 16) {
        Form.classList.add("invalid")
        Form.classList.remove("valid")
        enroll_err.innerHTML = "enrollment No must be at least 16 charchaters long"
        enroll_err.style.color = "red"
    }
    // if (enroll.includes(/^\d{16}$/)) {
    //     // Enrollment number is valid
    //     enroll.classList.remove("invalid");
    //     enroll.classList.add("valid");
    //     enroll_err.innerHTML = "pelase enter onlynumber"
    //     enroll_err.style.color = "red"
    //     return true;
    // }
    else {
        Form.classList.remove("invalid")
        Form.classList.remove("valid")
        enroll_err.innerHTML = "enrollment number is successfully enterd"
        enroll_err.style.color = "green"
    }
   
   
    if (password == "") {
        Form.classList.add("invalid")
        Form.classList.remove("valid")
        pass_err.innerHTML = "please fill password filled"
        pass_err.style.color = "red"
        return false;
    }
    else if (password.length < 8) {
        Form.classList.add("invalid")
        Form.classList.remove("valid")
        pass_err.innerHTML = "Password must be at least 6 characters long"
        pass_err.style.color = "red"
        return false;
    }
    else {
        Form.classList.remove("valid")
        Form.classList.remove("invalid")
        pass_err.innerHTML = "password is successfully enterd"
        pass_err.style.color = "green"
    }

    const success = document.getElementById("success");
    success.innerHTML = "Your register Form has been success fully registerd"
    success.style.color = "#00f500"
    // return true;

}

const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", user_validation);

// function pass_validation(event) {
//     event.preventDefault();

//     if(password == "") {
//         Fro
//     }
//     if (password.length < 6) {
//         alert("Password must be at least 6 characters long");
//         return false;
//     }

// if (!email.includes("@gmail.com")) {
//     alert("Please enter a valid email address");
//     return false;
// }
// if(enroll.length < 16) {
//     alert("please valid  enter enrollment number")
// }


// if all input fields are valid, submit the form
// alert("Form submitted successfully");
// return true;
// }


// if (/^\d{16}$/.test(enroll)) {
//     // Enrollment number is valid
//     enrollmentNumberInput.classList.remove("invalid");
//     enrollmentNumberInput.classList.add("valid");
//     return true;
// } else {
//     // Enrollment number is invalid
//     enrollmentNumberInput.classList.remove("valid");
//     enrollmentNumberInput.classList.add("invalid");
//     return false;
// }