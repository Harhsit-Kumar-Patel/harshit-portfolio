export const navigationLinks = [
  { id: "home", label: "Home" },
  { id: "case-studies", label: "Case Studies" },
  { id: "product-thinking", label: "Product Thinking" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" }
];

export const caseStudies = [
  {
    id: "ai-copilot",
    title: "AI Product Execution Copilot",
    problemStatement: "Product managers spend hours manually converting meeting transcripts into structured PRDs, user stories, and execution plans.",
    summary:
      "I designed an AI workflow that converts meeting transcripts into PRDs, user stories, Jira tickets, and execution plans, significantly reducing documentation overhead.",
    tags: ["AI SaaS", "Productivity", "Prompt Engineering", "Workflow Design"],
    impact: "Automated PRD & Jira ticket generation",
    metrics: [
      { label: "Documentation", value: "-80%", note: "Reduction in manual writing time" },
      { label: "Key focus", value: "PM SaaS", note: "Aims to remove execution bottlenecks" },
      { label: "Deliverables", value: "PRDs & Jira", note: "Auto-generated from transcript" }
    ],
    overview:
      "An AI workflow designed to streamline the product management lifecycle by transforming raw user/team discussion transcripts into structured development artifacts.",
    problem:
      "Documentation is one of the most time-consuming parts of product management, often leading to delays in handoffs and reduced time spent on actual customer discovery.",
    usersAffected:
      "Product Managers, Product Owners, and Scrum Masters who manage product backlogs and documentation pipelines.",
    keyInsight:
      "Standard meeting structures map directly to PM documentation sections if parsed using specific multi-shot prompt templates that extract action items, requirements, and constraints.",
    goalSuccessMetric:
      "Design a reliable workflow that generates high-fidelity draft PRDs and Jira tickets from typical transcript inputs with minimal PM correction needed.",
    approach: [
      "Mapped the product lifecycle from discovery through MVP to identify documentation bottlenecks.",
      "Designed prompt structures to extract user requirements and technical criteria.",
      "Structured output formats to directly align with standard Jira ticket and PRD templates."
    ],
    researchAssumptions: [
      "Assumed target users wanted drafts to edit rather than fully finished final versions.",
      "Reviewed typical team meeting formats to ensure parser compatibility."
    ],
    prioritizationLogic: [
      "Prioritized document structure accuracy over multi-tool integrations in the first iteration.",
      "Focused on generating high-quality user stories as the core unit of delivery."
    ],
    proposedSolution: [
      "Introduce a structured AI transcript parsing pipeline.",
      "Generate standard markdown PRDs and developer-ready user stories.",
      "Format outputs into bulk-uploadable CSVs for Jira import."
    ],
    whyThisSolution:
      "It leverages LLMs for what they do best (summarization, structured translation) while leaving creative and strategic decisions to the human PM.",
    expectedImpact: [
      "Increased execution speed for product teams.",
      "Less administrative friction in Scrum backlogs."
    ],
    risksTradeoffs: [
      "Model hallucination risks require a mandatory review step by a human PM.",
      "Different transcript providers might introduce formatting errors."
    ],
    whatILearned:
      "A successful AI product is less about raw LLM capability and more about framing the workflow so that AI acts as an accelerator, not a complete replacement."
  },
  {
    id: "pathbyte",
    title: "PathByte | AI Career Growth Platform",
    problemStatement: "Students face learning fragmentation and decision fatigue when trying to build a career growth roadmap.",
    summary:
      "Built and launched a roadmap-first career guidance platform that helps students follow structured learning paths, using customer discovery to shape the onboarding and learning journeys.",
    tags: ["Product Discovery", "Onboarding", "Career Growth", "Live Product"],
    impact: "Live platform with personalized learning paths",
    metrics: [
      { label: "Platform Status", value: "Live", note: "Deployed and active career platform" },
      { label: "Primary Lever", value: "Guided path", note: "Roadmap-first learning journey" },
      { label: "User Goal", value: "Curriculum", note: "Reducing fragmentation" }
    ],
    overview:
      "PathByte is a roadmap-first career guidance platform designed to simplify career planning and progress tracking for students.",
    problem:
      "Students looking to break into tech or other fields are overwhelmed by fragmented learning resources and struggle to find a structured path to their goals.",
    usersAffected:
      "Undergraduate students and career changers looking for a structured, step-by-step curriculum.",
    keyInsight:
      "Users do not just need more content; they need a sequential roadmap that shows progress and links directly to concrete, bite-sized tasks.",
    goalSuccessMetric:
      "Provide a clear onboarding experience that guides users to choose and stick to a career roadmap, reducing abandonment.",
    approach: [
      "Conducted customer discovery interviews to pinpoint student learning fragmentation.",
      "Designed an intuitive onboarding flow and personalized progress tracking system.",
      "Scoped the MVP feature set and defined initial monetization and value opportunities."
    ],
    researchAssumptions: [
      "Assumed students are more motivated when they see a visual path to completion.",
      "Tested visual roadmap layouts with mock student groups."
    ],
    prioritizationLogic: [
      "Prioritized onboarding and path clarity over community features.",
      "Scoped MVP strictly around learning paths and progress tracking."
    ],
    proposedSolution: [
      "Introduce a simple, goal-based onboarding setup.",
      "Deliver a personalized, step-by-step career path roadmap.",
      "Implement simple progress tracking to build user momentum."
    ],
    whyThisSolution:
      "It directly addresses decision fatigue, making career planning feel manageable and encouraging daily engagement.",
    expectedImpact: [
      "Improved course completion rate.",
      "Positive user feedback on curriculum structure and navigation."
    ],
    risksTradeoffs: [
      "Static paths might feel too rigid for advanced learners.",
      "Needs regular content updates to stay aligned with job markets."
    ],
    whatILearned:
      "Solving fragmentation requires strict curation. Giving users fewer, higher-quality options is often more valuable than giving them unlimited choice."
  },
  {
    id: "convohub",
    title: "ConvoHub | Academic Communication Platform",
    problemStatement: "Important academic updates were being buried inside noisy peer conversations and student chats.",
    summary:
      "Designed a platform separating institutional announcements from peer discussions, based on user interviews and structured user flows.",
    tags: ["UX", "Information Architecture", "Case Study", "Student Systems"],
    impact: "Announcements separated from chat noise",
    metrics: [
      { label: "Core issue", value: "Signal loss", note: "Urgent notices drowned in chat noise" },
      { label: "Primary fix", value: "Channel split", note: "Separated announcement types" },
      { label: "User feedback", value: "Improved", note: "Personas and user flows guided design" }
    ],
    overview:
      "A communication platform case study focused on organizing student communication for better information hierarchy and reduced signal loss.",
    problem:
      "Important administrative and academic notices get lost in general student chats, leading to missed deadlines and confusion.",
    usersAffected:
      "Students, class representatives, and academic administrators.",
    keyInsight:
      "The primary issue is lack of hierarchy; users need a clear system that isolates institutional announcements from casual group discussions.",
    goalSuccessMetric:
      "Design a communication interface where high-priority notices are immediately visible and cannot be bypassed by chat traffic.",
    approach: [
      "Conducted user interviews to identify student communication pain points.",
      "Built detailed user personas and interaction flows.",
      "Created a feature prioritization plan to guide the interface design."
    ],
    researchAssumptions: [
      "Assumed students prioritize scanability over deep social engagement features during school hours.",
      "Tested wireframe flows with student user representatives."
    ],
    prioritizationLogic: [
      "Prioritized the announcement layout and notification grouping.",
      "Deferred complex group messaging features to keep the system simple."
    ],
    proposedSolution: [
      "Create a dedicated announcements channel with administrative privileges.",
      "Establish separate peer-to-peer discussion boards.",
      "Introduce a simple deadline dashboard for academic deliverables."
    ],
    whyThisSolution:
      "It separates communication intent clearly, restoring trust in the platform as a reliable channel for critical updates.",
    expectedImpact: [
      "Reduction in missed deadlines.",
      "Improved scanning speed for daily updates."
    ],
    risksTradeoffs: [
      "Over-segmentation might reduce general peer engagement if channels feel too isolated."
    ],
    whatILearned:
      "Clear system design is often about setting boundaries. Restricting who can post where can dramatically improve communication utility."
  },
  {
    id: "inventura",
    title: "Inventura | AI Inventory Assistant",
    problemStatement: "Small and medium business retailers struggle with inventory management and demand forecasting.",
    summary:
      "Designed a case study for an AI-powered inventory assistant with demand forecasting and offline-first workflows.",
    tags: ["Case Study", "SMB Tools", "AI", "Offline-first"],
    impact: "AI demand forecasting for small retailers",
    metrics: [
      { label: "AI Feature", value: "Forecasting", note: "Predictive inventory ordering" },
      { label: "Workflow", value: "Offline-first", note: "Tailored to low connectivity" },
      { label: "Target Market", value: "SMBs", note: "Small and medium businesses" }
    ],
    overview:
      "Inventura is a conceptual AI-powered inventory assistant that simplifies stock management for small local retailers in emerging markets.",
    problem:
      "Local retailers lose revenue due to overstocking or stockouts, and they lack complex software or reliable internet connectivity.",
    usersAffected:
      "Local shop owners and retail vendors.",
    keyInsight:
      "Local vendors need inventory tools that work with zero lag, work offline, and provide simple, actionable reorder recommendations.",
    goalSuccessMetric:
      "Create a workflow that requires minimal manual entry and provides stock advice using simple local data.",
    approach: [
      "Designed an AI-powered inventory assistant including demand forecasting.",
      "Created offline-first workflows tailored to local retailers with limited connectivity.",
      "Integrated a community inventory exchange concept to share surplus stock."
    ],
    researchAssumptions: [
      "Assumed shop owners prefer a mobile-first interface that mimics simple calculator or messaging designs."
    ],
    prioritizationLogic: [
      "Focused on offline capability and basic stock tracking as critical requirements."
    ],
    proposedSolution: [
      "Establish an offline-first local database sync workflow.",
      "Provide AI-based predictive stock recommendations.",
      "Include a simple exchange network for nearby retailers."
    ],
    whyThisSolution:
      "It brings modern predictive benefits to merchants without requiring enterprise systems or constant internet access.",
    expectedImpact: [
      "Reduced stock waste.",
      "Increased local supply resilience."
    ],
    risksTradeoffs: [
      "Offline sync conflicts if multiple devices are used simultaneously."
    ],
    whatILearned:
      "Design for extreme environments requires stripping features to the absolute essentials. Offline usability is a feature, not a technical detail."
  }
];

export const frameworks = [
  {
    title: "User First",
    description:
      "I start by identifying user pain points, intent, and context before jumping to solutions."
  },
  {
    title: "Data with Judgment",
    description:
      "I use metrics to inform decisions, but I also consider behavior, usability, and strategic context."
  },
  {
    title: "Prioritize Ruthlessly",
    description:
      "I evaluate ideas based on impact, effort, user value, and business relevance."
  },
  {
    title: "Think in Systems",
    description:
      "I look beyond individual features to understand how onboarding, engagement, retention, and feedback loops connect."
  }
];

export const processFlow = [
  "Problem",
  "Insight",
  "Hypothesis",
  "Prioritization",
  "Solution",
  "Measurement"
];

export const experiences = [
  {
    role: "Founder",
    company: "Nakshatraa.online",
    period: "Jul 2026 - Present",
    bullets: [
      "Founded and launched an AI-powered consultation platform offering astrology, relationship, and life-guidance services, taking it from concept to a live, customer-facing product.",
      "Ran customer discovery interviews to validate demand and shape the service offering and pricing.",
      "Designed the full customer journey, including onboarding, booking, consultation flow, payments, and retention.",
      "Own the product roadmap end to end: prioritize features based on customer feedback, and drive SEO and organic growth strategy."
    ]
  },
  {
    role: "LLM Post-Training Intern",
    company: "Ethara AI",
    period: "Jan 2026 - Jun 2026",
    bullets: [
      "Evaluated large language model outputs for reasoning quality, factual reliability, and instruction-following across varied prompts.",
      "Support supervised fine-tuning (SFT) workflows and dataset refinement to improve post-training performance.",
      "Worked on improving model alignment and response consistency across a wide range of prompts."
    ]
  },
  {
    role: "Product Research Intern",
    company: "Institute for Global Research on Public Policy & the SDGs",
    period: "Jan 2026 - Jun 2026",
    bullets: [
      "Conducted market research and product discovery for AI and EdTech initiatives.",
      "Identified customer pain points through qualitative research and secondary analysis.",
      "Turned research findings into product recommendations that fed directly into roadmap planning."
    ]
  },
  {
    role: "Computer Science Faculty",
    company: "Sant Sai Shikshan Sansthan",
    period: "Jul 2025",
    bullets: [
      "Delivered practical, application-based Computer Science instruction and improved student engagement through structured lesson planning."
    ]
  }
];

export const skills = [
  {
    title: "Product Management",
    items: [
      "Product discovery",
      "User research",
      "Customer interviews",
      "Product strategy",
      "Roadmapping",
      "PRDs & user stories",
      "Feature prioritization",
      "MVP planning",
      "Agile/Scrum",
      "Sprint planning",
      "Backlog management",
      "Product analytics",
      "Go-to-market strategy",
      "Stakeholder management"
    ]
  },
  {
    title: "AI & Technical",
    items: [
      "Large language models (LLMs)",
      "Prompt engineering",
      "Prompt evaluation",
      "AI product development",
      "AI workflow design",
      "OpenAI APIs",
      "Azure AI",
      "Git & GitHub",
      "Supabase",
      "Vercel"
    ]
  },
  {
    title: "Tools",
    items: [
      "Figma",
      "Jira",
      "Notion",
      "Miro",
      "Google Workspace",
      "Wireframing",
      "User journey mapping"
    ]
  }
];

export const contactLinks = [
  { label: "Email", value: "work.harshitpatel@gmail.com", href: "mailto:work.harshitpatel@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/harshit-patel-900729205", href: "https://www.linkedin.com/in/harshit-patel-900729205/" },
  { label: "GitHub", value: "github.com/Harhsit-Kumar-Patel", href: "https://github.com/Harhsit-Kumar-Patel" }
];
