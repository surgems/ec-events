/* MOBILE MENU */

var acc = document.getElementsByClassName("mob-menu-accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.children[1];
    if (panel.style.display === "flex") {
        panel.style.display = "none";
        this.children[0].children[0].innerHTML = '+';
    } else {
        panel.style.display = "flex";
        this.children[0].children[0].innerHTML = '-';
    }
})};