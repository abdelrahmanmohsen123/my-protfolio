import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'backend-dev',
    title: {
      en: 'Backend Development',
      ar: 'تطوير الأنظمة الخلفية (Backend)',
    },
    shortDesc: {
      en: 'Develop secure, scalable backend architectures and robust business logic using Laravel and PHP.',
      ar: 'بناء وتطوير أنظمة خلفية آمنة وعالية الأداء تعتمد على إطار عمل Laravel ولغة PHP لإدارة العمليات المعقدة.',
    },
    benefits: [
      { en: 'Reliable, high-throughput system performance', ar: 'أداء فائق الموثوقية واستقرار تام تحت الضغط العالي' },
      { en: 'Well-structured business logic & clean code', ar: 'هيكلة منظمة لمنطق الأعمال تتبع معايير الكود النظيف' },
      { en: 'Robust authentication, authorization & RBAC', ar: 'أنظمة أمان وحماية متقدمة وصلاحيات مستخدمين محكمة' },
      { en: 'Maintainable and scalable architecture', ar: 'معمارية برمجية مرنة قابلة للتوسع والصيانة السهلة' },
    ],
    iconName: 'Server',
  },
  {
    id: 'rest-api',
    title: {
      en: 'REST API Design & Development',
      ar: 'تصميم وتطوير واجهات REST APIs',
    },
    shortDesc: {
      en: 'Design, build, and document professional RESTful APIs for mobile and web applications.',
      ar: 'بناء واجهات برمجية RESTful احترافية وسريعة لربط تطبيقات الجوال (Flutter/iOS/Android) والمواقع.',
    },
    benefits: [
      { en: 'Seamless integration with Flutter, mobile & Vue apps', ar: 'تكامل فوري وسلس مع تطبيقات الجوال ومختلف الواجهات' },
      { en: 'Secure token authentication (Sanctum / JWT)', ar: 'توثيق وتشفير آمن للبيانات عبر Sanctum / JWT' },
      { en: 'Comprehensive Postman collections & documentation', ar: 'توثيق كامل للـ APIs مع مجموعات Postman الجاهزة' },
      { en: 'Optimized payload size & low latency responses', ar: 'استجابة فائقة السرعة مع تقليل استهلاك البيانات' },
    ],
    iconName: 'Workflow',
  },
  {
    id: 'business-systems',
    title: {
      en: 'Business Management Systems (ERP)',
      ar: 'أنظمة إدارة الأعمال ولوحات التحكم (ERP)',
    },
    shortDesc: {
      en: 'Develop custom management platforms such as ERP, operations, inventory, and operations dashboards.',
      ar: 'تطوير لوحات تحكم إدارية ومنصات متكاملة لإدارة العمليات والمخزون والحسابات ومتابعة أسطول العمل.',
    },
    benefits: [
      { en: 'Automate manual processes and eliminate operational bottlenecks', ar: 'أتمتة العمليات اليومية وتوفير وقت وجهد فرق العمل' },
      { en: 'Centralize company data in a single secure hub', ar: 'مركزية كاملة لبيانات الشركة وحركات المعاملات' },
      { en: 'Interactive dashboards with real-time analytics & reports', ar: 'تقارير وإحصائيات فورية تدعم اتخاذ القرارات' },
      { en: 'Multi-role permission controls for team members', ar: 'صلاحيات وصول دقيقة ومخصصة لكل فرد في الفريق' },
    ],
    iconName: 'LayoutDashboard',
  },
  {
    id: 'system-maintenance',
    title: {
      en: 'Existing System Maintenance & Upgrades',
      ar: 'صيانة وتطوير الأنظمة القائمة وتحديثها',
    },
    shortDesc: {
      en: 'Diagnose bugs, optimize bottlenecks, and build new custom features for your existing Laravel applications.',
      ar: 'فحص الأنظمة الحالية، إصلاح المشكلات البرمجية، تحسين الأداء، وإضافة ميزات برمجية جديدة.',
    },
    benefits: [
      { en: 'Fix critical bugs, crashes, and security gaps', ar: 'معالجة الثغرات وإصلاح الأخطاء البرمجية الحرجة' },
      { en: 'Audit and boost slow page & query loading speeds', ar: 'تسريع استجابة النظام وفحص مكامن البطء' },
      { en: 'Seamlessly develop & integrate additional features', ar: 'تطوير ميزات جديدة دون التأثير على النظام القائم' },
      { en: 'Refactor legacy codebases into modern clean standards', ar: 'إعادة هيكلة وتحديث الكود القديم ليتوافق مع المعايير الحديثة' },
    ],
    iconName: 'Wrench',
  },
  {
    id: 'database-optimization',
    title: {
      en: 'Database Design & Query Optimization',
      ar: 'تصميم وتحسين قواعد البيانات (MySQL)',
    },
    shortDesc: {
      en: 'Design relational database schemas, resolve slow queries, and configure caching for peak concurrency.',
      ar: 'تصميم وهيكلة قواعد بيانات MySQL الاحترافية، تحسين الفهارس، وتسريع الاستعلامات البطيئة.',
    },
    benefits: [
      { en: 'Resolve slow SQL queries and eliminate deadlocks', ar: 'تسريع استعلامات SQL المعقدة وتفادي تجميد الجداول' },
      { en: 'Normalized schema modeling and relational data integrity', ar: 'تصميم علاقات متماسكة تضمن سلامة وتكامل البيانات' },
      { en: 'Strategic indexing & efficient table partitioning', ar: 'فهرسة ذكية تضمن استرجاع السجلات في أجزاء من الثانية' },
      { en: 'In-memory caching pipelines with Redis', ar: 'تطبيق التخزين المؤقت عبر Redis لاستيعاب أوقات الذروة' },
    ],
    iconName: 'Database',
  },
  {
    id: 'server-deployment',
    title: {
      en: 'Linux Server Deployment & Nginx Setup',
      ar: 'تهيئة الخوادم ونشر التطبيقات (Linux & Nginx)',
    },
    shortDesc: {
      en: 'Deploy, configure, and secure your web applications on Linux VPS environments with Nginx or Apache.',
      ar: 'تجهيز خوادم لينكس VPS، إعداد Nginx/Apache، ضبط شهادات SSL، وضمان عمل التطبيق بكفاءة 24/7.',
    },
    benefits: [
      { en: 'Production-ready deployment on Ubuntu/Debian VPS', ar: 'نشر وتثبيت المشاريع باحترافية على خوادم VPS' },
      { en: 'Hardened Nginx / Apache web server configuration', ar: 'تهيئة خوادم الويب مع حماية أمنية متقدمة وتفعيل Gzip' },
      { en: 'Automated SSL certificates (Let\'s Encrypt) & DNS', ar: 'تفعيل شهادات الأمان SSL وربط النطاقات بشكل صحيح' },
      { en: 'Process monitoring, cron tasks, and queue workers (Supervisor)', ar: 'إعداد تشغيل الـ Queues والمهام المجدولة في الخلفية' },
    ],
    iconName: 'Cpu',
  },
];
