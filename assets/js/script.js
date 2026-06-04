const mobileNav = document.getElementById("mobileNav");
const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileLinks = document.querySelectorAll(".mobile-link");

function toggleMenu() {
    mobileNav.classList.toggle("hidden");

    hamburgerBtn.innerHTML = mobileNav.classList.contains("hidden")
        ? "☰"
        : "✕";
}

hamburgerBtn.addEventListener("click", toggleMenu);

mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileNav.classList.add("hidden");
        hamburgerBtn.innerHTML = "☰";
    });
});