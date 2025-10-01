const jobs = [

  // ================= TECHNOLOGY =================
  {
    id: "tech-1",
    title: "Frontend Developer",
    company: "TechHive Solutions",
    category: "Technology",
    location: "Remote",
    type: "Full-time",
    summary: "Build modern web apps with React and Next.js.",
    description:
      "We are looking for a passionate Frontend Developer to design and develop user-friendly web applications. You will work closely with designers and backend engineers to deliver outstanding products that scale globally.",
  },
  {
    id: "tech-2",
    title: "Backend Engineer",
    company: "CloudWorks",
    category: "Technology",
    location: "Lagos, Nigeria",
    type: "Full-time",
    summary: "Develop and maintain scalable backend services.",
    description:
      "As a Backend Engineer, you will work with Node.js and cloud infrastructure to power high-availability applications. You’ll collaborate with cross-functional teams to design APIs, manage databases, and ensure security.",
  },
  {
    id: "tech-3",
    title: "Mobile App Developer",
    company: "SwiftApps",
    category: "Technology",
    location: "Remote",
    type: "Contract",
    summary: "Create intuitive mobile applications for iOS and Android.",
    description:
      "We are seeking a Mobile Developer with expertise in Flutter or React Native. You will be responsible for building performant apps, integrating APIs, and delivering a smooth user experience.",
  },
  {
    id: "tech-4",
    title: "UI/UX Designer",
    company: "PixelCraft",
    category: "Technology",
    location: "Abuja, Nigeria",
    type: "Part-time",
    summary: "Design user-friendly and visually appealing interfaces.",
    description:
      "The UI/UX Designer will create engaging designs for web and mobile platforms. Strong skills in Figma, prototyping, and user research are essential for this role.",
  },
  {
    id: "tech-5",
    title: "DevOps Engineer",
    company: "CloudOps Africa",
    category: "Technology",
    location: "Remote",
    type: "Full-time",
    summary: "Automate deployments and manage CI/CD pipelines.",
    description:
      "Join our DevOps team to enhance deployment processes, monitor infrastructure, and ensure high system reliability. Experience with Docker, Kubernetes, and cloud providers is required.",
  },
  {
    id: "tech-6",
    title: "QA Tester",
    company: "Testify Ltd.",
    category: "Technology",
    location: "Lagos, Nigeria",
    type: "Contract",
    summary: "Ensure product quality through rigorous testing.",
    description:
      "We need a QA Tester with strong skills in both manual and automated testing. You will write test cases, report bugs, and ensure our software meets the highest quality standards.",
  },
  {
    id: "tech-7",
    title: "Software Engineer (Python)",
    company: "DataDriven Inc.",
    category: "Technology",
    location: "Remote",
    type: "Full-time",
    summary: "Work on backend systems and data pipelines using Python.",
    description:
      "We are hiring a Python Engineer to work on scalable backend services and data processing pipelines. Proficiency in Django or Flask is required, and experience with data tools is a plus.",
  },
  {
    id: "tech-8",
    title: "Full Stack Developer",
    company: "NextGen Labs",
    category: "Technology",
    location: "Abuja, Nigeria",
    type: "Full-time",
    summary: "Build end-to-end applications using MERN stack.",
    description:
      "A Full Stack Developer is needed to develop applications using MongoDB, Express, React, and Node.js. Strong understanding of cloud deployments and team collaboration is key.",
  },
  {
    id: "tech-9",
    title: "Cloud Architect",
    company: "SkyNet Systems",
    category: "Technology",
    location: "Remote",
    type: "Full-time",
    summary: "Design secure and scalable cloud architectures.",
    description:
      "As a Cloud Architect, you will help organizations move their infrastructure to cloud-based systems while ensuring scalability, reliability, and cost efficiency.",
  },
  {
    id: "tech-10",
    title: "Cybersecurity Analyst",
    company: "SecureTech",
    category: "Technology",
    location: "Lagos, Nigeria",
    type: "Full-time",
    summary: "Protect systems and networks from cyber threats.",
    description:
      "We seek a Cybersecurity Analyst to monitor, analyze, and defend systems from potential threats. Knowledge of penetration testing, SIEM tools, and risk assessment is essential.",
  },

  // ================= FINANCE =================
  {
    id: "fin-1",
    title: "Financial Analyst",
    company: "FinServe Analytics",
    category: "Finance",
    location: "Remote",
    type: "Full-time",
    summary: "Analyze business data and provide insights.",
    description:
      "We are looking for a Financial Analyst to help us interpret complex financial data and guide key business decisions. Strong Excel and SQL skills are required.",
  },
  {
    id: "fin-2",
    title: "Accountant",
    company: "LedgerPro",
    category: "Finance",
    location: "Lagos, Nigeria",
    type: "Full-time",
    summary: "Manage accounts and financial records.",
    description:
      "The Accountant will handle day-to-day financial transactions, prepare reports, and ensure compliance with financial regulations and standards.",
  },
  {
    id: "fin-3",
    title: "Investment Banker",
    company: "CapitalEdge",
    category: "Finance",
    location: "Remote",
    type: "Contract",
    summary: "Advise clients on investment opportunities.",
    description:
      "We are seeking an Investment Banker to help clients raise capital, manage portfolios, and provide strategic financial advice.",
  },
  {
    id: "fin-4",
    title: "Risk Manager",
    company: "SafeInvest",
    category: "Finance",
    location: "Abuja, Nigeria",
    type: "Full-time",
    summary: "Identify and mitigate financial risks.",
    description:
      "The Risk Manager will develop risk management frameworks, monitor exposure, and ensure compliance with policies to protect the firm’s assets.",
  },
  {
    id: "fin-5",
    title: "Auditor",
    company: "ClearCheck",
    category: "Finance",
    location: "Remote",
    type: "Part-time",
    summary: "Conduct internal and external audits.",
    description:
      "We are hiring an Auditor to review company accounts, identify discrepancies, and provide actionable recommendations to management.",
  },
  {
    id: "fin-6",
    title: "Compliance Officer",
    company: "TrustBank",
    category: "Finance",
    location: "Lagos, Nigeria",
    type: "Full-time",
    summary: "Ensure adherence to financial laws and standards.",
    description:
      "As a Compliance Officer, you will monitor regulatory requirements, train staff, and ensure policies are followed across the organization.",
  },
  {
    id: "fin-7",
    title: "Payroll Specialist",
    company: "PayMaster Ltd.",
    category: "Finance",
    location: "Abuja, Nigeria",
    type: "Contract",
    summary: "Manage employee salaries and benefits.",
    description:
      "The Payroll Specialist will handle salary processing, ensure tax compliance, and maintain accurate payroll records for staff.",
  },
  {
    id: "fin-8",
    title: "Treasury Analyst",
    company: "WealthCore",
    category: "Finance",
    location: "Remote",
    type: "Full-time",
    summary: "Manage cash flow and company liquidity.",
    description:
      "The Treasury Analyst will oversee cash management, optimize investments, and manage liquidity risks for the organization.",
  },
  {
    id: "fin-9",
    title: "Loan Officer",
    company: "MicroCredit",
    category: "Finance",
    location: "Lagos, Nigeria",
    type: "Full-time",
    summary: "Assist clients with loan applications.",
    description:
      "We are hiring a Loan Officer to guide customers through the loan process, assess risk, and ensure compliance with lending regulations.",
  },
  {
    id: "fin-10",
    title: "Tax Consultant",
    company: "SmartTax",
    category: "Finance",
    location: "Remote",
    type: "Part-time",
    summary: "Advise clients on tax compliance and savings.",
    description:
      "As a Tax Consultant, you will prepare tax documents, provide financial planning, and ensure clients meet all regulatory requirements.",
  },

  // ================= MARKETING =================
  {
    id: "mkt-1",
    title: "Marketing Specialist",
    company: "BrightWave Media",
    category: "Marketing",
    location: "Lagos, Nigeria",
    type: "Part-time",
    summary: "Develop creative campaigns and manage social media.",
    description:
      "We seek a Marketing Specialist who can manage campaigns, analyze performance, and drive engagement across multiple platforms. Experience with digital tools is a plus.",
  },
  {
    id: "mkt-2",
    title: "SEO Manager",
    company: "SearchPro",
    category: "Marketing",
    location: "Remote",
    type: "Full-time",
    summary: "Improve website rankings and organic traffic.",
    description:
      "The SEO Manager will research keywords, optimize content, and oversee link-building strategies to drive traffic and improve brand visibility.",
  },
  {
    id: "mkt-3",
    title: "Content Writer",
    company: "InkWorks",
    category: "Marketing",
    location: "Remote",
    type: "Contract",
    summary: "Write engaging articles and blogs.",
    description:
      "We are hiring a Content Writer to create high-quality blog posts, newsletters, and case studies. Strong writing and research skills are required.",
  },
  {
    id: "mkt-4",
    title: "Brand Manager",
    company: "Visionary Brands",
    category: "Marketing",
    location: "Abuja, Nigeria",
    type: "Full-time",
    summary: "Manage and grow company brand presence.",
    description:
      "The Brand Manager will be responsible for developing strategies to strengthen brand identity, oversee campaigns, and collaborate with creative teams.",
  },
  {
    id: "mkt-5",
    title: "Social Media Strategist",
    company: "BuzzHive",
    category: "Marketing",
    location: "Remote",
    type: "Part-time",
    summary: "Plan and execute social media strategies.",
    description:
      "As a Social Media Strategist, you’ll manage content calendars, analyze metrics, and engage with online communities across platforms.",
  },
  {
    id: "mkt-6",
    title: "PR Specialist",
    company: "MediaConnect",
    category: "Marketing",
    location: "Lagos, Nigeria",
    type: "Contract",
    summary: "Handle press releases and media relations.",
    description:
      "The PR Specialist will manage press communications, pitch stories to journalists, and organize events to improve company reputation.",
  },
  {
    id: "mkt-7",
    title: "Email Marketing Manager",
    company: "InboxPro",
    category: "Marketing",
    location: "Remote",
    type: "Full-time",
    summary: "Run and optimize email campaigns.",
    description:
      "We are seeking an Email Marketing Manager to create campaigns, segment audiences, and improve open and conversion rates.",
  },
  {
    id: "mkt-8",
    title: "Market Research Analyst",
    company: "DataScope",
    category: "Marketing",
    location: "Abuja, Nigeria",
    type: "Full-time",
    summary: "Analyze market data to support strategy.",
    description:
      "The Market Research Analyst will gather data, conduct surveys, and provide insights to guide product and marketing strategies.",
  },
  {
    id: "mkt-9",
    title: "Advertising Coordinator",
    company: "AdSphere",
    category: "Marketing",
    location: "Remote",
    type: "Full-time",
    summary: "Coordinate ad campaigns across platforms.",
    description:
      "We need an Advertising Coordinator to assist in planning, scheduling, and tracking ads across multiple online and offline channels.",
  },
  {
    id: "mkt-10",
    title: "Digital Marketing Manager",
    company: "ClickBoost",
    category: "Marketing",
    location: "Lagos, Nigeria",
    type: "Full-time",
    summary: "Oversee digital campaigns and ad budgets.",
    description:
      "The Digital Marketing Manager will manage PPC campaigns, oversee budgets, and analyze ROI to maximize campaign performance.",
  },

  // ================= DESIGN =================
  {
    id: "des-1",
    title: "Graphic Designer",
    company: "Designify",
    category: "Design",
    location: "Remote",
    type: "Full-time",
    summary: "Create visuals for branding and marketing.",
    description:
      "We are looking for a Graphic Designer skilled in Adobe Creative Suite to design marketing materials, social media posts, and branding assets.",
  },
  {
    id: "des-2",
    title: "Product Designer",
    company: "UXPro",
    category: "Design",
    location: "Abuja, Nigeria",
    type: "Full-time",
    summary: "Design intuitive user experiences.",
    description:
      "The Product Designer will conduct user research, design prototypes, and work closely with developers to deliver great experiences.",
  },
  {
    id: "des-3",
    title: "Motion Graphics Artist",
    company: "FrameWorks",
    category: "Design",
    location: "Lagos, Nigeria",
    type: "Contract",
    summary: "Create animations and video content.",
    description:
      "We are hiring a Motion Graphics Artist to design engaging video content, intros, and animated explainers for our clients.",
  },
  {
    id: "des-4",
    title: "3D Designer",
    company: "RenderHub",
    category: "Design",
    location: "Remote",
    type: "Full-time",
    summary: "Build 3D models and product renders.",
    description:
      "As a 3D Designer, you’ll create realistic product mockups, architectural renders, and interactive 3D designs.",
  },
  {
    id: "des-5",
    title: "Illustrator",
    company: "ArtSpace",
    category: "Design",
    location: "Remote",
    type: "Part-time",
    summary: "Produce illustrations for various projects.",
    description:
      "We are seeking an Illustrator with a creative mind to design illustrations for books, websites, and digital campaigns.",
  },
  {
    id: "des-6",
    title: "Creative Director",
    company: "VisionStudio",
    category: "Design",
    location: "Lagos, Nigeria",
    type: "Full-time",
    summary: "Lead creative direction for projects.",
    description:
      "The Creative Director will oversee a team of designers, guide branding strategies, and ensure design quality across all projects.",
  },
  {
    id: "des-7",
    title: "UX Researcher",
    company: "UserFirst",
    category: "Design",
    location: "Remote",
    type: "Contract",
    summary: "Conduct user testing and research.",
    description:
      "We need a UX Researcher to gather feedback, analyze user behavior, and recommend design improvements.",
  },
  {
    id: "des-8",
    title: "Visual Designer",
    company: "BrightDesigns",
    category: "Design",
    location: "Abuja, Nigeria",
    type: "Full-time",
    summary: "Design web and mobile visuals.",
    description:
      "As a Visual Designer, you’ll create consistent branding and visual designs for websites and mobile applications.",
  },
  {
    id: "des-9",
    title: "Interior Designer",
    company: "SpaceCraft",
    category: "Design",
    location: "Lagos, Nigeria",
    type: "Contract",
    summary: "Design interior spaces for clients.",
    description:
      "We are hiring an Interior Designer to plan and furnish residential and commercial spaces based on client requirements.",
  },
  {
    id: "des-10",
    title: "Game Designer",
    company: "PlayForge",
    category: "Design",
    location: "Remote",
    type: "Full-time",
    summary: "Create engaging game mechanics and designs.",
    description:
      "The Game Designer will develop game concepts, levels, and mechanics while working closely with developers and artists.",
  },

  // ================= EDUCATION =================
  {
    id: "edu-1",
    title: "Primary School Teacher",
    company: "BrightKids Academy",
    category: "Education",
    location: "Lagos, Nigeria",
    type: "Full-time",
    summary: "Teach young learners core subjects.",
    description:
      "We are hiring a Primary School Teacher passionate about nurturing young minds. Must have experience teaching mathematics, science, and English.",
  },
  {
    id: "edu-2",
    title: "Secondary School Teacher",
    company: "Unity High",
    category: "Education",
    location: "Abuja, Nigeria",
    type: "Full-time",
    summary: "Teach secondary school students in specialized subjects.",
    description:
      "The Secondary School Teacher will teach specialized subjects like physics, literature, or economics, while fostering a positive classroom environment.",
  },
  {
    id: "edu-3",
    title: "University Lecturer",
    company: "Delta University",
    category: "Education",
    location: "Remote",
    type: "Full-time",
    summary: "Deliver lectures and academic research.",
    description:
      "We seek a Lecturer to teach undergraduate courses, supervise projects, and contribute to academic publications in their field of expertise.",
  },
  {
    id: "edu-4",
    title: "Online Tutor",
    company: "eLearnHub",
    category: "Education",
    location: "Remote",
    type: "Part-time",
    summary: "Teach students online in various subjects.",
    description:
      "As an Online Tutor, you will provide one-on-one or group lessons, prepare study materials, and track student progress remotely.",
  },
  {
    id: "edu-5",
    title: "Curriculum Developer",
    company: "EduPro",
    category: "Education",
    location: "Remote",
    type: "Contract",
    summary: "Develop engaging curriculum materials.",
    description:
      "The Curriculum Developer will design teaching resources, develop lesson plans, and ensure alignment with educational standards.",
  },
  {
    id: "edu-6",
    title: "School Administrator",
    company: "Springfield School",
    category: "Education",
    location: "Lagos, Nigeria",
    type: "Full-time",
    summary: "Oversee daily school operations.",
    description:
      "The School Administrator will manage staff, oversee admissions, and ensure compliance with policies and regulations.",
  },
  {
    id: "edu-7",
    title: "Special Education Teacher",
    company: "Inclusive Academy",
    category: "Education",
    location: "Abuja, Nigeria",
    type: "Full-time",
    summary: "Teach students with special needs.",
    description:
      "We are hiring a Special Education Teacher to provide tailored lessons, support students with disabilities, and create inclusive learning environments.",
  },
  {
    id: "edu-8",
    title: "Teaching Assistant",
    company: "BrightPath School",
    category: "Education",
    location: "Lagos, Nigeria",
    type: "Part-time",
    summary: "Assist teachers in classroom activities.",
    description:
      "As a Teaching Assistant, you’ll help manage the classroom, support students, and assist teachers in preparing materials.",
  },
  {
    id: "edu-9",
    title: "Librarian",
    company: "KnowledgeHub",
    category: "Education",
    location: "Remote",
    type: "Contract",
    summary: "Manage library resources and assist students.",
    description:
      "The Librarian will organize resources, assist students with research, and ensure smooth operations of digital and physical libraries.",
  },
  {
    id: "edu-10",
    title: "Educational Consultant",
    company: "EduAdvisors",
    category: "Education",
    location: "Remote",
    type: "Full-time",
    summary: "Provide consulting services to schools and institutions.",
    description:
      "We are looking for an Educational Consultant to advise schools on curriculum design, teacher training, and student engagement strategies.",
  },
];

export default jobs;
