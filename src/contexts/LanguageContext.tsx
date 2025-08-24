import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started',
    
    // Hero Section
    'hero.title': 'Your Gateway to Secure Investments',
    'hero.subtitle': 'Comprehensive due diligence and verification services for informed business decisions across Egypt and the Middle East',
    'hero.cta.primary': 'Start Verification',
    'hero.cta.secondary': 'Learn More',
    
    // Services Section
    'services.badge': 'Our Services',
    'services.title': 'Comprehensive Due Diligence Solutions',
    'services.subtitle': 'Choose from our data-driven verification services or comprehensive field verification for complete business intelligence.',
    'services.core.title': 'Core Services',
    'services.core.subtitle': 'Essential due diligence and verification services',
    'services.advanced.title': 'Advanced Services',
    'services.advanced.subtitle': 'In-depth analysis and comprehensive verification services',
    'services.field.title': 'Field Services',
    'services.field.subtitle': 'On-site verification and specialized advisory services',
    'services.cta.title': 'Need Custom Due Diligence?',
    'services.cta.subtitle': 'Contact our experts for tailored solutions combining multiple services for complex verification requirements.',
    'services.cta.button': 'Speak to Expert',
    'services.request': 'Request',
    
    // Footer
    'footer.tagline': 'Empowering informed business decisions through comprehensive due diligence and verification services.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.contact': 'Contact Us',
    'footer.rights': 'All rights reserved.',
    'footer.phone': 'Phone',
    'footer.email': 'Email',
    'footer.address': 'Address',
    
    // About Page
    'about.hero.title': 'About Global Trust',
    'about.hero.subtitle': 'Your trusted partner in due diligence and business verification',
    'about.mission.title': 'Our Mission',
    'about.mission.content': 'To provide comprehensive, reliable due diligence and verification services that empower businesses and investors to make informed decisions with confidence.',
    'about.vision.title': 'Our Vision',
    'about.vision.content': 'To be the leading provider of business intelligence and verification services in Egypt and the Middle East, setting the standard for accuracy, reliability, and professionalism.',
    'about.values.title': 'Our Values',
    'about.values.accuracy': 'Accuracy',
    'about.values.accuracy.desc': 'Precision in every report and verification',
    'about.values.integrity': 'Integrity',
    'about.values.integrity.desc': 'Honest and transparent business practices',
    'about.values.reliability': 'Reliability',
    'about.values.reliability.desc': 'Consistent and dependable service delivery',
    'about.values.expertise': 'Expertise',
    'about.values.expertise.desc': 'Deep knowledge and professional excellence',
    'about.team.title': 'Our Team',
    'about.team.subtitle': 'Meet the experts behind our comprehensive verification services',
  },
  ar: {
    // Header
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'الخدمات',
    'nav.contact': 'اتصل بنا',
    'nav.getStarted': 'ابدأ الآن',
    
    // Hero Section
    'hero.title': 'بوابتك للاستثمارات الآمنة',
    'hero.subtitle': 'خدمات شاملة للعناية الواجبة والتحقق لاتخاذ قرارات تجارية مدروسة عبر مصر والشرق الأوسط',
    'hero.cta.primary': 'ابدأ التحقق',
    'hero.cta.secondary': 'اعرف المزيد',
    
    // Services Section
    'services.badge': 'خدماتنا',
    'services.title': 'حلول شاملة للعناية الواجبة',
    'services.subtitle': 'اختر من خدمات التحقق المدفوعة بالبيانات أو التحقق الميداني الشامل للحصول على ذكاء أعمال كامل.',
    'services.core.title': 'الخدمات الأساسية',
    'services.core.subtitle': 'خدمات العناية الواجبة والتحقق الأساسية',
    'services.advanced.title': 'الخدمات المتقدمة',
    'services.advanced.subtitle': 'تحليل متعمق وخدمات تحقق شاملة',
    'services.field.title': 'الخدمات الميدانية',
    'services.field.subtitle': 'التحقق في الموقع والخدمات الاستشارية المتخصصة',
    'services.cta.title': 'تحتاج عناية واجبة مخصصة؟',
    'services.cta.subtitle': 'اتصل بخبرائنا للحصول على حلول مخصصة تجمع بين خدمات متعددة لمتطلبات التحقق المعقدة.',
    'services.cta.button': 'تحدث إلى خبير',
    'services.request': 'طلب',
    
    // Footer
    'footer.tagline': 'تمكين القرارات التجارية المدروسة من خلال خدمات العناية الواجبة والتحقق الشاملة.',
    'footer.quickLinks': 'روابط سريعة',
    'footer.services': 'الخدمات',
    'footer.contact': 'اتصل بنا',
    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.phone': 'الهاتف',
    'footer.email': 'البريد الإلكتروني',
    'footer.address': 'العنوان',
    
    // About Page
    'about.hero.title': 'حول جلوبال ترست',
    'about.hero.subtitle': 'شريكك الموثوق في العناية الواجبة والتحقق من الأعمال',
    'about.mission.title': 'مهمتنا',
    'about.mission.content': 'تقديم خدمات شاملة وموثوقة للعناية الواجبة والتحقق تمكن الشركات والمستثمرين من اتخاذ قرارات مدروسة بثقة.',
    'about.vision.title': 'رؤيتنا',
    'about.vision.content': 'أن نكون المزود الرائد لخدمات ذكاء الأعمال والتحقق في مصر والشرق الأوسط، ووضع معايير الدقة والموثوقية والمهنية.',
    'about.values.title': 'قيمنا',
    'about.values.accuracy': 'الدقة',
    'about.values.accuracy.desc': 'الدقة في كل تقرير وتحقق',
    'about.values.integrity': 'النزاهة',
    'about.values.integrity.desc': 'ممارسات تجارية صادقة وشفافة',
    'about.values.reliability': 'الموثوقية',
    'about.values.reliability.desc': 'تقديم خدمة متسقة وموثوقة',
    'about.values.expertise': 'الخبرة',
    'about.values.expertise.desc': 'معرفة عميقة وتميز مهني',
    'about.team.title': 'فريقنا',
    'about.team.subtitle': 'تعرف على الخبراء وراء خدمات التحقق الشاملة لدينا',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};