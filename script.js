document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Teemakytkin (Tumma / Vaalea)
    const themeToggleBtn = document.getElementById("theme-toggle-btn");
    const htmlElement = document.documentElement;

    // Tarkistetaan tallennettu teema tai käytetään tummaa oletuksena
    const savedTheme = localStorage.getItem("portfolioTheme") || "dark";
    htmlElement.setAttribute("data-theme", savedTheme);
    updateButtonText(savedTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            const currentTheme = htmlElement.getAttribute("data-theme");
            const newTheme = currentTheme === "dark" ? "light" : "dark";

            htmlElement.setAttribute("data-theme", newTheme);
            localStorage.setItem("portfolioTheme", newTheme);
            updateButtonText(newTheme);
        });
    }

    function updateButtonText(theme) {
        if (theme === "dark") {
            themeToggleBtn.textContent = "Tumma";
        } else {
            themeToggleBtn.textContent = "Vaalea";
        }
    }

    // 2. Interaktiivinen otsikko
    const heroTitle = document.getElementById("hero-title");
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.addEventListener("click", () => {
            heroTitle.style.color = "#0d6efd";
            heroTitle.textContent = "Tervetuloa portfoliooni! 🚀";
            
            setTimeout(() => {
                heroTitle.style.color = "";
                heroTitle.textContent = originalText;
            }, 2000);
        });
    }

    // 3. Scroll Reveal -animaatiot
    const revealSections = document.querySelectorAll(".reveal-section");

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;

        revealSections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    // 4. Lomakkeen lähetysilmoitus
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            const submitBtn = contactForm.querySelector("button[type='submit']");
            if (submitBtn) {
                submitBtn.textContent = "Lähetetään...";
                submitBtn.disabled = true;
            }
        });
    }
});