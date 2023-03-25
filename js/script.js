mainInit();
function mainInit(){
  nav();
  gnb();
}
function nav() {
  const header = document.querySelector("#header");
  const allMenu = document.querySelector(".all-menu");
  const menuBtn = allMenu.querySelector("i");
  const nav = document.querySelector("nav")
  const bgSpan = header.querySelector("span");

  allMenu.addEventListener("click", function () {
    nav.classList.contains("-right-full") ? nav.classList.replace("-right-full", "right-0") : nav.classList.replace("right-0", "-right-full");
    menuBtn.classList.contains("xi-bars") ? menuBtn.classList.replace("xi-bars", "xi-close") : menuBtn.classList.replace("xi-close", "xi-bars");
    bgSpan.classList.toggle("hidden");
  })
}
function gnb() {
  let gnbLi = document.querySelectorAll(".gnb > li");

  gnbLi.forEach(item => {
    item.addEventListener("click", function () {
      item.querySelector("ul").classList.toggle("hidden");
    })
  })
}