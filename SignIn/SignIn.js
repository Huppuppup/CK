const Account = JSON.parse(localStorage.getItem("Accounts"))
const USER = JSON.parse(localStorage.getItem("USER"))


function login(){
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    if(JSON.parse(localStorage.getItem("USER")).includes(username)){
        if (JSON.parse(localStorage.getItem("PASS")).includes(password)) {
            if(JSON.parse(localStorage.getItem("USER")).indexOf(username) == JSON.parse(localStorage.getItem("PASS")).indexOf(password)){
                alert("Sign in successfully")
                icon = Account[USER.indexOf(username)].icon
                const currentUser = {
                    User : username,
                    Pass : password,
                    Icon : icon
                }
                localStorage.setItem("CurrentUser",JSON.stringify(currentUser))
                window.location.replace("http://127.0.0.1:5500/CK.html")
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
