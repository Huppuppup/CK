
const ListPost = JSON.parse(localStorage.getItem("ListPost")) ?? [];
const Accounts = JSON.parse(localStorage.getItem("Accounts")) ?? [];
const USER = JSON.parse(localStorage.getItem("USER")) ?? [];
const PASS = JSON.parse(localStorage.getItem("PASS")) ?? [];
function submit() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const icon = document.getElementById("icon").value;

    if (isUsed(username)) {
        alert("Username not available")
    }
    else {

        Accounts.push({
           username, password, icon
        })
        const currentUser = {
            User : username,
            Pass : password,
            Icon : icon
        }
        USER.push(username)
        PASS.push(password)
        ListPost.push([])
        localStorage.setItem("ListPost",JSON.stringify(ListPost))
        localStorage.setItem("CurrentUser", JSON.stringify(currentUser))
        localStorage.setItem("Accounts", JSON.stringify(Accounts))
        localStorage.setItem("USER", JSON.stringify(USER))
        localStorage.setItem("PASS", JSON.stringify(PASS))

        alert("Sign up successfully")
    }
    return false;
}

function isUsed(x) {
    return Accounts.some((user) => user.username == x);
}