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
    id: "edtech-onboarding",
    title: "Improving Onboarding for an EdTech App",
    problemStatement: "New learners were dropping off before reaching their first meaningful action.",
    summary:
      "I rethought the onboarding journey to reduce friction, surface value faster, and build confidence during the first session.",
    tags: ["Growth", "User Research", "Onboarding", "Prioritization"],
    impact: "Projected 18% lift in first-week activation",
    metrics: [
      { label: "Time to value", value: "-32%", note: "Reduced by trimming setup steps" },
      { label: "Activation target", value: "68%", note: "From a 50% baseline scenario" },
      { label: "Primary lever", value: "Guided path", note: "Matched to learner intent" }
    ],
    overview:
      "An onboarding redesign for a learning product where users needed confidence and immediate value before committing to a longer setup flow.",
    problem:
      "Users were being asked for too much information before the product demonstrated value. The result was high drop-off in the first few screens and weak activation.",
    usersAffected:
      "First-time student users exploring a course for the first time, especially those arriving from referral links and social campaigns.",
    keyInsight:
      "Users did not need a perfect profile to begin. They needed a fast path to a personalized first win that proved the app could help them.",
    goalSuccessMetric:
      "Increase onboarding completion and first-week activation while reducing the time between sign-up and first lesson interaction.",
    approach: [
      "Mapped the existing onboarding funnel and identified friction around profile setup.",
      "Separated critical inputs from optional personalization fields.",
      "Reframed onboarding around one high-confidence recommendation instead of a long questionnaire."
    ],
    researchAssumptions: [
      "Assumed learners wanted proof of relevance before sharing detailed preferences.",
      "Reviewed qualitative friction themes from usability notes and support-style observations.",
      "Benchmarked faster onboarding patterns in top learning products."
    ],
    prioritizationLogic: [
      "Focused first on reducing early abandonment because it impacted the largest segment.",
      "Prioritized changes with low engineering complexity and high expected lift in activation.",
      "Deferred deeper personalization logic until the core activation loop improved."
    ],
    proposedSolution: [
      "Introduce a two-step onboarding flow with only essential intent capture.",
      "Show a tailored starter path immediately after sign-up.",
      "Use progressive profiling later in the user journey after initial value is shown."
    ],
    whyThisSolution:
      "It improves time-to-value without removing personalization entirely. The flow still collects useful context, but only when the user is ready.",
    expectedImpact: [
      "Higher onboarding completion rates.",
      "More users reaching their first lesson in the same session.",
      "Stronger retention signals from early success moments."
    ],
    risksTradeoffs: [
      "Lighter upfront input may reduce short-term recommendation precision.",
      "The team would need careful measurement to confirm the activation lift is durable."
    ],
    whatILearned:
      "A strong onboarding experience is often about sequencing, not adding more education. Reducing time-to-value can matter more than explaining every feature upfront."
  },
  {
    id: "student-collaboration",
    title: "Redesigning a Student Collaboration Workflow",
    problemStatement: "Important academic updates were being buried inside noisy peer conversations.",
    summary:
      "I redesigned the communication structure so students could distinguish urgent academic information from collaboration and social discussion.",
    tags: ["UX", "Systems Thinking", "Retention", "Information Architecture"],
    impact: "Estimated 25% reduction in missed high-priority updates",
    metrics: [
      { label: "Core issue", value: "Signal loss", note: "Important notices drowned in chat noise" },
      { label: "Primary fix", value: "Channel split", note: "Separated announcement types" },
      { label: "Expected gain", value: "+25%", note: "Faster notice visibility" }
    ],
    overview:
      "A case study focused on reorganizing a student communication experience for better clarity, trust, and day-to-day usability.",
    problem:
      "Students relied on a single cluttered dashboard and mixed message feed, which made it difficult to identify urgent academic notices.",
    usersAffected:
      "Students managing classes, peer groups, and administrative communications in the same digital environment.",
    keyInsight:
      "The issue was not message volume alone. It was poor hierarchy. Users needed clearer separation between academic urgency and collaborative discussion.",
    goalSuccessMetric:
      "Improve discoverability of essential updates and reduce the chance that students miss time-sensitive tasks or announcements.",
    approach: [
      "Audited the current message flow and grouped content by urgency and source.",
      "Created a clearer hierarchy for announcements, collaborative threads, and reminders.",
      "Redesigned the dashboard around scanning speed instead of feature density."
    ],
    researchAssumptions: [
      "Students check quickly and often, so scan-friendly hierarchy matters more than deep navigation.",
      "High-priority content should be distinguishable in under a few seconds.",
      "Peer collaboration should remain accessible without overpowering institutional updates."
    ],
    prioritizationLogic: [
      "Prioritized clarity and message separation before introducing new engagement features.",
      "Solved for the largest trust problem first: missing critical information.",
      "Chose layout changes with strong usability upside and moderate design effort."
    ],
    proposedSolution: [
      "Create a dedicated priority lane for deadlines, notices, and academic action items.",
      "Move peer collaboration into separate contextual spaces.",
      "Add status cues and digest-style summaries for pending academic actions."
    ],
    whyThisSolution:
      "The redesign addresses the structural issue directly and improves confidence in the platform as a reliable source of important information.",
    expectedImpact: [
      "Better task completion and fewer missed deadlines.",
      "Higher trust in the platform as a daily academic tool.",
      "Improved long-term engagement through reduced confusion."
    ],
    risksTradeoffs: [
      "Additional structure can feel rigid if collaboration tools become less visible.",
      "Users may need a brief adjustment period after the navigation changes."
    ],
    whatILearned:
      "Good product decisions often come from clarifying systems, not just improving screens. Information hierarchy can directly affect trust and retention."
  },
  {
    id: "engagement-loops",
    title: "Increasing Retention Through Better Engagement Loops",
    problemStatement: "Users were completing one learning session but failing to build a repeat habit.",
    summary:
      "I designed a lightweight engagement loop focused on momentum, streak reinforcement, and contextual re-entry cues.",
    tags: ["Retention", "Experimentation", "Analytics", "Behavior Design"],
    impact: "Modeled 12-15% lift in week-two retention",
    metrics: [
      { label: "Retention window", value: "Week 2", note: "Targeted early habit formation" },
      { label: "Loop trigger", value: "Contextual return", note: "Prompted next best action" },
      { label: "Expected lift", value: "+15%", note: "Retention upside scenario" }
    ],
    overview:
      "A retention-focused concept exploring how learning products can move users from one-time activity toward repeat usage and habit formation.",
    problem:
      "The product had reasonable activation, but engagement weakened after the first session because users lacked a clear reason to return.",
    usersAffected:
      "Newly activated learners who understood the product but had not yet formed a consistent usage habit.",
    keyInsight:
      "Users were more likely to return when the next step felt small, contextual, and tied to visible progress rather than generic reminders.",
    goalSuccessMetric:
      "Improve week-two retention and session repeat rate by creating a clearer re-entry loop after the first value moment.",
    approach: [
      "Mapped where motivation dipped after the initial lesson.",
      "Designed lightweight nudges connected to unfinished progress and achievable next steps.",
      "Framed the loop around visible momentum instead of notification volume."
    ],
    researchAssumptions: [
      "Progress visibility is a stronger early habit driver than broad motivational messaging.",
      "Users are more responsive to prompts tied to a concrete next action.",
      "The most effective loop would be simple enough to test without major platform changes."
    ],
    prioritizationLogic: [
      "Selected one repeat-use loop instead of a broad retention program to keep the experiment measurable.",
      "Focused on interventions that could influence behavior quickly with low implementation complexity.",
      "Avoided over-engineering loyalty mechanics before validating a core re-entry trigger."
    ],
    proposedSolution: [
      "Show a clear next-best action after each completed session.",
      "Reinforce progress with compact streak and milestone states.",
      "Use contextual reminders that reference unfinished learning paths."
    ],
    whyThisSolution:
      "The loop makes returning feel purposeful and achievable. It reduces decision fatigue while reinforcing progress and continuity.",
    expectedImpact: [
      "Higher repeat sessions within the first two weeks.",
      "More users progressing into the habit-forming stage.",
      "Stronger signal for deeper engagement features later."
    ],
    risksTradeoffs: [
      "Overusing reminders could create fatigue if prompts feel generic.",
      "Short-term retention gains may not translate into long-term learning outcomes without content quality support."
    ],
    whatILearned:
      "Retention is often shaped by product rhythm. A well-timed next step can be more powerful than adding more features."
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
    role: "LLM Post-Training Intern",
    company: "Ethara AI",
    period: "Jan 2026 - Present",
    bullets: [
      "Evaluate LLM outputs for reasoning quality, factual reliability, and instruction-following across varied prompts.",
      "Support structured feedback workflows that improve alignment and response quality in post-training systems.",
      "Translate ambiguous model behavior into clearer evaluation signals and refinement opportunities."
    ]
  },
  {
    role: "Product Manager - Research & EdTech",
    company: "Institute for Global Research on Public Policy and the SDGs",
    period: "Jan 2026 - Present",
    bullets: [
      "Led market and user research on AI adoption and EdTech needs to inform roadmap direction.",
      "Converted research findings into structured product recommendations aligned with academic and policy goals.",
      "Worked cross-functionally with research and operational stakeholders to improve decision clarity."
    ]
  },
  {
    role: "Computer Science Faculty",
    company: "Sant Sai Shikshan Sansthan",
    period: "Jul 2025",
    bullets: [
      "Identified student learning friction and adapted curriculum delivery around practical understanding.",
      "Structured instruction to improve clarity, confidence, and hands-on engagement with technical concepts.",
      "Strengthened communication and feedback skills through classroom-led problem solving."
    ]
  }
];

export const skills = [
  {
    title: "Product Skills",
    items: [
      "Product Strategy",
      "User Research",
      "Roadmapping",
      "Prioritization",
      "PRD Writing",
      "Problem Framing",
      "Requirement Gathering"
    ]
  },
  {
    title: "Analytics",
    items: [
      "Excel",
      "SQL",
      "Funnel Analysis",
      "KPI Thinking",
      "Retention Analysis",
      "Experiment Design"
    ]
  },
  {
    title: "Tools",
    items: ["Figma", "Notion", "Jira", "Google Analytics", "Mixpanel", "Miro"]
  },
  {
    title: "Soft Skills",
    items: [
      "Communication",
      "Stakeholder Alignment",
      "Structured Thinking",
      "Ownership",
      "Collaboration",
      "Presentation"
    ]
  }
];

export const contactLinks = [
  { label: "Email", value: "harshit.mzp888@gmail.com", href: "mailto:harshit.mzp888@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/harshit-patel-900729205", href: "https://www.linkedin.com/in/harshit-patel-900729205/" },
  { label: "GitHub", value: "github.com/Harhsit-Kumar-Patel", href: "https://github.com/Harhsit-Kumar-Patel" }
];
