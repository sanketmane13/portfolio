export type Project = {
  slug: string;
  name: string;
  tagline: string;
  stack: string[];
  pipeline: string[];
  points: string[];
  status: "shipped" | "in-progress";
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "rag-ai-agent",
    name: "RAG AI Agent",
    tagline: "Ask your PDFs a question and get an answer grounded in the actual document, not a guess.",
    stack: ["Next.js", "TypeScript", "Flask", "LangChain", "ChromaDB", "Ollama", "Mistral"],
    pipeline: ["PDF upload", "Chunking", "Embedding", "ChromaDB retrieval", "Mistral (Ollama)", "Grounded answer"],
    points: [
      "Built a full-stack RAG chatbot for natural-language Q&A over PDFs, cutting manual document lookup by roughly 50% for the intended workflow.",
      "Used LangChain + ChromaDB for chunking, embedding, and semantic retrieval; tuned chunking strategy for lower retrieval latency without losing recall.",
      "Served Mistral via Ollama for context-grounded generation at ~90% retrieval accuracy, behind 5+ Flask REST endpoints and a Next.js/Tailwind/Shadcn UI.",
      "Added persistent conversation memory and response caching so repeat questions don't re-hit the vector store.",
    ],
    status: "shipped",
  },
  {
    slug: "waypoint",
    name: "Divine vision - MCP Order Tracking AI Agent",
    tagline: "An order-tracking assistant that talks in plain language and calls real tools to get real answers.",
    stack: ["Next.js", "Express.js", "FastMCP", "FastAPI", "MongoDB", "Redis", "Gemini SDK", "Better Auth"],
    pipeline: ["User query", "Express host", "Gemini 2.5 Flash", "MCP tool call", "FastAPI/FastMCP server", "MongoDB"],
    points: [
      "Architected a three-service system: Next.js frontend, an Express.js host layer, and a FastAPI/FastMCP tool server, connected over Streamable HTTP for real-time, multi-turn execution.",
      "Wired Gemini 2.5 Flash's function calling straight into 5+ MCP tools covering order lookup, tracking, and status queries — no hand-written intent classifier.",
      "Hardened the backend for production: Better Auth, Redis caching, 20 req/min rate limiting, modular REST APIs, and centralized error handling.",
    ],
    status: "shipped",
  },
  {
    slug: "ml-orchestrator",
    name: "ML Experiment Orchestrator",
    tagline: "A control-room UI for running and comparing multi-agent ML experiments without losing track of what changed.",
    stack: ["LangGraph", "Next.js", "FastAPI"],
    pipeline: ["Experiment config", "Agent dispatch", "LangGraph run", "Result tracking", "Control-room UI"],
    points: [
      "Built a LangGraph backend to orchestrate multiple experiment agents in parallel, each with its own state and retry behavior.",
      "Paired it with a Next.js frontend styled like a control room — built for scanning run status at a glance, not clicking through tabs.",
    ],
    status: "in-progress",
  },
];

export type SkillGroup = {
  label: string;
  eyebrow: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    eyebrow: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    label: "Frontend",
    eyebrow: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "Shadcn UI"],
  },
  {
    label: "Backend",
    eyebrow: "Backend",
    items: ["Django", "FastAPI", "Node.js", "Express.js", "REST API Design"],
  },
  {
    label: "Data & Caching",
    eyebrow: "Data & Caching",
    items: ["MongoDB", "PostgreSQL", "pgvector", "Oracle / PL-SQL", "Redis", "ChromaDB"],
  },
  {
    label: "Generative AI",
    eyebrow: "Generative AI",
    items: [
      "LLM Integration",
      "RAG (chunking, embeddings, hybrid search)",
      "LangChain",
      "LangGraph",
      "Model Context Protocol (MCP) / FastMCP",
      "OpenAI SDK",
      "Gemini SDK",
      "Ollama",
    ],
  },
  {
    label: "DevOps & Tools",
    eyebrow: "DevOps & Tools",
    items: ["Git / GitHub", "Docker", "CI/CD (GitHub Actions)", "Vercel", "Railway", "Postman", "Linux"],
  },
  {
    label: "Practices",
    eyebrow: "Practices",
    items: ["MVC/MVT Architecture", "SaaS Development", "API Security & Auth", "Agile", "Microservices"],
  },
];

export const nowLearning = [
  "Going deep on RAG internals — vector similarity math, hybrid search, and ChromaDB/pgvector under the hood, not just calling a retriever.",
  "Studied MCP and FastMCP from fundamentals through production integration patterns.",
  "Working through FastAPI comprehensively: async patterns, JWT auth, dependency injection, and production deployment.",
];

