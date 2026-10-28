import { ATSCvData, CvTrack, Language } from '../types';

export const cvDataStore: Record<CvTrack, Record<Language, ATSCvData>> = {
  fullstack: {
    en: {
      title: {
        en: 'Abdelrahman Mohsen | Full Stack Software Engineer',
        ar: 'عبدالرحمن محسن | مهندس برمجيات فل ستاك',
      },
      summary: {
        en: 'Full Stack Software Engineer with deep backend specialization in PHP, Laravel framework, RESTful API architecture, and MySQL database optimization. Substantial experience with verified frontend development using JavaScript (ES6+), jQuery, Laravel Blade, HTML5, CSS3, and Bootstrap. Demonstrated track record of significant end-to-end development ownership across production platforms in logistics, sports data, financial markets, and services marketplaces. Proven ability to architect resilient data models, design clean API contracts for mobile clients, build responsive administrative dashboards, and deploy production systems on Linux environments.',
        ar: 'مهندس برمجيات فل ستاك مع تخصص عميق في هندسة وتطوير الأنظمة الخلفية بلغة PHP وإطار عمل Laravel، وتصميم واجهات RESTful APIs وقواعد بيانات MySQL. خبرة عملية مثبتة في بناء الواجهات الأمامية باستخدام JavaScript و jQuery وقوالب Laravel Blade و HTML5 و CSS3 و Bootstrap. سجل حافل بالإشراف والمساهمة في دورة التطوير الكاملة لعدة منصات إنتاجية حية في مجالات النقل والخدمات اللوجستية، والرياضة، والتكنولوجيا المالية، والأسواق الخدمية.',
      },
      skillsGroups: [
        {
          title: { en: 'Backend Engineering', ar: 'هندسة الباك إند' },
          skills: [
            'PHP',
            'Laravel Framework',
            'RESTful API Design & Architecture',
            'Authentication & RBAC (Sanctum/Custom)',
            'Complex Business Logic',
            'Background Jobs & Asynchronous Queues',
            'Eloquent ORM',
          ],
        },
        {
          title: { en: 'Frontend Engineering', ar: 'تطوير الواجهات الأمامية' },
          skills: [
            'JavaScript (ES6+)',
            'jQuery',
            'Laravel Blade',
            'HTML5',
            'CSS3',
            'Bootstrap (v4/v5)',
            'Responsive Design',
            'DOM Manipulation',
          ],
        },
        {
          title: { en: 'Databases & Caching', ar: 'قواعد البيانات والتخزين المؤقت' },
          skills: [
            'MySQL',
            'Relational Schema Design',
            'SQL Query Optimization',
            'Database Indexing',
            'Redis Caching',
          ],
        },
        {
          title: { en: 'Infrastructure & Tools', ar: 'الخوادم والأدوات' },
          skills: [
            'Git',
            'GitHub',
            'Bitbucket',
            'Postman',
            'Linux (Admin 1 / Bash)',
            'Apache / Nginx',
            'Docker Fundamentals',
          ],
        },
        {
          title: { en: 'Currently Expanding Skills', ar: 'مجالات التوسع الحالية' },
          skills: [
            'Advanced Linux Administration',
            'DevOps & CI/CD Pipelines',
            'AWS Fundamentals',
            'Data Analysis',
          ],
        },
      ],
      experience: [
        {
          company: 'Arab Apps',
          role: { en: 'Full Stack Software Engineer / Backend Developer', ar: 'مهندس برمجيات فل ستاك / مطور باك إند' },
          period: { en: '03/2023 – Present', ar: '03/2023 – حتى الآن' },
          location: { en: 'Egypt (On-site)', ar: 'مصر (مقر الشركة)' },
          bullets: [
            {
              en: 'Exercised significant end-to-end development ownership across flagship production systems including FastEx, DotScore, Mangoul, Asaar Plus, and Gold Fawry.',
              ar: 'المساهمة المحورية في دورة التطوير البرمجية الكاملة للأنظمة الإنتاجية بالشركة ومنها FastEx و DotScore و Mangoul و Asaar Plus و Gold Fawry.',
            },
            {
              en: 'Architected robust PHP/Laravel backend services, asynchronous queue workers, and RESTful APIs consumed by mobile applications and client portals.',
              ar: 'بناء وتطوير خدمات الباك إند بلغة PHP وإطار Laravel ومهام المعالجة الخلفية، وتصميم واجهات RESTful APIs لتطبيقات الجوال والويب.',
            },
            {
              en: 'Engineered responsive administrative dashboards and client interfaces using Laravel Blade, JavaScript, jQuery, and Bootstrap for real-time fleet operations and order workflows.',
              ar: 'تطوير لوحات تحكم إدارية وشاشات تشغيلية تفاعلية باستخدام Laravel Blade و JavaScript و jQuery و Bootstrap لمتابعة أساطيل التوصيل والطلبات.',
            },
            {
              en: 'Designed and optimized relational MySQL database schemas, indexing strategies, and caching layers to maintain high throughput under peak traffic loads.',
              ar: 'تصميم وهيكلة جداول MySQL وتحسين الفهارس واستعلامات البحث واستراتيجيات التخزين المؤقت لضمان سرعة الاستجابة تحت الضغط العالي.',
            },
            {
              en: 'Collaborated with cross-functional mobile engineers (Flutter/iOS/Android) and product managers to define clear API contracts and accelerate product releases.',
              ar: 'التعاون المستمر مع مطوري تطبيقات الجوال ومديري المنتجات لتوثيق واجهات الـ APIs وتوحيد عقود البيانات وسرعة إطلاق الميزات.',
            },
          ],
        },
        {
          company: 'CyperFace',
          role: { en: 'Fullstack Developer', ar: 'مطور برمجيات فل ستاك' },
          period: { en: '05/2021 – 06/2022', ar: '05/2021 – 06/2022' },
          location: { en: 'Remote', ar: 'عن بُعد' },
          bullets: [
            {
              en: 'Developed dynamic web applications, implementing both backend business logic with PHP & Laravel and frontend user interfaces with JavaScript, jQuery, HTML5, and Bootstrap.',
              ar: 'تطوير مواقع وتطبيقات ويب متكاملة، تشمل منطق العمل البرمجي بالباك إند (PHP & Laravel) والواجهات التفاعلية بـ (JavaScript, jQuery, HTML5, Bootstrap).',
            },
            {
              en: 'Constructed relational database models in MySQL, wrote database migrations, and implemented secure role-based authentication flows.',
              ar: 'تصميم نماذج قواعد البيانات العلائقية في MySQL وكتابة المهاجرات (Migrations) وتطبيق أنظمة تسجيل الدخول وإدارة الصلاحيات.',
            },
            {
              en: 'Integrated third-party APIs, webhooks, and payment notifications with defensive error handling and data validation.',
              ar: 'ربط واجهات برمجة التطبيقات والخدمات الخارجية والتحقق من صحة المدخلات ومعالجة الأخطاء.',
            },
            {
              en: 'Managed source code versioning using Git/Bitbucket across distributed team sprint cycles.',
              ar: 'إدارة وتتبع الإصدارات البرمجية باستخدام Git و Bitbucket ضمن دورات عمل جماعية منظمة.',
            },
          ],
        },
      ],
      featuredProjects: [
        {
          name: 'FastEx (https://fastex.delivery/)',
          url: 'https://fastex.delivery/',
          description: {
            en: 'On-demand logistics & parcel delivery platform connecting customers and fleet drivers.',
            ar: 'منصة لوجستية وتوصيل طرود عند الطلب تربط العملاء بسائقي الأساطيل.',
          },
          bullets: [
            {
              en: 'Architected order dispatch engine, driver real-time bidding algorithms, geo-distance calculation, and internal wallet ledger system.',
              ar: 'بناء محرك توزيع الشحنات، ونظام مزايدة السائقين اللحظي، وحساب المسافات الجغرافية، ونظام المحافظ الرقمية الداخلية.',
            },
            {
              en: 'Developed administrative operations dashboard with Laravel Blade, JavaScript, and Bootstrap for fleet management.',
              ar: 'تطوير لوحة تحكم تشغيلية وإدارية باستخدام Laravel Blade و JavaScript و Bootstrap لمتابعة السائقين والطلبات.',
            },
          ],
        },
        {
          name: 'DotScore (https://dotscore.net/)',
          url: 'https://dotscore.net/',
          description: {
            en: 'High-traffic live football scores, standings, and match statistics platform.',
            ar: 'منصة رياضية لنتائج مباريات كرة القدم اللحظية وجداول البطولات والإحصائيات.',
          },
          bullets: [
            {
              en: 'Designed high-frequency RESTful endpoints delivering live match events, line-ups, and standings under heavy traffic with Redis caching.',
              ar: 'تصميم واجهات برمجية عالية التردد لبث أحداث المباريات المباشرة والتشكيلات مع تطبيق التخزين المؤقت لاستيعاب أوقات الذروة.',
            },
            {
              en: 'Built interactive match-center components and dynamic status updates using JavaScript, jQuery, and Bootstrap.',
              ar: 'تطوير شاشات مركز المباريات التفاعلي وتحديثات الحالات اللحظية باستخدام JavaScript و jQuery و Bootstrap.',
            },
          ],
        },
        {
          name: 'Mangoul (https://mangoul2.com/)',
          url: 'https://mangoul2.com/',
          description: {
            en: 'Two-sided moving and logistics services marketplace operating in Saudi Arabia.',
            ar: 'سوق إلكتروني سعودي لخدمات نقل الأثاث والشحن يربط العملاء بمزودي الخدمة.',
          },
          bullets: [
            {
              en: 'Built quotation lifecycle, role-based access control (RBAC), and verified provider dispatch workflows.',
              ar: 'بناء دورة حياة طلبات عروض الأسعار، وهيكل الصلاحيات المتقدم (RBAC)، ومسارات إدارة المزودين المعتمدين.',
            },
            {
              en: 'Engineered comprehensive administrative dashboards and quotation comparison views with Blade and JavaScript.',
              ar: 'تطوير لوحات إدارة متكاملة ومقارنات عروض الأسعار باستخدام Blade و JavaScript.',
            },
          ],
        },
      ],
      education: [
        {
          institution: { en: 'Information Technology Institute (ITI)', ar: 'معهد تكنولوجيا المعلومات (ITI)' },
          degree: { en: 'Professional Diploma - Fullstack Web Development using PHP (3 Months)', ar: 'دبلومة احترافية - تطوير الويب المتكامل باستخدام PHP (٣ أشهر)' },
          period: '11/2022 – 02/2023',
          details: { en: 'Ministry of Communications and Information Technology (MCIT), Mansoura Branch', ar: 'وزارة الاتصالات وتكنولوجيا المعلومات (فرع المنصورة)' },
        },
        {
          institution: { en: 'National Telecommunication Institute (NTI)', ar: 'المعهد القومي للاتصالات (NTI)' },
          degree: { en: 'Specialized Diploma - Web Design & Backend PHP Laravel & Node.js (4 Months)', ar: 'دبلومة متخصصة - تصميم الويب والباك إند PHP Laravel و Node.js (٤ أشهر)' },
          period: '01/2021 – 05/2021',
          details: { en: 'National Telecommunication Institute, Online System', ar: 'المعهد القومي للاتصالات، نظام التعليم عن بعد' },
        },
        {
          institution: { en: 'Higher Engineering Institute of Science and Technology', ar: 'المعهد العالي للهندسة والتكنولوجيا' },
          degree: { en: 'Bachelor of Science (B.Sc.) in Engineering (Civil Department)', ar: 'بكالوريوس الهندسة (قسم الهندسة المدنية)' },
          period: '2013 – 2018',
          details: { en: 'New Damietta, Egypt', ar: 'دمياط الجديدة، مصر' },
        },
      ],
    },
    ar: {
      title: {
        en: 'Abdelrahman Mohsen | Full Stack Software Engineer',
        ar: 'عبدالرحمن محسن | مهندس برمجيات فل ستاك',
      },
      summary: {
        en: '',
        ar: 'مهندس برمجيات فل ستاك متمرس مع تخصص عميق في هندسة الأنظمة الخلفية (Backend) بلغة PHP وإطار عمل Laravel، وتصميم واجهات RESTful APIs وقواعد بيانات MySQL. أمتلك خبرة مهنية مثبتة في تطوير الواجهات الأمامية باستخدام JavaScript (ES6+)، و jQuery، وقوالب Laravel Blade، و HTML5، و CSS3، و Bootstrap. أمتلك سجلاً حافلاً بالمساهمة والإشراف المباشر على دورة التطوير البرمجي الكاملة لعدة منصات إنتاجية حية في مجالات الخدمات اللوجستية والنقل، التكنولوجيا المالية، الرياضة، والأسواق الخدمية. متمكن من نمذجة البيانات العلائقية، وتأمين الأنظمة وتطبيق الصلاحيات، وربط الخدمات بتطبيقات الجوال، ونشر الأنظمة على بيئات خوادم Linux.',
      },
      skillsGroups: [
        {
          title: { en: 'Backend Engineering', ar: 'هندسة الباك إند (تخصص رئيسي)' },
          skills: [
            'PHP',
            'Laravel Framework',
            'RESTful API Architecture',
            'Authentication & RBAC (Sanctum)',
            'Complex Business Logic',
            'Queues & Scheduled Jobs',
            'Eloquent ORM',
          ],
        },
        {
          title: { en: 'Frontend Engineering', ar: 'تطوير الواجهات الأمامية (خبرة عملية مثبتة)' },
          skills: [
            'JavaScript (ES6+)',
            'jQuery',
            'Laravel Blade',
            'HTML5 Semantic',
            'CSS3',
            'Bootstrap (v4/v5)',
            'Responsive UI/UX',
          ],
        },
        {
          title: { en: 'Databases & Caching', ar: 'قواعد البيانات والتخزين المؤقت' },
          skills: [
            'MySQL',
            'Relational Schema Design',
            'SQL Optimization & Indexing',
            'Redis Caching',
          ],
        },
        {
          title: { en: 'Infrastructure & Tools', ar: 'الخوادم والأدوات التقنية' },
          skills: [
            'Git',
            'GitHub',
            'Bitbucket',
            'Postman',
            'Linux (Admin 1 / Bash)',
            'Apache / Nginx',
            'Docker Fundamentals',
          ],
        },
        {
          title: { en: 'Currently Expanding Skills', ar: 'مجالات التوسع والتعلم المستمر' },
          skills: [
            'Advanced Linux Administration',
            'DevOps & CI/CD Pipelines',
            'AWS Fundamentals',
            'Data Analysis',
          ],
        },
      ],
      experience: [
        {
          company: 'شركة عرب آبس (Arab Apps)',
          role: { en: 'Full Stack Software Engineer / Backend Developer', ar: 'مهندس برمجيات فل ستاك / مطور باك إند' },
          period: { en: '03/2023 – Present', ar: '03/2023 – حتى الآن' },
          location: { en: 'Egypt (On-site)', ar: 'مصر (مقر الشركة)' },
          bullets: [
            {
              en: '',
              ar: 'المساهمة المحورية في دورة التطوير البرمجية الكاملة للأنظمة الإنتاجية بالشركة ومنها FastEx و DotScore و Mangoul و Asaar Plus و Gold Fawry.',
            },
            {
              en: '',
              ar: 'تصميم وبناء خدمات الباك إند بلغة PHP وإطار عمل Laravel، وتطوير واجهات برمجة التطبيقات RESTful APIs لتغذية تطبيقات الهواتف الذكية ومواقع الويب.',
            },
            {
              en: '',
              ar: 'تطوير لوحات تحكم إدارية وتشغيلية متكاملة باستخدام Laravel Blade و JavaScript و jQuery و Bootstrap لإدارة ومتابعة العمليات والأساطيل.',
            },
            {
              en: '',
              ar: 'تصميم وهيكلة جداول MySQL العلائقية، وتحسين الاستعلامات والفهارس واستراتيجيات الـ Caching لضمان سرعة الاستجابة تحت الضغط العالي.',
            },
            {
              en: '',
              ar: 'التعاون المستمر مع مهندسي تطبيقات الجوال (Flutter/iOS/Android) ومديري المنتجات لتوثيق وتنسيق الـ APIs وتسريع دورة إطلاق التحديثات.',
            },
          ],
        },
        {
          company: 'شركة سايبر فيس (CyperFace)',
          role: { en: 'Fullstack Developer', ar: 'مطور برمجيات فل ستاك' },
          period: { en: '05/2021 – 06/2022', ar: '05/2021 – 06/2022' },
          location: { en: 'Remote', ar: 'عن بُعد' },
          bullets: [
            {
              en: '',
              ar: 'تطوير مواقع وتطبيقات ويب متكاملة، تشمل المنطق البرمجي للأنظمة الخلفية (PHP & Laravel) والواجهات التفاعلية (JavaScript, jQuery, HTML5, Bootstrap).',
            },
            {
              en: '',
              ar: 'تصميم نماذج قواعد البيانات العلائقية في MySQL وكتابة المهاجرات (Migrations) وتطبيق أنظمة تسجيل الدخول وإدارة الصلاحيات.',
            },
            {
              en: '',
              ar: 'ربط واجهات برمجة التطبيقات الخارجية وبوابات الدفع الإلكتروني والتحقق من صحة المدخلات ومعالجة الأخطاء.',
            },
            {
              en: '',
              ar: 'إدارة الإصدارات البرمجية عبر Git ومستودعات Bitbucket ضمن دورات عمل برمجية منظمة.',
            },
          ],
        },
      ],
      featuredProjects: [
        {
          name: 'FastEx (https://fastex.delivery/)',
          url: 'https://fastex.delivery/',
          description: {
            en: '',
            ar: 'منصة لوجستية وتوصيل طرود عند الطلب تربط العملاء بسائقي الأساطيل.',
          },
          bullets: [
            {
              en: '',
              ar: 'بناء محرك توزيع الشحنات، ونظام مزايدة السائقين اللحظي، وحساب المسافات الجغرافية، ونظام المحافظ الرقمية الداخلية.',
            },
            {
              en: '',
              ar: 'تطوير لوحة تحكم تشغيلية وإدارية باستخدام Laravel Blade و JavaScript و Bootstrap لمتابعة السائقين والطلبات.',
            },
          ],
        },
        {
          name: 'DotScore (https://dotscore.net/)',
          url: 'https://dotscore.net/',
          description: {
            en: '',
            ar: 'منصة رياضية لنتائج مباريات كرة القدم اللحظية وجداول البطولات والإحصائيات.',
          },
          bullets: [
            {
              en: '',
              ar: 'تصميم واجهات برمجية عالية التردد لبث أحداث المباريات المباشرة والتشكيلات مع تطبيق التخزين المؤقت لاستيعاب أوقات الذروة.',
            },
            {
              en: '',
              ar: 'تطوير شاشات مركز المباريات التفاعلي وتحديثات الحالات اللحظية باستخدام JavaScript و jQuery و Bootstrap.',
            },
          ],
        },
        {
          name: 'Mangoul (https://mangoul2.com/)',
          url: 'https://mangoul2.com/',
          description: {
            en: '',
            ar: 'سوق إلكتروني سعودي لخدمات نقل الأثاث والشحن يربط العملاء بمزودي الخدمة.',
          },
          bullets: [
            {
              en: '',
              ar: 'بناء دورة حياة طلبات عروض الأسعار، وهيكل الصلاحيات المتقدم (RBAC)، ومسارات إدارة المزودين المعتمدين.',
            },
            {
              en: '',
              ar: 'تطوير لوحات إدارة متكاملة ومقارنات عروض الأسعار باستخدام Blade و JavaScript.',
            },
          ],
        },
      ],
      education: [
        {
          institution: { en: '', ar: 'معهد تكنولوجيا المعلومات (ITI)' },
          degree: { en: '', ar: 'دبلومة احترافية - تطوير الويب المتكامل باستخدام PHP (٣ أشهر)' },
          period: '11/2022 – 02/2023',
          details: { en: '', ar: 'وزارة الاتصالات وتكنولوجيا المعلومات (فرع المنصورة)' },
        },
        {
          institution: { en: '', ar: 'المعهد القومي للاتصالات (NTI)' },
          degree: { en: '', ar: 'دبلومة متخصصة - تصميم الويب والباك إند PHP Laravel و Node.js (٤ أشهر)' },
          period: '01/2021 – 05/2021',
          details: { en: '', ar: 'المعهد القومي للاتصالات، نظام التعليم عن بعد' },
        },
        {
          institution: { en: '', ar: 'المعهد العالي للهندسة والتكنولوجيا' },
          degree: { en: '', ar: 'بكالوريوس الهندسة (قسم الهندسة المدنية)' },
          period: '2013 – 2018',
          details: { en: '', ar: 'دمياط الجديدة، مصر' },
        },
      ],
    },
  },
  backend: {
    en: {
      title: {
        en: 'Abdelrahman Mohsen | Backend Software Engineer',
        ar: 'عبدالرحمن محسن | مهندس برمجيات باك إند',
      },
      summary: {
        en: 'Backend Software Engineer specializing in PHP, Laravel framework, RESTful API architecture, and MySQL database optimization. Extensive experience architecting high-throughput server-side systems, designing secure authorization protocols, managing background jobs and queues, and optimizing complex database queries. Demonstrated track record of significant end-to-end development ownership across commercial production platforms in logistics, live sports data, financial markets, and two-sided marketplaces. Hands-on experience with Linux server deployment, Apache/Nginx web servers, and Docker containerization fundamentals.',
        ar: 'مهندس برمجيات باك إند متخصص في لغة PHP، وإطار عمل Laravel، وتصميم معماريات واجهات البرمجة RESTful APIs، وتحسين أداء قواعد بيانات MySQL. خبرة واسعة في بناء الأنظمة الخلفية عالية الحمل، وتأمين الصلاحيات، وإدارة المهام المجدولة وقوائم الانتظار، وتحسين استعلامات قواعد البيانات المعقدة. سجل حافل بالإشراف والمساهمة في دورة التطوير الكاملة للأنظمة الإنتاجية في مجالات النقل واللوجستيات، الرياضة، والأسواق المالية والخدمية.',
      },
      skillsGroups: [
        {
          title: { en: 'Backend Engineering', ar: 'هندسة الباك إند' },
          skills: [
            'PHP',
            'Laravel Framework',
            'RESTful API Design & Architecture',
            'Authentication & RBAC (Sanctum/Passport)',
            'Complex Business Logic & Architecture',
            'Background Jobs & Asynchronous Queues',
            'Eloquent ORM & Performance Tuning',
            'Payment & Webhook Integrations',
          ],
        },
        {
          title: { en: 'Databases & Performance', ar: 'قواعد البيانات والأداء' },
          skills: [
            'MySQL',
            'Relational Schema Modeling (ERD)',
            'SQL Query Optimization & Profiling',
            'Indexing & Foreign Key Integrity',
            'Redis / In-Memory Caching',
          ],
        },
        {
          title: { en: 'Frontend & Dashboards (Hands-on)', ar: 'الواجهات ولوحات التحكم' },
          skills: [
            'JavaScript (ES6+)',
            'jQuery',
            'Laravel Blade',
            'Bootstrap (v4/v5)',
            'HTML5 / CSS3',
          ],
        },
        {
          title: { en: 'Infrastructure & Tools', ar: 'الخوادم والأدوات' },
          skills: [
            'Git',
            'GitHub',
            'Bitbucket',
            'Postman (Collections & Testing)',
            'Linux (Admin 1 / Bash)',
            'Nginx & Apache Server Setup',
            'Docker Fundamentals',
          ],
        },
        {
          title: { en: 'Currently Expanding Skills', ar: 'مجالات التوسع والتعلم المستمر' },
          skills: [
            'Advanced Linux Administration',
            'DevOps Engineering & CI/CD',
            'AWS Fundamentals',
            'Data Analysis',
          ],
        },
      ],
      experience: [
        {
          company: 'Arab Apps',
          role: { en: 'Backend Developer', ar: 'مطور باك إند' },
          period: { en: '03/2023 – Present', ar: '03/2023 – حتى الآن' },
          location: { en: 'Egypt (On-site)', ar: 'مصر (مقر الشركة)' },
          bullets: [
            {
              en: 'Exercised significant end-to-end development ownership across backend engines, RESTful APIs, and administrative control panels for DotScore, FastEx, Mangoul, Asaar Plus, and Gold Fawry.',
              ar: 'إدارة وتطوير المنظومات الخلفية وواجهات الـ APIs ولوحات التحكم الإدارية لمشاريع كبرى تشمل DotScore و FastEx و Mangoul و Asaar Plus و Gold Fawry.',
            },
            {
              en: 'Architected and implemented high-volume RESTful APIs serving mobile applications with strict authentication, input validation, and optimized JSON payloads.',
              ar: 'تصميم وبناء واجهات RESTful APIs عالية الأداء لخدمة تطبيقات الجوال مع تطبيق التوثيق الصارم والتحقق من المدخلات وسرعة الاستجابة.',
            },
            {
              en: 'Designed and tuned complex MySQL database schemas, composite indexes, and caching strategies to maintain low query latency during high concurrency events.',
              ar: 'تصميم وتحسين جداول MySQL والفهارس المركبة وطبقات الـ Caching لضمان سرعة معالجة البيانات أثناء طفرات التصفح المتزامنة.',
            },
            {
              en: 'Implemented critical domain logic: geospatial driver dispatch, real-time bidding workflows, live match event pipelines, internal wallet ledgers, and automated financial cron jobs.',
              ar: 'تنفيذ منطق الأعمال المعقد: توزيع السائقين جغرافياً، مزايدات الشحن، تدفق أحداث المباريات الحية، المحافظ الرقمية، ومهام جدولة البيانات المالية.',
            },
            {
              en: 'Partnered with frontend and mobile developers to structure robust API schemas and streamline backend deployment procedures.',
              ar: 'التنسيق التقني مع مهندسي الواجهات وتطبيقات الجوال لتوثيق وتوحيد هياكل الـ APIs وضمان سلاسة النشر البرمجي.',
            },
          ],
        },
        {
          company: 'CyperFace',
          role: { en: 'Fullstack / Backend Developer', ar: 'مطور برمجيات' },
          period: { en: '05/2021 – 06/2022', ar: '05/2021 – 06/2022' },
          location: { en: 'Remote', ar: 'عن بُعد' },
          bullets: [
            {
              en: 'Built web application backend architectures and database models utilizing PHP, Laravel, and MySQL.',
              ar: 'بناء المنطق البرمجي للأنظمة الخلفية ونماذج قواعد البيانات باستخدام PHP و Laravel و MySQL.',
            },
            {
              en: 'Developed user authentication systems, role management, and integrated external APIs and payment gateways.',
              ar: 'تطوير أنظمة توثيق المستخدمين، وإدارة الصلاحيات، وربط واجهات برمجة التطبيقات الخارجية وبوابات الدفع.',
            },
            {
              en: 'Collaborated on frontend integration using Blade, JavaScript, and Bootstrap for dynamic client views.',
              ar: 'المساهمة في بناء الواجهات التفاعلية باستخدام Blade و JavaScript و Bootstrap لربطها بالأنظمة الخلفية.',
            },
            {
              en: 'Maintained version control with Git/Bitbucket and resolved system defects in production.',
              ar: 'إدارة وتتبع الإصدارات البرمجية عبر Git ومستودعات Bitbucket ومعالجة الملاحظات البرمجية.',
            },
          ],
        },
      ],
      featuredProjects: [
        {
          name: 'DotScore (https://dotscore.net/)',
          url: 'https://dotscore.net/',
          description: {
            en: 'High-traffic football statistics and live score platform.',
            ar: 'منصة رياضية لنتائج مباريات كرة القدم اللحظية والإحصائيات.',
          },
          bullets: [
            {
              en: 'Engineered high-frequency live match event endpoints, automated external data synchronization jobs, and Redis caching layers.',
              ar: 'هندسة واجهات بث أحداث المباريات عالية التردد، ومهام مزامنة البيانات الخارجية، وطبقات التخزين المؤقت عبر Redis.',
            },
            {
              en: 'Structured optimized query routines handling rapid live score updates and league standings recalculations.',
              ar: 'تصميم استعلامات سريعة لتحديث نتائج المباريات اللحظية وإعادة حساب جداول ترتيب الدوريات بكفاءة.',
            },
          ],
        },
        {
          name: 'FastEx (https://fastex.delivery/)',
          url: 'https://fastex.delivery/',
          description: {
            en: 'Transportation and logistics delivery platform.',
            ar: 'منصة نقل وخدمات لوجستية وتوصيل طرود.',
          },
          bullets: [
            {
              en: 'Architected ride dispatching workflows, driver offer bidding algorithms, location-based services, and transactional wallet ledgers.',
              ar: 'بناء دورة إسناد الطلبات، وخوارزميات تقديم ومزايدة عروض السائقين، والخدمات الجغرافية، ونظام قيود المحافظ المالية.',
            },
            {
              en: 'Deployed secure RESTful APIs consumed by client and driver mobile applications.',
              ar: 'نشر واجهات RESTful APIs موثقة تخدم تطبيقات الجوال للعملاء والسائقين.',
            },
          ],
        },
        {
          name: 'Mangoul (https://mangoul2.com/)',
          url: 'https://mangoul2.com/',
          description: {
            en: 'Saudi Arabia moving and transportation marketplace.',
            ar: 'سوق إلكتروني لخدمات نقل الأثاث والشحن في السعودية.',
          },
          bullets: [
            {
              en: 'Engineered two-sided marketplace architecture, quotation bidding lifecycle, and role-based access control (RBAC).',
              ar: 'هندسة معمارية السوق ثنائي الأطراف، ودورة عروض الأسعار، وتطبيق نظام الصلاحيات المتقدم (RBAC).',
            },
            {
              en: 'Built admin dispute resolution mechanisms and audit logging pipelines.',
              ar: 'بناء أنظمة إدارة النزاعات الإدارية وسجلات التدقيق والمتابعة.',
            },
          ],
        },
      ],
      education: [
        {
          institution: { en: 'Information Technology Institute (ITI)', ar: 'معهد تكنولوجيا المعلومات (ITI)' },
          degree: { en: 'Professional Diploma - Fullstack Web Development using PHP (3 Months)', ar: 'دبلومة احترافية - تطوير الويب المتكامل باستخدام PHP (٣ أشهر)' },
          period: '11/2022 – 02/2023',
          details: { en: 'Ministry of Communications and Information Technology (MCIT), Mansoura Branch', ar: 'وزارة الاتصالات وتكنولوجيا المعلومات (فرع المنصورة)' },
        },
        {
          institution: { en: 'National Telecommunication Institute (NTI)', ar: 'المعهد القومي للاتصالات (NTI)' },
          degree: { en: 'Specialized Diploma - Web Design & Backend PHP Laravel & Node.js (4 Months)', ar: 'دبلومة متخصصة - تصميم الويب والباك إند PHP Laravel و Node.js (٤ أشهر)' },
          period: '01/2021 – 05/2021',
          details: { en: 'National Telecommunication Institute, Online System', ar: 'المعهد القومي للاتصالات، نظام التعليم عن بعد' },
        },
        {
          institution: { en: 'Higher Engineering Institute of Science and Technology', ar: 'المعهد العالي للهندسة والتكنولوجيا' },
          degree: { en: 'Bachelor of Science (B.Sc.) in Engineering (Civil Department)', ar: 'بكالوريوس الهندسة (قسم الهندسة المدنية)' },
          period: '2013 – 2018',
          details: { en: 'New Damietta, Egypt', ar: 'دمياط الجديدة، مصر' },
        },
      ],
    },
    ar: {
      title: {
        en: 'Abdelrahman Mohsen | Backend Software Engineer',
        ar: 'عبدالرحمن محسن | مهندس برمجيات باك إند',
      },
      summary: {
        en: '',
        ar: 'مهندس برمجيات باك إند متخصص في لغة PHP، وإطار عمل Laravel، وتصميم معماريات واجهات البرمجة RESTful APIs، وتحسين أداء قواعد بيانات MySQL. خبرة واسعة في بناء الأنظمة الخلفية عالية الحمل، وتأمين الصلاحيات، وإدارة المهام المجدولة وقوائم الانتظار، وتحسين استعلامات قواعد البيانات المعقدة. سجل حافل بالإشراف والمساهمة في دورة التطوير الكاملة للأنظمة الإنتاجية في مجالات النقل واللوجستيات، الرياضة، والأسواق المالية والخدمية. خبرة عملية في التعامل مع خوادم Linux وإعداد خوادم الويب Apache و Nginx ومبادئ حاويات Docker.',
      },
      skillsGroups: [
        {
          title: { en: 'Backend Engineering', ar: 'هندسة الباك إند (التخصص الأساسي)' },
          skills: [
            'PHP',
            'Laravel Framework',
            'RESTful API Architecture',
            'Authentication & RBAC (Sanctum/Passport)',
            'Complex Business Logic',
            'Background Jobs & Asynchronous Queues',
            'Eloquent ORM & Performance Tuning',
            'Payment & Webhook Integrations',
          ],
        },
        {
          title: { en: 'Databases & Performance', ar: 'قواعد البيانات وتحسين الأداء' },
          skills: [
            'MySQL',
            'Relational Schema Modeling (ERD)',
            'SQL Query Optimization & Profiling',
            'Indexing & Integrity',
            'Redis / In-Memory Caching',
          ],
        },
        {
          title: { en: 'Frontend & Dashboards (Hands-on)', ar: 'الواجهات ولوحات التحكم الإدارية' },
          skills: [
            'JavaScript (ES6+)',
            'jQuery',
            'Laravel Blade',
            'Bootstrap (v4/v5)',
            'HTML5 / CSS3',
          ],
        },
        {
          title: { en: 'Infrastructure & Tools', ar: 'الخوادم والبنية التحتية' },
          skills: [
            'Git',
            'GitHub',
            'Bitbucket',
            'Postman',
            'Linux (Admin 1 / Bash)',
            'Nginx & Apache Setup',
            'Docker Fundamentals',
          ],
        },
        {
          title: { en: 'Currently Expanding Skills', ar: 'مجالات التوسع والتعلم المستمر' },
          skills: [
            'Advanced Linux Administration',
            'DevOps Engineering & CI/CD',
            'AWS Fundamentals',
            'Data Analysis',
          ],
        },
      ],
      experience: [
        {
          company: 'شركة عرب آبس (Arab Apps)',
          role: { en: 'Backend Developer', ar: 'مطور باك إند' },
          period: { en: '03/2023 – Present', ar: '03/2023 – حتى الآن' },
          location: { en: 'Egypt (On-site)', ar: 'مصر (مقر الشركة)' },
          bullets: [
            {
              en: '',
              ar: 'المساهمة المحورية في دورة التطوير البرمجية الكاملة للأنظمة الإنتاجية بالشركة ومنها DotScore و FastEx و Mangoul و Asaar Plus و Gold Fawry.',
            },
            {
              en: '',
              ar: 'تصميم وبناء واجهات RESTful APIs عالية الأداء لتغذية تطبيقات الجوال والمواقع مع التحقق الدقيق من أمان واستجابة البيانات.',
            },
            {
              en: '',
              ar: 'تصميم وتحسين جداول MySQL والفهارس وطبقات الـ Caching لضمان سرعة معالجة البيانات أثناء طفرات التصفح المتزامنة.',
            },
            {
              en: '',
              ar: 'تنفيذ منطق الأعمال المعقد: توزيع السائقين جغرافياً، مزايدات الشحن، تدفق أحداث المباريات الحية، المحافظ الرقمية، ومهام جدولة البيانات المالية.',
            },
            {
              en: '',
              ar: 'التنسيق التقني مع مهندسي الواجهات وتطبيقات الجوال لتوثيق وتوحيد هياكل الـ APIs وضمان سلاسة النشر البرمجي.',
            },
          ],
        },
        {
          company: 'شركة سايبر فيس (CyperFace)',
          role: { en: 'Fullstack / Backend Developer', ar: 'مطور برمجيات' },
          period: { en: '05/2021 – 06/2022', ar: '05/2021 – 06/2022' },
          location: { en: 'Remote', ar: 'عن بُعد' },
          bullets: [
            {
              en: '',
              ar: 'بناء المنطق البرمجي للأنظمة الخلفية ونماذج قواعد البيانات باستخدام PHP و Laravel و MySQL.',
            },
            {
              en: '',
              ar: 'تطوير أنظمة توثيق المستخدمين، وإدارة الصلاحيات، وربط واجهات برمجة التطبيقات الخارجية وبوابات الدفع.',
            },
            {
              en: '',
              ar: 'المساهمة في بناء الواجهات التفاعلية باستخدام Blade و JavaScript و Bootstrap لربطها بالأنظمة الخلفية.',
            },
            {
              en: '',
              ar: 'إدارة وتتبع الإصدارات البرمجية عبر Git ومستودعات Bitbucket ومعالجة الملاحظات البرمجية.',
            },
          ],
        },
      ],
      featuredProjects: [
        {
          name: 'DotScore (https://dotscore.net/)',
          url: 'https://dotscore.net/',
          description: {
            en: '',
            ar: 'منصة رياضية لنتائج مباريات كرة القدم اللحظية والإحصائيات.',
          },
          bullets: [
            {
              en: '',
              ar: 'هندسة واجهات بث أحداث المباريات عالية التردد، ومهام مزامنة البيانات الخارجية، وطبقات التخزين المؤقت عبر Redis.',
            },
            {
              en: '',
              ar: 'تصميم استعلامات سريعة لتحديث نتائج المباريات اللحظية وإعادة حساب جداول ترتيب الدوريات بكفاءة.',
            },
          ],
        },
        {
          name: 'FastEx (https://fastex.delivery/)',
          url: 'https://fastex.delivery/',
          description: {
            en: '',
            ar: 'منصة نقل وخدمات لوجستية وتوصيل طرود.',
          },
          bullets: [
            {
              en: '',
              ar: 'بناء دورة إسناد الطلبات، وخوارزميات تقديم ومزايدة عروض السائقين، والخدمات الجغرافية، ونظام قيود المحافظ المالية.',
            },
            {
              en: '',
              ar: 'نشر واجهات RESTful APIs موثقة تخدم تطبيقات الجوال للعملاء والسائقين.',
            },
          ],
        },
        {
          name: 'Mangoul (https://mangoul2.com/)',
          url: 'https://mangoul2.com/',
          description: {
            en: '',
            ar: 'سوق إلكتروني لخدمات نقل الأثاث والشحن في السعودية.',
          },
          bullets: [
            {
              en: '',
              ar: 'هندسة معمارية السوق ثنائي الأطراف، ودورة عروض الأسعار، وتطبيق نظام الصلاحيات المتقدم (RBAC).',
            },
            {
              en: '',
              ar: 'بناء أنظمة إدارة النزاعات الإدارية وسجلات التدقيق والمتابعة.',
            },
          ],
        },
      ],
      education: [
        {
          institution: { en: '', ar: 'معهد تكنولوجيا المعلومات (ITI)' },
          degree: { en: '', ar: 'دبلومة احترافية - تطوير الويب المتكامل باستخدام PHP (٣ أشهر)' },
          period: '11/2022 – 02/2023',
          details: { en: '', ar: 'وزارة الاتصالات وتكنولوجيا المعلومات (فرع المنصورة)' },
        },
        {
          institution: { en: '', ar: 'المعهد القومي للاتصالات (NTI)' },
          degree: { en: '', ar: 'دبلومة متخصصة - تصميم الويب والباك إند PHP Laravel و Node.js (٤ أشهر)' },
          period: '01/2021 – 05/2021',
          details: { en: '', ar: 'المعهد القومي للاتصالات، نظام التعليم عن بعد' },
        },
        {
          institution: { en: '', ar: 'المعهد العالي للهندسة والتكنولوجيا' },
          degree: { en: '', ar: 'بكالوريوس الهندسة (قسم الهندسة المدنية)' },
          period: '2013 – 2018',
          details: { en: '', ar: 'دمياط الجديدة، مصر' },
        },
      ],
    },
  },
};

