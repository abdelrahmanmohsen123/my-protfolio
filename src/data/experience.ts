import { WorkExperience } from '../types';

export const experienceData: WorkExperience[] = [
  {
    id: 'arab-apps',
    company: 'Arab Apps',
    role: {
      en: 'Backend Developer / Full Stack Software Engineer',
      ar: 'مطور باك إند / مهندس برمجيات فل ستاك',
    },
    employmentType: {
      en: 'Full-time (On-site)',
      ar: 'دوام كامل (مقر الشركة)',
    },
    location: {
      en: 'Egypt',
      ar: 'مصر',
    },
    period: {
      en: 'March 2023 – Present',
      ar: 'مارس 2023 – حتى الآن',
    },
    current: true,
    summary: {
      en: 'Leading backend engineering and end-to-end feature delivery for high-demand production platforms spanning logistics, sports media, marketplaces, and financial data services.',
      ar: 'قيادة وتطوير الأنظمة الخلفية وتطبيقات الويب المتكاملة لمشاريع إنتاجية كبرى في مجالات النقل والخدمات اللوجستية، الرياضة، التجارة الإلكترونية، وبيانات الأسواق المالية.',
    },
    keyResponsibilities: [
      {
        en: 'Architected and maintained scalable PHP/Laravel backend architectures and secure RESTful APIs serving mobile applications and high-traffic web portals.',
        ar: 'تصميم وبناء وتطوير بنى تحتية برمجية قوية باستخدام PHP و Laravel وواجهات RESTful APIs لخدمة تطبيقات الهواتف المحمولة والمواقع الإلكترونية.',
      },
      {
        en: 'Delivered significant end-to-end development ownership across flagship production systems including DotScore, FastEx, Mangoul, Asaar Plus, and Gold Fawry.',
        ar: 'إدارة دورة التطوير البرمجي الكاملة لعدد من أبرز مشاريع الشركة الإنتاجية: DotScore، و FastEx، و Mangoul، و Asaar Plus، و Gold Fawry.',
      },
      {
        en: 'Designed and optimized MySQL relational database schemas, query indexes, and caching strategies to ensure rapid response times under peak loads.',
        ar: 'تصميم وهيكلة قواعد بيانات MySQL العلائقية، وتحسين الاستعلامات والفهارس واستراتيجيات الـ Caching لضمان سرعة الاستجابة وأعلى موثوقية.',
      },
      {
        en: 'Implemented intricate business workflows: driver bidding mechanics, real-time match event feeds, digital wallet ledgers, and automated financial cron jobs.',
        ar: 'تنفيذ منطق الأعمال المعقد: نظم المزايدة لشركات الشحن، بث أحداث المباريات المباشرة، المحافظ الرقمية الداخلية، والمهام المؤتمتة لرصد الأسعار.',
      },
      {
        en: 'Engineered comprehensive administrative dashboards using Laravel Blade, JavaScript, jQuery, and Bootstrap for business operations and fleet management.',
        ar: 'تطوير لوحات تحكم إدارية وتشغيلية متقدمة باستخدام Laravel Blade و JavaScript و jQuery و Bootstrap لإدارة ومراقبة المنصات.',
      },
      {
        en: 'Collaborated closely with cross-functional teams including mobile developers (Flutter/iOS/Android), UI designers, and product owners to establish robust API contracts and rapid deployment cycles.',
        ar: 'التعاون المستمر مع مطوري تطبيقات الجوال ومصممي تجربة المستخدم لتنسيق وتوثيق واجهات الـ APIs وتسريع دورة إطلاق الميزات.',
      },
    ],
    technologies: [
      'PHP',
      'Laravel',
      'MySQL',
      'RESTful APIs',
      'JavaScript',
      'jQuery',
      'Laravel Blade',
      'Bootstrap',
      'Postman',
      'Git',
      'Linux / Apache / Nginx',
    ],
  },
  {
    id: 'cyperface',
    company: 'CyperFace',
    role: {
      en: 'Fullstack Developer',
      ar: 'مطور برمجيات فل ستاك (عن بُعد)',
    },
    employmentType: {
      en: 'Contract / Remote',
      ar: 'عمل عن بُعد',
    },
    location: {
      en: 'Remote',
      ar: 'عن بُعد',
    },
    period: {
      en: 'May 2021 – June 2022',
      ar: 'مايو 2021 – يونيو 2022',
    },
    current: false,
    summary: {
      en: 'Developed dynamic web applications and interactive client portals utilizing PHP, Laravel, MySQL, JavaScript, and Bootstrap.',
      ar: 'تطوير تطبيقات ومواقع ويب تفاعلية باستخدام PHP و Laravel و MySQL، مع بناء واجهات متجاوبة باستخدام JavaScript و Bootstrap.',
    },
    keyResponsibilities: [
      {
        en: 'Developed responsive web interfaces and user workflows with HTML5, CSS3, JavaScript, jQuery, and Bootstrap.',
        ar: 'تطوير واجهات مستخدم متجاوبة وشاشات تفاعلية باستخدام HTML5 و CSS3 و JavaScript و jQuery و Bootstrap.',
      },
      {
        en: 'Built backend application logic, database migrations, and authentication workflows using PHP and Laravel framework.',
        ar: 'بناء المنطق البرمجي للأنظمة الخلفية، وتصميم جداول قواعد البيانات، وأنظمة تسجيل الدخول وإدارة المستخدمين.',
      },
      {
        en: 'Integrated third-party APIs and services, ensuring reliable data formatting and error handling.',
        ar: 'ربط واجهات برمجة التطبيقات والخدمات الخارجية والتأكد من معالجة الأخطاء وثبات استرجاع البيانات.',
      },
      {
        en: 'Managed source code versioning using Git/Bitbucket and participated in sprint reviews and code debugging.',
        ar: 'إدارة الإصدارات البرمجية عبر Git ومستودعات Bitbucket والمشاركة في فحص الأخطاء وتحديث الأنظمة.',
      },
    ],
    technologies: [
      'PHP',
      'Laravel',
      'MySQL',
      'JavaScript',
      'jQuery',
      'HTML5',
      'CSS3',
      'Bootstrap',
      'Git',
      'Bitbucket',
    ],
  },
];
