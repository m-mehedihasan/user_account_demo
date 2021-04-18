let main = function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", checkuser);
};


$(document).ready(main);

function checkuser(e)
{
    e.preventDefault();

    let username = document.querySelector("#id_username");
    let password = document.querySelector("#id_password");

    const form_input = document.querySelector(".form-input");

    if (username.value == "testuser@gmail.com" && password.value == "test1234")
    {
        // proceed
        // hiding 
        document.querySelector(".warn").style = "display: none;";
        document.querySelector(".form1").style = "display: none;";
        document.querySelector(".promot").style = "display: none;";

        form_input.classList.add("loading_animation");
        // animation display
        document.getElementsByClassName("loading")[0].style = "display: block;";

        let ani = document.querySelector(".loading_animation img");
        ani.addEventListener("animationend", goProfile);

    }
    else {
        let warn_msg = document.getElementsByClassName("warn")[0];
        warn_msg.style = "visibility: visible;";
        warn_msg.innerText = "Invalid Username or password !";
    }

}

function goProfile()
{

    open("index.html", "_self");
}