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

    // Core Services
    'services.core.basicProfiles.title': 'Basic Company Profiles',
    'services.core.basicProfiles.desc': 'Providing reliable information about Egyptian companies',
    'services.core.legalTax.title': 'Legal & Tax Verification',
    'services.core.legalTax.desc': 'Reviewing commercial registration and tax records for compliance',
    'services.core.simplified.title': 'Simplified Reports',
    'services.core.simplified.desc': 'Summarizing the company\'s legal and financial status in an easy-to-read format',
    'services.core.media.title': 'Media Monitoring Services',
    'services.core.media.desc': 'Tracking media coverage about companies to enhance transparency',

    // Advanced Services
    'services.advanced.operational.title': 'Operational Verification',
    'services.advanced.operational.desc': 'Assessing actual company operations, quality certifications, and industry licenses',
    'services.advanced.supplyChain.title': 'Detailed Supply Chain Audits',
    'services.advanced.supplyChain.desc': 'Examining suppliers, business partners, and client networks',
    'services.advanced.comprehensive.title': 'Comprehensive Legal, Financial & Criminal Checks',
    'services.advanced.comprehensive.desc': 'In-depth due diligence across all risk areas',
    'services.advanced.documents.title': 'Official Document Retrieval',
    'services.advanced.documents.desc': 'Providing certified copies of commercial registry and official records',

    // Advanced Services Features
    'services.advanced.operational.feature1': 'Company registration details',
    'services.advanced.operational.feature2': 'Basic financial data overview',
    'services.advanced.operational.feature3': 'Management structure',
    'services.advanced.operational.feature4': 'Business activity verification',
    'services.advanced.supplyChain.feature1': 'Supplier verification',
    'services.advanced.supplyChain.feature2': 'Partner relationship mapping',
    'services.advanced.supplyChain.feature3': 'Client network analysis',
    'services.advanced.supplyChain.feature4': 'Supply chain risk assessment',
    'services.advanced.comprehensive.feature1': 'Legal background verification',
    'services.advanced.comprehensive.feature2': 'Financial health assessment',
    'services.advanced.comprehensive.feature3': 'Criminal record checks',
    'services.advanced.comprehensive.feature4': 'Litigation history review',
    'services.advanced.documents.feature1': 'Commercial registry documents',
    'services.advanced.documents.feature2': 'Certified official records',
    'services.advanced.documents.feature3': 'Legal entity certificates',
    'services.advanced.documents.feature4': 'Government filing copies',

    // Field Services
    'services.field.onSite.title': 'On-Site Verification',
    'services.field.onSite.desc': 'Direct company visits with photo-documented reports confirming actual operations',
    'services.field.industrySpecific.title': 'Industry-Specific Reports',
    'services.field.industrySpecific.desc': 'Tailored insights based on sector or specific investor needs',
    'services.field.investment.title': 'Investment Advisory',
    'services.field.investment.desc': 'Guidance for mergers, acquisitions, or market entry strategies',
    'services.field.compliance.title': 'Compliance & Reputation Checks',
    'services.field.compliance.desc': 'Legal record verification, regulatory compliance, reputation assessments, and full-spectrum due diligence',
    
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

    // Core Services
    'services.core.basicProfiles.title': 'التقارير التعريفية الأساسية',
    'services.core.basicProfiles.desc': 'تقديم معلومات موثوقة عن الشركات المصرية',
    'services.core.legalTax.title': 'التحقق القانوني والضريبي',
    'services.core.legalTax.desc': 'مراجعة السجل التجاري والبطاقة الضريبية للتأكد من الامتثال',
    'services.core.simplified.title': 'التقارير المبسطة',
    'services.core.simplified.desc': 'رصد الوضع القانوني والمالي للشركات بشكل مختصر وسهل الفهم',
    'services.core.media.title': 'خدمات البحث والرصد الإعلامي',
    'services.core.media.desc': 'متابعة ما ينشر عن الشركات في وسائل الإعلام المختلفة لتعزيز الشفافية',

    // Advanced Services
    'services.advanced.operational.title': 'التحقق من التشغيل الفعلي وتراخيص الجودة',
    'services.advanced.operational.desc': 'التحقق من التشغيل الفعلي وتراخيص الجودة والصناعة والتشغيل للشركات',
    'services.advanced.supplyChain.title': 'فحص تفصيلي لسلاسل التوريد',
    'services.advanced.supplyChain.desc': 'فحص تفصيلي لسلاسل التوريد والشركاء التجاريين والعملاء',
    'services.advanced.comprehensive.title': 'تغطية الجوانب القانونية والمالية والجنائية',
    'services.advanced.comprehensive.desc': 'تغطية الجوانب القانونية والمالية والجنائية بشكل تفصيلي',
    'services.advanced.documents.title': 'خدمة استخراج النسخ الرسمية',
    'services.advanced.documents.desc': 'خدمة استخراج النسخ الرسمية من السجلات التجاري',

    // Advanced Services Features
    'services.advanced.operational.feature1': 'تفاصيل تسجيل الشركة',
    'services.advanced.operational.feature2': 'نظرة عامة على البيانات المالية الأساسية',
    'services.advanced.operational.feature3': 'الهيكل الإداري',
    'services.advanced.operational.feature4': 'التحقق من نشاط الشركة',
    'services.advanced.supplyChain.feature1': 'التحقق من الموردين',
    'services.advanced.supplyChain.feature2': 'رسم خريطة علاقات الشركاء',
    'services.advanced.supplyChain.feature3': 'تحليل شبكة العملاء',
    'services.advanced.supplyChain.feature4': 'تقييم مخاطر سلسلة التوريد',
    'services.advanced.comprehensive.feature1': 'التحقق من الخلفية القانونية',
    'services.advanced.comprehensive.feature2': 'تقييم الصحة المالية',
    'services.advanced.comprehensive.feature3': 'فحص السجل الجنائي',
    'services.advanced.comprehensive.feature4': 'مراجعة تاريخ الدعاوى القضائية',
    'services.advanced.documents.feature1': 'مستندات السجل التجاري',
    'services.advanced.documents.feature2': 'السجلات الرسمية الموثقة',
    'services.advanced.documents.feature3': 'شهادات الكيان القانوني',
    'services.advanced.documents.feature4': 'نسخ من الإيداعات الحكومية',

    // Field Services
    'services.field.onSite.title': 'التحقق الميداني من مقر الشركة',
    'services.field.onSite.desc': 'التحقق الميداني من مقر الشركة عبر زيارة مباشرة وتقرير مصوّر يثبت النشاط الفعلي',
    'services.field.industrySpecific.title': 'التقارير المتخصصة حسب الصناعة',
    'services.field.industrySpecific.desc': 'التقارير المتخصصة حسب الصناعة أو وفق احتياجات المستثمر',
    'services.field.investment.title': 'الاستشارات الاستثمارية',
    'services.field.investment.desc': 'الاستشارات الاستثمارية لصفقات الدمج والاستحواذ أو الدخول لأسواق جديدة',
    'services.field.compliance.title': 'التحقق من السجلات القانونية والامتثال',
    'services.field.compliance.desc': 'التحقق من السجلات القانونية والامتثال التنظيمي وتقارير السمعة والعناية الواجبه بانوعها',
    
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