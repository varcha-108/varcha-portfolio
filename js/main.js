/* ==========================================
   MARQUEE
========================================== */

const items = [
    "Designing with Purpose",
    "Intuitive Experiences",
    "Solving Real Problems",
    "Prioritizing Usability",
    "Turning Complexity into Clarity"
];

const marquee = document.getElementById("marquee");

if (marquee) {

    const content = items
        .map(item => `
            <div class="marquee-item">
                <span>${item}</span>
                <span class="dot">◆</span>
            </div>
        `)
        .join("");

    marquee.innerHTML =
        content + content + content;
}


/* ==========================================
   PROJECTS
========================================== */

const projects = [

    {
        t: "Forext Greens Energy",

        d: "End-to-end UX/UI for a renewable energy company offering solar, battery storage, and EV charging solutions.",

        i: "assets/images/forext-greens.webp",

        l: "https://www.behance.net/gallery/250965051/Forext-Green-Energy-Website-Design"
    },

    {
        t: "Design & Decor",

        d: "A redesign of a home décor platform with clearer product discovery and a navigation system tailored to how people shop for their homes.",

        i: "assets/images/design-decor.webp",

        l: "https://www.behance.net/gallery/251271161/Design-Decor-Website-Redesign"
    },

    {
        t: "Klozet",

        d: "A fashion e-commerce app designed to improve product discovery through intuitive user flows and high-fidelity UI.",

        i: "assets/images/klozet.webp",

        l: "https://www.behance.net/gallery/231133671/KLOZET-Clothing-E-commerce-App"
    },

    {
        t: "Eventique",

        d: "A responsive event landing page designed to streamline event discovery and guide users seamlessly from exploration to inquiry.",

        i: "assets/images/eventique.webp",

        l: "https://www.behance.net/gallery/230420811/Eventique-Event-Management-Website-Design"
    }

];

const projectGrid =
    document.getElementById("projects-grid");

if (projectGrid) {

    projectGrid.innerHTML =
        projects.map(p => `

        <article class="project reveal">

            <div class="thumb">

                <img
                    src="${p.i}"
                    alt="${p.t}"
                    loading="lazy">

            </div>

            <h3>${p.t}</h3>

            <p class="desc">
                ${p.d}
            </p>

<a
    href="${p.l}"
    target="_blank"
    class="view">

    View Project

            <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round">

    <path d="M7 17L17 7"></path>
    <path d="M10 7h7v7"></path>

</svg>

</a>

        </article>

    `).join("");

}


/* ==========================================
   EXPERIENCE
========================================== */

const experiences = [

    {
        p: "May 2026 — Jun 2026",

        r: "Design & Decor",

        s: "UX/UI Designer, Freelance",

        b: "Redesigned the UX/UI for a home décor platform, improving navigation and content structure to make product discovery more intuitive. Worked across the full experience—from user flows to high-fidelity screens."
    },

    {
        p: "Jan 2026 — Feb 2026",

        r: "Forext Greens Energy",

        s: "UX/UI Designer, Freelance",

        b: "Designed the end-to-end UX/UI for a renewable energy website from scratch, structuring information architecture and interfaces across multiple services."
    },

    {
        p: "Sep 2025 — Dec 2025",

        r: "Digital Dose",

        s: "UX/UI Designer, Internship",

        b: "Contributed to Pitstop, a UAE-based automotive platform, and MatchMeDuo, a travel companion app, by designing user flows, prototypes, and interfaces to improve usability and navigation clarity."
    }

];

const expList =
    document.getElementById("exp-list");

if (expList) {

    expList.innerHTML =
        experiences.map(e => `

        <div class="exp reveal">

            <div class="period">

                ${e.p}

            </div>

            <div>

                <h3>${e.r}</h3>

                <div class="sub">

                    ${e.s}

                </div>

                <p class="body">

                    ${e.b}

                </p>

            </div>

        </div>

    `).join("");

}


/* ==========================================
   CAPABILITIES
========================================== */

const capabilities = [

    {
        n: "01",

        t: "UX Skills",

        l: [
            "User Research",
            "Information Architecture",
            "User Flows",
            "Wireframing",
            "Prototyping",
            "Usability Testing"
        ]
    },

    {
        n: "02",

        t: "UI Skills",

        l: [
            "High-Fidelity Design",
            "Responsive Design",
            "Visual Hierarchy",
            "Typography",
            "Design Systems"
        ]
    },

    {
        n: "03",

        t: "Tools",

        l: [
            "Figma",
            "Framer",
            "Notion",
            "Canva"
        ]
    }

];

const caps =
    document.getElementById("caps");

if (caps) {

    caps.innerHTML =
        capabilities.map(c => `

        <div class="cap reveal">

            <div class="num">

                ${c.n}

            </div>

            <h3>${c.t}</h3>

            <ul>

                ${c.l.map(item => `
                    <li>${item}</li>
                `).join("")}

            </ul>

        </div>

    `).join("");

}


/* ==========================================
   SCROLL REVEAL
========================================== */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("in");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            rootMargin: "-60px"
        }
    );

document
    .querySelectorAll(".reveal")
    .forEach(el => observer.observe(el));


/* ==========================================
   PROGRESS BAR
========================================== */

const progress =
    document.getElementById("progress");

const updateProgress = () => {

    const h =
        document.documentElement;

    const p =
        h.scrollTop /
        (h.scrollHeight -
            h.clientHeight);

    progress.style.transform =
        `scaleX(${p})`;

};

document.addEventListener(
    "scroll",
    updateProgress,
    { passive: true }
);

updateProgress();


/* ==========================================
   MOBILE MENU
========================================== */

const mobileMenu =
    document.getElementById(
        "mobileMenu"
    );

const menuBtn =
    document.getElementById(
        "hamBtn"
    );

const icon =
    document.getElementById(
        "hamIcon"
    );

menuBtn.addEventListener(
    "click",
    () => {

        const open =
            mobileMenu.classList.toggle(
                "open"
            );

        document.body.classList.toggle(
            "menu-open"
        );

        icon.innerHTML = open

            ? `<line x1="18" y1="6" x2="6" y2="18"/>
               <line x1="6" y1="6" x2="18" y2="18"/>`

            : `<line x1="3" y1="6" x2="21" y2="6"/>
               <line x1="3" y1="12" x2="21" y2="12"/>
               <line x1="3" y1="18" x2="21" y2="18"/>`;

    }
);

mobileMenu
    .querySelectorAll("a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mobileMenu.classList.remove(
                    "open"
                );

                document.body.classList.remove(
                    "menu-open"
                );

            }
        );

    });


/* ==========================================
   PREVENT SCROLL
========================================== */

document.body.classList.remove(
    "menu-open"
);