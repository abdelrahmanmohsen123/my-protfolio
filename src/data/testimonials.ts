import { TestimonialItem } from '../types';

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'mohamed-ramadan',
    clientName: {
      en: 'Mohamed Ramadan',
      ar: 'محمد رمضان',
    },
    role: {
      en: 'Business Owner & Product Lead',
      ar: 'صاحب أعمال ومدير منتج',
    },
    company: 'Commercial Project',
    avatar: 'MR',
    message: {
      en: 'Abdelrahman delivered excellent work that exceeded my expectations. The system was well-organized, easy to use, and professionally implemented. I was so satisfied with the quality that I decided to pay an additional bonus as appreciation for his effort.',
      ar: 'قدم عبد الرحمن عملاً ممتازاً فاق توقعاتي. كان النظام منظماً وسهل الاستخدام ونُفذ باحترافية بالغة ومرونة عالية. كنت راضياً جداً عن الجودة والالتزام وسرعة التنفيذ.',
    },
    projectOrService: {
      en: 'Backend Architecture & Business System',
      ar: 'تطوير الأنظمة الخلفية ولوحة التحكم',
    },
    rating: 5,
    isDraft: true, // Marked as draft preview until client formally confirms publication
  },
];
