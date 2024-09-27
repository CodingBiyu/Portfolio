const cross = document.querySelector(".cross");
const hamburger = document.querySelector(".hamburger");
const sideBar = document.querySelector(".sideBar");
const sideBarLinks = document.querySelectorAll(".sideBar li a");

// Open sidebar
hamburger.addEventListener("click", () => {
  sideBar.style.right = "0";
});

// Close sidebar
cross.addEventListener("click", () => {
  sideBar.style.right = "-100%";
});

// Close sidebar when any link is clicked
sideBarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    sideBar.style.right = "-100%";
  });
});
