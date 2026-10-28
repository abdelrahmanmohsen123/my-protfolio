import { EducationItem } from '../types';

export const educationData: EducationItem[] = [
  {
    id: 'iti',
    institution: {
      en: 'Information Technology Institute (ITI)',
      ar: 'معهد تكنولوجيا المعلومات (ITI)',
    },
    program: {
      en: 'Fullstack Web Development using PHP (3-Month Intensive Diploma)',
      ar: 'دبلومة مكثفة في تطوير الويب المتكامل باستخدام PHP (٣ أشهر)',
    },
    credential: {
      en: 'Professional Diploma - Ministry of Communications and Information Technology (MCIT)',
      ar: 'دبلومة احترافية - وزارة الاتصالات وتكنولوجيا المعلومات (فرع المنصورة)',
    },
    period: '11/2022 – 02/2023',
    location: {
      en: 'Mansoura Branch, Egypt',
      ar: 'فرع المنصورة، مصر',
    },
    description: {
      en: 'Intensive hands-on professional software track covering advanced PHP, Laravel framework architecture, RESTful API design, relational database modeling with MySQL, frontend foundations, Git workflows, and clean code practices.',
      ar: 'برنامج تدريبي مكثف واحترافي يغطي لغة PHP المتقدمة، إطار عمل Laravel، تصميم واجهات RESTful APIs، قواعد بيانات MySQL، أسس تطوير الواجهات، وممارسات الكود النظيف.',
    },
  },
  {
    id: 'nti',
    institution: {
      en: 'National Telecommunication Institute (NTI)',
      ar: 'المعهد القومي للاتصالات (NTI)',
    },
    program: {
      en: 'Web Design & Backend using PHP Laravel & Node.js (4-Month Diploma)',
      ar: 'دبلومة تصميم الويب وتطوير الباك إند باستخدام PHP Laravel و Node.js (٤ أشهر)',
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
      en: 'Comprehensive program covering responsive web design (HTML5, CSS3, JavaScript, Bootstrap), server-side programming with PHP & Laravel, database connectivity, and backend engineering fundamentals.',
      ar: 'برنامج تدريبي شامل يغطي تصميم الويب المتجاوب (HTML5, CSS3, JavaScript, Bootstrap)، والبرمجة من جانب الخادم باستخدام PHP و Laravel، وربط قواعد البيانات، وأساسيات هندسة الأنظمة الخلفية.',
    },
  },
  {
    id: 'bachelor',
    institution: {
      en: 'Higher Engineering Institute of Science and Technology',
      ar: 'المعهد العالي للهندسة والتكنولوجيا',
    },
    program: {
      en: 'B.Sc. in Engineering (Civil Department)',
      ar: 'بكالوريوس الهندسة (قسم الهندسة المدنية)',
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
      en: 'Five-year engineering curriculum focused on rigorous analytical problem-solving, structural mathematics, project planning, and structured engineering logic that forms a solid baseline for software system architecture.',
      ar: 'دراسة هندسية لمدة خمس سنوات رسخت مهارات التفكير التحليلي، والمنهجية الرياضية، وحل المشكلات المعقدة، والتخطيط الهندسي المنظم.',
    },
  },
];
