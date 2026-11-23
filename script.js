/**
 * Anurag Pandey - Portfolio & Comprehensive Work Showcase
 * Complete dataset and interactive functionality for all 33+ projects.
 */

// 1. All 33 Projects Dataset
// 1. Curated Production Systems Dataset (Engineering Benchmarks & Architectural Decisions)
const PROJECTS_DATA = [
  {
    id: "solver-standalone",
    title: "Solver-Standalone (Screen Solver API)",
    category: "api",
    categories: ["api", "live", "cv"],
    isLive: true,
    isFeatured: true,
    badge: "Live Render API • Flagship",
    latencyP99: "<320ms end-to-end",
    throughput: "99.9% Uptime (Render Cloud)",
    archImpact: "Decoupled asynchronous OCR extraction from generative reasoning pipeline; provides instant JSON response payloads for high-resolution screen inputs.",
    description: "Cloud-hosted visual screen AI problem solver backend API providing real-time screen capture OCR, visual query parsing, and automated mathematical/reasoning solutions.",
    highlights: [
      "Production asynchronous FastAPI microservice deployed live on Render with automated health check endpoints.",
      "Decoupled asynchronous OCR extraction from generative reasoning pipeline, returning structured JSON response payloads in under 320ms.",
      "Interactive OpenAPI / Swagger documentation and CORS-enabled endpoints for frictionless client-side consumption.",
      "Full CI/CD pipeline integrated directly with GitHub automated builds and deployment health monitoring."
    ],
    tags: ["FastAPI", "Python", "Computer Vision", "OCR", "Render Cloud", "REST API", "Swagger UI"],
    demoUrl: "https://screensolver-api.onrender.com/",
    githubUrl: "https://github.com/Anurag637/Solver-Standalone",
    stars: 0
  },
  {
    id: "qchat",
    title: "QChat Gateway (LLM Proxy & Vector Cache)",
    category: "agent",
    categories: ["agent", "api"],
    isLive: false,
    isFeatured: true,
    badge: "Production Microservice",
    latencyP99: "42ms (Cache) / 310ms (LLM)",
    throughput: "850+ req/s peak capacity",
    archImpact: "Implemented Redis semantic vector caching with cosine thresholding; reduced upstream API costs by 62%.",
    description: "High-throughput LLM gateway proxy with Redis semantic vector caching, intelligent request deduplication, and automated rate limiting.",
    highlights: [
      "Empirical P99 latency of 42ms for cached queries vs. 310ms for uncached upstream LLM calls.",
      "Engineered to sustain 850+ requests per second peak capacity under concurrent benchmark loads.",
      "Implemented Redis semantic vector caching with cosine similarity thresholding, reducing upstream token costs by 62%.",
      "Dynamic prompt routing and fallback resilience across multi-provider LLM backends."
    ],
    tags: ["Python", "Redis", "Vector Cache", "LLM Gateway", "FastAPI", "Semantic Search"],
    demoUrl: null,
    githubUrl: "https://github.com/Anurag637/QChat",
    stars: 0
  },
  {
    id: "deepfake-detection",
    title: "Deepfake Video Detection Engine",
    category: "cv",
    categories: ["cv"],
    isLive: false,
    isFeatured: true,
    badge: "Deep Learning Vision",
    latencyP99: "120ms per frame",
    throughput: "94.2% AUC on DFDC",
    archImpact: "Combined MTCNN face alignment with EfficientNet spatial backbone and temporal sequence tracking to detect subtle facial artifacts.",
    description: "High-accuracy spatiotemporal deepfake video detection pipeline combining MTCNN face alignment with EfficientNet spatial feature extractors and temporal sequence analysis.",
    highlights: [
      "Achieved 94.2% Area Under the ROC Curve (AUC) on the rigorous Deepfake Detection Challenge (DFDC) benchmark.",
      "Inference latency optimized to 120ms per frame for near-real-time forensic video stream verification.",
      "Combined MTCNN face alignment with EfficientNet spatial backbone and temporal sequence tracking to detect subtle facial artifacts.",
      "Complete evaluation harness with precision-recall trade-offs and confusion matrix analysis."
    ],
    tags: ["PyTorch", "EfficientNet", "MTCNN", "Computer Vision", "DFDC", "Deep Learning"],
    demoUrl: null,
    githubUrl: "https://github.com/Anurag637/Deepfake-Detection",
    stars: 0
  },
  {
    id: "resume-ranking",
    title: "Resume Screener & Semantic Ranking System",
    category: "data",
    categories: ["data", "agent"],
    isLive: false,
    isFeatured: true,
    badge: "NLP & Semantic Search",
    latencyP99: "<180ms per candidate",
    throughput: "Top-5 Cosine Match Precision",
    archImpact: "spaCy tokenization + dense embeddings; eliminated keyword-stuffing exploits and reduced recruiter screening time by 70%.",
    description: "NLP-driven candidate ranking engine using spaCy entity extraction and dense semantic embeddings to score job-resume alignment without vulnerability to keyword stuffing.",
    highlights: [
      "Processes and ranks candidate dossiers with <180ms P99 latency per resume.",
      "High-precision Top-5 Cosine Match ranking against complex multi-skill job descriptions.",
      "Combined spaCy tokenization and custom entity extraction with dense vector embeddings; eliminated keyword-stuffing exploits.",
      "Reduced recruiter manual screening overhead by 70% in end-to-end evaluation trials."
    ],
    tags: ["Python", "NLP", "spaCy", "scikit-learn", "Dense Embeddings", "Streamlit"],
    demoUrl: null,
    githubUrl: "https://github.com/Anurag637/Resume-Ranking",
    stars: 0
  },
  {
    id: "sa-capstone-pricing",
    title: "SmartPark Dynamic Urban Parking Pricing Engine",
    category: "data",
    categories: ["data", "api"],
    isLive: false,
    isFeatured: true,
    badge: "Real-Time Streaming Engine",
    latencyP99: "25ms price calculation",
    throughput: "Real-time dynamic updates",
    archImpact: "Dynamic supply-demand curve optimization implemented using vectorized Pathway and NumPy arithmetic.",
    description: "Real-time dynamic urban parking pricing engine computing supply-demand elasticity curves and occupancy fluctuations using vectorized streaming computations.",
    highlights: [
      "Calculates optimized dynamic parking tariffs with ultra-low 25ms calculation latency.",
      "Stream-driven real-time dynamic updates adapting continuously to urban traffic and parking garage occupancy surges.",
      "Dynamic supply-demand curve optimization implemented using vectorized Pathway and NumPy arithmetic.",
      "Interactive real-time visualization layer with Bokeh dashboards for city parking authority simulation."
    ],
    tags: ["Pathway", "NumPy", "Real-Time Streaming", "Dynamic Pricing", "Bokeh", "Data Science"],
    demoUrl: null,
    githubUrl: "https://github.com/Anurag637/SA_Capstone_Project-2025",
    stars: 0
  }
];;

