$(document).ready(function () {

    const form = document.getElementsByName("form2")[0];

    form.addEventListener("submit", validateForm);
    const showpass = document.querySelector("#id_showpassword");
    showpass.addEventListener("change", showPassword);


});

function validateForm(e) {
    e.preventDefault();

    let valid = false;

    let pss1 = document.getElementsByName("password1")[0].value;
    let pss2 = document.getElementsByName("password2")[0].value;

    if (pss1 == pss2) {
        valid = true;
    } else {
        valid = false;
        let msg = document.querySelector("#conf_error");
        msg.style = "display: block;";
        msg.innerText = "Both password should be matched!";

    }

    // finally we are checking is everything is good 
    if (valid) {
        // if valid then save data to database
        open("index.html", "_self");
        return true;
    }


}

function showPassword() {
    const showpass = document.querySelector("#id_showpassword");
    let p1 = document.getElementsByName("password1")[0];
    let p2 = document.getElementsByName("password2")[0];

    if (showpass.checked) {
        // so, we are displaying password
        p1.type = "text";
        p2.type = "text";
    } else {
        p1.type = "password";
        p2.type = "password";
    }
}