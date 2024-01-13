// edUcate
edUcate.addEventListener("click", function () {
    myPopup.classList.add("show");
});
closePopup.addEventListener("click", function () {
    myPopup.classList.remove("show");
});
window.addEventListener("click", function (event) {
    if (event.target == myPopup) {
        myPopup.classList.remove("show");
    }
});

// SE lab
SE.addEventListener("click", function () {
    myPopup2.classList.add("show");
});
closePopup2.addEventListener("click", function () {
    myPopup2.classList.remove("show");
});
window.addEventListener("click", function (event) {
    if (event.target == myPopup2) {
        myPopup2.classList.remove("show");
    }
});

// MM lab
MM.addEventListener("click", function () {
    myPopup3.classList.add("show");
});
closePopup3.addEventListener("click", function () {
    myPopup3.classList.remove("show");
});
window.addEventListener("click", function (event) {
    if (event.target == myPopup3) {
        myPopup3.classList.remove("show");
    }
});