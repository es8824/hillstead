const menu = document.querySelector(".menu")
const navClose = document.querySelector(".close")
const nav = document.querySelector("nav")

menu.addEventListener("click", () => {
    nav.classList.add("open-nav")
})

navClose.addEventListener("click", () => {
    nav.classList.remove("open-nav")
})
