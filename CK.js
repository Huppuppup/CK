const ListPost = JSON.parse(localStorage.getItem("ListPost"))
const Accounts = JSON.parse(localStorage.getItem("Accounts"))
const IMG = document.getElementById("imG")
const currentUser = JSON.parse(localStorage.getItem("CurrentUser"))
document.getElementById("Icon1").style.backgroundColor = currentUser.Icon
document.getElementById("Icon2").style.backgroundColor = currentUser.Icon
var imgDIS = false
document.getElementById("Content").insertAdjacentHTML("afterbegin", `<div class="Post">
    <div class="Post-head">
        <div id="Icon2"></div>
        <div class="Nickname"><p class="abc1">bruh</p></div>
    </div>
    <div class="Post-content">
        <div class="Status"><p class="abc2">Hello</p></div>
        <img class="Status_img" src="https://hips.hearstapps.com/hmg-prod/images/cute-cat-photos-1593441022.jpg?crop=0.670xw:1.00xh;0.167xw,0&resize=640:*" alt="">
    </div>
    <div class="Post-foot">
        <div class="comments-input"></div>
        <div class="comments"></div>
    </div>
</div>`)
function submitIMG() {
    const img1 = document.getElementById("img-input").value
    if (img1 == "") {
        IMG.style.display = "none"
        IMG.innerHTML = ""
    }
    else {
        IMG.style.display = "block"
        if (IMG.innerHTML == img1) {
            IMG.insertAdjacentHTML("afterbegin", `
            <img id= iMg src="${img1}">`)
        }
        else {
            IMG.innerHTML = ""
            IMG.insertAdjacentHTML("afterbegin", `
            <img id= iMg src="${img1}">`)
        }
    }
}
function pickIMG() {
    if (imgDIS == false) {
        document.getElementById("a123").style.display = "flex"
        imgDIS = true
    }
}
function endPickIMG() {
    if (imgDIS == true) {
        document.getElementById("a123").style.display = "none"
        imgDIS = false
    }
}
function creatPost() {
    if (document.getElementById("Crt-input").value == "") {
        alert("You need to write something to post")
    }
    else {
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let hour = date.getHours();
        let minute = date.getMinutes();

        if (document.getElementById("img-input").value == "") {
            document.getElementById("Content").insertAdjacentHTML("afterbegin", `<div class="Post">
        <div class="Post-head">
            <div style="background-color: ${currentUser.Icon};" id="Icon2"></div>
            <div class="Nickname"><p class="abc1">${currentUser.User}</p></div>
        </div>
        <div class="Post-content">
            <div id="Time">${hour}:${minute} ${month}-${day}-${year}</div>
            <div class="Status"><p class="abc2">${document.getElementById("Crt-input").value}</p></div>
        </div>
    </div>`)
            document.getElementById("a123").style.display = "none"
            imgDIS = false
            document.getElementById("img-input").value = ""
            document.getElementById("Crt-input").value = ""
            IMG.style.display = "none"
            IMG.innerHTML = ""
            const Post = {
                User: currentUser.User,
                Icon: currentUser.Icon,
                Hour: hour,
                Minute: minute,
                Month: month,
                Day: day,
                Year: year,
                Status: document.getElementById("Crt-input").value,
            }
        }
        else {
            console.log(document.getElementById("link").value);
            document.getElementById("Content").insertAdjacentHTML("afterbegin", `<div class="Post">
        <div class="Post-head">
            <div style="background-color: ${currentUser.Icon};" id="Icon2"></div>
            <div class="Nickname"><p class="abc1">${currentUser.User}</p></div>
        </div>
        <div class="Post-content">
            <div id="Time">${hour}:${minute} ${month}-${day}-${year}</div>
            <div class="Status"><p class="abc2">${document.getElementById("Crt-input").value}</p></div>
            <img class="Status_img" src="${document.getElementById("img-input").value}" alt="">
        </div>
    </div>`)
            document.getElementById("a123").style.display = "none"
            imgDIS = false
            document.getElementById("img-input").value = ""
            document.getElementById("Crt-input").value = ""
            IMG.style.display = "none"
            IMG.innerHTML = ""
            const Post = {
                User: currentUser.User,
                Icon: currentUser.Icon,
                Hour: hour,
                Minute: minute,
                Month: month,
                Day: day,
                Year: year,
                Status: document.getElementById("Crt-input").value,
                Img: document.getElementById("img-input").value
            }
        }
    }
}
