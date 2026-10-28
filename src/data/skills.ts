import { SkillCategory } from '../types';

export const skillsCategories: SkillCategory[] = [
  {
    id: 'backend',
    title: {
      en: 'Backend Engineering',
      ar: 'هندسة الباك إند',
    },
    description: {
      en: 'Primary specialization in scalable architecture, server-side business logic, and API systems.',
      ar: 'التخصص الأساسي في بناء الأنظمة القابلة للتوسع، ومنطق الأعمال المعقد، وتصميم واجهات البرمجة.',
    },
    iconName: 'Server',
    items: [
      { name: 'PHP', level: 'Core' },
      { name: 'Laravel Framework', level: 'Core' },
      { name: 'RESTful API Design & Development', level: 'Core' },
      { name: 'Authentication & Authorization (Sanctum / RBAC)', level: 'Core' },
      { name: 'Complex Business Logic Architecture', level: 'Core' },
      { name: 'Background Jobs & Asynchronous Queues', level: 'Advanced' },
      { name: 'Eloquent ORM & Query Performance', level: 'Core' },
      { name: 'Payment & SMS Gateway Integration', level: 'Solid' },
    ],
  },
  {
    id: 'databases',
    title: {
      en: 'Databases & Data Modeling',
      ar: 'قواعد البيانات ونمذجة البيانات',
    },
    description: {
      en: 'Relational data structures, indexing, and high-frequency query tuning.',
      ar: 'تصميم الجداول العلائقية، فهرسة البيانات، وتحسين الاستعلامات عالية التردد.',
    },
    iconName: 'Database',
    items: [
      { name: 'MySQL', level: 'Core' },
      { name: 'Relational Database Design (Schema / ERD)', level: 'Core' },
      { name: 'SQL Query Optimization & Profiling', level: 'Advanced' },
      { name: 'Database Indexing & Foreign Key Constraints', level: 'Core' },
      { name: 'Data Normalization & Integrity', level: 'Core' },
      { name: 'Redis / In-Memory Caching', level: 'Solid' },
    ],
  },
  {
    id: 'frontend',
    title: {
      en: 'Frontend Development',
      ar: 'تطوير الواجهات الأمامية',
    },
    description: {
      en: 'Verified professional frontend experience building responsive web pages and admin portals.',
      ar: 'خبرة مهنية عملية ومثبتة في بناء الواجهات المتجاوبة ولوحات التحكم الإدارية.',
    },
    iconName: 'Layout',
    items: [
      { name: 'JavaScript (ES6+)', level: 'Core' },
      { name: 'jQuery', level: 'Core' },
      { name: 'Laravel Blade Templating', level: 'Core' },
      { name: 'HTML5 Semantic Structure', level: 'Core' },
      { name: 'CSS3 & Flexbox / Grid', level: 'Core' },
      { name: 'Bootstrap (v4 / v5)', level: 'Core' },
      { name: 'Responsive Web Design & Mobile-First', level: 'Core' },
      { name: 'DOM Manipulation & Dynamic UI Updates', level: 'Core' },
    ],
  },
  {
    id: 'tools',
    title: {
      en: 'Tools & API Collaboration',
      ar: 'الأدوات وتوثيق الـ APIs',
    },
    description: {
      en: 'Modern development workflows, versioning, and team collaboration protocols.',
      ar: 'أدوات العمل الجماعي، تتبع الإصدارات، واختبار وتوثيق واجهات البرمجة.',
    },
    iconName: 'GitBranch',
    items: [
      { name: 'Git & GitHub Workflows', level: 'Core' },
      { name: 'Bitbucket', level: 'Solid' },
      { name: 'Postman (API Testing & Collections)', level: 'Core' },
      { name: 'REST API Documentation', level: 'Core' },
      { name: 'Composer & Dependency Management', level: 'Core' },
      { name: 'npm & Build Tooling', level: 'Solid' },
    ],
  },
  {
    id: 'infrastructure',
    title: {
      en: 'Infrastructure & Web Servers',
      ar: 'الخوادم والبنية التحتية (ممارسة عملية)',
    },
    description: {
      en: 'Hands-on system deployment, web servers configuration, and environment setup.',
      ar: 'خبرة عملية في إعداد الخوادم ونشر المواقع وضبط خوادم الويب واستضافة التطبيقات.',
    },
    iconName: 'Cpu',
    items: [
      { name: 'Linux (Admin 1 / Command Line)', level: 'Solid' },
      { name: 'Apache HTTP Server', level: 'Solid' },
      { name: 'Nginx Web Server Configuration', level: 'Solid' },
      { name: 'VPS Server Deployment (Ubuntu / Debian)', level: 'Solid' },
      { name: 'Docker Fundamentals (Containers & Images)', level: 'Solid' },
      { name: 'SSL / HTTPS Configuration (Let\'s Encrypt)', level: 'Solid' },
    ],
  },
  {
    id: 'currently-learning',
    title: {
      en: 'Currently Expanding My Skills',
      ar: 'مجالات التوسع والتعلم المستمر',
    },
    description: {
      en: 'Active continuous learning and skill advancement outside daily commercial production.',
      ar: 'دراسة وتطبيق مستمر لتوسيع المهارات التقنية في البنية التحتية والبيانات.',
    },
    iconName: 'Sparkles',
    items: [
      { name: 'Advanced Linux System Administration', level: 'In Progress' },
      { name: 'DevOps Engineering & CI/CD Pipelines', level: 'In Progress' },
      { name: 'Infrastructure Automation (Ansible / Terraform)', level: 'In Progress' },
      { name: 'AWS Cloud Fundamentals (EC2, S3, RDS)', level: 'In Progress' },
      { name: 'Data Analysis & Analytics Concepts', level: 'In Progress' },
    ],
  },
];