// 2. State & DOM References
let currentFilter = "all";
let currentSearch = "";
let currentSort = "featured";
let currentSkillFilter = null;
let soundEnabled = localStorage.getItem("ap_sound_enabled") === "true";
let activeTheme = localStorage.getItem("ap_theme") || "nebula";

// Core UI DOM elements
const projectsContainer = document.getElementById("projects-container");
const emptyState = document.getElementById("empty-state");
const searchInput = document.getElementById("project-search-input");
const clearSearchBtn = document.getElementById("clear-search-btn");
const filterPills = document.querySelectorAll(".filter-pill");
const sortSelect = document.getElementById("project-sort-select");
const visibleCountEl = document.getElementById("visible-projects-count");
const totalPillEl = document.getElementById("total-projects-pill");
const resetFiltersBtn = document.getElementById("reset-filters-btn");
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");
const siteHeader = document.getElementById("site-header");
const yearEl = document.getElementById("year");
const ambientGlow = document.getElementById("ambient-glow");
const liveClockEl = document.getElementById("live-clock-time");
const toastContainer = document.getElementById("toast-container");
const searchTrigger = document.getElementById("search-trigger");

// Modals
const resumeModal = document.getElementById("resume-modal");
const openResumeBtn = document.getElementById("open-resume-btn");
const closeResumeBtn = document.getElementById("close-resume-btn");
const printResumeBtn = document.getElementById("print-resume-btn");
const footerResumeBtn = document.getElementById("footer-resume-btn");

const projectModal = document.getElementById("project-detail-modal");
const closeProjectModalBtn = document.getElementById("close-project-modal-btn");
const dismissProjectModalBtn = document.getElementById("dismiss-project-modal-btn");
const modalProjectTitle = document.getElementById("modal-project-title");
const modalProjectBadge = document.getElementById("modal-project-badge");
const modalProjectDesc = document.getElementById("modal-project-desc");
const modalProjectHighlights = document.getElementById("modal-project-highlights");
const modalProjectTags = document.getElementById("modal-project-tags");
const modalCloneCode = document.getElementById("modal-clone-code");
const copyCloneBtn = document.getElementById("copy-clone-btn");
const modalFooterLinks = document.getElementById("modal-footer-links");

// Interactive Extensions DOM
const themeToggleBtn = document.getElementById("theme-toggle-btn");
const soundToggleBtn = document.getElementById("sound-toggle-btn");
const openTerminalBtn = document.getElementById("open-terminal-btn");
const terminalModal = document.getElementById("terminal-modal");
const closeTerminalBtn = document.getElementById("close-terminal-btn");
const closeTerminalDot = document.getElementById("close-terminal-dot");
const terminalForm = document.getElementById("terminal-form");
const terminalInput = document.getElementById("terminal-input");
const terminalLogs = document.getElementById("terminal-logs");
const commandPaletteModal = document.getElementById("command-palette-modal");
const paletteSearchInput = document.getElementById("palette-search-input");
const paletteResultsList = document.getElementById("palette-results-list");
const closePaletteBtn = document.getElementById("close-palette-btn");
const activeSkillBanner = document.getElementById("active-skill-banner");
const activeSkillName = document.getElementById("active-skill-name");
const clearSkillBtn = document.getElementById("clear-skill-btn");
const bgCanvas = document.getElementById("bg-canvas");

// Contact Form
const contactForm = document.getElementById("contact-form");
const directMailtoBtn = document.getElementById("direct-mailto-btn");
const formSuccessAlert = document.getElementById("form-success-alert");
const submitBtn = document.getElementById("submit-btn");
const backToTopBtn = document.getElementById("back-to-top-btn");

// 3. Web Audio Synthesizer (Zero-Latency Native Feedback)
let audioCtx = null;
function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

function playUiSound(type = "click") {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === "click") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.04);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
      osc.start(now);
      osc.stop(now + 0.04);
    } else if (type === "open") {
      osc.type = "triangle";
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(640, now + 0.08);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === "close") {
      osc.type = "triangle";
      osc.frequency.setValueAtTime(640, now);
      osc.frequency.exponentialRampToValueAtTime(280, now + 0.07);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);
      osc.start(now);
      osc.stop(now + 0.07);
    } else if (type === "success") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(587.33, now);
      osc.frequency.setValueAtTime(880, now + 0.06);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
      osc.start(now);
      osc.stop(now + 0.14);
    } else if (type === "cmd") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(740, now);
      gain.gain.setValueAtTime(0.03, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
      osc.start(now);
      osc.stop(now + 0.03);
    }
  } catch {
    // Audio Context blocked or unavailable
  }
}

function toggleSound() {
  soundEnabled = !soundEnabled;
  localStorage.setItem("ap_sound_enabled", String(soundEnabled));
  const soundIconEl = document.getElementById("sound-icon");
  if (soundToggleBtn) {
    soundToggleBtn.classList.toggle("sound-active", soundEnabled);
    soundToggleBtn.title = soundEnabled ? "UI sound effects: Enabled" : "UI sound effects: Muted";
  }
  if (soundIconEl) {
    soundIconEl.textContent = soundEnabled ? "🔊" : "🔇";
  }
  if (soundEnabled) {
    playUiSound("success");
    showToast("UI sound effects enabled 🔊");
  } else {
    showToast("UI sound effects muted 🔇");
  }
}

