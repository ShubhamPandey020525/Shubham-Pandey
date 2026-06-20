export const personalInfo = {
  name: "Shubham Pandey",
  phone: "8218554651",
  email: "contact.shub.aidev@gmail.com",
  linkedin: "https://www.linkedin.com/in/shubham-pandey-068469358",
  github: "https://github.com/ShubhamPandey020525",
};

export const professionalSummary =
  "Aspiring AI/ML Engineer and final-year Computer Science Engineering student with experience in Agentic AI, Generative AI, Retrieval-Augmented Generation (RAG), Computer Vision, Deep Learning, and Machine Learning, focused on building intelligent and scalable AI-powered applications.";

export const education = [
  {
    institution: "Bennett University",
    dates: "2023–2027",
    degree: "B.Tech in Computer Science Engineering",
    score: "CGPA: 8.0/10",
  },
  {
    institution: "Shiksha Bharati Senior Secondary School (CBSE)",
    dates: "2022–2023",
    degree: "Class XII",
    score: "84%",
  },
  {
    institution: "Shiksha Bharati Senior Secondary School (CBSE)",
    dates: "2020–2021",
    degree: "Class X",
    score: "91%",
  },
];

export const experience = [
  {
    company: "BCG X (Boston Consulting Group)",
    role: "GenAI Project (Forage Job Simulation)",
    date: "June 2026",
    certificateLink:
      "https://www.theforage.com/completion-certificates/SKZxezskWgmFjRvj9/gabev3vXhuACr48eb_SKZxezskWgmFjRvj9_6a3112fb5c6812dbed7841e3_1781691472856_completion_certificate.pdf",
    bullets: [
      "Developed a scalable corporate financial chatbot for BCG’s consulting division.",
      "Processed unstructured SEC 10-K/10-Q disclosures using Python and Pandas.",
      "Extracted business performance metrics, text-based financial risks, and corporate KPIs.",
      "Designed context-aware prompt engineering workflows and logic for enterprise AI.",
    ],
  },
  {
    company: "JPMorgan Chase & Co.",
    role: "Quantitative Research Project (Forage Job Simulation)",
    date: "June 2026",
    certificateLink:
      "https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/bWqaecPDbYAwSDqJy_Sj7temL583QAYpHXD_6a3112fb5c6812dbed7841e3_1781850143969_completion_certificate.pdf",
    bullets: [
      "Conducted time-series and exploratory data analysis on natural gas prices via Python.",
      "Engineered a custom cubic spline interpolation model to forecast 12-month future prices.",
      "Developed a reusable valuation framework to estimate asset values and contract profitability.",
      "Automated credit risk assessment pipelines and borrower segmentation using FICO buckets.",
    ],
  },
];

export const technicalSkills = {
  "Agentic AI & GenAI Frameworks": [
    "LangChain",
    "LangGraph",
    "CrewAI",
    "LLM API Integration",
    "ChromaDB",
    "FAISS",
  ],
  "Deep Learning & ML Libraries": [
    "PyTorch",
    "TensorFlow",
    "Scikit-Learn",
    "Pandas",
    "NumPy",
  ],
  "Programming Languages": ["Python", "C++", "JavaScript", "TypeScript"],
  "Web Frameworks & Deployment": [
    "FastAPI",
    "Flask",
    "React",
    "Vite",
    "Tailwind CSS",
    "Streamlit",
    "Uvicorn",
  ],
  "Databases & Developer Tools": ["MongoDB", "SQL", "Git", "GitHub", "Docker"],
};

