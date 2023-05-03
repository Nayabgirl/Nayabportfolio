var tablinks = document.getElementsByClassName(".tab-links");
var tabcontents = document.getElementsByClassName(".tab-content");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classlist.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classlist.remove("active-tab");
    }
    Event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}
let menubtn = document.querySelector(".menu2");
let fs=document.querySelector(".fs");
var flag = 0;
menubtn.addEventListener("click", function () {
    if (flag === 0) {
        fs.style.opacity = "1";
        flag = 1;
    } else {
        fs.style.opacity = "0";
        flag = 0;
    }

})