// 4. Color Theme Management
const THEMES = ["nebula", "matrix", "tokyo", "oled"];
const THEME_METADATA = {
  nebula: { icon: "🌌", label: "Nebula" },
  matrix: { icon: "🟢", label: "Matrix" },
  tokyo: { icon: "🌸", label: "Tokyo" },
  oled: { icon: "⚫", label: "OLED" }
};

function applyTheme(themeName, silent = false) {
  if (!THEMES.includes(themeName)) themeName = "nebula";
  activeTheme = themeName;
  if (themeName === "nebula") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", themeName);
  }
  localStorage.setItem("ap_theme", themeName);

  // Update header theme toggle button visual state
  const themeIconEl = document.getElementById("theme-icon");
  const themeLabelEl = document.getElementById("theme-label");
  const meta = THEME_METADATA[themeName] || THEME_METADATA.nebula;
  if (themeIconEl) themeIconEl.textContent = meta.icon;
  if (themeLabelEl) themeLabelEl.textContent = meta.label;

  if (!silent) {
    playUiSound("success");
    showToast(`Cyber Theme: ${themeName.toUpperCase()}`);
  }
}

function cycleTheme() {
  const nextIdx = (THEMES.indexOf(activeTheme) + 1) % THEMES.length;
  applyTheme(THEMES[nextIdx]);
}

// 5. HTML Escape & Search Query Highlighter
function escapeHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function highlightText(text, query) {
  if (!query || !query.trim()) return escapeHtml(text);
  const safeText = escapeHtml(text);
  const escapedQuery = query.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escapedQuery})`, "gi");
  return safeText.replace(regex, `<mark class="search-highlight">$1</mark>`);
}

// 6. Interactive Background Particle Constellation Canvas
function initBackgroundCanvas() {
  if (!bgCanvas) return;
  const ctx = bgCanvas.getContext("2d");
  if (!ctx) return;

  let width = (bgCanvas.width = window.innerWidth);
  let height = (bgCanvas.height = window.innerHeight);

  let mouseX = -1000;
  let mouseY = -1000;

  window.addEventListener("resize", () => {
    width = bgCanvas.width = window.innerWidth;
    height = bgCanvas.height = window.innerHeight;
  });

  window.addEventListener("pointermove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const particleCount = Math.min(65, Math.max(35, Math.floor((width * height) / 19000)));
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 1.5 + 0.8
    });
  }

  function renderParticles() {
    ctx.clearRect(0, 0, width, height);

    // Theme based particle colors
    let pColor = "rgba(0, 240, 255, 0.45)";
    let lColor = "0, 240, 255";
    if (activeTheme === "matrix") {
      pColor = "rgba(0, 255, 102, 0.55)";
      lColor = "0, 255, 102";
    } else if (activeTheme === "tokyo") {
      pColor = "rgba(255, 0, 128, 0.5)";
      lColor = "255, 0, 128";
    } else if (activeTheme === "oled") {
      pColor = "rgba(100, 160, 255, 0.35)";
      lColor = "100, 160, 255";
    }

    // Update and draw particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = pColor;
      ctx.fill();

      // Connect with nearby particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 110) {
          const alpha = (1 - dist / 110) * 0.22;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(${lColor}, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      // Mouse interaction line
      const mdx = p.x - mouseX;
      const mdy = p.y - mouseY;
      const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
      if (mdist < 130) {
        const malpha = (1 - mdist / 130) * 0.35;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(mouseX, mouseY);
        ctx.strokeStyle = `rgba(${lColor}, ${malpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }

    requestAnimationFrame(renderParticles);
  }

  requestAnimationFrame(renderParticles);
}

// 6.5. Synchronize Category Badges and Metrics Dynamically
function syncFilterBadgeCounts() {
  const liveCount = PROJECTS_DATA.filter((p) => p.isLive).length;
  const statAppsEl = document.getElementById("stat-apps-count");
  if (statAppsEl) statAppsEl.textContent = String(liveCount);

  filterPills.forEach((pill) => {
    const f = pill.getAttribute("data-filter") || "all";
    const badge = pill.querySelector(".filter-badge");
    if (!badge) return;
    let count = 0;
    if (f === "all") {
      count = PROJECTS_DATA.length;
    } else if (f === "live") {
      count = liveCount;
    } else {
      count = PROJECTS_DATA.filter(
        (p) => p.categories.includes(f) || p.category === f
      ).length;
    }
    badge.textContent = String(count);
  });
}

