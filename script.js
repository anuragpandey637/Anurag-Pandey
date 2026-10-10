/**
 * Anurag Pandey - Portfolio & Comprehensive Work Showcase
 * Complete dataset and interactive functionality for all 33+ projects.
 */

// 1. All 33 Projects Dataset
const PROJECTS_DATA = [
  {
    id: "solver-standalone",
    title: "Solver-Standalone (Screen Solver API)",
    category: "api",
    categories: ["api", "live", "cv"],
    isLive: true,
    isFeatured: true,
    badge: "Live Render API",
    description: "Cloud-hosted AI screen problem solver backend API providing computer vision recognition, visual query parsing, and automated solution generation.",
    highlights: [
      "Built with high-performance Python asynchronous endpoints.",
      "Integrated with computer vision processing for visual screen parsing.",
      "Live deployment on Render with production health checks and automated CI/CD.",
      "Serves real-time inference for screen-based mathematical and reasoning questions."
    ],
    tags: ["Python", "Computer Vision", "FastAPI", "Render", "AI"],
    demoUrl: "https://screensolver-api.onrender.com/",
    githubUrl: "https://github.com/Anurag637/Solver-Standalone",
    stars: 0
  },
  {
    id: "veridian-it-agent",
    title: "Veridian-IT-Agent",
    category: "agent",
    categories: ["agent", "live"],
    isLive: true,
    isFeatured: true,
    badge: "Live Vercel App",
    description: "Autonomous IT Helpdesk & Support Agent powered by LLMs to diagnose hardware/software issues, execute step-by-step resolution scripts, and manage IT triage.",
    highlights: [
      "Autonomous problem resolution loop with reasoning and action steps.",
      "Pre-configured incident classification taxonomy for enterprise IT issues.",
      "Clean modern user interface deployed live on Vercel.",
      "Reduces initial response latency for common tier-1 and tier-2 IT inquiries."
    ],
    tags: ["JavaScript", "AI Agent", "LLM", "Vercel", "Automation"],
    demoUrl: "https://veridian-it-agent-pi.vercel.app",
    githubUrl: "https://github.com/Anurag637/Veridian-IT-Agent",
    stars: 0
  },
  {
    id: "aionos-pro",
    title: "AIonOS-Pro",
    category: "agent",
    categories: ["agent", "live"],
    isLive: true,
    isFeatured: true,
    badge: "Live Vercel App",
    description: "Next-generation intelligent workspace operating layer providing unified access to AI tools, document summarization, prompt orchestration, and task automation.",
    highlights: [
      "Unified multi-tool command interface designed for rapid daily productivity.",
      "Dynamic model switching and prompt templating architecture.",
      "Live accessible deployment on Vercel with responsive mobile optimization.",
      "Integrated agentic assistance across multiple work domains."
    ],
    tags: ["Python", "Agentic AI", "LLMs", "Vercel", "Web App"],
    demoUrl: "https://a-ion-os-pro.vercel.app",
    githubUrl: "https://github.com/Anurag637/AIonOS-Pro",
    stars: 0
  },
  {
    id: "ai-business-workflow",
    title: "AIBusinessWorkflowArchitect",
    category: "agent",
    categories: ["agent", "live"],
    isLive: true,
    isFeatured: true,
    badge: "Live Vercel App",
    description: "Enterprise workflow automation designer that leverages LLMs to architect, visualize, and generate optimal multi-agent business process pipelines.",
    highlights: [
      "Natural language business requirement parsing into structured workflow diagrams.",
      "Automated bottleneck detection and agent hand-off optimization.",
      "Production-ready deployment on Vercel with interactive flowcharting.",
      "Supports export into modular workflow specs."
    ],
    tags: ["Python", "Workflow Engine", "LLMs", "Vercel", "Enterprise AI"],
    demoUrl: "https://ai-business-workflow-architect.vercel.app",
    githubUrl: "https://github.com/Anurag637/AIBusinessWorkflowArchitect",
    stars: 0
  },
  {
    id: "mini-mechanic-api",
    title: "Mini-Mechanic-Service-API",
    category: "api",
    categories: ["api", "live"],
    isLive: true,
    isFeatured: true,
    badge: "Live Swagger Docs",
    description: "Automotive repair and mechanic service management REST API built with Django and Django REST Framework, featuring complete Swagger/OpenAPI documentation.",
    highlights: [
      "Comprehensive RESTful CRUD endpoints for service bookings, customer management, and billing.",
      "Integrated Swagger UI & ReDoc documentation deployed live on Render.",
      "Token authentication, permission levels, and relational database schema.",
      "Follows industry best practices for Django modular app structure."
    ],
    tags: ["Python", "Django", "Django REST Framework", "Swagger", "Render", "SQL"],
    demoUrl: "https://mini-mechanic-service-api.onrender.com/api/docs/",
    githubUrl: "https://github.com/Anurag637/Mini-Mechanic-Service-API",
    stars: 0
  },
  {
    id: "shl-assessment-recommender",
    title: "SHL-Assessment-Recommender",
    category: "api",
    categories: ["api", "live", "data"],
    isLive: true,
    isFeatured: true,
    badge: "Live Render App",
    description: "Candidate skill evaluation and assessment recommendation engine matching hiring profiles against comprehensive assessment catalogs using NLP and ML.",
    highlights: [
      "Semantic matching between candidate resumes/job requirements and tests.",
      "Deployed live on Render with automated web interface.",
      "Multi-attribute scoring algorithm considering technical seniority and soft skills.",
      "Provides transparent recommendation rationale to HR recruiters."
    ],
    tags: ["Python", "Machine Learning", "NLP", "Render", "Scikit-Learn"],
    demoUrl: "https://shl-assessment-recommender-omgs.onrender.com",
    githubUrl: "https://github.com/Anurag637/SHL-Assessment-Recommender",
    stars: 0
  },
  {
    id: "qchat",
    title: "QChat (LLM Gateway & Chat)",
    category: "agent",
    categories: ["agent", "live", "api"],
    isLive: true,
    isFeatured: true,
    badge: "Live Vercel App",
    description: "High-throughput LLM inference gateway and chat client featuring intelligent prompt routing, model caching, response streaming, and multi-provider support.",
    highlights: [
      "Prompt router directing simple vs complex queries to optimal models.",
      "Live production deployment on Vercel with clean responsive chat UX.",
      "Inference caching mechanism reducing redundant LLM API costs.",
      "Session management and conversation memory persistence."
    ],
    tags: ["Python", "LLM Gateway", "FastAPI", "Vercel", "Transformers"],
    demoUrl: "https://qchat-gateway.vercel.app/",
    githubUrl: "https://github.com/Anurag637/QChat",
    stars: 1
  },
  {
    id: "deepfake-detection",
    title: "Deepfake Detection System",
    category: "cv",
    categories: ["cv"],
    isLive: false,
    isFeatured: true,
    badge: "Deep Learning",
    description: "Convolutional neural network (CNN) deepfake detection system trained on benchmark DFDC and FaceForensics++ datasets with OpenCV frame extraction.",
    highlights: [
      "Trained on large-scale facial manipulation datasets (DFDC, FaceForensics++).",
      "Real-time face detection, facial crop normalization, and artifact analysis.",
      "TensorFlow and OpenCV pipeline analyzing temporal consistency across video frames.",
      "Streamlit UI for interactive video and image authenticity scoring."
    ],
    tags: ["Python", "TensorFlow", "OpenCV", "CNN", "Deep Learning", "Streamlit"],
    demoUrl: null,
    githubUrl: "https://github.com/Anurag637/Deepfake-Detection",
    stars: 1
  },
  {
    id: "trocr-historical",
    title: "Text-Classification-using-Transformers",
    category: "cv",
    categories: ["cv", "agent"],
    isLive: false,
    isFeatured: true,
    badge: "Hugging Face TrOCR",
    description: "Vision Transformer OCR system fine-tuned on historical 17th-century Spanish manuscripts utilizing Hugging Face TrOCR with real-time Streamlit transcription.",
    highlights: [
      "Fine-tuned Transformer-based OCR model specifically for calligraphic manuscripts.",
      "Preprocessing pipeline handling paper degradation, ink bleed, and noise.",
      "Streamlit application enabling upload of historical document snippets with instant transcription.",
      "Benchmarked Character Error Rate (CER) and Word Error Rate (WER)."
    ],
    tags: ["Python", "TrOCR", "Hugging Face", "PyTorch", "Transformers", "Streamlit"],
    demoUrl: null,
    githubUrl: "https://github.com/Anurag637/Text-Classification-using-Transformers",
    stars: 0
  },
  {
    id: "resume-ranking",
    title: "Resume Screening & Ranking System",
    category: "data",
    categories: ["data"],
    isLive: false,
    isFeatured: true,
    badge: "NLP System",
    description: "Automated recruitment screening engine utilizing Natural Language Processing (SpaCy, scikit-learn) to parse and rank candidate CVs against target job descriptions.",
    highlights: [
      "Multi-format document parsing extracting clean text from PDF and DOCX files.",
      "Entity extraction of candidate skills, qualifications, and domain experience.",
      "TF-IDF and cosine similarity ranking matrix with customizable hiring weights.",
      "Developed during Microsoft & SAP collaboration internship via Edunet."
    ],
    tags: ["Python", "NLP", "SpaCy", "Scikit-Learn", "Streamlit", "PDFPlumber"],
    demoUrl: null,
    githubUrl: "https://github.com/Anurag637/Resume-Ranking",
    stars: 0
  },
  {
    id: "sa-capstone-pricing",
    title: "Smart Urban Parking Dynamic Pricing Engine",
    category: "data",
    categories: ["data"],
    isLive: false,
    isFeatured: true,
    badge: "Pathway Capstone",
    description: "Real-time, event-driven data streaming dynamic pricing engine for urban parking management built with NumPy, Pandas, Bokeh, and Pathway for Summer Analytics 2025.",
    highlights: [
      "Engineered without prebuilt ML blackboxes, utilizing pure mathematical optimization.",
      "Real-time event streaming engine using Pathway for sub-second price adjustments.",
      "Interactive analytics dashboard built with Bokeh for spatial demand monitoring.",
      "Developed for Summer Analytics 2025 (Consulting & Analytics Club × Pathway)."
    ],
    tags: ["Python", "Pathway", "Event-Driven", "Bokeh", "NumPy", "Pandas"],
    demoUrl: null,
    githubUrl: "https://github.com/Anurag637/SA_Capstone_Project-2025",
    stars: 0
  },
  {
    id: "pet-classification",
    title: "Pet Breed Classification (37 Breeds)",
    category: "cv",
    categories: ["cv"],
    isLive: false,
    isFeatured: false,
    badge: "Computer Vision",
    description: "Deep learning computer vision system classifying 37 cat and dog breeds from visual imagery using CNN architectures and transfer learning.",
    highlights: [
      "Evaluated CNN architectures with data augmentation and transfer learning.",
      "Comprehensive evaluation with confusion matrices and per-breed recall metrics.",
      "Inference script supporting image classification with top-5 confidence intervals."
    ],
    tags: ["Python", "PyTorch", "CNN", "Transfer Learning", "Computer Vision"],
    demoUrl: null,
    githubUrl: "https://github.com/Anurag637/Pet-Classification",
    stars: 0
  },
  {
    id: "landmark-detection",
    title: "Landmark Detection & Feature Extraction",
    category: "cv",
    categories: ["cv"],
    isLive: false,
    isFeatured: false,
    badge: "Computer Vision",
    description: "Computer vision pipeline for geographic and architectural landmark recognition using OpenCV feature extractors and deep visual representations.",
    highlights: [
      "Extracts robust scale-invariant feature points across disparate camera angles.",
      "Visual clustering and nearest-neighbor indexing for fast landmark retrieval.",
      "Jupyter Notebook workflow with visual step-by-step feature matches."
    ],
    tags: ["Jupyter Notebook", "OpenCV", "Deep Learning", "Feature Extraction"],
    demoUrl: null,
    githubUrl: "https://github.com/Anurag637/Landmark-Detection",
    stars: 0
  },
  {
    id: "continuous-face-detection",
    title: "Continuous Face Detection Engine",
    category: "cv",
    categories: ["cv"],
    isLive: false,
    isFeatured: false,
    badge: "Real-time OpenCV",
    description: "Real-time webcam stream continuous facial detection, boundary tracking, and multi-face landmark tracking using OpenCV and Deep Neural Networks (DNN).",
    highlights: [
      "High-FPS webcam stream processing with Haar Cascades and DNN backends.",
      "Persistent bounding-box smoothing and multi-face tracking without jitter.",
      "Optimized for real-time edge performance on low compute resources."
    ],
    tags: ["Python", "OpenCV", "Face Detection", "Real-Time"],
    demoUrl: null,
    githubUrl: "https://github.com/Anurag637/Continuous-Face-Detection-",
    stars: 0
  },
  {
    id: "email-spam-detector",
    title: "Email Spam Detection System",
    category: "data",
    categories: ["data"],
    isLive: false,
    isFeatured: false,
    badge: "C-DAC Internship",
    description: "NLP machine learning classifier detecting malicious and spam emails using TF-IDF feature representations, Support Vector Machines, and Logistic Regression.",
    highlights: [
      "Built and evaluated during internship at C-DAC, Noida.",
      "Achieved 98%+ precision on benchmark spam corpora.",
      "Streamlit user interface with instant spam probability scoring."
    ],
    tags: ["Python", "NLP", "Scikit-Learn", "TF-IDF", "Streamlit"],
    demoUrl: null,
    githubUrl: "https://github.com/Anurag637/Email-Spam-Detector",
    stars: 0
  },
  {
    id: "text-speech-sign",
    title: "Text-Speech-Sign Interpreter",
    category: "agent",
    categories: ["agent", "web"],
    isLive: false,
    isFeatured: false,
    badge: "Multimodal AI",
    description: "Assistive communication tool facilitating bidirectional translation between textual content, voice speech synthesis, and sign language visual gesture output.",
    highlights: [
      "Web Speech API integration for continuous voice recognition and text-to-speech.",
      "Sign language visual mapping dictionary for accessibility and inclusive communication.",
      "Browser-native implementation requiring zero native software installs."
    ],
    tags: ["HTML5", "JavaScript", "Web Speech API", "Accessibility", "AI"],
    demoUrl: null,
    githubUrl: "https://github.com/Anurag637/Text-Speech-Sign-Interpreater",
    stars: 0
  },
  {
    id: "methodic-configurator",
    title: "MethodicConfigurator (ArduPilot Tuner)",
    category: "web",
    categories: ["web"],
    isLive: true,
    isFeatured: false,
    badge: "Live Docs / Tool",
    description: "Systematic parameter sequence configurator and tuning suite for ArduPilot autonomous unmanned aerial vehicles (UAV) and robotics controllers.",
    highlights: [
      "Step-by-step guided parameter tuning for UAV vehicle safety and stability.",
      "Comprehensive telemetry validation and configuration file generator.",
      "Interactive documentation and flight tuning sequences."
    ],
    tags: ["Python", "ArduPilot", "Robotics", "Configurator"],
    demoUrl: "https://ardupilot.github.io/MethodicConfigurator/",
    githubUrl: "https://github.com/Anurag637/MethodicConfigurator",
    stars: 0
  },
  {
    id: "devops-demo",
    title: "DevOps CI/CD Automation Pipeline",
    category: "api",
    categories: ["api", "web"],
    isLive: false,
    isFeatured: false,
    badge: "DevOps & Cloud",
    description: "Containerized deployment automation showcase implementing GitHub Actions CI/CD workflows, automated testing, Docker containers, and environment promotion.",
    highlights: [
      "Automated linting, unit testing, and Docker image builds upon git push.",
      "Multi-stage Dockerfiles optimizing image size and runtime security.",
      "Configured branch protection rules and continuous delivery automation."
    ],
    tags: ["HTML", "Docker", "GitHub Actions", "CI/CD", "DevOps"],
    demoUrl: null,
    githubUrl: "https://github.com/Anurag637/devops-demo",
    stars: 0
  },
  {
    id: "summer-analytics-2025",
    title: "Summer Analytics 2025 Repository",
    category: "data",
    categories: ["data"],
    isLive: false,
    isFeatured: false,
    badge: "Data Science",
    description: "Extensive collection of data analytics models, statistical hypotheses, regression analyses, and exploratory data visualizations completed for Summer Analytics 2025.",
    highlights: [
      "Advanced exploratory data analysis (EDA) on heterogeneous real-world datasets.",
      "Predictive regression and classification modeling with hyperparameter optimization.",
      "Data wrangling and feature engineering best practices using Pandas and NumPy."
    ],
    tags: ["HTML", "Python", "Data Science", "EDA", "Statistics"],
    demoUrl: null,
    githubUrl: "https://github.com/Anurag637/Summer-Analytics-2025",
    stars: 0
  },
  {
    id: "library-management",
    title: "Library Management Database System",
    category: "web",
    categories: ["web"],
    isLive: false,
    isFeatured: false,
    badge: "Java & SQL",
    description: "Desktop enterprise software system managing book inventories, member loan transactions, fine calculations, and database cataloging via Java Swing & SQL.",
    highlights: [
      "Relational SQL database schema enforcing foreign keys and ACID transactions.",
      "Object-oriented Java desktop GUI with complete input validation.",
      "Automated overdue tracking and checkout ledger management."
    ],
    tags: ["Java", "SQL", "Database Design", "Desktop GUI"],
    demoUrl: null,
    githubUrl: "https://github.com/Anurag637/Library-Management-System",
    stars: 0
  },
  {
    id: "computer-network",
    title: "Computer Networks & Protocols Suite",
    category: "web",
    categories: ["web"],
    isLive: false,
    isFeatured: false,
    badge: "Networking",
    description: "Low-level network socket programming, TCP/UDP protocol implementations, error detection algorithms (CRC), and routing simulations.",
    highlights: [
      "Socket programming in C/C++ simulating client-server message exchange.",
      "Implementation of sliding window protocols and distance vector routing.",
      "Packet sniffing and protocol packet header dissection."
    ],
    tags: ["C++", "Networking", "Sockets", "TCP/IP"],
    demoUrl: null,
    githubUrl: "https://github.com/Anurag637/Computer-Network",
    stars: 0
  },
  {
    id: "os-assignment",
    title: "Operating Systems Algorithms Simulation",
    category: "web",
    categories: ["web"],
    isLive: false,
    isFeatured: false,
    badge: "Systems & DSA",
    description: "Simulation of core operating system algorithms including CPU scheduling (Round Robin, SJF, Priority), deadlock avoidance (Banker's), and page replacement.",
    highlights: [
      "Simulates process execution timelines and calculates average turnaround/waiting times.",
      "Banker's algorithm safety state verification preventing deadlocks.",
      "Page replacement algorithms: FIFO, LRU, and Optimal comparison."
    ],
    tags: ["Python", "Operating Systems", "Algorithms", "Concurrency"],
    demoUrl: null,
    githubUrl: "https://github.com/Anurag637/OS-Assignment",
    stars: 0
  },
  {
    id: "evidently-ai",
    title: "Evidently ML & LLM Observability",
    category: "data",
    categories: ["data"],
    isLive: false,
    isFeatured: false,
    badge: "ML Observability",
    description: "Exploration and implementation of ML monitoring workflows, data drift detection, and LLM output evaluation utilizing the Evidently open-source framework.",
    highlights: [
      "Automated data distribution shift testing for production ML models.",
      "Interactive data drift report generation and performance degradation alerts.",
      "LLM response quality metrics tracking."
    ],
    tags: ["Python", "Evidently AI", "MLOps", "Data Drift", "Monitoring"],
    demoUrl: "https://discord.gg/xZjKRaNp8b",
    githubUrl: "https://github.com/Anurag637/evidently",
    stars: 0
  },
  {
    id: "openms",
    title: "OpenMS Computational Mass Spectrometry",
    category: "data",
    categories: ["data"],
    isLive: false,
    isFeatured: false,
    badge: "C++ High Performance",
    description: "Codebase exploration of the high-performance C++ OpenMS framework for mass spectrometry data processing and computational proteomics.",
    highlights: [
      "High-throughput raw analytical chemistry signal processing.",
      "Algorithmic peak identification, chromatographic retention time alignment.",
      "Modern C++ architecture with template metaprogramming."
    ],
    tags: ["C++", "Computational Proteomics", "Data Processing", "Open Source"],
    demoUrl: "https://www.openms.de",
    githubUrl: "https://github.com/Anurag637/OpenMS",
    stars: 0
  },
  {
    id: "oppia",
    title: "Oppia Interactive Learning Platform",
    category: "web",
    categories: ["web"],
    isLive: false,
    isFeatured: false,
    badge: "Open Source Contrib",
    description: "Contributions and architectural exploration of Oppia, an open-source educational platform delivering personalized interactive learning experiences.",
    highlights: [
      "Full-stack web application architecture supporting global students.",
      "Modular interactive lessons with automated assessment feedback.",
      "Explored large-scale web codebase conventions and automated test suites."
    ],
    tags: ["Python", "TypeScript", "Open Source", "Education Tech"],
    demoUrl: "https://www.oppia.org",
    githubUrl: "https://github.com/Anurag637/oppia",
    stars: 0
  },
  {
    id: "to-do-list",
    title: "Modern Interactive Task Manager",
    category: "web",
    categories: ["web"],
    isLive: false,
    isFeatured: false,
    badge: "Web App",
    description: "Responsive productivity task manager featuring persistent browser local storage, filter categories, animated completion states, and keyboard shortcuts.",
    highlights: [
      "Clean UI with zero external dependencies.",
      "Local storage state preservation across page reloads.",
      "Drag-and-drop task reordering and priority categorization."
    ],
    tags: ["JavaScript", "HTML5", "CSS3", "LocalStorage", "Productivity"],
    demoUrl: null,
    githubUrl: "https://github.com/Anurag637/To-Do-list",
    stars: 0
  },
  {
    id: "tic-tac-toe",
    title: "Tic-Tac-Toe AI (Minimax Algorithm)",
    category: "web",
    categories: ["web"],
    isLive: false,
    isFeatured: false,
    badge: "Game AI",
    description: "Classic Tic-Tac-Toe web game featuring an unbeatable AI opponent driven by the Minimax decision tree algorithm and glassmorphic UI.",
    highlights: [
      "Recursive Minimax game theory algorithm ensuring optimal computer moves.",
      "Interactive 2-player or Player vs AI game modes.",
      "Responsive CSS Grid board layout with neon win line animations."
    ],
    tags: ["JavaScript", "Minimax", "Game AI", "CSS3"],
    demoUrl: null,
    githubUrl: "https://github.com/Anurag637/Tic-Tac-Toe",
    stars: 0
  },
  {
    id: "coin-toss-simulation",
    title: "3D Coin Toss Probability Simulation",
    category: "web",
    categories: ["web"],
    isLive: false,
    isFeatured: false,
    badge: "CSS 3D Physics",
    description: "Interactive 3D coin toss web simulation featuring keyframe physics animations, heads/tails probability tracking, and statistical trial accumulation.",
    highlights: [
      "CSS 3D transform keyframe flipping animations.",
      "Real-time statistical tracking verifying law of large numbers.",
      "Audio click and dynamic coin side rendering."
    ],
    tags: ["CSS3 3D", "JavaScript", "Probability", "Interactive UI"],
    demoUrl: null,
    githubUrl: "https://github.com/Anurag637/Coin-Toss-Simulation",
    stars: 0
  },
  {
    id: "calculator",
    title: "Glassmorphic Web Calculator",
    category: "web",
    categories: ["web"],
    isLive: false,
    isFeatured: false,
    badge: "Frontend UI",
    description: "Sleek glassmorphic scientific calculator web app with arithmetic evaluation, keyboard input bindings, calculation history ledger, and error prevention.",
    highlights: [
      "Full keyboard event listener support for desktop speed.",
      "Mathematical expression evaluator with operator precedence.",
      "Glassmorphic design with glowing hover accents."
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "Glassmorphism"],
    demoUrl: null,
    githubUrl: "https://github.com/Anurag637/Calculator",
    stars: 0
  },
  {
    id: "mp4player",
    title: "Custom HTML5 MP4 Video Player",
    category: "web",
    categories: ["web"],
    isLive: false,
    isFeatured: false,
    badge: "Media Web API",
    description: "Custom video player application built on top of the HTML5 Media API featuring custom controls, playback speed modulators, fullscreen mode, and hotkeys.",
    highlights: [
      "Custom timeline scrubbing and buffered duration visual indicators.",
      "Picture-in-picture (PiP) and custom volume slider.",
      "Keyboard shortcut map (Space to toggle, arrows to skip)."
    ],
    tags: ["HTML5", "JavaScript", "Media API", "Video Player"],
    demoUrl: null,
    githubUrl: "https://github.com/Anurag637/Mp4player",
    stars: 0
  },
  {
    id: "python-repo",
    title: "Python DSA & Core Implementations",
    category: "data",
    categories: ["data", "web"],
    isLive: false,
    isFeatured: false,
    badge: "Algorithms & DSA",
    description: "Comprehensive repository of core Python algorithms, data structures (Trees, Graphs, Queues, Heaps), design patterns, and programming exercises.",
    highlights: [
      "Modular implementations of sorting, searching, and graph traversal algorithms.",
      "Clean PEP 8 compliant code structure with docstrings and time complexity notations.",
      "Includes unit test cases for verifying correctness."
    ],
    tags: ["Python", "Data Structures", "Algorithms", "DSA"],
    demoUrl: null,
    githubUrl: "https://github.com/Anurag637/Python",
    stars: 0
  },
  {
    id: "portfolio-repo",
    title: "Personal Portfolio Archetype",
    category: "web",
    categories: ["web"],
    isLive: false,
    isFeatured: false,
    badge: "Web Layout",
    description: "Early personal portfolio codebase exploring responsive web layout principles, semantic HTML5 structure, and CSS grid architectures.",
    highlights: [
      "Explored responsive flexbox and grid layouts across device widths.",
      "Semantic markup foundations and CSS typography hierarchies.",
      "Early showcase foundation that preceded this full interactive portal."
    ],
    tags: ["HTML5", "CSS3", "Responsive Design"],
    demoUrl: null,
    githubUrl: "https://github.com/Anurag637/Portfolio",
    stars: 0
  },
  {
    id: "anurag637-profile",
    title: "Anurag637 GitHub Profile Hub",
    category: "web",
    categories: ["web"],
    isLive: false,
    isFeatured: false,
    badge: "Profile & CI",
    description: "Official GitHub profile configuration repository showcasing dynamic GitHub metrics, tech stack badges, and automated activity telemetry.",
    highlights: [
      "Dynamic GitHub metrics and language breakdown cards.",
      "Central directory point linking all open-source repositories.",
      "Regularly updated with current learning targets and deployment links."
    ],
    tags: ["Markdown", "GitHub Actions", "Profile Config", "Open Source"],
    demoUrl: null,
    githubUrl: "https://github.com/Anurag637/Anurag637",
    stars: 0
  }
];

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
  if (soundToggleBtn) {
    soundToggleBtn.classList.toggle("sound-active", soundEnabled);
    soundToggleBtn.title = soundEnabled ? "UI sound effects: Enabled" : "UI sound effects: Muted";
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
function applyTheme(themeName, silent = false) {
  if (!THEMES.includes(themeName)) themeName = "nebula";
  activeTheme = themeName;
  if (themeName === "nebula") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", themeName);
  }
  localStorage.setItem("ap_theme", themeName);
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

// 7. Render Projects Function
function renderProjects() {
  if (!projectsContainer) return;

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

  // Highlights list
  if (modalProjectHighlights) {
    modalProjectHighlights.innerHTML = project.highlights
      .map((hl) => `<li>${escapeHtml(hl)}</li>`)
      .join("");
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
 • <span class="term-hl">projects</span>     : 33 open-source repository catalog
 • <span class="term-hl">live</span>         : 7 production deployed apps & APIs
 • <span class="term-hl">cat resume</span>   : Complete education & milestones
 • <span class="term-hl">theme [name]</span> : Switch theme (nebula, matrix, tokyo, oled)
 • <span class="term-hl">matrix</span>       : Instant green matrix hacker mode
 • <span class="term-hl">lion</span>         : Launch 3D Celestial Lion leap sequence
 • <span class="term-hl">contact</span>      : Email, GitHub & LinkedIn coordinates
 • <span class="term-hl">github</span>       : Open GitHub profile in new tab
 • <span class="term-hl">clear</span>        : Clear terminal log screen`;
      break;

    case "whoami":
      out = `<strong>Anurag Pandey</strong> — Full-Stack AI & Machine Learning Systems Engineer
• Education: B.Tech CSE (AIML), Galgotias University (CGPA: 8.65)
• Location: Greater Noida / Delhi NCR, India (IST)
• Focus: Autonomous LLM Agents, Real-time Computer Vision, High-throughput APIs, PyTorch
• Open-Source: 33 Public Repositories | 7 Production Deployed Applications`;
      break;

    case "skills":
      out = `Core Technical Stack:
• <strong>Languages:</strong> Python, C++, SQL, JavaScript, HTML5/CSS3
• <strong>AI / ML:</strong> PyTorch, OpenCV, LangChain, Hugging Face, Scikit-Learn
• <strong>Backend & APIs:</strong> FastAPI, Django REST Framework, Flask, Node.js
• <strong>Cloud & Databases:</strong> PostgreSQL, MongoDB, Redis, Render, Vercel, Supabase
• <strong>DevOps & Tools:</strong> Docker, Git, GitHub Actions CI/CD, Linux CLI`;
      break;

    case "live":
      out = `7 Live Deployed Production Applications:
1. <a href="https://screensolver-api.onrender.com/" target="_blank">Solver-Standalone API</a> [Render - FastAPI/CV]
2. <a href="https://veridian-it-agent-pi.vercel.app" target="_blank">Veridian-IT-Agent</a> [Vercel - LLM Support Agent]
3. <a href="https://a-ion-os-pro.vercel.app" target="_blank">AIonOS-Pro</a> [Vercel - Workspace OS Layer]
4. <a href="https://ai-business-workflow-architect.vercel.app" target="_blank">AIBusinessWorkflowArchitect</a> [Vercel - Enterprise Pipeline Agent]
5. <a href="https://mini-mechanic-service-backend-1.onrender.com/swagger/" target="_blank">Mini-Mechanic API</a> [Render - Django/Swagger]
6. <a href="https://agent-zero-flame.vercel.app" target="_blank">Agent-Zero</a> [Vercel - Autonomous Agent Sandbox]
7. <a href="https://social-proof-engine.vercel.app" target="_blank">Social-Proof-Engine</a> [Vercel - Growth Engine]`;
      break;

    case "projects":
      out = `Catalog includes 33 repositories across AI Agents, Computer Vision, APIs, and Data Science.
Type <span class="term-hl">live</span> to view deployed apps, or use the UI search bar to query any project in real-time.`;
      break;

    case "cat":
      if (arg === "resume" || arg === "resume.md") {
        out = `<strong>RESUME SUMMARY — Anurag Pandey</strong>
--------------------------------------------------
🎓 Education: Galgotias University (2022 - 2026) | B.Tech CSE (AIML) | CGPA: 8.65
🚀 Specialization: End-to-End AI Engineering & Distributed Python Systems
🏆 Selected Works: 33 GitHub Projects | 7 Live Cloud Deployments (Vercel, Render)
✉️ Contact: anuragpandey.connect@gmail.com | github.com/Anurag637`;
      } else {
        out = `cat: file not found: '${escapeHtml(arg)}'. Try <span class="term-hl">cat resume</span>`;
      }
      break;

    case "matrix":
      applyTheme("matrix");
      out = `[STATUS] Matrix theme activated. Cyber green terminal mode enabled.`;
      break;

    case "lion":
    case "leap":
      if (typeof window.replayLionIntro === "function") {
        window.replayLionIntro();
        out = `[STATUS] Unleashing 3D Celestial Lion leap sequence...`;
      } else {
        out = `Lion intro sequence not initialized.`;
      }
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
    { type: "action", icon: "🦁", title: "Replay 3D Lion Leap Sequence", desc: "Watch celestial cyber lion leap out of screen", run: () => { if (typeof window.replayLionIntro === "function") window.replayLionIntro(); } },
    { type: "action", icon: "📄", title: "View Printable Resume", desc: "Open modal with full education & credentials", run: () => openResume() },
    { type: "action", icon: "💻", title: "Open Interactive CLI Terminal", desc: "Launch bash emulator terminal", run: () => openTerminal() },
    { type: "action", icon: "🎨", title: "Cycle Color Theme", desc: "Toggle between Nebula, Matrix, Tokyo, and OLED", run: () => cycleTheme() },
    { type: "action", icon: "🔊", title: "Toggle UI Sound FX", desc: "Toggle interactive Web Audio feedback", run: () => toggleSound() },
    { type: "nav", icon: "🚀", title: "Jump to Projects Section", desc: "Explore all 33 open-source repositories", run: () => scrollToSection("projects") },
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
  }

  // Replay Lion Intro Button
  const replayLionBtn = document.getElementById("replay-lion-btn");
  if (replayLionBtn) {
    replayLionBtn.addEventListener("click", () => {
      if (typeof window.replayLionIntro === "function") {
        window.replayLionIntro();
      }
    });
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
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            subject: subjectInput.value.trim(),
            message: messageInput.value.trim(),
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
        showToast("Message sent successfully! Thank you for reaching out.");

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
  // Restore saved theme
  if (activeTheme && activeTheme !== "nebula") {
    applyTheme(activeTheme, true);
  }

  initBackgroundCanvas();
  renderProjects();
  initLiveClock();
  initAmbientGlow();
  initEventListeners();
});
