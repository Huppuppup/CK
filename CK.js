const ListPost = JSON.parse(localStorage.getItem("ListPost"))
const ListFriend = JSON.parse(localStorage.getItem("ListFriend"))
const USER = JSON.parse(localStorage.getItem("USER"))
const IMG = document.getElementById("imG")
const Account = JSON.parse(localStorage.getItem("Accounts"))
const currentUser = JSON.parse(localStorage.getItem("CurrentUser"))
const currentPlace = USER.indexOf(currentUser.User)
const currentListFriend = ListFriend[USER.indexOf(currentUser.User)]
document.getElementById("Icon1").style.backgroundColor = currentUser.Icon
var imgDIS = false
var Friend = false
const bruhPost = JSON.parse(localStorage.getItem("bruhPost"))
// const bruhPost = [
//     {
//         User: "Red",
//         Icon: "Red",
//         Hour: 15,
//         Minute: 30,
//         Month: 9,
//         Day: 15,
//         Year: 2023,
//         Status: "Apple",
//         Img: "https://static.manitobacooperator.ca/wp-content/uploads/2018/11/apple_GettyImages186843005_cmyk.jpg"
//     },
//     {
//         User: "Green",
//         Icon: "Green",
//         Hour: 8,
//         Minute: 45,
//         Month: 5,
//         Day: 3,
//         Year: 2023,
//         Status: "Lettuce",
//         Img: "https://cdn.britannica.com/77/170677-050-F7333D51/lettuce.jpg"
//     },
//     {
//         User: "Yellow",
//         Icon: "Yellow",
//         Hour: 0,
//         Minute: 12,
//         Month: 2,
//         Day: 29,
//         Year: 2023,
//         Status: "Banana",
//         Img: "https://m.media-amazon.com/images/I/51ebZJ+DR4L._AC_UF1000,1000_QL80_.jpg"
//     },
// ]



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
            <div onclick="inspect('${currentUser.User}')" style="background-color: ${currentUser.Icon};" id="Icon2"></div>
            <div onclick="inspect('${currentUser.User}')" class="Nickname"><p class="abc1">${currentUser.User}</p></div>
        </div>
        <div class="Post-content">
            <div id="Time">${hour}:${minute} / ${month}-${day}-${year}</div>
            <div class="Status"><p class="abc2">${document.getElementById("Crt-input").value}</p></div>
        </div>
    </div>`)
            document.getElementById("a123").style.display = "none"
            imgDIS = false
            IMG.style.display = "none"
            IMG.innerHTML = ""
        }
        else {
            document.getElementById("Content").insertAdjacentHTML("afterbegin", `<div class="Post">
        <div class="Post-head">
            <div onclick="inspect(${currentUser.User})" style="background-color: ${currentUser.Icon};" id="Icon2"></div>
            <div onclick="inspect(${currentUser.User})" class="Nickname"><p class="abc1">${currentUser.User}</p></div>
        </div>
        <div class="Post-content">
            <div id="Time">${hour}:${minute} / ${month}-${day}-${year}</div>
            <div class="Status"><p class="abc2">${document.getElementById("Crt-input").value}</p></div>
            <img class="Status_img" src="${document.getElementById("img-input").value}" alt="">
        </div>
    </div>`)
            document.getElementById("a123").style.display = "none"
            imgDIS = false
            IMG.style.display = "none"
            IMG.innerHTML = ""
        }
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
        ListPost[currentPlace].unshift(Post)
        localStorage.setItem("ListPost", JSON.stringify(ListPost))
        bruhPost.unshift(Post)
        localStorage.setItem("bruhPost", JSON.stringify(bruhPost))
        document.getElementById("img-input").value = ""
        document.getElementById("Crt-input").value = ""
    }
}
// for (let a = 0; a < ListPost.length; a+=1) {
//     currentListPost = ListPost[a]
//     for (let i = currentListPost.length - 1; i >= 0; i=i-1) {
//         if (currentListPost.length == 0) {
//             continue
//         }
//         else{
//             bruhPost.unshift(currentListPost[i])
//         }
//     }
// }

for (let i = 0; i < bruhPost.length; i += 1) {
    if (bruhPost[i].Img == "") {
        document.getElementById("Content").insertAdjacentHTML("beforeend", `<div class="Post">
    <div class="Post-head">
        <div onclick="inspect('${bruhPost[i].User}')" style="background-color: ${bruhPost[i].Icon};" id="Icon2"></div>
        <div onclick="inspect('${bruhPost[i].User}')" class="Nickname"><p class="abc1">${bruhPost[i].User}</p></div>
    </div>
    <div class="Post-content">
        <div id="Time">${bruhPost[i].Hour}:${bruhPost[i].Minute} / ${bruhPost[i].Month}-${bruhPost[i].Day}-${bruhPost[i].Year}</div>
        <div class="Status"><p class="abc2">${bruhPost[i].Status}</p></div>
    </div>