// 7. Render Projects Function
function renderProjects() {
  if (!projectsContainer) return;

  syncFilterBadgeCounts();

  // Filter projects based on currentFilter, currentSearch & currentSkillFilter
  let filtered = PROJECTS_DATA.filter((project) => {
    // Category filter
    let matchesCategory = false;
    if (currentFilter === "all") {
      matchesCategory = true;
    } else if (currentFilter === "live") {
      matchesCategory = project.isLive === true;
    } else {
      matchesCategory = project.categories.includes(currentFilter) || project.category === currentFilter;
    }

    // Search query filter
    let matchesSearch = true;
    if (currentSearch.trim() !== "") {
      const q = currentSearch.toLowerCase().trim();
      const inTitle = project.title.toLowerCase().includes(q);
      const inDesc = project.description.toLowerCase().includes(q);
      const inTags = project.tags.some(tag => tag.toLowerCase().includes(q));
      const inHighlights = project.highlights.some(h => h.toLowerCase().includes(q));
      matchesSearch = inTitle || inDesc || inTags || inHighlights;
    }

    // Skill filter
    let matchesSkill = true;
    if (currentSkillFilter) {
      const s = currentSkillFilter.toLowerCase().trim();
      matchesSkill = project.tags.some(tag => tag.toLowerCase().includes(s)) ||
                     project.title.toLowerCase().includes(s) ||
                     project.description.toLowerCase().includes(s);
    }

    return matchesCategory && matchesSearch && matchesSkill;
  });

  // Sort projects
  if (currentSort === "featured") {
    filtered.sort((a, b) => {
      if (a.isFeatured !== b.isFeatured) return b.isFeatured ? 1 : -1;
      if (a.isLive !== b.isLive) return b.isLive ? 1 : -1;
      return 0;
    });
  } else if (currentSort === "name") {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  }

  // Update counts
  if (visibleCountEl) visibleCountEl.textContent = String(filtered.length);
  if (totalPillEl) totalPillEl.textContent = String(PROJECTS_DATA.length);

  // Clear container
  projectsContainer.innerHTML = "";

  if (filtered.length === 0) {
    if (emptyState) emptyState.style.display = "block";
    return;
  }

  if (emptyState) emptyState.style.display = "none";

  // Create Project Cards
  filtered.forEach((project, idx) => {
    const card = document.createElement("article");
    card.className = "project-card reveal visible";
    card.setAttribute("data-id", project.id);
    card.style.animationDelay = `${(idx % 6) * 0.04}s`;

    // Interactive 3D Cursor Spotlight Glare
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });

    // Category Icon
    let categoryIcon = "📁";
    if (project.isLive) categoryIcon = "🚀";
    else if (project.categories.includes("agent")) categoryIcon = "🤖";
    else if (project.categories.includes("cv")) categoryIcon = "🧠";
    else if (project.categories.includes("api")) categoryIcon = "⚡";
    else if (project.categories.includes("data")) categoryIcon = "📊";

    // Card Header Badge
    const badgeHtml = project.isLive
      ? `<span class="badge badge-success"><span class="status-indicator live"></span>${escapeHtml(project.badge)}</span>`
      : `<span class="badge badge-neutral">${escapeHtml(project.badge)}</span>`;

    // Action Buttons
    const liveDemoBtn = project.demoUrl
      ? `<a href="${project.demoUrl}" target="_blank" rel="noreferrer" class="btn btn-sm btn-primary project-action-btn" title="Open live application">
          Live App
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>`
      : "";

    const codeBtn = `<a href="${project.githubUrl}" target="_blank" rel="noreferrer" class="btn btn-sm btn-secondary project-action-btn" title="View repository on GitHub">
        Code
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      </a>`;

    const detailBtn = `<button class="btn btn-sm btn-ghost view-detail-btn" data-id="${project.id}" title="Quick architectural overview">
        Details &rarr;
      </button>`;

    // Render Tag Pills with search matching
    const tagsHtml = project.tags
      .slice(0, 4)
      .map((tag) => `<span class="tag-sm">${highlightText(tag, currentSearch)}</span>`)
      .join("");

    // Engineering Metric Badges (Latency P99 & Throughput/Accuracy)
    let metricsHtml = "";
    if (project.latencyP99 || project.throughput) {
      metricsHtml = `
        <div class="project-metrics-row">
          ${project.latencyP99 ? `<span class="metric-chip"><span class="metric-label">P99:</span> <span class="metric-val">${escapeHtml(project.latencyP99)}</span></span>` : ""}
          ${project.throughput ? `<span class="metric-chip"><span class="metric-label">Metric:</span> <span class="metric-val">${escapeHtml(project.throughput)}</span></span>` : ""}
        </div>
      `;
    }

    card.innerHTML = `
      <div class="card-top-bar">
        <div class="card-category-indicator">
          <span class="category-icon" aria-hidden="true">${categoryIcon}</span>
          ${badgeHtml}
        </div>
        ${project.stars > 0 ? `<span class="star-badge">⭐ ${project.stars}</span>` : ""}
      </div>

      <div class="project-body">
        <h4 class="project-title">${highlightText(project.title, currentSearch)}</h4>
        <p class="project-description">${highlightText(project.description, currentSearch)}</p>
        ${metricsHtml}
        <div class="project-tags-list">
          ${tagsHtml}
          ${project.tags.length > 4 ? `<span class="tag-sm tag-more">+${project.tags.length - 4}</span>` : ""}
        </div>
      </div>

      <div class="project-card-footer">
        <div class="btn-group-left">
          ${liveDemoBtn}
          ${codeBtn}
        </div>
        <div class="btn-group-right">
          ${detailBtn}
        </div>
      </div>
    `;

    projectsContainer.appendChild(card);
  });

  // Attach Detail Button Handlers
  document.querySelectorAll(".view-detail-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      playUiSound("open");
      openProjectDetailModal(id);
    });
  });
}

// 8. Project Detail Modal
function openProjectDetailModal(projectId) {
  const project = PROJECTS_DATA.find((p) => p.id === projectId);
  if (!project || !projectModal) return;

  if (modalProjectTitle) modalProjectTitle.textContent = project.title;
  if (modalProjectBadge) modalProjectBadge.textContent = project.badge;
  if (modalProjectDesc) modalProjectDesc.textContent = project.description;

  // Highlights & Architectural Decision list
  if (modalProjectHighlights) {
    let hlHtml = "";
    if (project.latencyP99 || project.throughput || project.archImpact) {
      hlHtml += `
        <li class="modal-benchmark-highlight">
          <strong>⚡ Engineering Benchmarks:</strong> P99 Latency: <code>${escapeHtml(project.latencyP99 || "N/A")}</code> | Throughput / Accuracy: <code>${escapeHtml(project.throughput || "N/A")}</code>
        </li>
        ${project.archImpact ? `<li class="modal-benchmark-highlight"><strong>🏛️ Architectural Impact:</strong> ${escapeHtml(project.archImpact)}</li>` : ""}
      `;
    }
    hlHtml += project.highlights
      .map((hl) => `<li>${escapeHtml(hl)}</li>`)
      .join("");
    modalProjectHighlights.innerHTML = hlHtml;
  }

  // Tags list
  if (modalProjectTags) {
    modalProjectTags.innerHTML = project.tags
      .map((t) => `<span class="skill-pill" data-skill="${escapeHtml(t)}">${escapeHtml(t)}</span>`)
      .join("");

    modalProjectTags.querySelectorAll(".skill-pill").forEach((pill) => {
      pill.addEventListener("click", () => {
        const skill = pill.getAttribute("data-skill");
        closeProjectDetailModal();
        if (skill) filterBySkill(skill);
      });
    });
  }

  // Clone command
  const cloneCmd = `git clone ${project.githubUrl}.git`;
  if (modalCloneCode) modalCloneCode.textContent = cloneCmd;

  if (copyCloneBtn) {
    copyCloneBtn.onclick = () => {
      navigator.clipboard.writeText(cloneCmd).then(() => {
        playUiSound("success");
        showToast("Repository clone command copied to clipboard!");
      });
    };
  }

  // Links in footer
  if (modalFooterLinks) {
    let linksHtml = "";
    if (project.demoUrl) {
      linksHtml += `<a href="${project.demoUrl}" target="_blank" rel="noreferrer" class="btn btn-primary">
        Launch Live Demo ↗
      </a>`;
    }
    linksHtml += `<a href="${project.githubUrl}" target="_blank" rel="noreferrer" class="btn btn-secondary">
      View on GitHub ↗
    </a>`;
    modalFooterLinks.innerHTML = linksHtml;
  }

  projectModal.showModal();
}

