var elHeader = document.querySelector(".head");
var elBtn = document.querySelector(".head__btn");


elBtn.addEventListener("click", function () {
    elHeader.classList.toggle("head--open");
});