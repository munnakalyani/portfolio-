```javascript
/* =========================================================
   MUNNAKALYANI PORTFOLIO
   Modern Portfolio JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ================= MOBILE NAVIGATION ================= */

    const nav = document.querySelector("nav");
    const navLinks = document.querySelector(".nav-links");

    // Create mobile menu button
    const menuButton = document.createElement("button");

    menuButton.className = "menu-toggle";
    menuButton.setAttribute("aria-label", "Toggle navigation");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.innerHTML = "☰";

    nav.insertBefore(menuButton, navLinks);

    // Open / close mobile menu
    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuButton.setAttribute("aria-expanded", isOpen);

        menuButton.innerHTML = isOpen ? "✕" : "☰";

    });


    /* ================= CLOSE MOBILE MENU ================= */

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuButton.setAttribute("aria-expanded", "false");

            menuButton.innerHTML = "☰";

        });

    });


    /* ================= SCROLL REVEAL ================= */

    const revealElements = document.querySelectorAll(
        "section, .project, .skill-category, .highlight-card, .education-card, .about-card"
    );

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(element => {

        revealObserver.observe(element);

    });


    /* ================= ACTIVE NAVIGATION ================= */

    const sections = document.querySelectorAll(
        "section[id]"
    );

    const navigationLinks = document.querySelectorAll(
        ".nav-links a"
    );

    const activeObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const currentSection = entry.target.getAttribute("id");

                    navigationLinks.forEach(link => {

                        link.classList.remove("active");

                        if (
                            link.getAttribute("href") ===
                            `#${currentSection}`
                        ) {

                            link.classList.add("active");

                        }

                    });

                }

            });

        },
        {
            threshold: 0.45
        }
    );

    sections.forEach(section => {

        activeObserver.observe(section);

    });


    /* ================= BUTTON RIPPLE EFFECT ================= */

    document.querySelectorAll(".button").forEach(button => {

        button.addEventListener("click", function (event) {

            const ripple = document.createElement("span");

            ripple.classList.add("ripple");

            const rect = this.getBoundingClientRect();

            ripple.style.left =
                `${event.clientX - rect.left}px`;

            ripple.style.top =
                `${event.clientY - rect.top}px`;

            this.appendChild(ripple);

            setTimeout(() => {

                ripple.remove();

            }, 600);

        });

    });


    /* ================= CURRENT YEAR ================= */

    const footerYear = document.querySelector("footer p");

    if (footerYear) {

        footerYear.innerHTML =
            `© ${new Date().getFullYear()} Munnakalyani. All Rights Reserved.`;

    }


    /* ================= PAGE LOADED ================= */

    console.log(
        "Munnakalyani Portfolio loaded successfully! 🚀"
    );

});
```

