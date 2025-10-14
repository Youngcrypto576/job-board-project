const jobs = [
  // ================= TECHNOLOGY =================
    {
    id: "tech-1",
    title: "Frontend Developer",
    company: "TechHive Solutions",
    category: "Technology",
    location: "Remote (Nigeria)",
    type: "Full-time",
    salary: "₦300,000 - ₦500,000/month",
    summary: "Build modern web apps with React and Next.js.",
    description:
      "We are looking for a passionate Frontend Developer to design and develop user-friendly web applications. You will work closely with designers and backend engineers to deliver outstanding products that scale globally.",
    responsibilities: [
      "Develop responsive web applications using React and Next.js",
      "Collaborate with UI/UX designers to improve usability",
      "Optimize applications for speed and scalability",
      "Write clean, maintainable code following best practices",
      "Participate in code reviews and contribute to team discussions",
    ],
    qualifications: [
      "Bachelor’s degree in Computer Science or related field",
      "2+ years of experience with JavaScript, React, and Next.js",
      "Understanding of REST APIs and version control (Git)",
      "Strong problem-solving and debugging skills",
    ],
    benefits: [
      "Health insurance coverage",
      "Paid annual leave",
      "Remote work flexibility",
      "Performance-based bonuses",
    ],
    reportingTo: "Lead Software Engineer",
    companyInfo:
      "TechHive Solutions is a Nigerian-based software company that builds scalable and innovative web solutions for global clients. Our culture values creativity, collaboration, and continuous learning.",
    applicationSecurity: {
      captcha: true,
    },
  },

  {
    id: "tech-2",
    title: "Backend Engineer",
    company: "CloudWorks",
    category: "Technology",
    location: "Lagos, Nigeria (Hybrid – 3 days onsite, 2 remote)",
    type: "Full-time",
    salary: "₦450,000 - ₦650,000/month",
    summary: "Develop and maintain scalable backend services.",
    description:
      "As a Backend Engineer at CloudWorks, you will design, build, and maintain secure and efficient server-side systems. You’ll collaborate closely with frontend developers, DevOps, and designers to deliver reliable digital products that serve thousands of users.",
    responsibilities: [
      "Design and implement RESTful APIs for frontend integration.",
      "Maintain and optimize databases for performance and scalability.",
      "Ensure application security, data protection, and proper authentication.",
      "Collaborate with cross-functional teams to design scalable backend systems.",
      "Monitor and debug server issues, ensuring high uptime and performance.",
    ],
    qualifications: [
      "Bachelor’s degree in Computer Science, Software Engineering, or related field.",
      "3+ years of professional experience as a Backend Developer.",
      "Strong knowledge of Node.js, Express.js, and MongoDB or PostgreSQL.",
      "Experience with Docker, APIs, and cloud services (AWS, GCP, or Azure).",
      "Excellent problem-solving and teamwork skills.",
    ],
    benefits: [
      "Health insurance and pension contribution.",
      "Performance bonuses and career growth opportunities.",
      "Hybrid work structure for flexibility.",
      "Paid time off and annual training budget.",
    ],
    reportingTo: "Senior Software Architect",
    companyInfo:
      "CloudWorks is a leading software engineering company based in Lagos, Nigeria. We specialize in developing cloud-based enterprise applications for businesses across Africa. Our culture values innovation, collaboration, and continuous learning.",
    applicationSecurity: {
      captcha: true,
    },
  },

  {
    id: "tech-3",
    title: "UI/UX Designer",
    company: "PixelCraft Studios",
    category: "Technology",
    location: "Abuja, Nigeria (On-site)",
    type: "Part-time",
    salary: "₦250,000 - ₦400,000/month",
    summary: "Create engaging and user-focused interface designs.",
    description:
      "PixelCraft Studios is looking for a creative UI/UX Designer to craft visually appealing and user-friendly digital experiences. You will work with developers and product managers to ensure seamless design integration and optimal user engagement.",
    responsibilities: [
      "Design intuitive interfaces and user experiences for web and mobile applications.",
      "Collaborate with developers to implement design systems.",
      "Conduct user research and usability testing to improve workflows.",
      "Develop wireframes, prototypes, and visual mockups using Figma or Adobe XD.",
      "Ensure designs meet accessibility and responsiveness standards.",
    ],
    qualifications: [
      "Bachelor’s degree in Design, Computer Science, or related field.",
      "2+ years of experience in UI/UX design.",
      "Proficiency in Figma, Adobe XD, or Sketch.",
      "Understanding of responsive and mobile-first design principles.",
      "Excellent communication and collaboration skills.",
    ],
    benefits: [
      "Health insurance coverage.",
      "Flexible work hours for part-time employees.",
      "Creative and inclusive work environment.",
      "Opportunities for career growth and learning.",
    ],
    reportingTo: "Creative Director",
    companyInfo:
      "PixelCraft Studios is a creative design agency based in Abuja, specializing in branding, UI/UX design, and web solutions. We value innovation, collaboration, and pixel-perfect attention to detail.",
    applicationSecurity: {
      captcha: true,
    },
  },

  {
    id: "tech-4",
    title: "DevOps Engineer",
    company: "StackSphere Technologies",
    category: "Technology",
    location: "Remote (Nigeria)",
    type: "Full-time",
    salary: "₦600,000 - ₦800,000/month",
    summary: "Automate, deploy, and maintain cloud infrastructure.",
    description:
      "StackSphere is seeking an experienced DevOps Engineer to manage CI/CD pipelines, cloud deployments, and production monitoring. You’ll ensure efficient, secure, and scalable delivery of our applications.",
    responsibilities: [
      "Develop and maintain CI/CD pipelines.",
      "Automate deployment and infrastructure tasks using tools like Docker and Kubernetes.",
      "Monitor system performance and optimize for scalability.",
      "Work closely with backend teams to ensure reliable releases.",
    ],
    qualifications: [
      "Experience with AWS or GCP cloud platforms.",
      "Strong scripting skills (Bash, Python).",
      "Knowledge of Kubernetes, Docker, and Jenkins.",
      "2+ years experience as a DevOps Engineer.",
    ],
    benefits: [
      "Remote-first work policy.",
      "Health and wellness benefits.",
      "Annual tech allowance.",
    ],
    reportingTo: "Head of Infrastructure",
    companyInfo:
      "StackSphere Technologies provides scalable cloud and DevOps solutions for global startups and enterprises.",
    applicationSecurity: {
      captcha: true,
    },
  },

  {
    id: "tech-5",
    title: "Mobile App Developer",
    company: "AppFlow Labs",
    category: "Technology",
    location: "Lagos, Nigeria (On-site)",
    type: "Full-time",
    salary: "₦400,000 - ₦600,000/month",
    summary: "Build and maintain Android and iOS apps.",
    description:
      "AppFlow Labs is hiring a Mobile App Developer to design and build cross-platform apps with React Native and Flutter.",
    responsibilities: [
      "Develop mobile applications using React Native or Flutter.",
      "Integrate APIs and manage app updates.",
      "Work with designers to ensure beautiful UI/UX.",
    ],
    qualifications: [
      "Bachelor’s in Computer Science or related field.",
      "Experience with React Native or Flutter.",
      "Strong understanding of app deployment (Play Store & App Store).",
    ],
    benefits: [
      "Free lunch and workspace amenities.",
      "Annual training budget.",
      "Medical insurance.",
    ],
    reportingTo: "Lead Mobile Engineer",
    companyInfo:
      "AppFlow Labs builds high-quality mobile applications for fintech, health, and lifestyle sectors.",
    applicationSecurity: {
      captcha: true,
    },
  },

  {
    id: "tech-6",
    title: "Software QA Tester",
    company: "Testify QA Ltd",
    category: "Technology",
    location: "Remote (Nigeria)",
    type: "Contract",
    salary: "₦200,000 - ₦350,000/month",
    summary: "Ensure software quality through testing and feedback.",
    description:
      "Testify QA Ltd is seeking a detail-oriented QA Tester to execute test cases, report bugs, and collaborate with developers to maintain high product quality.",
    responsibilities: [
      "Perform manual and automated testing.",
      "Identify and report software bugs.",
      "Document test processes and maintain reports.",
    ],
    qualifications: [
      "Knowledge of testing tools like Selenium or Cypress.",
      "Strong analytical skills.",
      "1+ year experience in QA testing.",
    ],
    benefits: ["Remote flexibility", "Performance bonuses"],
    reportingTo: "QA Lead",
    companyInfo:
      "Testify QA Ltd is a software quality assurance company helping tech startups deliver flawless products.",
    applicationSecurity: {
      captcha: true,
    },
  },

  {
    id: "tech-7",
    title: "Cybersecurity Analyst",
    company: "SecureNet Systems",
    category: "Technology",
    location: "Abuja, Nigeria",
    type: "Full-time",
    salary: "₦500,000 - ₦750,000/month",
    summary: "Protect organizational networks and systems.",
    description:
      "As a Cybersecurity Analyst, you’ll identify vulnerabilities, implement security measures, and ensure compliance.",
    responsibilities: [
      "Monitor networks for security breaches.",
      "Perform vulnerability assessments.",
      "Develop and update security policies.",
    ],
    qualifications: [
      "Degree in Cybersecurity or related field.",
      "Knowledge of firewalls, IDS, and encryption technologies.",
      "Relevant certifications (CompTIA Security+, CEH) preferred.",
    ],
    benefits: ["Paid leave", "Health insurance", "Continuous training"],
    reportingTo: "IT Security Manager",
    companyInfo:
      "SecureNet Systems is a cybersecurity consulting firm ensuring businesses stay protected online.",
    applicationSecurity: {
      captcha: true,
    },
  },

  {
    id: "tech-8",
    title: "Data Analyst",
    company: "Insight Analytics",
    category: "Technology",
    location: "Remote (Nigeria)",
    type: "Full-time",
    salary: "₦350,000 - ₦500,000/month",
    summary: "Analyze and interpret complex data sets.",
    description:
      "Insight Analytics seeks a Data Analyst to extract insights, visualize data, and support decision-making.",
    responsibilities: [
      "Clean, organize, and analyze large datasets.",
      "Build dashboards using Power BI or Tableau.",
      "Collaborate with teams to derive insights.",
    ],
    qualifications: [
      "Proficiency in SQL and Excel.",
      "Experience with Python or R.",
      "Strong presentation skills.",
    ],
    benefits: ["Remote work", "Bonuses", "Paid leave"],
    reportingTo: "Head of Analytics",
    companyInfo:
      "Insight Analytics helps businesses make data-driven decisions using advanced analytics and visualization tools.",
    applicationSecurity: {
      captcha: true,
    },
  },

  {
    id: "tech-9",
    title: "AI Engineer",
    company: "NeuroSoft Labs",
    category: "Technology",
    location: "Hybrid (Lagos)",
    type: "Full-time",
    salary: "₦700,000 - ₦900,000/month",
    summary: "Build and deploy intelligent AI-powered systems.",
    description:
      "NeuroSoft Labs is looking for an AI Engineer to build machine learning pipelines and deploy AI models to production.",
    responsibilities: [
      "Train and fine-tune AI/ML models.",
      "Work on NLP and computer vision projects.",
      "Collaborate with data scientists and developers.",
    ],
    qualifications: [
      "Bachelor’s in AI, Data Science, or Computer Science.",
      "Strong knowledge of TensorFlow or PyTorch.",
      "Experience deploying ML models.",
    ],
    benefits: [
      "Health and dental benefits.",
      "Hybrid flexibility.",
      "Annual AI conference allowance.",
    ],
    reportingTo: "Chief Data Scientist",
    companyInfo:
      "NeuroSoft Labs is an AI company pushing the boundaries of artificial intelligence for Africa’s tech future.",
    applicationSecurity: {
      captcha: true,
    },
  },

  {
    id: "tech-10",
    title: "Product Manager",
    company: "InnovateX",
    category: "Technology",
    location: "Remote (Nigeria)",
    type: "Full-time",
    salary: "₦550,000 - ₦750,000/month",
    summary: "Lead product strategy and cross-functional collaboration.",
    description:
      "InnovateX seeks a Product Manager to oversee the planning, development, and execution of new tech products.",
    responsibilities: [
      "Define product roadmap and priorities.",
      "Collaborate with designers and developers.",
      "Monitor KPIs and product performance.",
    ],
    qualifications: [
      "Experience as a Product Manager in tech.",
      "Strong communication and analytical skills.",
      "Knowledge of Agile methodologies.",
    ],
    benefits: ["Remote flexibility", "Stock options", "Bonuses"],
    reportingTo: "Head of Product",
    companyInfo:
      "InnovateX is a digital solutions company building world-class products for African startups and global enterprises.",
    applicationSecurity: {
      captcha: true,
    },
  },

     // ================= EDUCATION ================
  {
    id: "edu-1",
    title: "Primary School Teacher",
    company: "BrightStar Academy",
    category: "Education",
    location: "Lagos, Nigeria",
    type: "Full-time",
    salary: "₦120,000 - ₦180,000/month",
    summary: "Teach core subjects to pupils and help build foundational skills.",
    description:
      "BrightStar Academy is hiring experienced primary school teachers to deliver high-quality lessons in English, Mathematics, and Science for pupils aged 5–10.",
    responsibilities: [
      "Prepare and deliver engaging classroom lessons.",
      "Assess and monitor students’ progress.",
      "Work closely with parents and school administrators.",
    ],
    qualifications: [
      "NCE or B.Ed in Education or related field.",
      "2+ years teaching experience.",
      "Excellent communication and classroom management skills.",
    ],
    benefits: ["Health plan", "Paid holidays", "Teacher training support"],
    reportingTo: "Head Teacher",
    companyInfo:
      "BrightStar Academy is a private primary school dedicated to nurturing academic excellence and character development.",
    applicationSecurity: { captcha: true },
  },

  {
    id: "edu-2",
    title: "Secondary School English Teacher",
    company: "Queensfield College",
    category: "Education",
    location: "Abuja, Nigeria",
    type: "Full-time",
    salary: "₦150,000 - ₦250,000/month",
    summary: "Teach English Language and Literature at secondary level.",
    description:
      "Queensfield College seeks a qualified English teacher passionate about helping students develop strong writing and speaking skills.",
    responsibilities: [
      "Teach English Language and Literature classes.",
      "Develop lesson plans and evaluate student progress.",
      "Supervise classroom activities and club sessions.",
    ],
    qualifications: [
      "B.Ed or B.A. in English or related field.",
      "Minimum 3 years teaching experience.",
      "Excellent written and verbal communication.",
    ],
    benefits: ["Housing allowance", "Medical care", "Career training"],
    reportingTo: "Principal",
    companyInfo:
      "Queensfield College is a co-educational secondary school that promotes excellence in academics and moral values.",
    applicationSecurity: { captcha: true },
  },

  {
    id: "edu-3",
    title: "Mathematics Tutor",
    company: "EduBridge Tutors",
    category: "Education",
    location: "Remote (Nigeria)",
    type: "Part-time",
    salary: "₦5,000 - ₦10,000/hour",
    summary: "Teach Mathematics online to WAEC and JAMB students.",
    description:
      "We are looking for experienced math tutors to provide virtual classes for students preparing for WAEC and JAMB exams.",
    responsibilities: [
      "Deliver online math tutorials via Zoom or Google Meet.",
      "Prepare lesson materials and mock tests.",
      "Track student performance.",
    ],
    qualifications: [
      "Minimum B.Sc in Mathematics, Engineering, or related field.",
      "Experience teaching senior secondary math.",
    ],
    benefits: ["Work from home", "Flexible hours"],
    reportingTo: "Academic Coordinator",
    companyInfo:
      "EduBridge Tutors connects students with professional teachers for personalized online learning.",
    applicationSecurity: { captcha: true },
  },

  {
    id: "edu-4",
    title: "School Administrator",
    company: "Future Scholars Academy",
    category: "Education",
    location: "Port Harcourt, Nigeria",
    type: "Full-time",
    salary: "₦250,000 - ₦400,000/month",
    summary: "Oversee daily operations and ensure smooth school management.",
    description:
      "We are hiring a School Administrator to manage academic operations, staff, and administrative duties.",
    responsibilities: [
      "Coordinate daily school activities.",
      "Manage staff records and performance.",
      "Oversee budgeting and school planning.",
    ],
    qualifications: [
      "B.Ed or B.Sc in Education Management or related field.",
      "Strong leadership and communication skills.",
    ],
    benefits: ["Accommodation", "Health plan"],
    reportingTo: "Director",
    companyInfo:
      "Future Scholars Academy provides modern learning experiences with emphasis on innovation and discipline.",
    applicationSecurity: { captcha: true },
  },

  {
    id: "edu-5",
    title: "Science Teacher",
    company: "Victory High School",
    category: "Education",
    location: "Kano, Nigeria",
    type: "Full-time",
    salary: "₦180,000 - ₦250,000/month",
    summary: "Teach Physics, Chemistry, and Biology to secondary students.",
    description:
      "Victory High School seeks a Science Teacher to help students understand science concepts through engaging lessons and practical experiments.",
    responsibilities: [
      "Teach and prepare science lessons.",
      "Supervise lab sessions and experiments.",
      "Prepare students for WAEC/NECO exams.",
    ],
    qualifications: [
      "B.Sc/B.Ed in Science Education or related field.",
      "2+ years of teaching experience.",
    ],
    benefits: ["Paid leave", "Annual bonus"],
    reportingTo: "Academic Head",
    companyInfo:
      "Victory High School is a mission-driven secondary school known for its science education excellence.",
    applicationSecurity: { captcha: true },
  },

  {
    id: "edu-6",
    title: "University Lecturer (Computer Science)",
    company: "Greenfield University",
    category: "Education",
    location: "Kaduna, Nigeria",
    type: "Full-time",
    salary: "₦500,000 - ₦700,000/month",
    summary: "Teach computer science and mentor undergraduate students.",
    description:
      "We are seeking lecturers who can deliver quality teaching and research in the Computer Science department.",
    responsibilities: [
      "Deliver lectures and practical lab sessions.",
      "Conduct research and publish papers.",
      "Supervise final year projects.",
    ],
    qualifications: [
      "M.Sc or PhD in Computer Science.",
      "Experience teaching at university level.",
    ],
    benefits: ["Research grants", "Housing", "Pension plan"],
    reportingTo: "Dean of Faculty",
    companyInfo:
      "Greenfield University is a private tertiary institution focused on excellence in research and teaching.",
    applicationSecurity: { captcha: true },
  },

  {
    id: "edu-7",
    title: "Curriculum Developer",
    company: "EduPlan Nigeria",
    category: "Education",
    location: "Remote",
    type: "Contract",
    salary: "₦400,000/month",
    summary: "Develop innovative learning materials for schools.",
    description:
      "EduPlan seeks an education specialist to create and update curriculum content for various subjects.",
    responsibilities: [
      "Design learning modules for schools.",
      "Research global education standards.",
      "Develop teacher training resources.",
    ],
    qualifications: [
      "Degree in Education, Curriculum Studies, or related field.",
      "Experience in curriculum design.",
    ],
    benefits: ["Remote work", "Flexible hours"],
    reportingTo: "Program Director",
    companyInfo:
      "EduPlan Nigeria provides modern educational solutions to schools across Africa.",
    applicationSecurity: { captcha: true },
  },

  {
    id: "edu-8",
    title: "Education Counselor",
    company: "Hope International College",
    category: "Education",
    location: "Ibadan, Nigeria",
    type: "Full-time",
    salary: "₦200,000 - ₦300,000/month",
    summary: "Provide academic and career guidance to students.",
    description:
      "We are hiring a school counselor to help students plan their academic paths and emotional well-being.",
    responsibilities: [
      "Advise students on career and academic matters.",
      "Organize counseling sessions and workshops.",
      "Work with parents and teachers on student welfare.",
    ],
    qualifications: [
      "B.Ed or B.Sc in Guidance and Counselling.",
      "Excellent interpersonal skills.",
    ],
    benefits: ["Health insurance", "Paid leave"],
    reportingTo: "Principal",
    companyInfo:
      "Hope International College focuses on holistic education for future leaders.",
    applicationSecurity: { captcha: true },
  },

  {
    id: "edu-9",
    title: "ICT Instructor",
    company: "BrightFuture Academy",
    category: "Education",
    location: "Enugu, Nigeria",
    type: "Full-time",
    salary: "₦150,000 - ₦250,000/month",
    summary: "Teach computer literacy and digital skills to students.",
    description:
      "We are looking for an ICT Instructor who can teach Microsoft Office, basic programming, and internet safety.",
    responsibilities: [
      "Teach computer classes for primary and secondary students.",
      "Maintain ICT lab equipment.",
      "Guide students in coding projects.",
    ],
    qualifications: [
      "OND/HND/B.Sc in Computer Science or IT.",
      "Passion for teaching and mentoring.",
    ],
    benefits: ["Training programs", "Annual bonus"],
    reportingTo: "ICT Department Head",
    companyInfo:
      "BrightFuture Academy equips students with digital skills for tomorrow.",
    applicationSecurity: { captcha: true },
  },

  {
    id: "edu-10",
    title: "Adult Education Instructor",
    company: "LearnAgain Initiative",
    category: "Education",
    location: "Remote (Nigeria)",
    type: "Part-time",
    salary: "₦100,000 - ₦150,000/month",
    summary: "Teach adult learners basic literacy and numeracy skills.",
    description:
      "LearnAgain Initiative seeks passionate educators to help adults improve reading, writing, and math.",
    responsibilities: [
      "Conduct virtual and community literacy classes.",
      "Develop simplified learning materials.",
      "Assess learners’ progress regularly.",
    ],
    qualifications: [
      "NCE/B.Ed in Adult Education or related field.",
      "Experience teaching mature learners.",
    ],
    benefits: ["Flexible schedule", "Stipends for materials"],
    reportingTo: "Program Coordinator",
    companyInfo:
      "LearnAgain Initiative is a non-profit organization providing adult literacy programs across Nigeria.",
    applicationSecurity: { captcha: true },
  },

  // ================= FINANCE =================
  {
      id: "fin-1",
    title: "Accountant",
    company: "Greenfield Consulting",
    category: "Finance",
    location: "Abuja, Nigeria",
    type: "Full-time",
    salary: "₦250,000 - ₦350,000/month",
    summary: "Manage financial records, prepare reports, and ensure compliance.",
    description:
      "Greenfield Consulting is seeking a qualified Accountant to manage bookkeeping, prepare financial statements, and support internal audits. You’ll work closely with management to ensure transparency and accuracy in financial operations.",
    responsibilities: [
      "Maintain accurate records of company financial transactions.",
      "Prepare balance sheets, income statements, and cash flow reports.",
      "Support budgeting and forecasting activities.",
      "Ensure compliance with tax and financial regulations.",
    ],
    qualifications: [
      "B.Sc. or HND in Accounting, Finance, or related field.",
      "ICAN or ACCA certification is an added advantage.",
      "2+ years of professional accounting experience.",
      "Proficiency in Microsoft Excel and accounting software (e.g., QuickBooks).",
    ],
    benefits: [
      "Health insurance",
      "13th-month salary",
      "Paid annual leave",
      "Professional training support",
    ],
    reportingTo: "Finance Manager",
    companyInfo:
      "Greenfield Consulting is a growing Nigerian business consulting firm focused on helping SMEs with accounting, auditing, and business development solutions.",
    applicationSecurity: { captcha: true },
  },

  {
    id: "fin-2",
    title: "Financial Analyst",
    company: "Sterling Capital Partners",
    category: "Finance",
    location: "Lagos, Nigeria (Hybrid)",
    type: "Full-time",
    salary: "₦400,000 - ₦600,000/month",
    summary: "Analyze financial data and prepare insights for investment decisions.",
    description:
      "Sterling Capital Partners seeks an analytical and detail-oriented Financial Analyst to interpret financial data, create reports, and support investment planning for clients and internal stakeholders.",
    responsibilities: [
      "Analyze financial statements and market trends.",
      "Build financial models for forecasting and valuation.",
      "Prepare performance reports and dashboards for clients.",
      "Assist with investment proposals and presentations.",
    ],
    qualifications: [
      "B.Sc. in Finance, Economics, or related discipline.",
      "2–4 years of experience in financial analysis or investment banking.",
      "Advanced Excel and Power BI skills.",
      "Strong attention to detail and data interpretation skills.",
    ],
    benefits: [
      "Hybrid work setup (3 days remote).",
      "Health insurance and pension contribution.",
      "Annual performance bonuses.",
      "Career development and certification support.",
    ],
    reportingTo: "Head of Investment Research",
    companyInfo:
      "Sterling Capital Partners is a Lagos-based investment advisory and asset management firm helping clients make informed financial and investment decisions.",
    applicationSecurity: { captcha: true },
  },

  {
    id: "fin-3",
    title: "Payroll Officer",
    company: "Nova Microfinance Bank",
    category: "Finance",
    location: "Port Harcourt, Nigeria",
    type: "Full-time",
    salary: "₦180,000 - ₦250,000/month",
    summary: "Manage employee payroll processing and related financial records.",
    description:
      "Nova Microfinance Bank seeks a Payroll Officer to ensure timely and accurate salary processing, maintain employee payment records, and support HR with financial documentation.",
    responsibilities: [
      "Prepare and process staff payroll monthly.",
      "Ensure statutory deductions (PAYE, pension, NHF) are accurate and remitted promptly.",
      "Maintain employee payroll files and confidentiality.",
      "Collaborate with HR for new hires, resignations, and adjustments.",
    ],
    qualifications: [
      "ND, HND, or B.Sc. in Accounting, Finance, or related field.",
      "Experience in payroll administration or bookkeeping.",
      "Proficiency in Excel and payroll systems.",
      "Excellent attention to detail and accuracy.",
    ],
    benefits: [
      "Health plan",
      "Lunch allowance",
      "Pension contribution",
      "Staff development programs",
    ],
    reportingTo: "Human Resources Manager",
    companyInfo:
      "Nova Microfinance Bank provides innovative financial solutions for small businesses and individuals. We believe in empowering people through easy access to finance.",
    applicationSecurity: { captcha: true },
  },

  {
    id: "fin-4",
    title: "Investment Banker",
    company: "BlueRock Investments",
    category: "Finance",
    location: "Lagos, Nigeria",
    type: "Full-time",
    salary: "₦700,000 - ₦1,000,000/month",
    summary: "Advise clients on financial strategies, mergers, and acquisitions.",
    description:
      "BlueRock Investments is hiring an Investment Banker to help clients raise capital, evaluate mergers and acquisitions, and manage financial risk.",
    responsibilities: [
      "Develop financial models and forecasts.",
      "Prepare investment proposals and client presentations.",
      "Advise clients on mergers, acquisitions, and market opportunities.",
      "Conduct due diligence and valuation analysis.",
    ],
    qualifications: [
      "B.Sc. in Finance, Accounting, or related field.",
      "MBA or CFA preferred.",
      "3+ years of investment banking experience.",
      "Excellent financial modeling skills.",
    ],
    benefits: [
      "Performance bonuses",
      "Health and travel insurance",
      "Professional growth programs",
    ],
    reportingTo: "Director of Corporate Finance",
    companyInfo:
      "BlueRock Investments is a Lagos-based investment firm providing financial advisory and asset management services to corporate and high-net-worth clients.",
    applicationSecurity: { captcha: true },
  },

  {
    id: "fin-5",
    title: "Loan Officer",
    company: "SmartCredit Ltd",
    category: "Finance",
    location: "Ibadan, Nigeria",
    type: "Full-time",
    salary: "₦150,000 - ₦220,000/month",
    summary: "Evaluate and approve loan applications for individuals and SMEs.",
    description:
      "SmartCredit Ltd seeks a Loan Officer to assess borrower eligibility, review credit applications, and ensure timely loan disbursement.",
    responsibilities: [
      "Review and process loan applications.",
      "Assess creditworthiness of clients.",
      "Maintain accurate loan documentation.",
      "Work with collections to manage repayment schedules.",
    ],
    qualifications: [
      "ND, HND, or B.Sc. in Banking, Finance, or related field.",
      "Experience in credit or lending institutions.",
      "Excellent interpersonal and negotiation skills.",
    ],
    benefits: ["Monthly bonuses", "Pension", "Staff loan benefits"],
    reportingTo: "Branch Manager",
    companyInfo:
      "SmartCredit Ltd is a micro-lending company offering quick and flexible loan services to individuals and small businesses.",
    applicationSecurity: { captcha: true },
  },

  {
    id: "fin-6",
    title: "Auditor",
    company: "TrustCheck Auditing Services",
    category: "Finance",
    location: "Lagos, Nigeria",
    type: "Full-time",
    salary: "₦400,000 - ₦550,000/month",
    summary: "Conduct audits and ensure financial accuracy and compliance.",
    description:
      "TrustCheck Auditing Services is seeking an Auditor to examine financial statements and ensure compliance with accounting standards.",
    responsibilities: [
      "Plan and conduct internal and external audits.",
      "Identify discrepancies and recommend corrective actions.",
      "Prepare audit reports and present findings.",
    ],
    qualifications: [
      "B.Sc. in Accounting or related field.",
      "ICAN certification required.",
      "2+ years of auditing experience.",
    ],
    benefits: ["Health insurance", "Transport allowance", "Paid leave"],
    reportingTo: "Audit Manager",
    companyInfo:
      "TrustCheck Auditing Services provides professional audit, assurance, and tax advisory services for companies across Nigeria.",
    applicationSecurity: { captcha: true },
  },

  {
    id: "fin-7",
    title: "Tax Consultant",
    company: "FinEdge Consulting",
    category: "Finance",
    location: "Abuja, Nigeria",
    type: "Contract",
    salary: "₦300,000 - ₦450,000/month",
    summary: "Provide expert tax advice and compliance services to clients.",
    description:
      "FinEdge Consulting seeks a Tax Consultant to assist clients with tax planning, filing, and compliance.",
    responsibilities: [
      "Advise clients on tax strategies and regulations.",
      "Prepare and file tax returns.",
      "Assist in resolving tax-related issues with authorities.",
    ],
    qualifications: [
      "B.Sc. in Accounting or Taxation.",
      "Knowledge of Nigerian tax laws.",
      "Excellent analytical and documentation skills.",
    ],
    benefits: ["Remote flexibility", "Project bonuses"],
    reportingTo: "Managing Partner",
    companyInfo:
      "FinEdge Consulting is a professional tax and business advisory firm helping companies stay compliant while optimizing tax savings.",
    applicationSecurity: { captcha: true },
  },

  {
    id: "fin-8",
    title: "Bank Teller",
    company: "Unity Bank PLC",
    category: "Finance",
    location: "Enugu, Nigeria",
    type: "Full-time",
    salary: "₦120,000 - ₦180,000/month",
    summary: "Handle cash transactions and provide excellent customer service.",
    description:
      "Unity Bank PLC seeks a Teller to manage deposits, withdrawals, and customer inquiries with professionalism.",
    responsibilities: [
      "Receive and process cash deposits and withdrawals.",
      "Balance daily cash transactions.",
      "Maintain accurate records of all transactions.",
    ],
    qualifications: [
      "OND or HND in Finance, Accounting, or related field.",
      "1+ year banking or cash handling experience.",
      "Good customer service and math skills.",
    ],
    benefits: ["Health care", "Paid leave", "Staff savings plan"],
    reportingTo: "Branch Supervisor",
    companyInfo:
      "Unity Bank PLC is one of Nigeria’s leading commercial banks providing retail and SME banking solutions nationwide.",
    applicationSecurity: { captcha: true },
  },

  {
    id: "fin-9",
    title: "Risk Analyst",
    company: "Veritas Finance Group",
    category: "Finance",
    location: "Lagos, Nigeria (Hybrid)",
    type: "Full-time",
    salary: "₦500,000 - ₦700,000/month",
    summary: "Assess and mitigate financial and operational risks.",
    description:
      "Veritas Finance Group is hiring a Risk Analyst to identify potential risks, analyze data, and recommend solutions for financial stability.",
    responsibilities: [
      "Conduct risk assessments and scenario analysis.",
      "Develop strategies to minimize potential losses.",
      "Prepare regular risk reports for management.",
    ],
    qualifications: [
      "B.Sc. in Finance, Statistics, or Economics.",
      "2+ years experience in risk management or financial analysis.",
      "Strong Excel and data analytics skills.",
    ],
    benefits: [
      "Hybrid schedule",
      "Medical insurance",
      "Annual performance review",
    ],
    reportingTo: "Chief Risk Officer",
    companyInfo:
      "Veritas Finance Group is a financial services company offering risk management, investment, and advisory services.",
    applicationSecurity: { captcha: true },
  },

  {
    id: "fin-10",
    title: "Finance Manager",
    company: "Prime Holdings Ltd",
    category: "Finance",
    location: "Abuja, Nigeria",
    type: "Full-time",
    salary: "₦800,000 - ₦1,200,000/month",
    summary: "Oversee company financial operations and team performance.",
    description:
      "Prime Holdings Ltd seeks a Finance Manager to lead the finance department, prepare budgets, and manage investment activities.",
    responsibilities: [
      "Oversee financial planning, budgeting, and reporting.",
      "Ensure compliance with financial laws and policies.",
      "Manage cash flow and cost control measures.",
      "Supervise accounting and finance staff.",
    ],
    qualifications: [
      "B.Sc. or M.Sc. in Finance, Accounting, or Economics.",
      "ICAN/ACCA certified with 5+ years experience.",
      "Strong leadership and analytical skills.",
    ],
    benefits: [
      "Health and pension plan",
      "Performance bonuses",
      "Executive training opportunities",
    ],
    reportingTo: "Chief Executive Officer",
    companyInfo:
      "Prime Holdings Ltd is a diversified Nigerian conglomerate with interests in construction, energy, and finance.",
    applicationSecurity: { captcha: true },
  },

  // ================= MARKETING ================
    // ================= HEALTHCARE =================
  {
    id: "health-1",
    title: "Registered Nurse",
    company: "Lifeline Hospital",
    category: "Healthcare",
    location: "Lagos, Nigeria",
    type: "Full-time",
    salary: "₦200,000 - ₦300,000/month",
    summary: "Provide patient care and assist in clinical procedures.",
    description:
      "Lifeline Hospital seeks compassionate Registered Nurses to provide medical care, monitor patients, and assist doctors during treatments.",
    responsibilities: [
      "Monitor patient health and vital signs.",
      "Administer medications and injections.",
      "Assist physicians during medical procedures.",
      "Maintain accurate medical records.",
    ],
    qualifications: [
      "Registered Nurse (RN) certification.",
      "Minimum 2 years of clinical experience.",
      "Strong communication and patient-care skills.",
    ],
    benefits: ["Health insurance", "Paid leave", "Housing allowance"],
    reportingTo: "Head Nurse",
    companyInfo:
      "Lifeline Hospital is a private healthcare facility offering top-tier patient services and modern treatment practices.",
    applicationSecurity: { captcha: true },
  },

  {
    id: "health-2",
    title: "Medical Laboratory Scientist",
    company: "BioMed Diagnostics",
    category: "Healthcare",
    location: "Abuja, Nigeria",
    type: "Full-time",
    salary: "₦250,000 - ₦400,000/month",
    summary: "Conduct laboratory tests and analyze medical samples.",
    description:
      "BioMed Diagnostics is hiring a skilled Laboratory Scientist to run diagnostic tests, interpret results, and support medical investigations.",
    responsibilities: [
      "Perform diagnostic and screening tests.",
      "Prepare and analyze biological samples.",
      "Ensure lab safety and equipment maintenance.",
    ],
    qualifications: [
      "BMLS or equivalent qualification.",
      "Current license from MLSCN.",
      "2+ years of lab experience.",
    ],
    benefits: ["Medical insurance", "Annual bonus", "Training programs"],
    reportingTo: "Lab Supervisor",
    companyInfo:
      "BioMed Diagnostics provides high-quality laboratory and diagnostic services to hospitals and research centers across Nigeria.",
    applicationSecurity: { captcha: true },
  },

  {
    id: "health-3",
    title: "Pharmacist",
    company: "WellCare Pharmacy",
    category: "Healthcare",
    location: "Port Harcourt, Nigeria",
    type: "Full-time",
    salary: "₦220,000 - ₦350,000/month",
    summary: "Dispense medications and provide patient counseling.",
    description:
      "WellCare Pharmacy seeks a professional Pharmacist to handle prescriptions, ensure proper dosage, and advise patients on safe medication use.",
    responsibilities: [
      "Fill and dispense prescriptions accurately.",
      "Provide drug usage counseling to patients.",
      "Monitor inventory and expiration dates.",
    ],
    qualifications: [
      "B.Pharm or Pharm.D degree.",
      "Current PCN license.",
      "1–3 years pharmacy experience.",
    ],
    benefits: ["Health insurance", "Discounted medication", "Bonus pay"],
    reportingTo: "Head Pharmacist",
    companyInfo:
      "WellCare Pharmacy operates a network of retail and hospital-based pharmacies across southern Nigeria.",
    applicationSecurity: { captcha: true },
  },

  {
    id: "health-4",
    title: "Medical Doctor",
    company: "HopeMed Clinics",
    category: "Healthcare",
    location: "Enugu, Nigeria",
    type: "Full-time",
    salary: "₦400,000 - ₦600,000/month",
    summary: "Provide general medical consultations and patient treatment.",
    description:
      "HopeMed Clinics seeks a dedicated Medical Doctor to diagnose illnesses, prescribe treatments, and oversee patient recovery plans.",
    responsibilities: [
      "Conduct patient consultations and examinations.",
      "Diagnose and treat medical conditions.",
      "Prescribe medication and monitor patient progress.",
    ],
    qualifications: [
      "MBBS degree and valid MDCN license.",
      "At least 2 years of clinical experience.",
      "Excellent diagnostic and communication skills.",
    ],
    benefits: ["Health insurance", "Housing support", "Paid vacation"],
    reportingTo: "Chief Medical Officer",
    companyInfo:
      "HopeMed Clinics is a growing healthcare network providing accessible and quality medical services in Nigeria.",
    applicationSecurity: { captcha: true },
  },

  {
    id: "health-5",
    title: "Dentist",
    company: "SmileBright Dental Center",
    category: "Healthcare",
    location: "Lagos, Nigeria",
    type: "Full-time",
    salary: "₦350,000 - ₦500,000/month",
    summary: "Provide dental treatments and oral hygiene consultations.",
    description:
      "SmileBright Dental Center seeks a professional Dentist to perform dental procedures, cosmetic treatments, and preventive care education.",
    responsibilities: [
      "Perform dental exams and procedures.",
      "Advise patients on oral hygiene and preventive care.",
      "Maintain accurate dental records.",
    ],
    qualifications: [
      "BDS or equivalent degree.",
      "Licensed by the Medical and Dental Council of Nigeria.",
      "1+ years of experience preferred.",
    ],
    benefits: ["Dental coverage", "Bonus incentives", "Flexible schedule"],
    reportingTo: "Clinic Director",
    companyInfo:
      "SmileBright Dental Center is a leading private dental clinic offering modern care and cosmetic dentistry services.",
    applicationSecurity: { captcha: true },
  },

  {
    id: "health-6",
    title: "Radiographer",
    company: "ClearScan Imaging",
    category: "Healthcare",
    location: "Abuja, Nigeria",
    type: "Full-time",
    salary: "₦250,000 - ₦380,000/month",
    summary: "Operate imaging equipment and interpret scan results.",
    description:
      "ClearScan Imaging seeks an experienced Radiographer to perform X-rays, MRIs, and CT scans, ensuring image clarity and patient safety.",
    responsibilities: [
      "Operate imaging equipment (CT, MRI, X-ray).",
      "Prepare patients for imaging procedures.",
      "Maintain accurate scan records.",
    ],
    qualifications: [
      "B.Sc in Radiography.",
      "License from the Radiographers Registration Board.",
      "Knowledge of digital imaging systems.",
    ],
    benefits: ["Medical coverage", "Shift allowance", "Paid leave"],
    reportingTo: "Head of Imaging Department",
    companyInfo:
      "ClearScan Imaging offers diagnostic radiology services with advanced technology and skilled professionals.",
    applicationSecurity: { captcha: true },
  },

  {
    id: "health-7",
    title: "Nutritionist",
    company: "FitLife Wellness",
    category: "Healthcare",
    location: "Remote (Nigeria)",
    type: "Part-time",
    salary: "₦150,000 - ₦250,000/month",
    summary: "Create diet plans and promote healthy living.",
    description:
      "FitLife Wellness seeks a qualified Nutritionist to design personalized meal plans and guide clients toward better nutrition and health outcomes.",
    responsibilities: [
      "Assess clients’ dietary needs.",
      "Develop personalized nutrition programs.",
      "Educate clients on healthy eating habits.",
    ],
    qualifications: [
      "Degree in Nutrition, Dietetics, or related field.",
      "Certification from a recognized health board is a plus.",
      "Good communication and motivational skills.",
    ],
    benefits: ["Remote work", "Flexible hours", "Wellness discounts"],
    reportingTo: "Wellness Director",
    companyInfo:
      "FitLife Wellness is a health-focused organization providing nutritional and fitness guidance through virtual and in-person programs.",
    applicationSecurity: { captcha: true },
  },

  {
    id: "health-8",
    title: "Public Health Officer",
    company: "SafeCity Health Foundation",
    category: "Healthcare",
    location: "Kano, Nigeria",
    type: "Contract",
    salary: "₦300,000/month",
    summary: "Plan and implement community health programs.",
    description:
      "SafeCity Health Foundation seeks a Public Health Officer to coordinate health campaigns, collect field data, and support public health initiatives.",
    responsibilities: [
      "Organize community outreach programs.",
      "Collect and analyze health data.",
      "Collaborate with local health agencies.",
    ],
    qualifications: [
      "Degree in Public Health, Nursing, or related field.",
      "Experience in community-based projects.",
      "Good communication and reporting skills.",
    ],
    benefits: ["Field allowance", "Training", "Project bonuses"],
    reportingTo: "Program Manager",
    companyInfo:
      "SafeCity Health Foundation promotes disease prevention, maternal care, and community health awareness across Nigeria.",
    applicationSecurity: { captcha: true },
  },

  {
    id: "health-9",
    title: "Physiotherapist",
    company: "RehabPlus Clinic",
    category: "Healthcare",
    location: "Lagos, Nigeria",
    type: "Full-time",
    salary: "₦250,000 - ₦400,000/month",
    summary: "Help patients regain mobility and physical strength.",
    description:
      "RehabPlus Clinic seeks a Physiotherapist to assess, treat, and rehabilitate patients recovering from injuries or surgeries.",
    responsibilities: [
      "Develop patient rehabilitation plans.",
      "Conduct physical therapy sessions.",
      "Monitor progress and adjust treatments.",
    ],
    qualifications: [
      "B.Sc in Physiotherapy.",
      "Valid professional license.",
      "Empathy and communication skills.",
    ],
    benefits: ["Health plan", "Training", "Flexible hours"],
    reportingTo: "Clinical Director",
    companyInfo:
      "RehabPlus Clinic provides physical rehabilitation and fitness therapy to clients across Lagos and neighboring states.",
    applicationSecurity: { captcha: true },
  },

  {
    id: "health-10",
    title: "Medical Receptionist",
    company: "BlueCross Hospital",
    category: "Healthcare",
    location: "Abeokuta, Nigeria",
    type: "Full-time",
    salary: "₦100,000 - ₦150,000/month",
    summary: "Handle patient scheduling and administrative support.",
    description:
      "BlueCross Hospital is seeking a friendly Medical Receptionist to manage front desk operations, schedule appointments, and assist patients.",
    responsibilities: [
      "Greet and register patients.",
      "Manage appointment scheduling.",
      "Maintain accurate patient records.",
    ],
    qualifications: [
      "OND/B.Sc in Administration or related field.",
      "1–2 years of customer service experience.",
      "Proficiency in Microsoft Office.",
    ],
    benefits: ["Health insurance", "Paid leave", "Staff training"],
    reportingTo: "Admin Manager",
    companyInfo:
      "BlueCross Hospital is a reputable healthcare facility providing quality care with modern equipment and compassionate staff.",
    applicationSecurity: { captcha: true },
  },

    // ================= DESIGN =================
  {
    id: "design-1",
    title: "Graphic Designer",
    company: "CreativeBox Studios",
    category: "Design",
    location: "Lagos, Nigeria",
    type: "Full-time",
    salary: "₦200,000 - ₦350,000/month",
    summary: "Design visual content for print and digital media.",
    description:
      "CreativeBox Studios is seeking a Graphic Designer to produce branding materials, social media creatives, and marketing designs that align with client goals.",
    responsibilities: [
      "Design logos, posters, and marketing assets.",
      "Collaborate with marketing teams on campaigns.",
      "Ensure consistency in branding across all designs.",
    ],
    qualifications: [
      "Proficiency in Adobe Photoshop, Illustrator, and Canva.",
      "1–3 years of design experience.",
      "Strong creative and communication skills.",
    ],
    benefits: ["Medical insurance", "Career growth", "Flexible work options"],
    reportingTo: "Design Lead",
    companyInfo:
      "CreativeBox Studios is a branding and creative design agency delivering visual excellence for businesses and startups.",
    applicationSecurity: { captcha: true },
  },

  {
    id: "design-2",
    title: "UI/UX Designer",
    company: "Designify Labs",
    category: "Design",
    location: "Remote (Nigeria)",
    type: "Full-time",
    salary: "₦300,000 - ₦450,000/month",
    summary: "Design modern, user-friendly digital interfaces.",
    description:
      "Designify Labs seeks a UI/UX Designer to create intuitive and visually appealing web and mobile interfaces that enhance user experience.",
    responsibilities: [
      "Develop wireframes, prototypes, and design systems.",
      "Conduct user research and usability tests.",
      "Work closely with developers to implement designs.",
    ],
    qualifications: [
      "2+ years of UI/UX design experience.",
      "Proficiency in Figma, Adobe XD, or Sketch.",
      "Knowledge of design principles and accessibility.",
    ],
    benefits: ["Remote work", "Training budget", "Flexible schedule"],
    reportingTo: "Head of Product Design",
    companyInfo:
      "Designify Labs is a digital design firm focused on creating impactful UI/UX solutions for startups and enterprises.",
    applicationSecurity: { captcha: true },
  },

  {
    id: "design-3",
    title: "Product Designer",
    company: "InnovaTech",
    category: "Design",
    location: "Abuja, Nigeria",
    type: "Full-time",
    salary: "₦400,000 - ₦600,000/month",
    summary: "Create and improve digital product experiences.",
    description:
      "InnovaTech seeks a Product Designer to bridge the gap between design and technology, crafting functional and beautiful user experiences.",
    responsibilities: [
      "Design digital products from concept to launch.",
      "Collaborate with developers and product managers.",
      "Prototype new design ideas and test user feedback.",
    ],
    qualifications: [
      "Bachelor’s degree in Design or related field.",
      "Proficiency in Figma and prototyping tools.",
      "Strong problem-solving mindset.",
    ],
    benefits: ["Health insurance", "Bonuses", "Career growth"],
    reportingTo: "Product Manager",
    companyInfo:
      "InnovaTech designs and builds innovative tech products that solve real-world problems with modern design practices.",
    applicationSecurity: { captcha: true },
  },

  {
    id: "design-4",
    title: "Motion Graphics Designer",
    company: "VisuaMotion Studio",
    category: "Design",
    location: "Lagos, Nigeria",
    type: "Contract",
    salary: "₦250,000 - ₦400,000/month",
    summary: "Create engaging animations and video content.",
    description:
      "VisuaMotion Studio seeks a Motion Graphics Designer to produce animated videos, intros, and promotional clips for clients.",
    responsibilities: [
      "Design 2D/3D animations and motion graphics.",
      "Edit videos with Adobe After Effects and Premiere Pro.",
      "Collaborate with creative teams for visual storytelling.",
    ],
    qualifications: [
      "Experience with motion design tools (After Effects, Blender).",
      "Strong sense of timing, animation, and composition.",
      "Creativity and attention to detail.",
    ],
    benefits: ["Flexible work hours", "Creative environment"],
    reportingTo: "Creative Director",
    companyInfo:
      "VisuaMotion Studio specializes in producing compelling motion content for ads, films, and digital platforms.",
    applicationSecurity: { captcha: true },
  },

  {
    id: "design-5",
    title: "Brand Designer",
    company: "StudioNova",
    category: "Design",
    location: "Remote (Nigeria)",
    type: "Full-time",
    salary: "₦300,000 - ₦450,000/month",
    summary: "Develop cohesive brand identities and visual systems.",
    description:
      "StudioNova is hiring a Brand Designer to craft unique visual identities that resonate with target audiences.",
    responsibilities: [
      "Design logos, typography, and brand assets.",
      "Develop brand guidelines and identity systems.",
      "Collaborate with marketing and design teams.",
    ],
    qualifications: [
      "Proficiency in Adobe Suite and Figma.",
      "Experience in branding projects.",
      "Portfolio showcasing visual identity work.",
    ],
    benefits: ["Remote flexibility", "Creative projects", "Bonuses"],
    reportingTo: "Senior Brand Strategist",
    companyInfo:
      "StudioNova helps startups and enterprises build memorable brands through strategy, design, and storytelling.",
    applicationSecurity: { captcha: true },
  },

  {
    id: "design-6",
    title: "Interior Designer",
    company: "DecoraSpaces",
    category: "Design",
    location: "Abuja, Nigeria",
    type: "Full-time",
    salary: "₦400,000 - ₦550,000/month",
    summary: "Design and decorate commercial and residential spaces.",
    description:
      "DecoraSpaces seeks an Interior Designer to conceptualize, design, and oversee interior decoration projects for clients.",
    responsibilities: [
      "Create interior design concepts and layouts.",
      "Select furniture, colors, and materials.",
      "Work with clients and contractors to execute designs.",
    ],
    qualifications: [
      "Degree in Interior Design or related field.",
      "Proficiency in AutoCAD, SketchUp, or Revit.",
      "Creative eye for aesthetics and detail.",
    ],
    benefits: ["Project bonuses", "Paid travel", "Medical plan"],
    reportingTo: "Design Director",
    companyInfo:
      "DecoraSpaces provides full-service interior design and decor solutions for modern spaces across Nigeria.",
    applicationSecurity: { captcha: true },
  },

  {
    id: "design-7",
    title: "Illustrator",
    company: "Artify Creative",
    category: "Design",
    location: "Remote (Nigeria)",
    type: "Part-time",
    salary: "₦180,000 - ₦250,000/month",
    summary: "Create digital illustrations and visual art pieces.",
    description:
      "Artify Creative seeks an Illustrator to create engaging visuals for digital content, books, and brand storytelling.",
    responsibilities: [
      "Design vector and hand-drawn illustrations.",
      "Collaborate with writers and designers.",
      "Adapt art styles to fit different projects.",
    ],
    qualifications: [
      "Proficiency in Adobe Illustrator or Procreate.",
      "Strong drawing and storytelling ability.",
      "Portfolio with previous illustration work.",
    ],
    benefits: ["Remote work", "Creative autonomy", "Flexible deadlines"],
    reportingTo: "Art Director",
    companyInfo:
      "Artify Creative is a digital art agency connecting talented illustrators with global brands and publications.",
    applicationSecurity: { captcha: true },
  },

  {
    id: "design-8",
    title: "Fashion Designer",
    company: "StyleVerse Couture",
    category: "Design",
    location: "Lagos, Nigeria",
    type: "Full-time",
    salary: "₦250,000 - ₦400,000/month",
    summary: "Design stylish and culturally inspired clothing.",
    description:
      "StyleVerse Couture is hiring a Fashion Designer to conceptualize, design, and produce creative fashion pieces for clients.",
    responsibilities: [
      "Develop fashion sketches and patterns.",
      "Oversee fabric selection and tailoring.",
      "Manage seasonal fashion collections.",
    ],
    qualifications: [
      "Degree or certification in Fashion Design.",
      "Creative and trend-aware mindset.",
      "Experience with fashion software (CLO, Illustrator).",
    ],
    benefits: ["Commission bonuses", "Showcase opportunities", "Paid leave"],
    reportingTo: "Creative Director",
    companyInfo:
      "StyleVerse Couture is a Nigerian fashion house known for blending African heritage with modern designs.",
    applicationSecurity: { captcha: true },
  },

  {
    id: "design-9",
    title: "3D Designer",
    company: "RenderSpace Studios",
    category: "Design",
    location: "Port Harcourt, Nigeria",
    type: "Full-time",
    salary: "₦350,000 - ₦500,000/month",
    summary: "Design and render 3D visuals for architecture and media.",
    description:
      "RenderSpace Studios is hiring a 3D Designer to create high-quality 3D models and animations for visualization projects.",
    responsibilities: [
      "Model and render 3D objects and environments.",
      "Collaborate with architects and creative teams.",
      "Ensure photorealistic quality in renders.",
    ],
    qualifications: [
      "Experience with Blender, Maya, or 3ds Max.",
      "Strong understanding of lighting and texturing.",
      "Portfolio of 3D design work required.",
    ],
    benefits: ["Paid projects", "Performance bonuses", "Training support"],
    reportingTo: "Project Manager",
    companyInfo:
      "RenderSpace Studios provides advanced 3D visualization for architecture, film, and advertising industries.",
    applicationSecurity: { captcha: true },
  },

  {
    id: "design-10",
    title: "Video Editor",
    company: "ClipWorks Media",
    category: "Design",
    location: "Lagos, Nigeria",
    type: "Full-time",
    salary: "₦200,000 - ₦300,000/month",
    summary: "Edit video content for social media and advertisements.",
    description:
      "ClipWorks Media seeks a skilled Video Editor to cut, color-grade, and assemble high-quality content for clients’ digital platforms.",
    responsibilities: [
      "Edit videos for YouTube, ads, and social media.",
      "Sync audio, transitions, and motion effects.",
      "Collaborate with creative and marketing teams.",
    ],
    qualifications: [
      "Proficiency in Premiere Pro or DaVinci Resolve.",
      "Creative eye for pacing and storytelling.",
      "Portfolio of past video projects.",
    ],
    benefits: ["Bonuses", "Creative workspace", "Flexible hours"],
    reportingTo: "Media Production Lead",
    companyInfo:
      "ClipWorks Media is a Lagos-based content agency specializing in digital video storytelling and social campaigns.",
    applicationSecurity: { captcha: true },
  },
];

export default jobs;
