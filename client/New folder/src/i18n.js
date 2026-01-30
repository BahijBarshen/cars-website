import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
const resources = {
  ar: {
    dir: 'rtl',
    search: 'بحث في Amazon',
    all: 'الكل',
    hello: 'مرحباً، تسجيل الدخول',
    account: 'الحساب والقوائم',
    orders: 'الطلبات والمشتريات',
    cart: 'العربة',
    heroTitle: 'عروض رأس السنة وصلت الآن',
    heroSub: 'اجعل 2026 عامك',
    shopNow: 'تسوق الآن',
    categories: ["ألعاب الفيديو", "الكمبيوتر", "المنزل", "الموضة"],
    catTitle: "تسوق حسب الفئة"
  },
  en: {
    dir: 'ltr',
    search: 'Search Amazon',
    all: 'All',
    hello: 'Hello, Sign in',
    account: 'Account & Lists',
    orders: 'Returns & Orders',
    cart: 'Cart',
    heroTitle: 'New Year Deals are Here',
    heroSub: 'Make 2026 Your Year',
    shopNow: 'Shop now',
    categories: ["Video Games", "Computers", "Home", "Fashion"],
    catTitle: "Shop by Category"
  },
  de: {
    dir: 'ltr',
    search: 'Suche Amazon',
    all: 'Alle',
    hello: 'Hallo, Anmelden',
    account: 'Konto und Listen',
    orders: 'Warenrücksendungen',
    cart: 'Einkaufswagen',
    heroTitle: 'Neujahrsangebote sind da',
    heroSub: 'Machen Sie 2026 zu Ihrem Jahr',
    shopNow: 'Jetzt einkaufen',
    categories: ["Videospiele", "Computer", "Heim", "Mode"],
    catTitle: "Kategorie shoppen"
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18n;