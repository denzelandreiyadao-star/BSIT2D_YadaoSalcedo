function login(event){


    event.preventDefault();



    let username = 
    document.getElementById("username").value.trim();


    let password = 
    document.getElementById("password").value.trim();

    let message = 
    document.getElementById("message");

    if(username === "" && password === ""){

        message.style.color = "red";

        message.textContent =
        "Please enter your username or email and password.";

    }else if(username === ""){

        message.style.color = "red";

        message.textContent =
        "Please enter your username or email.";

    }else if(password === ""){

        message.style.color = "red";

        message.textContent =
        "Please enter your password.";

    }else if(password.length < 6){
        message.style.color = "red";

        message.textContent =
        "Password must be at least 6 characters.";
    }else{
        message.style.color = "green";

        message.textContent =
        "Login successful!";
    }
}
function showPassword(){

    let password =
    document.getElementById("password");

    let checkbox =
    document.getElementById("showPass");

    if(checkbox.checked){
        password.type="text";
    }else{
        password.type="password";
    }
}