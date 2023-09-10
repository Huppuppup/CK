function login(){
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    if(JSON.parse(localStorage.getItem("USER")).includes(username)){
        if (JSON.parse(localStorage.getItem("PASS")).includes(password)) {
            if(JSON.parse(localStorage.getItem("USER")).indexOf(username) == JSON.parse(localStorage.getItem("PASS")).indexOf(password)){
                alert("Sign in successfully")
            }
            else{
                alert("Wrong password")
            }
        }
        else{
            alert("Wrong password")
        }
    }
    else{
        alert("Account don't exist")
    }
}