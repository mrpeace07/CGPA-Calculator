const optionMenu = document.querySelector(".select-menu");
const selectBtn = optionMenu.querySelector(".select-btn");

selectBtn.addEventListener("click", () => {
    optionMenu.classList.toggle("active")
});       