function closeProjectDetailModal() {
  if (projectModal && projectModal.open) {
    playUiSound("close");
    projectModal.close();
  }
}

// 9. Skill Matrix Filter Handlers
function filterBySkill(skillName) {
  currentSkillFilter = skillName.trim();
  if (activeSkillBanner && activeSkillName) {
    activeSkillName.textContent = currentSkillFilter;
    activeSkillBanner.style.display = "flex";
  }
  playUiSound("click");
  renderProjects();
  scrollToSection("projects");
}

function clearSkillFilter() {
  currentSkillFilter = null;
  if (activeSkillBanner) {
    activeSkillBanner.style.display = "none";
  }
  playUiSound("click");
  renderProjects();
}

// 10. Interactive Developer Terminal CLI
function openTerminal() {
  if (terminalModal) {
    terminalModal.showModal();
    playUiSound("open");
    if (terminalInput) {
      setTimeout(() => terminalInput.focus(), 50);
    }
  }
}

function closeTerminal() {
  if (terminalModal && terminalModal.open) {
    playUiSound("close");
    terminalModal.close();
  }
}

function appendTerminalLog(cmd, outputHtml) {
  if (!terminalLogs) return;
  const entry = document.createElement("div");
  entry.className = "term-log-entry";
  entry.innerHTML = `
    <div class="term-log-cmd"><span class="terminal-prompt-user">anurag@ap-sys:~$</span> ${escapeHtml(cmd)}</div>
    <div class="term-log-out">${outputHtml}</div>
  `;
  terminalLogs.appendChild(entry);
  const termBody = document.getElementById("terminal-body");
  if (termBody) termBody.scrollTop = termBody.scrollHeight;
}

function executeTerminalCommand(rawCmd) {
  const trimmed = rawCmd.trim();
  if (!trimmed) return;
  playUiSound("cmd");
  const parts = trimmed.split(/\s+/);
  const cmd = parts[0].toLowerCase();
  const arg = parts.slice(1).join(" ").trim();

  let out = "";
  switch (cmd) {
    case "help":
      out = `Available CLI commands:
 • <span class="term-hl">whoami</span>       : Architect credentials & background
 • <span class="term-hl">skills</span>       : Full technical stack & competencies
 • <span class="term-hl">projects</span>     : Curated production systems & benchmarks
 • <span class="term-hl">live</span>         : 8 production deployed apps & APIs
 • <span class="term-hl">cat resume</span>   : Complete education & milestones
 • <span class="term-hl">theme [name]</span> : Switch theme (nebula, matrix, tokyo, oled)
 • <span class="term-hl">matrix</span>       : Instant green matrix hacker mode
 • <span class="term-hl">contact</span>      : Email, GitHub & LinkedIn coordinates
 • <span class="term-hl">github</span>       : Open GitHub profile in new tab
 • <span class="term-hl">clear</span>        : Clear terminal log screen`;
      break;

    case "whoami": {
      const liveCount = PROJECTS_DATA.filter((p) => p.isLive).length;
      out = `<strong>Anurag Pandey</strong> — Full-Stack AI & Machine Learning Systems Engineer
• Education: B.Tech CSE (AIML), Galgotias University (CGPA: 8.65)
• Location: Greater Noida / Delhi NCR, India (IST)
• Focus: Autonomous LLM Agents, Real-time Computer Vision, High-throughput APIs, PyTorch
• Production Systems: ${PROJECTS_DATA.length} High-Performance Architectures | Flagship Screen Solver API`;
      break;
    }

    case "skills":
      out = `Core Technical Stack:
• <strong>Languages:</strong> Python, C++, SQL, JavaScript, HTML5/CSS3
• <strong>AI / ML:</strong> PyTorch, OpenCV, LangChain, Hugging Face, Scikit-Learn
• <strong>Backend & APIs:</strong> FastAPI, Django REST Framework, Flask, Node.js
• <strong>Cloud & Databases:</strong> PostgreSQL, MongoDB, Redis, Render, Vercel, Supabase
• <strong>DevOps & Tools:</strong> Docker, Git, GitHub Actions CI/CD, Linux CLI`;
      break;

    case "live": {
      const liveProjects = PROJECTS_DATA.filter((p) => p.isLive);
      const items = liveProjects
        .map(
          (p, idx) =>
            `${idx + 1}. <a href="${p.demoUrl}" target="_blank" rel="noreferrer">${escapeHtml(
              p.title
            )}</a> [${escapeHtml(p.badge)}]`
        )
        .join("<br>");
      out = `<strong>${liveProjects.length} Live Deployed Production Applications:</strong><br>${items}`;
      break;
    }

    case "projects": {
      const liveCount = PROJECTS_DATA.filter((p) => p.isLive).length;
      out = `<strong>${PROJECTS_DATA.length} Core Production Systems Cataloged & Benchmarked:</strong><br>
1. <strong>★ Solver-Standalone:</strong> Flagship Screen Solver API (<320ms P99) [Live Render API]<br>
2. <strong>QChat Gateway:</strong> LLM Proxy & Vector Cache (42ms Cache P99 / 850+ req/s)<br>
3. <strong>Deepfake Detection:</strong> Spatiotemporal Vision Engine (120ms/frame / 94.2% AUC)<br>
4. <strong>Resume Screener:</strong> Dense Embedding Ranking (<180ms P99 / 70% time reduction)<br>
5. <strong>SmartPark Engine:</strong> Vectorized Dynamic Pricing (25ms price calculation)<br>
<em>Tip: Type <span class="term-hl">live</span> to open the live Render API or inspect source code.</em>`;
      break;
    }

    case "cat":
      if (arg === "resume" || arg === "resume.md") {
        const liveCount = PROJECTS_DATA.filter((p) => p.isLive).length;
        out = `<strong>RESUME SUMMARY — Anurag Pandey</strong>
--------------------------------------------------
🎓 Education: Galgotias University (2022 - 2026) | B.Tech CSE (AIML) | CGPA: 8.65
🚀 Specialization: End-to-End AI Engineering & Distributed Python Systems
🏆 Selected Works: ${PROJECTS_DATA.length} GitHub Projects | ${liveCount} Live Cloud Deployments (Vercel, Render)
✉️ Contact: anuragpandey.connect@gmail.com | github.com/Anurag637`;
      } else {
        out = `cat: file not found: '${escapeHtml(arg)}'. Try <span class="term-hl">cat resume</span>`;
      }
      break;

    case "matrix":
      applyTheme("matrix");
      out = `[STATUS] Matrix theme activated. Cyber green terminal mode enabled.`;
      break;


    case "theme":
      if (THEMES.includes(arg)) {
        applyTheme(arg);
        out = `[STATUS] Theme successfully changed to: <strong>${arg.toUpperCase()}</strong>`;
      } else {
        out = `Invalid theme '${escapeHtml(arg)}'. Valid options: nebula, matrix, tokyo, oled.`;
      }
      break;

    case "contact":
      out = `Direct Contacts:
• Email: <a href="mailto:anuragpandey.connect@gmail.com">anuragpandey.connect@gmail.com</a>
• GitHub: <a href="https://github.com/Anurag637" target="_blank">github.com/Anurag637</a>
• LinkedIn: <a href="https://www.linkedin.com/in/anurag-pandey-connect/" target="_blank">linkedin.com/in/anurag-pandey-connect</a>`;
      break;

    case "github":
      window.open("https://github.com/Anurag637", "_blank");
      out = `Opened https://github.com/Anurag637 in a new tab.`;
      break;

    case "clear":
    case "cls":
      if (terminalLogs) terminalLogs.innerHTML = "";
      return;

    default:
      out = `bash: command not found: ${escapeHtml(cmd)}. Type <span class="term-hl">help</span> to view all commands.`;
  }

  appendTerminalLog(rawCmd, out);
}

