/*
 * Shared navbar + footer.
 * This keeps repeated UI in ONE place.
 */

document.addEventListener("DOMContentLoaded", function () {
    const path = window.location.pathname;
    const isPageFolder = path.includes("/pages/");
    const prefix = isPageFolder ? "../" : "";

    const header = document.getElementById("site-header");
    const footer = document.getElementById("site-footer");

    if (header) {
        header.innerHTML = `
            <div class="navbar-wrap">
                <header class="navbar">
                    <a class="brand" href="${prefix}index.html">
                        <img src="${prefix}assets/logo/define.webp" alt="${SITE.name}">
                        <span class="brand-name">${SITE.name}</span>
                    </a>

                    <button class="menu-toggle" id="menuToggle" aria-label="Toggle menu">
                        <span></span><span></span><span></span>
                    </button>

                    <nav class="nav-links" id="navLinks">
                        <a data-nav="home" href="${prefix}index.html">Home</a>
                        <a data-nav="mods" href="${prefix}pages/mods.html">Mods</a>
                        <a data-nav="discord" href="${prefix}pages/discord.html">Discord</a>
                        <a data-nav="about" href="${prefix}pages/about.html">About</a>
                        <a class="nav-discord" href="${SITE.discordUrl}" target="_blank" rel="noopener">
                            Join Discord <span>↗</span>
                        </a>
                    </nav>
                </header>
            </div>
        `;

        setupNavigation();
    }

    if (footer) {
        footer.innerHTML = `
            <footer class="footer">
                <div class="footer-main">
                    <a class="brand" href="${prefix}index.html">
                        <img src="${prefix}assets/logo/define.webp" alt="${SITE.name}">
                        <span class="brand-name">${SITE.name}</span>
                    </a>
                    <p>${SITE.name} — Free Fire mods, tools and community.</p>
                    <div class="footer-links">
                        <a href="${prefix}pages/mods.html">Mods</a>
                        <a href="${prefix}pages/discord.html">Discord</a>
                        <a href="${prefix}pages/about.html">About</a>
                    </div>
                </div>
                <div class="footer-bottom">
                    <span>© ${new Date().getFullYear()} ${SITE.name}</span>
                    <span>Built for the community.</span>
                </div>
            </footer>
        `;
    }

    // Set discord links
    document.querySelectorAll("[data-discord-link]").forEach(function (link) {
        link.href = SITE.discordUrl;
        link.target = "_blank";
        link.rel = "noopener";
    });

    // Fill data-site text
    document.querySelectorAll("[data-site]").forEach(function (element) {
        const key = element.dataset.site;
        if (SITE[key] !== undefined) element.textContent = SITE[key];
    });
});

function setupNavigation() {
    const toggle = document.getElementById("menuToggle");
    const nav = document.getElementById("navLinks");

    if (!toggle || !nav) return;

    // Hamburger toggle — no glitch, pure CSS transition
    toggle.addEventListener("click", function (e) {
        e.stopPropagation();
        const isOpen = nav.classList.toggle("open");
        toggle.classList.toggle("open");
        toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
        // Prevent body scroll when menu open
        document.body.style.overflow = isOpen ? "hidden" : "";
    });

    // Close menu on link click
    nav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            nav.classList.remove("open");
            toggle.classList.remove("open");
            document.body.style.overflow = "";
        });
    });

    // Close menu on outside click
    document.addEventListener("click", function (e) {
        if (nav.classList.contains("open") && !nav.contains(e.target) && !toggle.contains(e.target)) {
            nav.classList.remove("open");
            toggle.classList.remove("open");
            document.body.style.overflow = "";
        }
    });

    // Close menu on Escape key
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && nav.classList.contains("open")) {
            nav.classList.remove("open");
            toggle.classList.remove("open");
            document.body.style.overflow = "";
        }
    });

    // Active page highlight
    const current = window.location.pathname;

    if (current.includes("mods.html") || current.includes("release.html")) {
        document.querySelector('[data-nav="mods"]').classList.add("active");
    } else if (current.includes("discord.html")) {
        document.querySelector('[data-nav="discord"]').classList.add("active");
    } else if (current.includes("about.html")) {
        document.querySelector('[data-nav="about"]').classList.add("active");
    } else {
        document.querySelector('[data-nav="home"]').classList.add("active");
    }
}