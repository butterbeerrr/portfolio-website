if (window.location.hash) {
    history.replaceState(null, null, window.location.pathname);
    window.scrollTo(0, 0);
}

const mobileNav = document.getElementById("mobileNav");
const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileLinks = document.querySelectorAll(".mobile-link");
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", () => {
        alert("Thank you! Your message is being sent.");
    });
}

function toggleMenu() {
    mobileNav.classList.toggle("hidden");

    hamburgerBtn.textContent = mobileNav.classList.contains("hidden")
        ? "☰"
        : "✕";
}

hamburgerBtn.addEventListener("click", toggleMenu);

mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileNav.classList.add("hidden");
        hamburgerBtn.textContent = "☰";
    });
});