export const projects = [
  {
    title: "Finvexis AI",
    date: "April 2026",
    github: "https://github.com/Riruru612/Finvexis_AI",
    stack: [
      "LangChain",
      "Multi-Agent Systems",
      "Python",
      "FastAPI",
      "Uvicorn",
      "React",
      "TypeScript",
      "Vite",
    ],
    bullets: [
      "Built a full-stack enterprise intelligence platform integrating 4 core domains (Business, Finance, Sales, and HR) into a unified layer.",
      "Designed modular, domain-isolated orchestration modules in FastAPI enabling scalable, independent automated workflow execution.",
      "Engineered an executive-facing React dashboard featuring responsive tools for strategic business forecasting, budgeting, and KPI analytics.",
    ],
  },
  {
    title: "PolyDoc Chat",
    date: "February 2026",
    github: "https://github.com/ShubhamPandey020525/PolyDoc-Chat",
    stack: [
      "LangChain",
      "ChromaDB",
      "Groq API",
      "Python",
      "FastAPI",
      "React",
      "Tailwind CSS",
      "Framer Motion",
    ],
    bullets: [
      "Developed an enterprise document intelligence RAG ecosystem supporting PDF, DOCX, PPTX, CSV, TXT, and Markdown parsing.",
      "Optimized pipeline using ChromaDB vector search and Llama 3.3 70B to achieve 0.69s end-to-end latency and 16.6ms retrieval latency.",
      "Implemented local embedding generation via miniLM and engineered 100% citation-backed responses to eliminate hallucinations.",
    ],
  },
  {
    title: "Co-Drive",
    date: "January 2026",
    github: "https://github.com/ShubhamPandey020525/Co-Drive",
    stack: [
      "YOLO11n",
      "Computer Vision",
      "GPU Acceleration",
      "Python",
      "FastAPI",
      "React",
      "Vite",
      "Tailwind CSS",
    ],
    bullets: [
      "Trained and custom-deployed a YOLO11n object detection model achieving a verified 99.05% mAP for real-time traffic sign recognition.",
      "Built GPU-accelerated infrastructure supporting image, video, and live webcam stream pipelines with 19–25ms inference latency.",
      "Implemented browser-compatible video streams using avc1 encoding alongside an animated dashboard utilizing Framer Motion.",
    ],
  },
  {
    title: "MoodFlix",
    date: "March 2026",
    github: "https://github.com/ShubhamPandey020525/MoodFlix",
    stack: [
      "Grok API",
      "Scikit-Learn",
      "NLP",
      "TF-IDF",
      "Cosine Similarity",
      "FastAPI",
      "HTTPX",
      "React",
      "Framer Motion",
    ],
    bullets: [
      "Developed an intent-driven movie discovery system using TF-IDF, cosine similarity, and CountVectorizer for semantic matching.",
      "Reduced live metadata enrichment latency by 70% through asynchronous parallel requests using HTTPX and Asyncio frameworks.",
      "Integrated Grok LLM for conversational chat tracking, incorporated typo-handling via difflib fuzzy matching, and built local watchlists.",
    ],
  },
  {
    title: "My Portfolio",
    date: "June 2026",
    github: "https://github.com/ShubhamPandey020525/my_portfolio",
    stack: ["React", "Vite", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide React"],
    bullets: [
      "Engineered a production-ready personal hub that acts as a comprehensive live interactive deployment of all compressed projects, frameworks, and metrics listed across this resume.",
    ],
  },
];

export const achievements = [
  "Participated in Smart India Hackathon (SIH) as an AI/ML Developer, contributing to AI-driven solution development.",
  "Mentored peers in AI/ML, RAG architectures, LLM workflows, and project development.",
];

export const certifications = [
  {
    title: "Apply Generative Adversarial Networks (GANs)",
    issuer: "DeepLearning.AI",
    verifyLink: "https://www.coursera.org/account/accomplishments/verify/HF2V310I6QMW",
  },
  {
    title: "Build Basic Generative Adversarial Networks (GANs)",
    issuer: "DeepLearning.AI",
    verifyLink: "https://www.coursera.org/account/accomplishments/verify/ATK55S2YEDVB",
  },
  {
    title: "Neural Networks and Deep Learning",
    issuer: "DeepLearning.AI",
    verifyLink: "https://www.coursera.org/account/accomplishments/verify/5ZLY9J51ML2C",
  },
  {
    title: "Machine Learning: Classification",
    issuer: "University of Washington",
    verifyLink: "https://www.coursera.org/account/accomplishments/verify/WZBS24VTQ1T0",
  },
  {
    title: "Statistics for Data Science with Python",
    issuer: "IBM",
    verifyLink: "https://www.coursera.org/account/accomplishments/verify/TO6S6LKE77H1",
  },
];