</div>`)
    }
    else {
        document.getElementById("Content").insertAdjacentHTML("beforeend", `<div class="Post">
    <div class="Post-head">
        <div onclick="inspect('${bruhPost[i].User}')" style="background-color: ${bruhPost[i].Icon};" id="Icon2"></div>
        <div onclick="inspect('${bruhPost[i].User}')" class="Nickname"><p class="abc1">${bruhPost[i].User}</p></div>
    </div>
    <div class="Post-content">
        <div id="Time">${bruhPost[i].Hour}:${bruhPost[i].Minute} / ${bruhPost[i].Month}-${bruhPost[i].Day}-${bruhPost[i].Year}</div>
        <div class="Status"><p class="abc2">${bruhPost[i].Status}</p></div>
        <img class="Status_img" src="${bruhPost[i].Img}" alt="">
    </div>
</div>`)
    }
}
function out() {
    currentUser.User = ""
    currentUser.Pass = ""
    currentUser.Icon = ""
    localStorage.setItem("CurrentUser", JSON.stringify(currentUser))
}
function inspect(x) {
    const xUser = x
    const xIcon = Account[USER.indexOf(x)].icon
    const xListPost = ListPost[USER.indexOf(x)]
    document.getElementById("vsContent").innerHTML = ""
    document.getElementById("Home").style.backgroundColor = "black"
    document.getElementById("Home").style.color = "white"
    document.getElementById("ListFriend").style.backgroundColor = "black"
    document.getElementById("ListFriend").style.color = "white"
    document.getElementById("MyAccount").style.backgroundColor = "black"
    document.getElementById("MyAccount").style.color = "white"
    document.getElementById("Post-crt").style.display = "none"
    document.getElementById("Content").style.display = "none"
    document.getElementById("Profile").style.display = "flex"
    document.getElementById("vsContent").style.display = "flex"
    document.getElementById("Icon3").style.backgroundColor = xIcon
    document.getElementById("c123").innerHTML = xUser
    if (xUser == currentUser.User) {
        document.getElementById("addFriend").style.display = "none"
        document.getElementById("Profile").style.width = "540px"
        if (xListPost.length == 0) {
            document.getElementById("Content").insertAdjacentHTML("beforeend", "There is no post")
        }
        else {
            for (let i = 0; i < xListPost.length; i += 1) {
                if (xListPost[i].Img == "") {
                    document.getElementById("vsContent").insertAdjacentHTML("beforeend", `<div class="Post">
                <div class="Post-head">
                    <div style="background-color: ${xListPost[i].Icon};" id="Icon2"></div>
                    <div class="Nickname"><p class="abc1">${bruhPost[i].User}</p></div>
                </div>
                <div class="Post-content">
                    <div id="Time">${xListPost[i].Hour}:${xListPost[i].Minute} / ${xListPost[i].Month}-${xListPost[i].Day}-${xListPost[i].Year}</div>
                    <div class="Status"><p class="abc2">${xListPost[i].Status}</p></div>
                </div>
            </div>`)
                }
                else {
                    document.getElementById("vsContent").insertAdjacentHTML("beforeend", `<div class="Post">
                <div class="Post-head">
                    <div style="background-color: ${xListPost[i].Icon};" id="Icon2"></div>
                    <div class="Nickname"><p class="abc1">${xListPost[i].User}</p></div>
                </div>
                <div class="Post-content">
                    <div id="Time">${xListPost[i].Hour}:${xListPost[i].Minute} / ${xListPost[i].Month}-${xListPost[i].Day}-${xListPost[i].Year}</div>
                    <div class="Status"><p class="abc2">${xListPost[i].Status}</p></div>
                    <img class="Status_img" src="${xListPost[i].Img}" alt="">
                </div>
            </div>`)
                }
            }
        }
    }
    else {
        document.getElementById("addFriend").style.display = "flex"
        document.getElementById("Profile").style.width = "700px"
        Friend = false
        if (currentListFriend.includes(document.getElementById("c123").innerHTML)) {
            Friend = true
            document.getElementById("addFriend").innerHTML = "Unfriend"
        }
        else {
            Friend = false
            document.getElementById("addFriend").innerHTML = "Add friend"
        }
        if (xListPost.length == 0) {
            document.getElementById("Content").insertAdjacentHTML("beforeend", "There is no post")
        }
        else {
            for (let i = 0; i < xListPost.length; i += 1) {
                if (xListPost[i].Img == "") {
                    document.getElementById("vsContent").insertAdjacentHTML("beforeend", `<div class="Post">
                <div class="Post-head">
                    <div style="background-color: ${xListPost[i].Icon};" id="Icon2"></div>
                    <div class="Nickname"><p class="abc1">${bruhPost[i].User}</p></div>
                </div>
                <div class="Post-content">
                    <div id="Time">${xListPost[i].Hour}:${xListPost[i].Minute} / ${xListPost[i].Month}-${xListPost[i].Day}-${xListPost[i].Year}</div>
                    <div class="Status"><p class="abc2">${xListPost[i].Status}</p></div>
                </div>
            </div>`)
                }
                else {
                    document.getElementById("vsContent").insertAdjacentHTML("beforeend", `<div class="Post">
                <div class="Post-head">
                    <div style="background-color: ${xListPost[i].Icon};" id="Icon2"></div>
                    <div class="Nickname"><p class="abc1">${xListPost[i].User}</p></div>
                </div>
                <div class="Post-content">
                    <div id="Time">${xListPost[i].Hour}:${xListPost[i].Minute} / ${xListPost[i].Month}-${xListPost[i].Day}-${xListPost[i].Year}</div>
                    <div class="Status"><p class="abc2">${xListPost[i].Status}</p></div>
                    <img class="Status_img" src="${xListPost[i].Img}" alt="">
                </div>
            </div>`)
                }
            }
        }
    }
}
function back() {
    document.getElementById("vsContent").innerHTML = ""
    document.getElementById("Post-crt").style.display = "flex"
    document.getElementById("Content").style.display = "block"
    document.getElementById("Profile").style.display = "none"
    document.getElementById("vsContent").style.display = "none"
    document.getElementById("vsContent").innerHTML = ""
    document.getElementById("p123").style.display = "none"
}


function add() {
    if (Friend == true) {
        currentListFriend.splice(currentListFriend.indexOf(document.getElementById("c123").innerHTML), 1)
        Friend = false
        document.getElementById("addFriend").innerHTML = "Add friend"
        localStorage.setItem("ListFriend", JSON.stringify(ListFriend))
    }
    else if (Friend == false) {
        currentListFriend.unshift(document.getElementById("c123").innerHTML)
        Friend = true
        document.getElementById("addFriend").innerHTML = "Unfriend"
        localStorage.setItem("ListFriend", JSON.stringify(ListFriend))
    }
}

function MyAccount() {
    const currentListPost = ListPost[USER.indexOf(currentUser.User)]
    document.getElementById("Post-crt").style.display = "none"
    document.getElementById("Content").style.display = "none"
    document.getElementById("Profile").style.display = "flex"
    document.getElementById("vsContent").style.display = "flex"
    document.getElementById("Icon3").style.backgroundColor = currentUser.Icon
    document.getElementById("c123").innerHTML = currentUser.User
    document.getElementById("p123").style.display = "none"
    if (currentListPost.length == 0) {
        document.getElementById("Content").insertAdjacentHTML("beforeend", "There is no post")
    }
    else {
        for (let i = 0; i < currentListPost.length; i += 1) {
            if (currentListPost[i].Img == "") {
                document.getElementById("addFriend").style.display = "none"
                document.getElementById("Profile").style.width = "540px"
                document.getElementById("vsContent").insertAdjacentHTML("beforeend", `<div class="Post">
            <div class="Post-head">
                <div style="background-color: ${currentListPost[i].Icon};" id="Icon2"></div>
                <div class="Nickname"><p class="abc1">${bruhPost[i].User}</p></div>
            </div>
            <div class="Post-content">
                <div id="Time">${currentListPost[i].Hour}:${currentListPost[i].Minute} / ${currentListPost[i].Month}-${currentListPost[i].Day}-${currentListPost[i].Year}</div>
                <div class="Status"><p class="abc2">${currentListPost[i].Status}</p></div>
            </div>
        </div>`)
            }
            else {
                document.getElementById("addFriend").style.display = "none"
                document.getElementById("Profile").style.width = "540px"
                document.getElementById("vsContent").insertAdjacentHTML("beforeend", `<div class="Post">
            <div class="Post-head">
                <div style="background-color: ${currentListPost[i].Icon};" id="Icon2"></div>
                <div class="Nickname"><p class="abc1">${currentListPost[i].User}</p></div>
            </div>
            <div class="Post-content">
                <div id="Time">${currentListPost[i].Hour}:${currentListPost[i].Minute} / ${currentListPost[i].Month}-${currentListPost[i].Day}-${currentListPost[i].Year}</div>
                <div class="Status"><p class="abc2">${currentListPost[i].Status}</p></div>
                <img class="Status_img" src="${currentListPost[i].Img}" alt="">
            </div>
        </div>`)
            }
        }
    }
}
function changeColorH() {
    document.getElementById("Home").style.backgroundColor = "black"
    document.getElementById("Home").style.color = "white"
    document.getElementById("ListFriend").style.backgroundColor = "black"
    document.getElementById("ListFriend").style.color = "white"
    document.getElementById("MyAccount").style.backgroundColor = "black"
    document.getElementById("MyAccount").style.color = "white"
    document.getElementById("Home").style.backgroundColor = "white"
    document.getElementById("Home").style.color = "black"
}
function changeColorL() {
    document.getElementById("Home").style.backgroundColor = "black"
    document.getElementById("Home").style.color = "white"
    document.getElementById("ListFriend").style.backgroundColor = "black"
    document.getElementById("ListFriend").style.color = "white"
    document.getElementById("MyAccount").style.backgroundColor = "black"
    document.getElementById("MyAccount").style.color = "white"
    document.getElementById("ListFriend").style.backgroundColor = "white"
    document.getElementById("ListFriend").style.color = "black"
}
function changeColorM() {
    document.getElementById("Home").style.backgroundColor = "black"
    document.getElementById("Home").style.color = "white"
    document.getElementById("ListFriend").style.backgroundColor = "black"
    document.getElementById("ListFriend").style.color = "white"
    document.getElementById("MyAccount").style.backgroundColor = "black"
    document.getElementById("MyAccount").style.color = "white"
    document.getElementById("MyAccount").style.backgroundColor = "white"
    document.getElementById("MyAccount").style.color = "black"
}



function genFrd() {
    document.getElementById("Profile").style.display = "none"
    document.getElementById("vsContent").innerHTML = ""
    document.getElementById("Post-crt").style.display = "none"
    document.getElementById("Content").style.display = "none"
    document.getElementById("vsContent").style.display = "flex"
    if (currentListFriend.length == 0) {
        document.getElementById("p123").style.display = "block"
        document.getElementById("vsContent").style.display = "none"
    }
    else if (currentListFriend.length > 0) {
        for (let i = 0; i < currentListFriend.length; i += 1) {
            console.log(i);
            document.getElementById("vsContent").insertAdjacentHTML("afterbegin", `<div id="Profile2">
            <div style="background-color: ${Account[USER.indexOf(currentListFriend[i])].icon};" id="Icon32"></div>
            <div id="vsName2"><p id="c1232">${currentListFriend[i]}</p></div>
            <div onclick="Unfriend('${currentListFriend[i]}')" id="addFriend2">Unfriend</div>
        </div>
        <br></br>`)
        }
    }
}
function Unfriend(b) {
    console.log(b);
    document.getElementById("Profile").style.display = "none"
    currentListFriend.splice(currentListFriend.indexOf(b),1)
    localStorage.setItem("ListFriend", JSON.stringify(ListFriend))
    document.getElementById("vsContent").innerHTML = ""
    document.getElementById("Post-crt").style.display = "none"
    document.getElementById("Content").style.display = "none"
    document.getElementById("vsContent").style.display = "flex"
    if (currentListFriend.length == 0) {
        document.getElementById("p123").style.display = "block"
        document.getElementById("vsContent").style.display = "none"
    }
    else if (currentListFriend.length > 0) {
        for (let i = 0; i < currentListFriend.length; i += 1) {
            console.log(i);
            document.getElementById("vsContent").insertAdjacentHTML("afterbegin", `<div id="Profile2">
            <div style="background-color: ${Account[USER.indexOf(currentListFriend[i])].icon};" id="Icon32"></div>
            <div id="vsName2"><p id="c1232">${currentListFriend[i]}</p></div>
            <div onclick="Unfriend('${currentListFriend[i]}')" id="addFriend2">Unfriend</div>
        </div>
        <br></br>`)
        }
    }
}