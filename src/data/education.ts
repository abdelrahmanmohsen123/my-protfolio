import { EducationItem } from '../types';

export const educationData: EducationItem[] = [
  {
    id: 'iti',
    institution: {
      en: 'Information Technology Institute (ITI)',
      ar: 'معهد تكنولوجيا المعلومات (منحة وزارة الاتصالات ITI)',
    },
    program: {
      en: 'Fullstack Web Development using PHP (3-Month Intensive Diploma)',
      ar: 'تطوير الويب المتكامل باستخدام PHP (دبلومة مكثفة لمدة ٣ أشهر)',
    },
    credential: {
      en: 'Professional Diploma - MCIT (Mansoura Branch)',
      ar: 'دبلومة احترافية - وزارة الاتصالات وتكنولوجيا المعلومات (فرع المنصورة)',
    },
    period: '11/2022 – 02/2023',
    location: {
      en: 'Mansoura Branch, Egypt',
      ar: 'فرع المنصورة، مصر',
    },
    description: {
      en: 'Rigorous intensive software engineering scholarship focused on modern backend development, software architecture, and collaborative delivery.',
      ar: 'منحة تدريبية مكثفة واحترافية ركزت على أحدث ممارسات هندسة وتطوير الأنظمة الخلفية ومعمارية البرمجيات والعمل الجماعي.',
    },
    keyLearnings: [
      {
        en: 'Advanced PHP & OOP: SOLID principles, design patterns (MVC, Repository), and clean architecture.',
        ar: 'لغة PHP المتقدمة والبرمجة كائنية التوجه (OOP): مبادئ SOLID، أنماط التصميم (MVC)، ومعمارية الكود النظيف.',
      },
      {
        en: 'Laravel Ecosystem: RESTful API design, Eloquent ORM, middleware, service providers, authentication (Sanctum), and background queues.',
        ar: 'إطار عمل Laravel: تصميم واجهات RESTful APIs، التعامل المتقدم مع Eloquent ORM، أنظمة التوثيق والصلاحيات، والمهام الخلفية.',
      },
      {
        en: 'Database Modeling: Relational schema design (ERD), normalization, complex joins, transactions, and indexing with MySQL.',
        ar: 'قواعد البيانات: نمذجة المخططات العلائقية (ERD)، الفهرسة، تسريع الاستعلامات المعقدة، والتحكم بالمعاملات في MySQL.',
      },
      {
        en: 'Frontend & Tools: Responsive Blade templates, JavaScript (ES6+), jQuery, Bootstrap, and version control with Git & GitHub.',
        ar: 'الواجهات وأدوات التطوير: بناء قوالب Blade التفاعلية، جافاسكريبت، Bootstrap، واختبار الـ APIs وتتبع الإصدارات عبر Git.',
      },
    ],
  },
  {
    id: 'nti',
    institution: {
      en: 'National Telecommunication Institute (NTI)',
      ar: 'المعهد القومي للاتصالات (منحة NTI)',
    },
    program: {
      en: 'Web Design & Backend PHP Laravel & Node.js (4-Month Diploma)',
      ar: 'تصميم الويب والباك إند PHP Laravel و Node.js (دبلومة ٤ أشهر)',
    },
    credential: {
      en: 'Specialized Diploma & Career Development',
      ar: 'دبلومة متخصصة وتطوير مهني',
    },
    period: '01/2021 – 05/2021',
    location: {
      en: 'Online / Egypt',
      ar: 'أونلاين، مصر',
    },
    description: {
      en: 'Specialized foundation program covering responsive client interfaces, server-side development, and database connectivity.',
      ar: 'برنامج تدريبي متخصص ركز على بناء الواجهات المتجاوبة، والبرمجة من جانب الخادم، وربط وتخزين البيانات.',
    },
    keyLearnings: [
      {
        en: 'Responsive Web Design: Semantic HTML5, CSS3, Flexbox, Grid, and mobile-first layouts with Bootstrap.',
        ar: 'تصميم الويب المتجاوب: بناء الواجهات بهيكلية HTML5 ومعايير CSS3 وتطبيق أسلوب Mobile-first باستخدام Bootstrap.',
      },
      {
        en: 'Backend Fundamentals: Server scripting with PHP, introduction to Laravel framework, routing, and controller architecture.',
        ar: 'أساسيات الباك إند: البرمجة السيرفرية بـ PHP، مقدمة شاملة لإطار Laravel، معمارية المتحكمات والتوجيه.',
      },
      {
        en: 'Node.js Basics: Introduction to asynchronous JavaScript, npm ecosystem, and building lightweight web servers.',
        ar: 'أساسيات Node.js: فهم البرمجة غير المتزامنة في جافاسكريبت، إدارة الحزم عبر npm، وبناء سيرفرات ويب خفيفة.',
      },
      {
        en: 'Database Integration: Relational CRUD operations with MySQL and data validation.',
        ar: 'تكامل قواعد البيانات: عمليات الإضافة والتعديل والاسترجاع في MySQL والتحقق من صحة المدخلات.',
      },
    ],
  },
  {
    id: 'bachelor',
    institution: {
      en: 'Higher Engineering Institute of Science and Technology',
      ar: 'المعهد العالي للهندسة والتكنولوجيا',
    },
    program: {
      en: 'Bachelor of Science (B.Sc.) in Engineering — Civil Department',
      ar: 'بكالوريوس الهندسة — قسم الهندسة المدنية',
    },
    credential: {
      en: 'Bachelor of Science in Engineering',
      ar: 'درجة البكالوريوس في الهندسة',
    },
    period: '2013 – 2018',
    location: {
      en: 'New Damietta, Egypt',
      ar: 'دمياط الجديدة، مصر',
    },
    description: {
      en: 'Five-year engineering curriculum cultivating rigorous analytical problem solving, mathematical foundations, and structured systems thinking.',
      ar: 'دراسة هندسية لمدة خمس سنوات رسخت مهارات التفكير الهندسي المنظم، التحليل الرياضي، وإدارة المشروعات المعقدة.',
    },
    keyLearnings: [
      {
        en: 'Analytical Problem Solving: Deconstructing intricate multidisciplinary problems into structured, verifiable logic.',
        ar: 'التفكير التحليلي والمنهجي: تفكيك المشكلات المعقدة إلى عناصر منطقية منظمة وقابلة للحل والتحقق.',
      },
      {
        en: 'Mathematical Rigor: Advanced applied calculus, numerical analysis, and structural mechanics underpinning software algorithms.',
        ar: 'المنهجية الرياضية: الرياضيات التطبيقية والتحليل العددي التي تشكل أساس التفكير الخوارزمي البرمجي.',
      },
      {
        en: 'Project Planning & Execution: Estimating workloads, workflow scheduling, quality control, and cross-discipline collaboration.',
        ar: 'إدارة وتخطيط المشروعات: تقدير أحجام العمل، جدولة المهام، ضبط الجودة، وإدارة المراحل التنفيذية بدقة.',
      },
    ],
  },
];
