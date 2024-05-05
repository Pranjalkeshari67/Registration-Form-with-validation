const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');





form.addEventListener("input", e => {
    e.preventDefault();
    validateinputs();
});



// -------------------methods start--------------------------

const seterror = (element, message) => {
    let formcontrol = element.parentElement;
    let errordisplay = formcontrol.querySelector(".error");
    console.log(errordisplay);

    errordisplay.innerText = message;

    formcontrol.classList.add("error");
    formcontrol.classList.remove("success");

};

const setsuccess = (element) => {
    let formcontrol = element.parentElement;
    let errordisplay = formcontrol.querySelector(".error");

    errordisplay.innerText = "";
    formcontrol.classList.add("success");
    formcontrol.classList.remove("error");
};

// regular expression
const isValidEmail = (email) => {
    const check = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return check.test(String(email).toLowerCase());
};
// regular expression


// -------------------methods end--------------------------



// validation method define start-----------------------

const validateinputs = () => {
    const usernamevalue = username.value.trim();
    const emailvalue = email.value.trim();
    const passwordvalue = password.value.trim();
    const passwordvalue2 = password2.value.trim();


    // validation for username

    if (usernamevalue === "") {
        seterror(username, "username must required");
    }
    else {
        setsuccess(username);
    }

    // validation for username      

    // validation for email
    if (emailvalue === "") {
        seterror(email, "Email must required")
    }
    else if (!isValidEmail(emailvalue)) {
        seterror(email, "Provide a valid email");
    }
    else {
        setsuccess(email);
    }
    // validation for email



    if (passwordvalue === "") {
        seterror(password, "Password is required");
    }
    else if (passwordvalue.length < 8) {
        seterror(password, "Password must contain 8 digits");
    }
    else {
        setsuccess(password);
    }



    if (passwordvalue2=== "") {
        seterror(password2, "Please confirm password")
    }
    else if (passwordvalue !== passwordvalue2) {
        seterror(password2, "Enter matching password");
    }
    else {
        setsuccess(password2);
    }


}

// validation method define end---------------------------------


