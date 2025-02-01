document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const goUpBtn = document.getElementById("goUpBtn");
    const sections = document.querySelectorAll(".glassmorphism");

    // Load Dark Mode Preference
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        darkModeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }

    // Toggle Dark Mode
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            darkModeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        } else {
            localStorage.setItem("darkMode", "disabled");
            darkModeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }
    });

    // Show "Go Up" Button on Scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            goUpBtn.style.display = "block";
        } else {
            goUpBtn.style.display = "none";
        }
    });

    // Scroll to Top When "Go Up" Button is Clicked
    goUpBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Fade-In Animation on Scroll
    const fadeInOnScroll = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add("visible");
            }
        });
    };

    // Initial check and event listener
    fadeInOnScroll();
    window.addEventListener("scroll", fadeInOnScroll);
});
