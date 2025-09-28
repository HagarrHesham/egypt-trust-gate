import React, { createContext, useContext, ReactNode } from 'react';

interface LanguageContextType {
  t: (key: string) => string;
}

const translations = {
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
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const t = (key: string): string => {
    return translations[key as keyof typeof translations] || key;
  };

  return (
    <LanguageContext.Provider value={{ t }}>
      {children}
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