const switcher = document.querySelector(".btn");

switcher.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");

    let className = document.body.className;
    if (className == "light-theme") {
        this.innerText = "Dark";
    } else {
        this.innerText = "Light";
    }
});