// 11. Spotlight Command Palette Controller
let paletteItems = [];
let activePaletteIdx = 0;

function buildPaletteCatalog() {
  const list = [
    { type: "action", icon: "📄", title: "View Printable Resume", desc: "Open modal with full education & credentials", run: () => openResume() },
    { type: "action", icon: "💻", title: "Open Interactive CLI Terminal", desc: "Launch bash emulator terminal", run: () => openTerminal() },
    { type: "action", icon: "🎨", title: "Cycle Color Theme", desc: "Toggle between Nebula, Matrix, Tokyo, and OLED", run: () => cycleTheme() },
    { type: "action", icon: "🔊", title: "Toggle UI Sound FX", desc: "Toggle interactive Web Audio feedback", run: () => toggleSound() },
    { type: "nav", icon: "🚀", title: "Jump to Projects Section", desc: "Explore production systems & engineering benchmarks", run: () => scrollToSection("projects") },
    { type: "nav", icon: "🧠", title: "Jump to Technical Skills", desc: "Languages, frameworks, tools & competencies", run: () => scrollToSection("skills") },
    { type: "nav", icon: "💼", title: "Jump to Experience Timeline", desc: "Career milestones and education", run: () => scrollToSection("experience") },
    { type: "nav", icon: "✉️", title: "Jump to Contact Form", desc: "Send direct message or email", run: () => scrollToSection("contact") }
  ];

  // Add 33 projects to search
  PROJECTS_DATA.forEach((p) => {
    list.push({
      type: "project",
      icon: p.isLive ? "🚀" : "📁",
      title: p.title,
      desc: p.badge + " • " + p.tags.slice(0, 3).join(", "),
      badge: p.isLive ? "LIVE" : "REPO",
      run: () => openProjectDetailModal(p.id)
    });
  });

  return list;
}

function openCommandPalette() {
  if (!commandPaletteModal) return;
  playUiSound("open");
  commandPaletteModal.showModal();
  if (paletteSearchInput) {
    paletteSearchInput.value = "";
    setTimeout(() => paletteSearchInput.focus(), 50);
  }
  renderPaletteResults("");
}

function closeCommandPalette() {
  if (commandPaletteModal && commandPaletteModal.open) {
    playUiSound("close");
    commandPaletteModal.close();
  }
}

function renderPaletteResults(query) {
  if (!paletteResultsList) return;
  const q = query.toLowerCase().trim();
  const all = buildPaletteCatalog();
  const filtered = q
    ? all.filter((item) => item.title.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q))
    : all.slice(0, 8);

  paletteItems = filtered;
  activePaletteIdx = 0;

  if (filtered.length === 0) {
    paletteResultsList.innerHTML = `<div class="palette-item" style="cursor: default; opacity: 0.6;">No matching commands or projects found</div>`;
    return;
  }

  paletteResultsList.innerHTML = filtered
    .map((item, idx) => `
      <div class="palette-item ${idx === 0 ? "active" : ""}" data-idx="${idx}" role="option">
        <span class="palette-item-icon">${item.icon}</span>
        <div class="palette-item-content">
          <div class="palette-item-title">
            ${escapeHtml(item.title)}
            ${item.badge ? `<span class="palette-item-badge">${escapeHtml(item.badge)}</span>` : ""}
          </div>
          <div class="palette-item-sub">${escapeHtml(item.desc)}</div>
        </div>
      </div>
    `)
    .join("");

  paletteResultsList.querySelectorAll(".palette-item").forEach((el) => {
    el.addEventListener("click", () => {
      const idx = parseInt(el.getAttribute("data-idx") || "0", 10);
      executePaletteItem(idx);
    });
  });
}

function updatePaletteSelection() {
  if (!paletteResultsList) return;
  const items = paletteResultsList.querySelectorAll(".palette-item");
  items.forEach((item, idx) => {
    const isActive = idx === activePaletteIdx;
    item.classList.toggle("active", isActive);
    if (isActive) item.scrollIntoView({ block: "nearest" });
  });
}

