// ============ ACHIEVEMENTS ============
const achievements = [
  { "lucide-icon": "graduation-cap", title: "GPA", content: "3.3/4.0" },
  {
    "lucide-icon": "globe",
    title: "IELTS Academic",
    content: "6.0 Overall",
  },
];

const displayAchievements = document.getElementById("displayAchievements");
achievements.forEach((a) => {
  const item = document.createElement("div");
  item.className = "bg-white rounded-2xl p-5 shadow-sm border border-silver/20";

  const iconAndName = document.createElement("div");
  iconAndName.className = "flex items-center gap-3 mb-2";

  const iconWrapper = document.createElement("div");
  iconWrapper.className =
    "w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center";

  const icon = document.createElement("i");
  icon.setAttribute("data-lucide", a["lucide-icon"]);
  icon.className = "w-5 h-5 text-accent";

  iconWrapper.appendChild(icon);

  const title = document.createElement("p");
  title.className = "font-semibold";
  title.textContent = a["title"];

  iconAndName.appendChild(iconWrapper);
  iconAndName.appendChild(title);

  const content = document.createElement("p");
  content.className = "text-2xl font-bold text-accent";
  content.textContent = a["content"];

  item.appendChild(iconAndName);
  item.appendChild(content);
  displayAchievements.appendChild(item);
});

// ============ SKILLS ============
const skills = [
  {
    title: "Frontend",
    icon: "layout",
    items: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "NextJS"],
  },
  {
    title: "Backend",
    icon: "server",
    items: ["Python", "PHP ", "NestJS"],
  },
  {
    title: "Database",
    icon: "terminal",
    items: ["MySQL", "PostgreSQL"],
  },
  {
    title: "Tools",
    icon: "wrench",
    items: ["Git", "GitHub", "VS Code", "Docker"],
  },
];

const displaySkills = document.getElementById("displaySkills");
skills.forEach((s) => {
  const card = document.createElement("div");
  card.className =
    "rounded-2xl p-6 shadow-sm border border-silver/20 hover:shadow-md transition-shadow";
  card.innerHTML = `
      <div class="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
        <i data-lucide="${s.icon}" class="w-5 h-5 text-accent"></i>
      </div>
      <h3 class="font-bold text-lg mb-3">${s.title}</h3>
      <div class="flex flex-wrap gap-2">
        ${s.items.map((i) => `<span class="text-xs font-medium px-3 py-1.5 rounded-full bg-gray-100 text-navy/70">${i}</span>`).join("")}
      </div>
    `;
  displaySkills.appendChild(card);
});

// ============ PROJECTS ============
const projects = [
  {
    title: "Food Ordering Website",
    stack: "HTML, CSS, JavaScript, PHP, MySQL, Bootstrap",
    desc: "This is a complete dynamic website, allowing users to explore the menu, search for dishes, and manage their personal accounts. The project focuses on applying core web technologies such as PHP, MySQL, and AJAX to create a smooth and highly interactive user experience.",
    color: "from-orange-400 to-red-500",
    icon: "utensils",
    github: "https://github.com/datduongabc/restaurant_project",
  },
  {
    title: "Job Vacancy Management System",
    stack: "HTML, CSS, JavaScript, PHP, MySQL, Bootstrap",
    desc: "The web system focuses on the employer recruitment process and the job seeker search experience. The project emphasizes building a standardized data structure that allows for detailed job posting management and multi-criteria search filtering.",
    color: "from-blue-400 to-indigo-500",
    icon: "briefcase",
    github: "https://github.com/dngphuc05/course-online",
  },
];

const displayProjects = document.getElementById("displayProjects");
projects.forEach((p) => {
  const card = document.createElement("div");
  card.className =
    "project-card bg-white rounded-2xl overflow-hidden shadow-sm border border-silver/20";
  card.innerHTML = `
      <div class="h-48 bg-linear-to-br ${p.color} flex items-center justify-center">
        <div class="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">
          <i data-lucide="${p.icon}" class="w-9 h-9 text-white"></i>
        </div>
      </div>
      <div class="p-6">
        <h3 class="text-xl font-bold mb-1">${p.title}</h3>
        <p class="text-xs font-medium text-accent mb-3">${p.stack}</p>
        <p class="text-sm text-navy/60 leading-relaxed mb-5">${p.desc}</p>
        <div class="flex gap-3">
          <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-sm font-medium text-navy/70 hover:text-accent transition-colors">
            <i data-lucide="github" class="w-4 h-4"></i> Source Code
          </a>
        </div>
      </div>
    `;
  displayProjects.appendChild(card);
});
lucide.createIcons();

// ============ MOBILE NAV ============
const menuBtn = document.getElementById("menuBtn");
const closeMenuBtn = document.getElementById("closeMenuBtn");
const mobileNav = document.getElementById("mobileNav");
menuBtn.addEventListener("click", () => mobileNav.classList.add("open"));
closeMenuBtn.addEventListener("click", () =>
  mobileNav.classList.remove("open"),
);
document.querySelectorAll(".mobile-link").forEach((link) => {
  link.addEventListener("click", () => mobileNav.classList.remove("open"));
});

// ============ SCROLL REVEAL ============
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("section-visible");
        entry.target.classList.remove("section-hidden");
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
);

document
  .querySelectorAll(".section-hidden")
  .forEach((s) => observer.observe(s));
