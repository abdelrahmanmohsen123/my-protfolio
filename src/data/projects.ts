import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'fastex',
    title: 'FastEx',
    category: {
      en: 'Logistics & Transportation',
      ar: 'الخدمات اللوجستية والتوصيل',
    },
    tagline: {
      en: 'Comprehensive on-demand delivery & ride dispatching platform connecting clients and drivers.',
      ar: 'منصة متكاملة لإدارة رحلات التوصيل والشحن وربط العملاء بالسائقين ومزودي الخدمة.',
    },
    description: {
      en: 'A multi-service on-demand transportation and parcel delivery platform serving customers and fleet drivers, featuring dynamic driver bidding, geo-routed orders, real-time status tracking, and automated commission reconciliation.',
      ar: 'منصة نقل وخدمات لوجستية وتوصيل طرود تخدم العملاء وسائقي التوصيل، تدعم تقديم طلبات التوصيل، ونظام المزايدة وعروض الأسعار بين السائقين، والتتبع اللحظي، وإدارة المحافظ المالية.',
    },
    ownership: {
      en: 'Significant end-to-end development ownership across backend engines, RESTful mobile APIs, and operational administration interfaces.',
      ar: 'مساهمة قيادية شاملة ودورة تطوير متكاملة للمحركات الخلفية، وواجهات برمجة تطبيقات الجوال، ولوحات التحكم الإدارية والتشغيلية.',
    },
    contributions: {
      backend: [
        {
          en: 'Architected complete order lifecycle and delivery dispatch workflows from submission to completion.',
          ar: 'تصميم وبناء دورة حياة الطلبات ومحرك إسناد وتوزيع الشحنات من لحظة الإنشاء حتى إتمام التوصيل.',
        },
        {
          en: 'Implemented driver bidding and price negotiation algorithms with real-time offer evaluation.',
          ar: 'تطوير خوارزميات تقديم العروض والمزايدة السعرية بين السائقين وتقييم العروض فوريًا.',
        },
        {
          en: 'Integrated location-based geospatial queries to calculate pickup/drop-off distances and driver matching.',
          ar: 'تطبيق الاستعلامات الجغرافية لحساب المسافات وتحديد أقرب السائقين ونقاط الاستلام والتسليم.',
        },
        {
          en: 'Engineered secure internal wallet ledger system for handling driver commissions, customer balance, and transaction history.',
          ar: 'بناء نظام المحافظ المالية الداخلية لمعالجة تحصيل العمولات، وأرصدة السائقين، وسجلات المعاملات المالية.',
        },
        {
          en: 'Designed and deployed RESTful API suite consumed by client and driver mobile applications.',
          ar: 'تصميم ونشر باقة شاملة من واجهات RESTful APIs لتغذية تطبيقات الجوال لكل من العملاء والسائقين.',
        },
      ],
      frontend: [
        {
          en: 'Developed administrative operations dashboard using Laravel Blade, JavaScript, and Bootstrap for fleet oversight.',
          ar: 'تطوير لوحة تحكم إدارية وتشغيلية متكاملة باستخدام Laravel Blade و JavaScript و Bootstrap لمتابعة أسطول التوصيل.',
        },
        {
          en: 'Built interactive customer and driver management views with dynamic status filters and real-time order monitoring.',
          ar: 'بناء شاشات إدارة السائقين والعملاء مع فلاتر حالة تفاعلية ومتابعة فورية للطلبات النشطة.',
        },
      ],
    },
    technologies: ['PHP', 'Laravel', 'MySQL', 'RESTful APIs', 'JavaScript', 'jQuery', 'Laravel Blade', 'Bootstrap', 'Postman'],
    liveUrl: 'https://fastex.delivery/',
    featured: true,
    accentColor: '#38bdf8',
  },
  {
    id: 'dotscore',
    title: 'DotScore',
    category: {
      en: 'Sports Technology',
      ar: 'تقنية الرياضة وكرة القدم',
    },
    tagline: {
      en: 'High-traffic live football scores, fixtures, standings, and global league statistics platform.',
      ar: 'منصة رياضية متكاملة لنتائج مباريات كرة القدم اللحظية، الجداول، إحصائيات الدوريات، وأخبار الرياضة.',
    },
    description: {
      en: 'A high-traffic football information platform delivering live match events, tournament standings, team analytics, player statistics, and match schedules with minimal latency.',
      ar: 'منصة رقمية رياضية متقدمة تقدم تغطية حية لنتائج مباريات كرة القدم المحلية والعالمية، جداول البطولات، إحصائيات الفرق، والترتيب اللحظي مع الحفاظ على سرعة الاستجابة تحت الضغط العالي.',
    },
    ownership: {
      en: 'Significant end-to-end development ownership covering API services, live match data ingestion, caching pipelines, and responsive portal screens.',
      ar: 'مساهمة محورية في هندسة واجهات الـ APIs، معالجة وتدفق بيانات المباريات المباشرة، آليات التخزين المؤقت، وشاشات العرض التفاعلية.',
    },
    contributions: {
      backend: [
        {
          en: 'Designed high-frequency RESTful endpoints delivering match events, line-ups, and live score changes.',
          ar: 'تصميم واجهات برمجية RESTful عالية التردد لتغذية تفاصيل المباريات والتشكيلات وأحداث الأهداف المباشرة.',
        },
        {
          en: 'Implemented efficient caching strategies to serve concurrent match-day traffic spikes with low server load.',
          ar: 'تطبيق استراتيجيات تخزين مؤقت متقدمة (Caching) للتعامل مع الارتفاع المفاجئ في الزيارات أثناء المباريات الكبرى.',
        },
        {
          en: 'Built automated synchronization routines to fetch, parse, and normalize external sports provider data.',
          ar: 'تطوير مهام برمجية مجدولة لجلب ومزامنة وتوحيد بيانات مزودي إحصائيات كرة القدم الخارجية.',
        },
        {
          en: 'Engineered backend notifications engine for live match milestone alerts (kickoff, goals, cards, full-time).',
          ar: 'بناء نظام إشعارات فوري للأحداث المهمة (انطلاق المباراة، تسجيل الأهداف، البطاقات، انتهاء اللقاء).',
        },
      ],
      frontend: [
        {
          en: 'Built responsive match-center UI components, fixtures schedule, and interactive standings tables.',
          ar: 'بناء واجهات مركز المباريات التفاعلي، وجدول المباريات، ولوحات ترتيب الدوريات المتجاوبة.',
        },
        {
          en: 'Engineered DOM updates using JavaScript & jQuery for live score status badges without full page reloads.',
          ar: 'تطوير تحديثات تفاعلية للشاشات باستخدام JavaScript و jQuery لإظهار حالات المباريات دون الحاجة لإعادة تحميل الصفحة.',
        },
      ],
    },
    technologies: ['PHP', 'Laravel', 'MySQL', 'RESTful APIs', 'Caching', 'JavaScript', 'jQuery', 'Laravel Blade', 'Bootstrap'],
    liveUrl: 'https://dotscore.net/',
    featured: true,
    accentColor: '#10b981',
  },
  {
    id: 'mangoul',
    title: 'Mangoul',
    category: {
      en: 'Services Marketplace',
      ar: 'سوق الخدمات ونقل العفش',
    },
    tagline: {
      en: 'On-demand moving, hauling, and logistics marketplace operating in Saudi Arabia.',
      ar: 'منصة إلكترونية لخدمات نقل الأثاث والشحن وتوصيل الأغراض في المملكة العربية السعودية.',
    },
    description: {
      en: 'A Saudi Arabian two-sided marketplace connecting homeowners and businesses with verified moving, packaging, and logistics service providers, featuring quotation requests, service tiers, and dispute resolution.',
      ar: 'سوق إلكتروني سعودي يربط العملاء بالشركات ومزودي خدمات نقل العفش والشحن المعتمدين، متيحاً استقبال عروض الأسعار والمفاضلة بينها وإتمام حجوزات النقل بكل موثوقية.',
    },
    ownership: {
      en: 'Significant end-to-end development ownership covering multi-tier marketplace business logic, provider management, and administrative control panels.',
      ar: 'مساهمة رئيسية في تطوير منطق عمل السوق الإلكتروني ثنائي الأطراف، إدارة مزودي الخدمة، وبناء لوحات التحكم الإدارية الشاملة.',
    },
    contributions: {
      backend: [
        {
          en: 'Architected request-quotation-booking lifecycle connecting customers directly with regional providers.',
          ar: 'بناء دورة حياة طلبات الخدمات من استقبال طلب النقل، وتلقي عروض الأسعار من المزودين، وحتى تأكيد الحجز.',
        },
        {
          en: 'Designed Role-Based Access Control (RBAC) separating administrative staff, service providers, and end users.',
          ar: 'تصميم هيكل صلاحيات متقدم (RBAC) يفصل بين مسؤولي المنصة، ومزودي الخدمات، والعملاء بدقة وأمان.',
        },
        {
          en: 'Developed RESTful endpoints for mobile apps handling provider profile verification, bids, and order progress.',
          ar: 'تطوير واجهات برمجة تطبيقات RESTful لإدارة توثيق حسابات المزودين، تقديم العروض، ومتابعة تنفيذ الطلبات.',
        },
        {
          en: 'Implemented audit logs, dispute-handling workflows, and comprehensive metrics dashboards.',
          ar: 'تضمين سجلات التدقيق (Audit Logs) وآليات إدارة الشكاوى والنزاعات وقياس جودة أداء المزودين.',
        },
      ],
      frontend: [
        {
          en: 'Built responsive admin dashboards in Laravel Blade and Bootstrap for order oversight, provider approvals, and analytics.',
          ar: 'تطوير لوحات إدارة متكاملة باستخدام Laravel Blade و Bootstrap لمراجعة طلبات التوثيق والطلبات والإحصائيات.',
        },
        {
          en: 'Crafted dynamic booking forms and quotation comparison views utilizing JavaScript and jQuery.',
          ar: 'بناء نماذج الحجز وعرض عروض الأسعار والمقارنة بينها باستخدام JavaScript و jQuery.',
        },
      ],
    },
    technologies: ['PHP', 'Laravel', 'MySQL', 'RESTful APIs', 'RBAC', 'JavaScript', 'jQuery', 'Laravel Blade', 'Bootstrap'],
    liveUrl: 'https://mangoul2.com/',
    featured: true,
    accentColor: '#f59e0b',
  },
  {
    id: 'asaarplus',
    title: 'Asaar Plus',
    category: {
      en: 'Financial Market Data',
      ar: 'بيانات الأسواق المالية والعملات',
    },
    tagline: {
      en: 'Real-time gold prices, currency exchange rates, and financial market insights portal.',
      ar: 'بوابة رقمية لمتابعة أسعار الذهب، العملات الأجنبية، والمؤشرات الاقتصادية المحدثة لحظة بلحظة.',
    },
    description: {
      en: 'A financial platform tracking gold karats, global currencies, and commodities prices with historical charts, scheduled automated synchronization, and subscriber notification alerts.',
      ar: 'منصة لمتابعة أسعار الذهب والعملات والمعادن، تتيح للمستخدمين استعراض الرسوم البيانية التاريخية، ومتابعة تحديثات الأسواق من خلال مهام مزامنة آلية وإشعارات للمشتركين.',
    },
    ownership: {
      en: 'Significant end-to-end development ownership covering automated financial data ingestion, database time-series optimization, and front-facing market boards.',
      ar: 'مساهمة تقنية محورية في بناء مهام أتمتة جمع الأسعار، وهيكلة قواعد البيانات للسجلات التاريخية، وتطوير شاشات عرض المؤشرات.',
    },
    contributions: {
      backend: [
        {
          en: 'Engineered scheduled background jobs (Cron/Laravel Queues) for periodic data fetching from financial sources.',
          ar: 'تطوير مهام خلفية مجدولة (Laravel Queues & Cron Jobs) لجلب تحديثات الأسعار دورياً من مصادر السوق.',
        },
        {
          en: 'Designed optimized MySQL schema with strategic indexing for high-frequency time-series historical records.',
          ar: 'تصميم هيكل بيانات MySQL محسن ومفهرس بدقة لتخزين وتحليل السلاسل الزمنية لأسعار الذهب والعملات.',
        },
        {
          en: 'Built RESTful API endpoints delivering clean JSON data for web clients and subscriber apps.',
          ar: 'بناء واجهات RESTful APIs سريعة لتوفير بيانات الأسعار اللحظية والتاريخية لتطبيقات الويب والجوال.',
        },
        {
          en: 'Implemented alert triggers dispatching notifications when price movements cross predefined thresholds.',
          ar: 'تطوير محرك إشعارات ذكي يُطلق تنبيهات فورية للمستخدمين عند تغير مستويات الأسعار بشكل ملحوظ.',
        },
      ],
      frontend: [
        {
          en: 'Created responsive price boards, currency converters, and trend display cards using Blade and JavaScript.',
          ar: 'تصميم لوحات أسعار تفاعلية، ومحوّل عملات، وبطاقات عرض التغيرات السعرية باستخدام Blade و JavaScript.',
        },
        {
          en: 'Developed administrative console for managing alert campaigns, price adjustments, and market announcements.',
          ar: 'تطوير لوحة تحكم لإدارة الحملات الإشعارية، والتحكم بالبيانات، ونشر التنبيهات الإخبارية.',
        },
      ],
    },
    technologies: ['PHP', 'Laravel', 'MySQL', 'RESTful APIs', 'Scheduled Jobs', 'JavaScript', 'jQuery', 'Laravel Blade', 'Bootstrap'],
    liveUrl: 'https://asaarplus.com/%D8%A7%D8%B3%D8%B9%D8%A7%D8%B1-%D8%A8%D9%84%D8%B3/',
    featured: true,
    accentColor: '#8b5cf6',
  },
  {
    id: 'goldfawry',
    title: 'Gold Fawry',
    category: {
      en: 'Gold Market Information',
      ar: 'أسواق وأسعار الذهب بمصر',
    },
    tagline: {
      en: 'Instant live Egyptian gold prices, karat breakdowns, bullion rates, and historical market trends.',
      ar: 'منصة متخصصة في رصد وتحديث أسعار الذهب الفورية، عيارات الصاغة، والسبائك في السوق المصري.',
    },
    description: {
      en: 'A specialized platform delivering real-time gold price updates across standard karats (24K, 21K, 18K), gold pound rates, and historical price movement logs in the Egyptian market.',
      ar: 'منصة متخصصة ترصد أسعار الذهب اللحظية في مصر لمختلف العيارات (24، 21، 18)، مع أسعار الجنيه الذهب وسجلات حركة الأسعار التاريخية وتغيراتها اليومية.',
    },
    ownership: {
      en: 'Significant end-to-end development ownership covering price aggregation pipelines, cache tuning for traffic spikes, and lightweight client views.',
      ar: 'مساهمة متكاملة في بناء مسارات تحديث الأسعار، وضبط التخزين المؤقت لاستيعاب طفرات التصفح، وبناء الواجهات السريعة.',
    },
    contributions: {
      backend: [
        {
          en: 'Built pricing calculation pipeline supporting buy/sell margins, karat conversions, and gold coin valuations.',
          ar: 'بناء نظام حساب هوامش البيع والشراء، والتحويل بين العيارات، واحتساب قيم السبائك والجنيه الذهب.',
        },
        {
          en: 'Optimized database queries and API response caching to handle extreme traffic during volatile gold market movements.',
          ar: 'تحسين استعلامات قواعد البيانات والتخزين المؤقت للاستجابات لمواكبة الضغط الشديد أثناء تقلبات الأسعار.',
        },
        {
          en: 'Created clean, documented RESTful API endpoints for mobile consumption and third-party integrations.',
          ar: 'إنشاء واجهات RESTful موثقة توفر أحدث الأسعار ومعدلات التغير للتطبيقات والمواقع الشريكة.',
        },
      ],
      frontend: [
        {
          en: 'Designed high-contrast, mobile-first live price tickers and karat tables with real-time visual change indicators.',
          ar: 'تصميم شاشات عرض سريعة الاستجابة للهواتف المحمولة تعرض جدول العيارات مع مؤشرات الصعود والهبوط.',
        },
        {
          en: 'Built lightweight historical summary widgets for quick market comparisons.',
          ar: 'تطوير ودجات خفيفة الوزن للمقارنة السريعة بين أسعار الأيام السابقة وحركة السوق.',
        },
      ],
    },
    technologies: ['PHP', 'Laravel', 'MySQL', 'RESTful APIs', 'Caching', 'JavaScript', 'jQuery', 'Laravel Blade', 'Bootstrap'],
    liveUrl: 'https://goldfawry.com/',
    featured: true,
    accentColor: '#eab308',
  },
];
