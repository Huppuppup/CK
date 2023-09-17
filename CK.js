const ListPost = JSON.parse(localStorage.getItem("ListPost"))
const USER = JSON.parse(localStorage.getItem("USER"))
const IMG = document.getElementById("imG")
const Account = JSON.parse(localStorage.getItem("Accounts"))
const currentUser = JSON.parse(localStorage.getItem("CurrentUser"))
const currentPlace = USER.indexOf(currentUser.User)
document.getElementById("Icon1").style.backgroundColor = currentUser.Icon
var imgDIS = false
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
        localStorage.setItem("ListPost",JSON.stringify(ListPost))
        bruhPost.unshift(Post)
        localStorage.setItem("bruhPost",JSON.stringify(bruhPost))
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

for(let i = 0; i < bruhPost.length; i+=1){
    if(bruhPost[i].Img == ""){
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
    else{
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
    localStorage.setItem("CurrentUser",JSON.stringify(currentUser))
}
function inspect(x) {
    const xUser = x
    const xIcon = Account[USER.indexOf(x)].icon
    const xListPost = ListPost[USER.indexOf(x)]
    console.log(xUser);
    console.log(xIcon);
    console.log(xListPost);
}