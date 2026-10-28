import { SkillCategory } from '../types';

export const skillsCategories: SkillCategory[] = [
  {
    id: 'backend',
    title: {
      en: 'Backend Engineering',
      ar: 'هندسة الباك إند',
    },
    description: {
      en: 'Primary specialization in scalable server architectures and API systems.',
      ar: 'التخصص الأساسي في بناء الأنظمة الخلفية القابلة للتوسع وواجهات البرمجة.',
    },
    iconName: 'Server',
    items: [
      { name: 'PHP', level: 'Core' },
      { name: 'Laravel', level: 'Core' },
      { name: 'RESTful APIs', level: 'Core' },
      { name: 'MySQL Database', level: 'Core' },
      { name: 'Authentication & RBAC', level: 'Core' },
      { name: 'Background Jobs & Queues', level: 'Core' },
      { name: 'Redis Caching', level: 'Solid' },
      { name: 'Payment Integrations', level: 'Solid' },
    ],
  },
  {
    id: 'frontend',
    title: {
      en: 'Frontend Development',
      ar: 'تطوير الواجهات',
    },
    description: {
      en: 'Verified professional experience building responsive web apps and dashboards.',
      ar: 'خبرة مهنية عملية ومثبتة في بناء الواجهات المتجاوبة ولوحات التحكم.',
    },
    iconName: 'Layout',
    items: [
      { name: 'JavaScript (ES6+)', level: 'Core' },
      { name: 'jQuery', level: 'Core' },
      { name: 'Laravel Blade', level: 'Core' },
      { name: 'HTML5 & CSS3', level: 'Core' },
      { name: 'Bootstrap (v4/v5)', level: 'Core' },
      { name: 'Responsive Web Design', level: 'Core' },
    ],
  },
  {
    id: 'tools',
    title: {
      en: 'Tools & DevOps',
      ar: 'الأدوات والبنية التحتية',
    },
    description: {
      en: 'Version control, API workflows, web servers, and container fundamentals.',
      ar: 'إدارة الإصدارات، اختبار الـ APIs، خوادم الويب، ومبادئ الحاويات.',
    },
    iconName: 'Cpu',
    items: [
      { name: 'Git & GitHub', level: 'Core' },
      { name: 'Postman', level: 'Core' },
      { name: 'Linux (Bash)', level: 'Solid' },
      { name: 'Nginx / Apache', level: 'Solid' },
      { name: 'Docker Fundamentals', level: 'Solid' },
      { name: 'VPS Deployment', level: 'Solid' },
    ],
  },
  {
    id: 'currently-learning',
    title: {
      en: 'Currently Expanding',
      ar: 'مجالات التوسع والتعلم',
    },
    description: {
      en: 'Ongoing studies and skill advancement.',
      ar: 'دراسة وتطبيق مستمر لتوسيع المهارات التقنية.',
    },
    iconName: 'Sparkles',
    items: [
      { name: 'Advanced Linux Admin', level: 'In Progress' },
      { name: 'CI/CD Pipelines', level: 'In Progress' },
      { name: 'AWS Fundamentals', level: 'In Progress' },
      { name: 'Data Analysis', level: 'In Progress' },
    ],
  },
];