function executePaletteItem(idx) {
  const item = paletteItems[idx];
  if (item && item.run) {
    closeCommandPalette();
    playUiSound("click");
    item.run();
  }
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// 12. Toast Notification Utility
function showToast(message, duration = 3200) {
  if (!toastContainer) return;

  const toast = document.createElement("div");
  toast.className = "toast-message";
  toast.innerHTML = `
    <span class="toast-icon">✓</span>
    <span class="toast-text">${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => toast.classList.add("visible"), 20);

  setTimeout(() => {
    toast.classList.remove("visible");
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// 13. Live Clock (Indian Standard Time)
function initLiveClock() {
  function updateClock() {
    if (!liveClockEl) return;
    const now = new Date();
    const options = {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    };
    try {
      const timeString = new Intl.DateTimeFormat("en-US", options).format(now);
      liveClockEl.textContent = `${timeString} IST`;
    } catch {
      liveClockEl.textContent = now.toLocaleTimeString();
    }
  }

  updateClock();
  setInterval(updateClock, 1000);
}

// 14. Ambient Mouse Glow Follower
function initAmbientGlow() {
  if (!ambientGlow) return;
  if (window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener("pointermove", (e) => {
      const x = e.clientX;
      const y = e.clientY;
      ambientGlow.style.transform = `translate3d(${x - 300}px, ${y - 300}px, 0)`;
      ambientGlow.style.opacity = "0.7";
    });
  }
}

// 15. Event Listeners Setup
function initEventListeners() {
  // Copyright Year
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Theme & Sound Header Buttons
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      cycleTheme();
    });
  }

  if (soundToggleBtn) {
    soundToggleBtn.addEventListener("click", () => {
      toggleSound();
    });
    soundToggleBtn.classList.toggle("sound-active", soundEnabled);
    const soundIconEl = document.getElementById("sound-icon");
    if (soundIconEl) soundIconEl.textContent = soundEnabled ? "🔊" : "🔇";
  }


  // Open Terminal Buttons
  if (openTerminalBtn) {
    openTerminalBtn.addEventListener("click", openTerminal);
  }
  if (closeTerminalBtn) {
    closeTerminalBtn.addEventListener("click", closeTerminal);
  }
  if (closeTerminalDot) {
    closeTerminalDot.addEventListener("click", closeTerminal);
  }

  // Terminal Quick Command Chips
  document.querySelectorAll(".term-cmd-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      const cmd = chip.getAttribute("data-cmd");
      if (cmd) executeTerminalCommand(cmd);
    });
  });

  // Terminal Form Input
  if (terminalForm && terminalInput) {
    terminalForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const val = terminalInput.value;
      terminalInput.value = "";
      executeTerminalCommand(val);
    });
  }

  // Active Skill Filter Banner Clear Button
  if (clearSkillBtn) {
    clearSkillBtn.addEventListener("click", clearSkillFilter);
  }

  // Click on Technical Skills section pills to filter projects
  document.querySelectorAll(".skills-matrix-grid .skill-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      const skillName = pill.textContent.trim();
      filterBySkill(skillName);
    });
  });

  // Filter Pills (All, Live Apps, AI Agents, Computer Vision, APIs, Data)
  filterPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      filterPills.forEach((p) => {
        p.classList.remove("active");
        p.setAttribute("aria-selected", "false");
      });
      pill.classList.add("active");
      pill.setAttribute("aria-selected", "true");

      currentFilter = pill.getAttribute("data-filter") || "all";
      playUiSound("click");
      renderProjects();
    });
  });

  // Search Input
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value;
      if (clearSearchBtn) {
        clearSearchBtn.style.visibility = currentSearch ? "visible" : "hidden";
      }
      renderProjects();
    });
  }

  // Clear Search
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      currentSearch = "";
      clearSearchBtn.style.visibility = "hidden";
      playUiSound("click");
      renderProjects();
      if (searchInput) searchInput.focus();
    });
  }

  // Sort Dropdown
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      playUiSound("click");
      renderProjects();
    });
  }

  // Reset Filters Button (in empty state)
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener("click", () => {
      currentFilter = "all";
      currentSearch = "";
      currentSkillFilter = null;
      if (activeSkillBanner) activeSkillBanner.style.display = "none";
      if (searchInput) searchInput.value = "";
      if (clearSearchBtn) clearSearchBtn.style.visibility = "hidden";
      filterPills.forEach((p) => {
        const isAll = p.getAttribute("data-filter") === "all";
        p.classList.toggle("active", isAll);
        p.setAttribute("aria-selected", String(isAll));
      });
      playUiSound("click");
      renderProjects();
    });
  }

  // Command Palette Open & Trigger
  if (searchTrigger) {
    searchTrigger.addEventListener("click", openCommandPalette);
  }
  if (closePaletteBtn) {
    closePaletteBtn.addEventListener("click", closeCommandPalette);
  }

  if (paletteSearchInput) {
    paletteSearchInput.addEventListener("input", (e) => {
      renderPaletteResults(e.target.value);
    });

    paletteSearchInput.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (paletteItems.length > 0) {
          activePaletteIdx = (activePaletteIdx + 1) % paletteItems.length;
          updatePaletteSelection();
        }
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (paletteItems.length > 0) {
          activePaletteIdx = (activePaletteIdx - 1 + paletteItems.length) % paletteItems.length;
          updatePaletteSelection();
        }
      } else if (e.key === "Enter") {
        e.preventDefault();
        executePaletteItem(activePaletteIdx);
      }
    });
  }

  // Global Keyboard Shortcuts
  window.addEventListener("keydown", (e) => {
    // Ctrl+K or Cmd+K: Open Command Palette
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      openCommandPalette();
    }
    // `~` or Ctrl+`: Open Terminal
    if (e.key === "`" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      openTerminal();
    }
  });

  // Mobile Navigation Drawer Toggle
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.classList.toggle("is-active", isOpen);
      playUiSound("click");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.classList.remove("is-active");
      });
    });
  }

  // Sticky Header Blur Elevation & Scroll Progress Bar
  const scrollProgressBar = document.getElementById("scroll-progress-bar");
  window.addEventListener("scroll", () => {
    if (siteHeader) {
      if (window.scrollY > 40) {
        siteHeader.classList.add("header-scrolled");
      } else {
        siteHeader.classList.remove("header-scrolled");
      }
    }
    if (scrollProgressBar) {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTotal > 0 ? (window.scrollY / scrollTotal) * 100 : 0;
      scrollProgressBar.style.width = `${progress}%`;
    }
  });

  // Copy Email Handlers
  const emailToCopy = "anuragpandey.connect@gmail.com";
  document.querySelectorAll(".copy-email-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      navigator.clipboard.writeText(emailToCopy).then(() => {
        playUiSound("success");
        showToast("Email copied: anuragpandey.connect@gmail.com");
      });
    });
  });

  // Resume Modal Handlers
  function openResume() {
    if (resumeModal) {
      playUiSound("open");
      resumeModal.showModal();
    }
  }
  function closeResume() {
    if (resumeModal && resumeModal.open) {
      playUiSound("close");
      resumeModal.close();
    }
  }

  if (openResumeBtn) openResumeBtn.addEventListener("click", openResume);
  if (footerResumeBtn) footerResumeBtn.addEventListener("click", openResume);
  if (closeResumeBtn) closeResumeBtn.addEventListener("click", closeResume);
  if (printResumeBtn) {
    printResumeBtn.addEventListener("click", () => {
      window.print();
    });
  }

  // Project Modal Close Handlers
  if (closeProjectModalBtn) closeProjectModalBtn.addEventListener("click", closeProjectDetailModal);
  if (dismissProjectModalBtn) dismissProjectModalBtn.addEventListener("click", closeProjectDetailModal);

  // Light dismiss on backdrop click for native <dialog>
  [resumeModal, projectModal, terminalModal, commandPaletteModal].forEach((modal) => {
    if (modal) {
      modal.addEventListener("cancel", () => {
        playUiSound("close");
      });
      modal.addEventListener("click", (e) => {
        const rect = modal.getBoundingClientRect();
        const isInDialog =
          rect.top <= e.clientY &&
          e.clientY <= rect.top + rect.height &&
          rect.left <= e.clientX &&
          e.clientX <= rect.left + rect.width;
        if (!isInDialog) {
          playUiSound("close");
          modal.close();
        }
      });
    }
  });

  // Contact Form Validation & Submission
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const nameInput = document.getElementById("contact-name");
      const emailInput = document.getElementById("contact-email");
      const subjectInput = document.getElementById("contact-subject");
      const messageInput = document.getElementById("contact-message");

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        showFieldError("name-error");
        isValid = false;
      } else {
        hideFieldError("name-error");
      }

      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        showFieldError("email-error");
        isValid = false;
      } else {
        hideFieldError("email-error");
      }

      // Validate Subject
      if (!subjectInput.value.trim()) {
        showFieldError("subject-error");
        isValid = false;
      } else {
        hideFieldError("subject-error");
      }

      // Validate Message
      if (!messageInput.value.trim()) {
        showFieldError("message-error");
        isValid = false;
      } else {
        hideFieldError("message-error");
      }

      if (!isValid) return;

      // Capture values before reset
      const submittedName = nameInput.value.trim();
      const submittedEmail = emailInput.value.trim();
      const submittedSubject = subjectInput.value.trim();
      const submittedMessage = messageInput.value.trim();

      // Simulate sending with loading state
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.querySelector(".btn-text").textContent = "Sending...";
      }

      setTimeout(() => {
        // Save to localStorage so sender's history is maintained
        try {
          const storedMessages = JSON.parse(localStorage.getItem("ap_contact_messages") || "[]");
          storedMessages.push({
            name: submittedName,
            email: submittedEmail,
            subject: submittedSubject,
            message: submittedMessage,
            date: new Date().toISOString()
          });
          localStorage.setItem("ap_contact_messages", JSON.stringify(storedMessages));
        } catch (err) {
          console.warn("LocalStorage save error:", err);
        }

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.querySelector(".btn-text").textContent = "Send Message";
        }

        if (formSuccessAlert) {
          formSuccessAlert.style.display = "flex";
        }

        playUiSound("success");
        showToast("Message recorded! Launching email to deliver directly...");

        // Automatically launch mailto with pre-filled content to ensure actual inbox receipt
        const bodyText = `Hi Anurag,%0D%0A%0D%0A${encodeURIComponent(submittedMessage)}%0D%0A%0D%0AFrom: ${encodeURIComponent(submittedName)} (${encodeURIComponent(submittedEmail)})`;
        const mailtoUrl = `mailto:anuragpandey.connect@gmail.com?subject=${encodeURIComponent(submittedSubject)}&body=${bodyText}`;
        setTimeout(() => {
          window.location.href = mailtoUrl;
        }, 800);

        contactForm.reset();
      }, 700);
    });
  }

  function showFieldError(errorId) {
    const el = document.getElementById(errorId);
    if (el) el.style.display = "block";
  }

  function hideFieldError(errorId) {
    const el = document.getElementById(errorId);
    if (el) el.style.display = "none";
  }

  // Direct Mailto Fallback Button
  if (directMailtoBtn) {
    directMailtoBtn.addEventListener("click", () => {
      const name = document.getElementById("contact-name")?.value || "";
      const subject = document.getElementById("contact-subject")?.value || "Inquiry for Anurag Pandey";
      const message = document.getElementById("contact-message")?.value || "";

      const bodyText = `Hi Anurag,%0D%0A%0D%0A${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${encodeURIComponent(name)}`;
      const mailtoUrl = `mailto:anuragpandey.connect@gmail.com?subject=${encodeURIComponent(subject)}&body=${bodyText}`;
      window.location.href = mailtoUrl;
    });
  }

  // Back to Top Button
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      playUiSound("click");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Scroll Reveal Observer
  const revealElements = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add("visible"));
  }
}

// 16. Application Initialization
document.addEventListener("DOMContentLoaded", () => {
  // Restore saved theme and initialize visual badges
  applyTheme(activeTheme, true);

  initBackgroundCanvas();
  renderProjects();
  initLiveClock();
  initAmbientGlow();
  initEventListeners();
});
