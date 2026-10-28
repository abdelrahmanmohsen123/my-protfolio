import { ref, computed, onMounted } from 'vue';
import { Language } from '../types';
import { translations } from '../data/translations';

const currentLang = ref<Language>('en');

export function useLanguage() {
  const setLanguage = (lang: Language) => {
    currentLang.value = lang;
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio_lang', lang);
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
      if (lang === 'ar') {
        document.body.classList.add('font-arabic');
        document.body.classList.remove('font-sans');
      } else {
        document.body.classList.add('font-sans');
        document.body.classList.remove('font-arabic');
      }
    }
  };

  const toggleLanguage = () => {
    setLanguage(currentLang.value === 'en' ? 'ar' : 'en');
  };

  onMounted(() => {
    const saved = localStorage.getItem('portfolio_lang') as Language;
    if (saved && (saved === 'en' || saved === 'ar')) {
      setLanguage(saved);
    } else {
      setLanguage('en');
    }
  });

  const t = computed(() => translations[currentLang.value]);
  const isRtl = computed(() => currentLang.value === 'ar');

  return {
    currentLang,
    isRtl,
    setLanguage,
    toggleLanguage,
    t,
  };
}
