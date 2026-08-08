export const adultCourses = [
  {
    id: 'master-cs',
    title: { ar: 'Master Computer Science', en: 'Master Computer Science' },
    description: {
        ar: 'ابنِ أساساً برمجياً قوياً يجعلك جاهزاً لسوق العمل من خلال هذه الدبلومة الشاملة.',
        en: 'Build a strong programming foundation that makes you market-ready with this comprehensive diploma.'
    },
    duration: { ar: '4 شهور', en: '4 Months' },
    modules: ['Fundamentals of Programming (C++)', 'Object Oriented Programming (OOP)', 'Algorithms', 'Data Structure', 'Problem Solving'],
    roadmap: [
        {
            title: 'C++ Programming',
            topics: ['Basics (Syntax, Variables, Data Types)', 'Control Flow (if, switch, loops)', 'Functions', 'Arrays & Strings', 'Pointers', 'Memory Management (new / delete)', 'File Handling']
        },
        {
            title: 'Object-Oriented Programming (OOP)',
            topics: ['Classes & Objects', 'Encapsulation', 'Inheritance', 'Polymorphism', 'Abstraction', 'Operator Overloading', 'Exception Handling']
        },
        {
            title: 'Data Structures',
            topics: ['Arrays (Static & Dynamic)', 'Linked Lists', 'Stack', 'Queue', 'Trees (Binary Tree, BST)', 'Heap', 'Hash Table', 'Algorithm analysis']
        },
        {
            title: 'Algorithms',
            topics: ['Sorting Algorithms (Bubble, Selection, Insertion, Merge Sort, Quick Sort)', 'Searching Algorithms', 'Recursion', 'Divide & Conquer', 'Greedy Algorithms', 'Dynamic Programming', 'Backtracking', 'Graphs (Basics)']
        },
        {
            title: 'Problem Solving',
            topics: ['Problem-Solving Techniques', 'Pattern Recognition', 'Optimization', 'Competitive Programming Basics']
        }
    ],
    features: {
        ar: ['Mentor موجود معاك طول فترة الدبلومة', 'Workshops وتطبيق عملي مستمر', 'أول محاضرة مجانية تماماً'],
        en: ['Dedicated Mentor available throughout the diploma', 'Continuous practical workshops', 'First session is completely FREE']
    },
    paymentNote: {
        ar: 'متاح حجز مقعدك بدفع ديبوزت 2000 جنيه (في الأكاديمية أو فودافون كاش أو أونلاين).',
        en: 'Reserve your seat with a 2000 EGP deposit (At Academy, Vodafone Cash, or Online).'
    },
    link: 'https://forms.gle/x6hPEDbQ1zvhEn8k8',
    driveLink: 'https://drive.google.com/drive/folders/1J22hcE-ag9XuDiNk2zsuhFqoYxH4sDSm',
    image: '/assets/courses/master-cs.png',
    iconClass: 'opt-orange',
    iconSvg: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>'
  },
  {
    id: 'flutter',
    title: { ar: 'دبلومة Flutter', en: 'Flutter Diploma' },
    description: {
        ar: 'تعلم برمجة تطبيقات الموبايل باستخدام فلاتر لتطوير تطبيقات احترافية للاندرويد والايفون معاً.',
        en: 'Learn mobile app development using Flutter to build professional cross-platform applications.'
    },
    duration: { ar: '4 شهور', en: '4 Months' },
    modules: ['Dart', 'Flutter UI & Core Concepts', 'State Management & Architecture', 'Backend & Integration', 'Practical Apps'],
    roadmap: [
        {
            title: 'Dart',
            topics: [
                'Introduction to Programming', 'Print Statement', 'User Inputs', 'Data types', 
                'Mathematical Operators (+, -, /, %)', 'Built-in Functions', 'Functions', 
                'Conditional Statements (IF Condition)', 'For loops', 'While Loops', 'Object-Oriented Programming'
            ]
        },
        {
            title: 'Flutter UI & Core Concepts',
            topics: [
                'Development Setup (Installing IDE & Plugins, Flutter Environment, Important Files)', 
                'Widgets (User Inputs, Stateless vs. Stateful Widgets, Widget Life Cycle)', 
                'UI Features (Localization, Theming, Animations, working with Media: Image Picker, Audio player)'
            ]
        },
        {
            title: 'State Management & Architecture',
            topics: [
                'Management Tools (Setting State, Future Builder, Stream Builder, Streams & Sinks)', 
                'Architectural Patterns (BLOC Pattern, Provider Pattern, MVVM, Repository Pattern, Clean Architecture)', 
                'Design Patterns (Factory, Builder, Singleton, Observer patterns)', 
                'Dependency Management & Injection'
            ]
        },
        {
            title: 'Backend & Integration',
            topics: [
                'Firebase (Firestore, Authentication, Cloud Messaging)', 
                'Device Services APIs (GPS, Google Maps, Payment integration)', 
                'Specialized Tools (QR code integration and Mobile Ads)', 
                'Caching and local storage (Hive, Shared preference)'
            ]
        },
        {
            title: 'Practical Apps',
            topics: ['News App', 'Movies App', 'Chat App', 'Islamy App', 'E-commerce App', 'Task Management App']
        }
    ],
    features: {
        ar: ['Mentor موجود معاك طول فترة الدبلومة', 'Workshops وتطبيق عملي مستمر', 'أول محاضرة مجانية تماماً'],
        en: ['Dedicated Mentor available', 'Continuous practical workshops', 'First session is FREE']
    },
    paymentNote: {
        ar: 'متاح حجز مقعدك بدفع ديبوزت 2000 جنيه (في الأكاديمية أو فودافون كاش أو أونلاين).',
        en: 'Reserve your seat with a 2000 EGP deposit (At Academy, Vodafone Cash, or Online).'
    },
    link: 'https://forms.gle/x6hPEDbQ1zvhEn8k8',
    driveLink: 'https://drive.google.com/drive/folders/1uAYa7sQjs6kkg-M42xW_ebw2J_zuPQxG',
    image: '/assets/courses/flutter.png',
    iconClass: 'opt-blue',
    iconSvg: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>'
  },
  {
    id: 'react',
    title: { ar: 'دبلومة Front Web React', en: 'Front Web React' },
    description: {
        ar: 'احترف تطوير واجهات الويب الأمامية باستخدام أحدث تقنيات React وكن مطور ويب مطلوباً في السوق.',
        en: 'Master front-end web development with React and become a highly demanded web developer.'
    },
    duration: { ar: '3 شهور', en: '3 Months' },
    modules: ['Fundamentals', 'CSS & Responsive', 'JavaScript Fundamentals', 'JavaScript Advanced & DOM', 'Work Tools', 'TypeScript', 'React Fundamentals', 'React Advanced', 'UI Libraries & Modern Stack', 'AI & Freelancing'],
    roadmap: [
        {
            title: 'Fundamentals',
            topics: [
                'How the web works', 'Client / Server', 'HTTP / HTTPS', 'HTML', 
                'Semantic HTML', 'Forms', 'Accessibility basics', 'SEO basics',
                '👉 Project phase: Landing Page + CV Website'
            ]
        },
        {
            title: 'CSS & Responsive',
            topics: [
                'CSS fundamentals', 'Box Model', 'Position', 'Display', 'Flexbox', 
                'Grid', 'Media Queries', 'Responsive Design', 'Animations', 'Transitions',
                '👉 Project phase: Business Website / Portfolio / Clone UI'
            ]
        },
        {
            title: 'JavaScript Fundamentals',
            topics: [
                'Variables', 'Data Types', 'Conditions', 'Loops', 'Functions', 
                'Arrays', 'Objects', 'Scope', 'Hoisting', 'ES6+ basics',
                '👉 Project phase: Quiz App / Calculator / Mini Games'
            ]
        },
        {
            title: 'JavaScript Advanced + DOM',
            topics: [
                'DOM manipulation', 'Events', 'Event delegation', 'LocalStorage', 
                'SessionStorage', 'Fetch API', 'Promises', 'Async / Await', 'Error handling',
                '👉 Project phase: Todo App / Weather App / Notes App'
            ]
        },
        {
            title: 'Work Tools',
            topics: [
                'Git', 'GitHub', 'Branching', 'Pull Requests', 'npm / npx', 
                'Vite', 'DevTools', 'Debugging basics',
                '👉 Project phase: Upload all projects professionally to GitHub'
            ]
        },
        {
            title: 'TypeScript',
            topics: [
                'Types', 'Interfaces', 'Generics', 'Union / Intersection', 
                'Type Narrowing', 'Type-safe components',
                '👉 Project phase: Converting a JavaScript project to TypeScript'
            ]
        },
        {
            title: 'React Fundamentals',
            topics: [
                'React basics', 'Components', 'Props', 'State', 'useState', 
                'useEffect', 'Lists', 'Conditional rendering', 'Forms',
                '👉 Project phase: Task Manager / Product List / Dashboard UI'
            ]
        },
        {
            title: 'React Advanced',
            topics: [
                'React Router', 'Context API', 'Custom Hooks', 'useReducer', 
                'API integration', 'Loading / Error states', 'Protected routes',
                '👉 Project phase: E-commerce Frontend / LMS Frontend'
            ]
        },
        {
            title: 'UI Libraries & Modern Stack',
            topics: [
                'Tailwind CSS', 'shadcn/ui', 'Zustand', 'React Hook Form', 
                'Zod / Yup', 'Axios / TanStack Query',
                '👉 Project phase: Admin Dashboard / Client Dashboard'
            ]
        },
        {
            title: 'AI + Freelancing + Portfolio',
            topics: [
                'Writing prompts', 'Debugging with AI', 'Refactoring', 'Portfolio building', 
                'GitHub profile', 'CV structure', 'Freelance proposals', 'Client communication', 'Project pricing basics'
            ]
        }
    ],
    features: {
        ar: ['Mentor موجود معاك طول فترة الدبلومة', 'Workshops وتطبيق عملي مستمر', 'أول محاضرة مجانية تماماً'],
        en: ['Dedicated Mentor available', 'Continuous practical workshops', 'First session is FREE']
    },
    paymentNote: {
        ar: 'متاح حجز مقعدك بدفع ديبوزت 2000 جنيه (في الأكاديمية أو فودافون كاش أو أونلاين).',
        en: 'Reserve your seat with a 2000 EGP deposit (At Academy, Vodafone Cash, or Online).'
    },
    link: 'https://forms.gle/x6hPEDbQ1zvhEn8k8',
    driveLink: 'https://drive.google.com/drive/folders/1f8aCZDVnuSLY8txWkntlU5UZ1qiPAnBv',
    image: '/assets/courses/react.png',
    iconClass: 'opt-orange',
    iconSvg: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>'
  },
  {
    id: 'network',
    title: { ar: 'دبلومة Network', en: 'Network Diploma' },
    description: {
        ar: 'ادخل عالم الشبكات وتعرف على كيفية بناء وتأمين الشبكات والبنية التحتية للشركات.',
        en: 'Enter the world of networking and learn how to build and secure IT infrastructure.'
    },
    duration: { ar: '3 شهور', en: '3 Months' },
    modules: ['Network Fundamentals', 'IP Services & Routing', 'Switching', 'Security'],
    roadmap: [
        {
            title: 'Network Fundamentals',
            topics: [
                'What Is a Network?', 'Network Importance', 'Network Components', 
                'Network Types', 'Network Topologies', 'Network Architectures', 
                'Network Models', 'Network Devices & Media', 'IPv4 Addressing', 
                'IPv6 Addressing', 'Subnetting', 'Cisco IOS', 'Cisco Packet Tracer Labs'
            ]
        },
        {
            title: 'IP Services & Routing',
            topics: [
                'Router', 'Telnet vs SSH', 'Redundancy Protocols', 
                'Routed vs Routing Protocols', 'Static Routing', 
                'Default Routing', 'Dynamic Routing'
            ]
        },
        {
            title: 'Switching',
            topics: [
                'Switch', 'VLANs', 'VTP — VLAN Trunking Protocol', 
                'STP vs PVST+', 'EtherChannel', 'Switch Configuration Labs'
            ]
        },
        {
            title: 'Security',
            topics: [
                'Port Security', 'ACL — Standard & Extended', 'DHCP Snooping', 
                'Dynamic ARP Inspection (DAI)', 'IPsec Site-to-Site VPN', 
                'NAT — Static vs Dynamic vs PAT', 'Types of Attacks', 'Encryption Techniques'
            ]
        }
    ],
    features: {
        ar: ['Mentor موجود معاك طول فترة الدبلومة', 'Workshops وتطبيق عملي مستمر', 'أول محاضرة مجانية تماماً'],
        en: ['Dedicated Mentor available', 'Continuous practical workshops', 'First session is FREE']
    },
    paymentNote: {
        ar: 'متاح حجز مقعدك بدفع ديبوزت 2000 جنيه (في الأكاديمية أو فودافون كاش أو أونلاين).',
        en: 'Reserve your seat with a 2000 EGP deposit (At Academy, Vodafone Cash, or Online).'
    },
    link: 'https://forms.gle/x6hPEDbQ1zvhEn8k8',
    driveLink: 'https://drive.google.com/drive/folders/198jVpUO4Vv1VuNd4feft_Q-QJGbBFNls',
    image: '/assets/courses/network.png',
    iconClass: 'opt-blue',
    iconSvg: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>'
  },
  {
    id: 'data-analysis',
    title: { ar: 'دبلومة Data Analysis', en: 'Data Analysis' },
    description: {
        ar: 'احترف تحليل البيانات واستخراج التقارير والقرارات من خلال أدوات مايكروسوفت وبايثون.',
        en: 'Master data analysis and visualization using Microsoft tools, Python, and SQL.'
    },
    duration: { ar: '3 شهور', en: '3 Months' },
    modules: ['Microsoft Excel', 'Power BI', 'SQL & DB', 'Python', 'Projects & Portfolio'],
    roadmap: [
        {
            title: 'Microsoft Excel',
            topics: [
                'Excel Fundamentals (Cells, rows, columns, structuring)',
                'Sheet Navigation & Management',
                'Professional Formatting (Conditional Formatting, Fonts, Freezing, Gridlines)',
                'Cell Referencing (Absolute vs Relative)',
                'Flash Fill',
                'Statistical Functions (SUM, COUNT, AVERAGE, MIN, MAX, RANK...)',
                'Text Functions (UPPER, LOWER, PROPER, LEFT, RIGHT, MID...)',
                'Logical Functions (IF, IFS, SWITCH, IFERROR, SUMIF...)',
                'Lookup Functions (VLOOKUP, XLOOKUP, HLOOKUP)',
                'Pivot Tables & Pivot Charts',
                'Interactive Dashboards',
                'Data Cleaning Techniques (Outliers, Duplicates, Missing values)',
                '👉 Project with Excel'
            ]
        },
        {
            title: 'Power BI',
            topics: [
                'Introduction to Power BI & BI concepts',
                'Power BI Components & Interface',
                'ETL Mindset & Connecting Data (Import vs DQ vs Live)',
                'Power Query (Transformations, Custom Columns, Splitting, M language)',
                'Data Modeling (Primary/Foreign Keys, Schema types, Cardinality)',
                'DAX Measures (Calculated columns vs Measures, Aggregations, Logical/Text functions)',
                'Visualization & Dashboard (Charts, Slicers, Drilldowns, Formatting)',
                '👉 Finalizing your dashboard'
            ]
        },
        {
            title: 'Python',
            topics: [
                'Introduction to Programming (Variables, Data types, Operators)',
                'Functions & Built-in Functions',
                'Control Flow (IF Condition, For loops, While Loops)',
                'Data Structures',
                'Getting started with Pandas & Data-frames',
                'Exploratory Data Analysis (EDA) with Pandas',
                'Data Manipulation (Filtering, Sorting, Pivoting, Grouping)',
                'Data Cleaning Techniques',
                'Exporting your data'
            ]
        },
        {
            title: 'SQL & DB',
            topics: [
                'Introduction to Databases (Relational vs Non-Relational)',
                'Tables, Rows, Columns, Primary & Foreign Keys',
                'SQL Command Categories (DQL, DML, DDL, DCL)',
                'Writing SELECT Statements & Filtering with WHERE',
                'Sorting (ORDER BY) & Aliases (AS)',
                'Aggregation (SUM, COUNT, AVG...) & GROUP BY / HAVING',
                'SQL JOINs (INNER, LEFT, RIGHT, FULL) & UNION',
                'Subqueries',
                '👉 SQL for Data Analysis Use Case'
            ]
        },
        {
            title: 'Projects & Portfolio',
            topics: [
                'HR Analytics Project',
                'Sales Analytics Project',
                'E-commerce Analytics Project',
                'Telecommunication Analytics Project',
                'ATS-Friendly CV preparation',
                'LinkedIn Optimisation (profile, connections)',
                'Tips & Tricks for your upcoming interview'
            ]
        }
    ],
    features: {
        ar: ['Mentor موجود معاك طول فترة الدبلومة', 'Workshops وتطبيق عملي مستمر', 'أول محاضرة مجانية تماماً'],
        en: ['Dedicated Mentor available', 'Continuous practical workshops', 'First session is FREE']
    },
    paymentNote: {
        ar: 'متاح حجز مقعدك بدفع ديبوزت 2000 جنيه (في الأكاديمية أو فودافون كاش أو أونلاين).',
        en: 'Reserve your seat with a 2000 EGP deposit (At Academy, Vodafone Cash, or Online).'
    },
    link: 'https://forms.gle/x6hPEDbQ1zvhEn8k8',
    driveLink: 'https://drive.google.com/drive/folders/14FDG8LyCAVph9Pkx-8AeN6oBikXq7MXe',
    image: '/assets/courses/data-analysis.png',
    iconClass: 'opt-orange',
    iconSvg: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>'
  },
  {
    id: 'cybersecurity',
    title: { ar: 'دبلومة CyberSecurity', en: 'CyberSecurity' },
    description: {
        ar: 'دبلومة متخصصة في اختبار اختراق الويب واكتشاف الثغرات الأمنية للشركات.',
        en: 'Specialized diploma in Web Penetration Testing and Bug Bounty hunting.'
    },
    duration: { ar: '5 شهور', en: '5 Months' },
    modules: ['Foundations of the Digital Realm', 'Client-Side Sorcery', 'Database & Server Conquest', 'Identity & Gateway Siege', 'The Professional Vanguard'],
    roadmap: [
        {
            title: 'Phase 1: Foundations of the Digital Realm',
            topics: [
                'Web Requests (HTTP/HTTPS, headers, methods, GET/POST/PUT/DELETE, APIs)',
                'Web Apps Intro (Architectures, web servers, databases, frameworks, OWASP Top 10)',
                'Web Proxies (Burp Suite, intercept/manipulate requests/responses)',
                'Information Gathering (WHOIS, DNS, Subdomains, Crawling, Fingerprinting)',
                'Web Fuzzing (Directory/file fuzzing, parameter fuzzing, analyzing results)'
            ]
        },
        {
            title: 'Phase 2: Client-Side Sorcery',
            topics: [
                'JavaScript Deobfuscation (Code Obfuscation, decoding, code analysis)',
                'Cross-Site Scripting (XSS) (Types, Identifying techniques)',
                'Web Attacks (HTTP Verb Tampering, Bypassing Auth, IDOR, XXE, Local File Disclosure)'
            ]
        },
        {
            title: 'Phase 3: Database & Server Conquest',
            topics: [
                'SQL Injection (Basics, MySQL, reading files, mitigation)',
                'SQLMap Essentials (Installation, attack types, HTTP requests, options, enumerating databases)',
                'Command Injections (Identifying vulnerable code, Operators, Payloads, Bypassing filters)',
                'File Upload Attacks (Validation types, detecting/exploiting, bypassing validation)',
                'Server-side Attacks (SSRF, SSTI, SSI Injection, XSLT Injection)'
            ]
        },
        {
            title: 'Phase 4: Identity & Gateway Siege',
            topics: [
                'Login Brute Forcing (Password security, Default Credentials, Wordlists, Remote Services)',
                'Broken Authentication (Auth methods, Brute-Force, Bypasses, Improper Session Handling)',
                'Attacking GraphQL (Enumeration, Info Disclosure, IDOR, Injection, DoS, Misconfigurations)',
                'API Attacks (BOLA, Broken Auth, BOPLA, SSRF, Misconfiguration, Inventory)'
            ]
        },
        {
            title: 'Phase 5: The Professional Vanguard',
            topics: [
                'Attacking Common Applications (CMS - WordPress/Drupal/Joomla, Tomcat/Jenkins, Splunk/PRTG, GitLab)',
                'Bug Bounty Hunting Process (Program structure, Bug/report submission, communication)'
            ]
        }
    ],
    features: {
        ar: ['Mentor موجود معاك طول فترة الدبلومة', 'Workshops وتطبيق عملي مستمر', 'أول محاضرة مجانية تماماً'],
        en: ['Dedicated Mentor available', 'Continuous practical workshops', 'First session is FREE']
    },
    paymentNote: {
        ar: 'متاح حجز مقعدك بدفع ديبوزت 2000 جنيه (في الأكاديمية أو فودافون كاش أو أونلاين).',
        en: 'Reserve your seat with a 2000 EGP deposit (At Academy, Vodafone Cash, or Online).'
    },
    link: 'https://forms.gle/x6hPEDbQ1zvhEn8k8',
    driveLink: 'https://drive.google.com/drive/folders/16oGDID-qcTlglNiGgFDNTo1ykiG7PuWQ',
    image: '/assets/courses/cybersecurity.png',
    iconClass: 'opt-blue',
    iconSvg: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>'
  },
  {
    id: 'ai',
    title: { ar: 'دبلومة Artificial Intelligence', en: 'Artificial Intelligence' },
    description: {
        ar: 'تعلم الذكاء الاصطناعي من الأساسيات وحتى تطبيقات التعلم العميق ونماذج اللغات الضخمة LLMs.',
        en: 'Learn AI from foundations to Deep Learning and Large Language Models (LLMs).'
    },
    duration: { ar: '4 شهور لكل Round', en: '4 Months per Round' },
    modules: ['Round 1: Foundations & ML', 'Round 2: DL, NLP & LLMs', 'Round 3: Projects & Capstone'],
    roadmap: [
        {
            title: 'Round 1: Foundations',
            topics: [
                'Programming Basics (Python syntax, Functions, Classes, File handling)',
                'Libraries & Tools (NumPy, Pandas, Matplotlib, Git, Linux basics)',
                'Math for AI: Linear Algebra (Vectors, Matrices, SVD)',
                'Math for AI: Calculus (Derivatives, Gradient descent)',
                'Math for AI: Probability & Statistics (Distributions, Bayes, Hypothesis testing)',
                'Discrete Math and Logic (Set theory, Big-O notation)'
            ]
        },
        {
            title: 'Round 1: Data Preparation and Analysis',
            topics: [
                'Data Understanding (Structured vs unstructured, Missing values)',
                'Data Preprocessing (Encoding, Scaling, Train/test split, Feature engineering)',
                'Exploratory Data Analysis (EDA, Visualizations, Correlation)'
            ]
        },
        {
            title: 'Round 1: Machine Learning',
            topics: [
                'Supervised Learning (Regression vs Classification, Loss functions)',
                'Classification (Logistic regression, KNN, SVM, Decision trees, Random forests)',
                'Linear Regression (Simple, Multiple, Regularization: Ridge/Lasso)',
                'Model Evaluation (Confusion matrix, ROC/AUC, Cross-validation)',
                'Unsupervised Learning (K-means, DBSCAN, PCA, t-SNE, Anomaly Detection)',
                'Advanced ML (Ensemble Methods, Time Series Forecasting, Optimization, SHAP/LIME)'
            ]
        },
        {
            title: 'Round 2: Practical AI Engineering',
            topics: [
                'Experimentation (Reproducibility, Logging, Tracking)',
                'MLOps (Data pipelines, Model versioning, CI/CD for ML)',
                'Deployment (Model serialization, APIs, Batch vs real-time serving, Monitoring)'
            ]
        },
        {
            title: 'Round 2: Deep Learning Foundations',
            topics: [
                'Neural Network Basics (Perceptron, Activation functions, Backpropagation, Optimizers)',
                'Core Architectures (MLP, CNNs, RNNs, LSTM and GRU)',
                'Training Neural Networks (Batch norm, Dropout, Vanishing gradients)'
            ]
        },
        {
            title: 'Round 2: Natural Language Processing (NLP)',
            topics: [
                'NLP Fundamentals (Tokenization, Stemming, TF-IDF)',
                'Classical NLP Models (Bag of words, Word embeddings, Text classification)',
                'Modern NLP (Attention mechanism, Seq2seq, Transfer learning, Sentence embeddings)'
            ]
        },
        {
            title: 'Round 2: Transformers and LLMs',
            topics: [
                'Transformer Architecture (Self-attention, Positional encoding, Encoder/Decoder)',
                'LLM Applications (Text generation, Summarization, Q&A, Code generation)',
                'Retrieval and Agents (RAG pipelines, Vector databases, Prompt engineering, Tool calling)',
                'Training and Adaptation (Pretraining, Fine-tuning, LoRA, Quantization)'
            ]
        },
        {
            title: 'Round 3: Projects & Mastery',
            topics: [
                'Beginner Projects: House price prediction, Spam classifier, Customer segmentation',
                'Intermediate Projects: Churn prediction, Recommendation system, Sentiment analysis',
                'Advanced Projects: Q&A system, Domain-specific chatbot, RAG-based assistant',
                '👉 Capstone Project: Build a full end-to-end AI system (Classical ML, Deep Learning, NLP pipeline, LLM integration, Deployment)'
            ]
        }
    ],
    features: {
        ar: ['Mentor موجود معاك طول فترة الدبلومة', 'Workshops وتطبيق عملي مستمر', 'أول محاضرة مجانية تماماً'],
        en: ['Dedicated Mentor available', 'Continuous practical workshops', 'First session is FREE']
    },
    paymentNote: {
        ar: 'خصم مميز عند حجز الدبلومة كاملة مرة واحدة. متاح الحجز بديبوزت 2000 جنيه.',
        en: 'Special discount when booking full rounds at once. Deposit: 2000 EGP.'
    },
    link: 'https://forms.gle/x6hPEDbQ1zvhEn8k8',
    driveLink: 'https://drive.google.com/drive/folders/1kq_y1ibpr25xVQSGop83Jy60IvoOJTZs?usp=sharing',
    image: '/assets/courses/ai.png',
    iconClass: 'opt-orange',
    iconSvg: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>'
  }
];

