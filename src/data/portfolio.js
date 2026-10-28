export const site = {
  name: 'Gagan Pratap Singh',
  role: 'Full Stack Software Engineer',
  company: 'Accellor',
  tagline:
    'Versatile full stack developer who ships robust React, Next.js, and Node.js products—and production GenAI chatbots with Python, LangChain, and RAG.',
  email: 'gaganpratapsingh.dev@gmail.com',
  phone: '+91-8650122209',
  location: 'Hathras, Uttar Pradesh',
  focus: 'React · Node.js · GenAI',
  languages: [
    { name: 'English', level: 'Proficient' },
    { name: 'Hindi', level: 'C2' },
  ],
}

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const about = {
  title: 'Full stack delivery with a focus on quality',
  paragraphs: [
    'I am a Software Engineer at Accellor in Hyderabad (March 2022–present), delivering production web apps in React.js, Next.js, TypeScript, Node.js, and Express, plus full-stack GenAI work in Python.',
    'I collaborate with UI/UX and backend teams, integrate REST APIs and secure auth (MFA, SAML, JWT/OAuth), run Azure DevOps pipelines, and keep quality high through code reviews, performance work, and Agile delivery.',
  ],
}

export const highlights = [
  {
    title: 'Production front ends',
    text: 'React, Next.js, TypeScript, Redux Toolkit, and Redux-Saga across Derwent London, Intel PPIN, Aster, and ITMS.',
  },
  {
    title: 'Full-stack APIs',
    text: 'Node.js, Express, MongoDB, and FastAPI—plus JWT/OAuth, SAML, and Azure Web App deployments.',
  },
  {
    title: 'GenAI & RAG',
    text: 'LangChain chatbots with embeddings, prompt pipelines, PDF ingestion, semantic search, and tool calling.',
  },
]

export const experience = [
  {
    role: 'Software Engineer',
    company: 'Accellor',
    location: 'Hyderabad',
    dates: 'Mar 2022 – Present',
    points: [
      'Owned full-stack delivery across four production products: Derwent London, Aster, Intel PPIN, and ITMS in React.js and Next.js.',
      'Shipped GenAI work in Python plus Express.js / Node.js services alongside the core product work.',
      'Introduced Redux Toolkit and TypeScript across projects; collaborated with design and backend on responsive, cross-browser UIs.',
      'Integrated REST APIs, SAML and MFA authentication, Azure Web App deploys, and Azure DevOps pipelines.',
      'Improved performance through refactoring and profiling, and ran code reviews in Agile sprints.',
    ],
  },
]

export const projects = [
  {
    title: 'Derwent London',
    description:
      'UK commercial real estate platform for office space, meeting rooms, and tenant events. Built and maintained the admin panel—features, business rules, integrations, and MFA. Tenant mobile app supports booking collaboration spaces such as Hill, Martin, and Pasmore.',
    tags: ['React.js', 'Next.js', 'MFA', 'Admin panel'],
    featured: true,
  },
  {
    title: 'PPIN-VSID (Intel)',
    description:
      'Maps Product Part Identification Numbers with Visual IDs, with PPIN-to-VISID and reverse search via manual entry or CSV. Owned the React spreadsheet UI, CSV upload/download, API integration, and SAML auth with a Node.js backend through go-live.',
    tags: ['React.js', 'Node.js', 'SAML', 'CSV'],
    featured: true,
  },
  {
    title: 'ITMS',
    description:
      'Tender and vendor management platform for documents, summaries, and chat with vendors. Built with React.js, Redux-Saga, and TypeScript; LogRocket for debugging; React builds deployed to Azure Web Apps.',
    tags: ['React.js', 'Redux-Saga', 'TypeScript', 'Azure'],
    featured: true,
  },
  {
    title: 'GenAI conversational chatbot',
    description:
      'Production RAG chatbot with Python, LangChain, embeddings, and LLM APIs. Custom prompt pipelines, few-shot examples, tool calling, FastAPI for web/mobile, PDF ingestion, chunking, and semantic search. Cut manual retrieval effort and improved knowledge-driven answers.',
    tags: ['Python', 'LangChain', 'FastAPI', 'RAG'],
    featured: true,
  },
  {
    title: 'Aster',
    description:
      'Doctor and admin dashboard for adding doctors with skills and assigning them to patients. Implemented with React.js and Context API.',
    tags: ['React.js', 'Context API'],
    featured: false,
  },
]

export const skillGroups = [
  {
    title: 'Front end',
    items: [
      'HTML5 & CSS3',
      'JavaScript (ES6+)',
      'TypeScript',
      'React.js',
      'Next.js',
      'Vue.js',
      'Redux Toolkit',
      'Redux-Saga',
      'Tailwind CSS',
      'Bootstrap',
    ],
  },
  {
    title: 'Back end',
    items: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'REST APIs',
      'JWT / OAuth',
      'SAML',
      'FastAPI',
    ],
  },
  {
    title: 'AI & cloud',
    items: [
      'Python',
      'LangChain',
      'OpenAI / LLMs',
      'Embeddings & RAG',
      'Prompt engineering',
      'Azure Web Apps',
      'Azure DevOps',
      'CI/CD',
    ],
  },
]

export const education = [
  {
    year: '2021',
    title: 'Master of Computer Application (MCA)',
    school: 'Chhatrapati Sahuji Maharaj University',
    place: 'Kanpur, Uttar Pradesh',
  },
  {
    year: '2018',
    title: 'Post Graduate Diploma in Computer Application (PGDCA)',
    school: 'Govt Polytechnic',
    place: 'Jhansi, Uttar Pradesh',
  },
  {
    year: '2016',
    title: 'B.Com (Commerce)',
    school: 'Agra University',
    place: 'Agra, Uttar Pradesh',
  },
]

export const certifications = [
  'Full stack web development course — Newton School',
  'Azure Fundamentals — Microsoft',
]

export const accomplishments = [
  'Independently handled key application development and enhancements across multiple projects.',
  'Contributed to AI-focused initiatives, including chatbot and AI dashboard proofs of concept, while expanding full-stack capabilities.',
]
