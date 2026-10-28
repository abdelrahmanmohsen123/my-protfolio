import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'fastex',
    title: 'FastEx',
    category: {
      en: 'Logistics & Transportation',
      ar: 'النقل والخدمات اللوجستية',
    },
    tagline: {
      en: 'On-demand delivery platform with driver bidding, geo-routing, and digital wallet transactions.',
      ar: 'منصة شحن وتوصيل عند الطلب بنظام مزايدة السائقين، التوجيه الجغرافي، والمحافظ المالية.',
    },
    description: {
      en: 'On-demand delivery platform with driver bidding, geo-routing, and digital wallet transactions.',
      ar: 'منصة شحن وتوصيل عند الطلب بنظام مزايدة السائقين، التوجيه الجغرافي، والمحافظ المالية.',
    },
    ownership: {
      en: 'Significant end-to-end development ownership across backend engines, RESTful mobile APIs, and operations dashboard.',
      ar: 'مساهمة قيادية شاملة في تطوير المحركات الخلفية، واجهات الـ APIs لتطبيقات الجوال، ولوحات التحكم.',
    },
    contributions: {
      backend: [
        {
          en: 'Architected order dispatch engine, driver real-time bidding algorithms, and geo-distance calculations.',
          ar: 'بناء محرك توزيع الشحنات، ونظام مزايدة السائقين اللحظي، وحساب المسافات الجغرافية.',
        },
        {
          en: 'Engineered internal wallet ledger system for handling driver commissions, customer balance, and transactions.',
          ar: 'تطوير نظام المحافظ الرقمية الداخلية لمعالجة تحصيل العمولات، وأرصدة السائقين، والمعاملات المالية.',
        },
        {
          en: 'Designed and deployed secure RESTful APIs consumed by client and driver mobile applications.',
          ar: 'تصميم ونشر واجهات RESTful APIs موثقة تخدم تطبيقات الجوال لكل من العملاء والسائقين.',
        },
      ],
      frontend: [
        {
          en: 'Developed administrative operations dashboard with Laravel Blade, JavaScript, and Bootstrap.',
          ar: 'تطوير لوحة تحكم إدارية وتشغيلية متكاملة باستخدام Laravel Blade و JavaScript و Bootstrap.',
        },
      ],
    },
    technologies: ['PHP', 'Laravel', 'MySQL', 'RESTful APIs', 'Blade', 'Bootstrap'],
    liveUrl: 'https://fastex.delivery/',
    featured: true,
    accentColor: '#38bdf8',
  },
  {
    id: 'dotscore',
    title: 'DotScore',
    category: {
      en: 'Sports Technology',
      ar: 'تقنية الرياضة',
    },
    tagline: {
      en: 'Live football scores and statistics platform serving rapid match updates and standings.',
      ar: 'منصة رياضية لنتائج مباريات كرة القدم اللحظية، جداول البطولات، والإحصائيات المباشرة.',
    },
    description: {
      en: 'Live football scores and statistics platform serving rapid match updates and standings.',
      ar: 'منصة رياضية لنتائج مباريات كرة القدم اللحظية، جداول البطولات، والإحصائيات المباشرة.',
    },
    ownership: {
      en: 'Significant end-to-end development ownership covering API services, live match data pipelines, and responsive screens.',
      ar: 'مساهمة محورية في هندسة واجهات الـ APIs، معالجة بيانات المباريات المباشرة، وشاشات العرض.',
    },
    contributions: {
      backend: [
        {
          en: 'Designed high-frequency RESTful endpoints delivering live scores, lineups, and match events.',
          ar: 'تصميم واجهات برمجية عالية التردد لبث أحداث المباريات المباشرة والتشكيلات والنتائج.',
        },
        {
          en: 'Implemented caching and cron routines to serve peak traffic spikes with low server load.',
          ar: 'تطبيق التخزين المؤقت (Caching) والمهام المجدولة لمواكبة طفرات التصفح أثناء المباريات الكبرى.',
        },
      ],
      frontend: [
        {
          en: 'Built interactive match-center components and dynamic standings tables using JavaScript and Bootstrap.',
          ar: 'بناء واجهات مركز المباريات التفاعلي وجدول الترتيب باستخدام JavaScript و Bootstrap.',
        },
      ],
    },
    technologies: ['PHP', 'Laravel', 'MySQL', 'RESTful APIs', 'Caching', 'Bootstrap'],
    liveUrl: 'https://dotscore.net/',
    featured: true,
    accentColor: '#10b981',
  },
  {
    id: 'mangoul',
    title: 'Mangoul',
    category: {
      en: 'Services Marketplace',
      ar: 'سوق الخدمات',
    },
    tagline: {
      en: 'Saudi marketplace connecting clients with verified moving and logistics service providers.',
      ar: 'سوق إلكتروني سعودي يربط العملاء بشركات ومزودي خدمات نقل العفش والشحن المعتمدين.',
    },
    description: {
      en: 'Saudi marketplace connecting clients with verified moving and logistics service providers.',
      ar: 'سوق إلكتروني سعودي يربط العملاء بشركات ومزودي خدمات نقل العفش والشحن المعتمدين.',
    },
    ownership: {
      en: 'Significant end-to-end development ownership covering marketplace business logic and administration.',
      ar: 'مساهمة رئيسية في تطوير منطق عمل السوق الإلكتروني ثنائي الأطراف وبناء لوحات التحكم.',
    },
    contributions: {
      backend: [
        {
          en: 'Architected request-quotation-booking lifecycle connecting customers directly with regional providers.',
          ar: 'بناء دورة حياة طلبات الخدمات وعروض الأسعار وحجوزات النقل ومتابعة التنفيذ.',
        },
        {
          en: 'Designed Role-Based Access Control (RBAC) and administrative audit log workflows.',
          ar: 'تصميم هيكل صلاحيات متقدم (RBAC) وسجلات التدقيق والمتابعة الإدارية.',
        },
      ],
      frontend: [
        {
          en: 'Developed responsive admin dashboards in Laravel Blade and Bootstrap for order oversight.',
          ar: 'تطوير لوحات إدارة متكاملة باستخدام Laravel Blade و Bootstrap لمراجعة الطلبات والعمليات.',
        },
      ],
    },
    technologies: ['PHP', 'Laravel', 'MySQL', 'RESTful APIs', 'RBAC', 'Blade'],
    liveUrl: 'https://mangoul2.com/',
    featured: true,
    accentColor: '#f59e0b',
  },
  {
    id: 'asaarplus',
    title: 'Asaar Plus',
    category: {
      en: 'Financial Market Data',
      ar: 'الأسواق المالية',
    },
    tagline: {
      en: 'Real-time gold prices, currency exchange rates, and financial trends portal.',
      ar: 'بوابة رقمية لمتابعة أسعار الذهب، العملات الأجنبية، والمؤشرات الاقتصادية لحظة بلحظة.',
    },
    description: {
      en: 'Real-time gold prices, currency exchange rates, and financial trends portal.',
      ar: 'بوابة رقمية لمتابعة أسعار الذهب، العملات الأجنبية، والمؤشرات الاقتصادية لحظة بلحظة.',
    },
    ownership: {
      en: 'Significant end-to-end development ownership covering automated data ingestion and price tracking.',
      ar: 'مساهمة تقنية محورية في بناء مهام أتمتة جمع الأسعار وهيكلة قواعد البيانات للسجلات التاريخية.',
    },
    contributions: {
      backend: [
        {
          en: 'Engineered scheduled background jobs for periodic price fetching from financial sources.',
          ar: 'تطوير مهام خلفية مجدولة (Cron Jobs) لجلب تحديثات الأسعار دورياً من مصادر السوق.',
        },
        {
          en: 'Designed optimized MySQL schema with strategic indexing for historical time-series data.',
          ar: 'تصميم هيكل بيانات MySQL محسن ومفهرس بدقة لتخزين وتحليل السلاسل الزمنية لأسعار الذهب.',
        },
      ],
      frontend: [
        {
          en: 'Created responsive price boards, currency converters, and trend display cards using Blade.',
          ar: 'تصميم لوحات أسعار تفاعلية ومحوّل عملات وبطاقات عرض الأسعار باستخدام Blade.',
        },
      ],
    },
    technologies: ['PHP', 'Laravel', 'MySQL', 'Scheduled Jobs', 'Blade', 'Bootstrap'],
    liveUrl: 'https://asaarplus.com/%D8%A7%D8%B3%D8%B9%D8%A7%D8%B1-%D8%A8%D9%84%D8%B3/',
    featured: true,
    accentColor: '#8b5cf6',
  },
  {
    id: 'goldfawry',
    title: 'Gold Fawry',
    category: {
      en: 'Gold Market Information',
      ar: 'أسعار الذهب بمصر',
    },
    tagline: {
      en: 'Instant Egyptian gold prices across karats with historical trend comparisons.',
      ar: 'منصة متخصصة ترصد وتحدث أسعار الذهب الفورية لمختلف العيارات في السوق المصري.',
    },
    description: {
      en: 'Instant Egyptian gold prices across karats with historical trend comparisons.',
      ar: 'منصة متخصصة ترصد وتحدث أسعار الذهب الفورية لمختلف العيارات في السوق المصري.',
    },
    ownership: {
      en: 'Significant end-to-end development ownership covering price aggregation pipelines and cache tuning.',
      ar: 'مساهمة متكاملة في بناء مسارات تحديث الأسعار وضبط التخزين المؤقت لاستيعاب طفرات التصفح.',
    },
    contributions: {
      backend: [
        {
          en: 'Built pricing calculation pipeline supporting buy/sell margins, karat conversions, and gold coins.',
          ar: 'بناء نظام حساب هوامش البيع والشراء والتحويل بين العيارات والجنيه الذهب.',
        },
        {
          en: 'Optimized database queries and API response caching to handle volatile market movements.',
          ar: 'تحسين استعلامات قواعد البيانات والتخزين المؤقت لمواكبة الضغط أثناء تقلبات الأسعار.',
        },
      ],
      frontend: [
        {
          en: 'Designed high-contrast, mobile-first live price tickers and karat tables.',
          ar: 'تصميم شاشات عرض سريعة الاستجابة للهواتف المحمولة تعرض جدول العيارات بدقة.',
        },
      ],
    },
    technologies: ['PHP', 'Laravel', 'MySQL', 'RESTful APIs', 'Blade', 'Bootstrap'],
    liveUrl: 'https://goldfawry.com/',
    featured: true,
    accentColor: '#eab308',
  },
];