export const kidsCourses = [
  {
    id: 'scratch',
    title: { ar: 'مسار تصميم الألعاب (سكراتش)', en: 'Game Design (Scratch)' },
    description: {
        ar: 'البداية المثالية لتعلم المنطق البرمجي وصناعة الألعاب التفاعلية بطريقة بصرية سهلة وممتعة.',
        en: 'The perfect start to learn programming logic and build interactive games visually in a fun and easy way.'
    },
    duration: { ar: '9 جلسات', en: '9 Sessions' },
    link: '/kids-track/scratch.html',
    image: '/assets/courses/kids_scratch.png',
    iconSvg: '',
    iconClass: 'opt-orange'
  },
  {
    id: 'python',
    title: { ar: 'مسار بايثون', en: 'Python Track' },
    description: {
        ar: 'تعلم لغة بايثون وابنِ تطبيقات حقيقية، من الألعاب البسيطة إلى البرامج الذكية.',
        en: 'Learn Python and build real applications, from simple games to smart programs.'
    },
    duration: { ar: '12 جلسة', en: '12 Sessions' },
    link: '/kids-track/python.html',
    image: '/assets/courses/kids_python_v2.png',
    iconSvg: '',
    iconClass: 'opt-blue'
  },
  {
    id: 'pictoblox',
    title: { ar: 'مسار بيكتوبلوكس للذكاء الاصطناعي', en: 'PictoBlox AI Track' },
    description: {
        ar: 'رحلة تعتمد على المشاريع لتحويل الأطفال إلى صُنّاع لبرامج الذكاء الاصطناعي الحقيقية.',
        en: 'A project-based journey that turns kids into builders of real AI programs.'
    },
    duration: { ar: '20 جلسة', en: '20 Sessions' },
    link: '/kids-track/pictoblox.html',
    image: '/assets/courses/kids_pictoblox.png',
    iconSvg: '',
    iconClass: 'opt-orange'
  }
];