export type Post = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  tags: string[];
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "chunking-strategies-that-move-retrieval-accuracy",
    title: "Chunking strategies that actually move retrieval accuracy",
    date: "2026-06-14",
    readTime: "6 min",
    tags: ["RAG", "LangChain", "ChromaDB"],
    excerpt:
      "Most RAG tutorials fix chunk size at 500 tokens and call it done. Here's what changed when I stopped doing that.",
    body: [
      "When I built the RAG AI Agent, my first pass used a flat 500-token chunk size with 50-token overlap because that's what every tutorial defaults to. Retrieval accuracy sat around 70% — good enough to demo, not good enough to trust.",
      "The fix wasn't a bigger model. It was treating chunking as a first-class design decision instead of a preprocessing afterthought. Three changes mattered most:",
      "1) Structure-aware splitting. Splitting on headings and paragraph boundaries instead of raw token counts kept semantically related sentences together, so a chunk didn't end mid-thought right before the fact the query needed.",
      "2) Overlap tuned to content density. Dense technical sections got more overlap (chunks bleed into each other on purpose) so a fact sitting near a chunk boundary wasn't invisible to the retriever. Sparse narrative sections didn't need it.",
      "3) Metadata on every chunk. Storing section titles and page numbers alongside embeddings let me re-rank results by structural relevance, not just cosine similarity — two chunks can score similarly on embedding distance but not be equally useful.",
      "That combination got retrieval accuracy to roughly 90% and cut response latency too, since the retriever wasn't returning as much noise for the LLM to sort through. The lesson: chunking is where most of the RAG accuracy budget actually lives, and it's the part that's easiest to skip.",
    ],
  },
  {
    slug: "mcp-from-fundamentals-to-production",
    title: "MCP from fundamentals to production: what FastMCP taught me",
    date: "2026-07-02",
    readTime: "5 min",
    tags: ["MCP", "FastMCP", "FastAPI"],
    excerpt:
      "The Model Context Protocol looks simple in the docs. Deploying a tool server that an LLM calls reliably in production is a different exercise.",
    body: [
      "MCP's core idea is straightforward: expose tools with a schema, let the model call them, return structured results. Building the Waypoint order-tracking agent taught me where the gap sits between 'it works locally' and 'it works when a real user is impatient and the network is slow.'",
      "The host layer matters more than the tool server. I put an Express.js host between the Next.js frontend and the FastAPI/FastMCP tool server, bridging Gemini's function calling to the MCP tools over Streamable HTTP. That layer is where retries, timeouts, and multi-turn context actually get handled — the tool server itself should stay dumb and fast.",
      "Rate limit at the host, not the model. Capping requests at 20/min in the host layer protected the tool server without the model needing to know rate limiting exists. Keeping infrastructure concerns out of the prompt kept the tool-calling behavior predictable.",
      "Tool descriptions are the real API contract. The model only knows what your schema and description tell it. Vague tool descriptions produce vague tool calls — I got far fewer malformed calls after rewriting descriptions to read like documentation for a human engineer, not a one-line label.",
      "Deploying the FastMCP server to Railway surfaced the usual first-deploy issues — port binding, DNS propagation — that never show up on localhost. Budget time for that even when the code itself is done.",
    ],
  },
  {
    slug: "shipping-five-ai-projects-while-job-hunting",
    title: "Building in public while job hunting: shipping instead of waiting",
    date: "2026-08-10",
    readTime: "4 min",
    tags: ["Career", "Job Search"],
    excerpt:
      "Applications alone weren't moving the needle. Building real systems, in parallel with the search, changed what conversations I could have.",
    body: [
      "Somewhere in the job search I stopped treating 'apply and wait' as the whole strategy. Alongside outreach, I kept building — an order-tracking agent with real MCP tool calls, a RAG chatbot with measurable retrieval accuracy, a job-search orchestrator that automated part of the search itself.",
      "The difference isn't the projects looking good on a page. It's that when a conversation turns technical, I've actually hit the failure modes being asked about — why a retriever returns noise, why a tool call comes back malformed, why a rate limiter needs to sit at the host layer and not the model. That's a different kind of answer than describing a tutorial I followed.",
      "I also built a job-search orchestrator (LangGraph + Playwright) to automate planning, deduplication, and matching for my own search — partly as a genuine tool, partly because building the thing you need is a better forcing function than building a toy dataset demo.",
      "None of this replaces a strong resume or good outreach. It's what backs them up when someone asks a follow-up question.",
    ],
  },
];

export const contact = {
  email: "sanketmane0407@gmail.com",
  phone: "+91 9359708620",
  location: "Pune, India",
  socials: [
    { label: "GitHub", href: "https://github.com/sanketmane13" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sanket-mane-94b9113aa/" },
    { label: "Portfolio", href: "/" },
    { label: "Leetcode", href: "https://leetcode.com/u/dXFDofZXm5" }
  ],
};
