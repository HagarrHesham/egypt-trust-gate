import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Mail, Phone, MapPin, Globe, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const [language] = useState<'en' | 'ar'>('en');
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email.trim()) {
      console.log("Subscribing email:", email);
      setEmail("");
    }
  };

  const footerSections = [
    {
      title: language === 'en' ? 'Services' : 'الخدمات',
      links: [
        { label: language === 'en' ? 'Due Diligence' : 'العناية الواجبة', href: '#' },
        { label: language === 'en' ? 'Credit Reports' : 'تقارير الائتمان', href: '#' },
        { label: language === 'en' ? 'Field Verification' : 'التحقق الميداني', href: '#' },
        { label: language === 'en' ? 'Sanctions Screening' : 'فحص العقوبات', href: '#' }
      ]
    },
    {
      title: language === 'en' ? 'Company' : 'الشركة',
      links: [
        { label: language === 'en' ? 'About Us' : 'من نحن', href: '#' },
        { label: language === 'en' ? 'Our Team' : 'فريقنا', href: '#' },
        { label: language === 'en' ? 'Careers' : 'الوظائف', href: '#' },
        { label: language === 'en' ? 'Contact' : 'اتصل بنا', href: '#' }
      ]
    },
    {
      title: language === 'en' ? 'Resources' : 'الموارد',
      links: [
        { label: language === 'en' ? 'Documentation' : 'التوثيق', href: '#' },
        { label: language === 'en' ? 'API Reference' : 'مرجع API', href: '#' },
        { label: language === 'en' ? 'Support Center' : 'مركز الدعم', href: '#' },
        { label: language === 'en' ? 'Privacy Policy' : 'سياسة الخصوصية', href: '#' }
      ]
    }
  ];

  const globalOffices = [
    {
      country: language === 'en' ? 'Egypt' : 'مصر',
      city: language === 'en' ? 'Cairo' : 'القاهرة',
      address: language === 'en' ? 'New Administrative Capital' : 'العاصمة الإدارية الجديدة'
    },
    {
      country: language === 'en' ? 'UAE' : 'الإمارات',
      city: language === 'en' ? 'Dubai' : 'دبي',
      address: language === 'en' ? 'Dubai International Financial Centre' : 'مركز دبي المالي العالمي'
    },
    {
      country: language === 'en' ? 'Saudi Arabia' : 'السعودية',
      city: language === 'en' ? 'Riyadh' : 'الرياض',
      address: language === 'en' ? 'King Abdullah Financial District' : 'حي الملك عبدالله المالي'
    }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Company Info & Newsletter */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                <Search className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-heading">
                  {language === 'en' ? 'Egypt: Global Trust' : 'مصر: الثقة العالمية'}
                </h3>
                <p className="text-primary-foreground/80 text-sm">
                  {language === 'en' ? 'Due Diligence & Verification Platform' : 'منصة العناية الواجبة والتحقق'}
                </p>
              </div>
            </div>
            
            <p className="text-primary-foreground/90 mb-8 leading-relaxed">
              {language === 'en' 
                ? 'Leading provider of comprehensive due diligence services, combining global data networks with local field verification across 50+ countries.'
                : 'المزود الرائد لخدمات العناية الواجبة الشاملة، يجمع بين شبكات البيانات العالمية والتحقق الميداني المحلي في أكثر من 50 دولة.'
              }
            </p>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-4 font-heading">
                {language === 'en' ? 'Stay Updated' : 'ابق على اطلاع'}
              </h4>
              <div className="flex space-x-3">
                <Input
                  placeholder={language === 'en' ? "Enter your email" : "أدخل بريدك الإلكتروني"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button
                  onClick={handleSubscribe}
                  variant="secondary"
                  className="px-6"
                >
                  {language === 'en' ? 'Subscribe' : 'اشترك'}
                </Button>
              </div>
            </div>
          </div>

          {/* Global Offices */}
          <div>
            <h4 className="font-semibold mb-6 font-heading">
              {language === 'en' ? 'Global Offices' : 'المكاتب العالمية'}
            </h4>
            <div className="space-y-4">
              {globalOffices.map((office, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-primary-foreground/5 rounded-lg">
                  <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium text-primary-foreground">
                      {office.city}, {office.country}
                    </h5>
                    <p className="text-sm text-primary-foreground/80">
                      {office.address}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Section - Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 py-12 border-t border-b border-primary-foreground/20">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4 font-heading">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mb-6 md:mb-0">
            {/* Contact Info */}
            <div className="flex items-center space-x-2 text-primary-foreground/80">
              <Mail className="h-4 w-4" />
              <span className="text-sm">contact@egyptglobaltrust.com</span>
            </div>
            <div className="flex items-center space-x-2 text-primary-foreground/80">
              <Phone className="h-4 w-4" />
              <span className="text-sm">+20 2 1234 5678</span>
            </div>
            <div className="flex items-center space-x-2 text-primary-foreground/80">
              <Globe className="h-4 w-4" />
              <span className="text-sm">
                {language === 'en' ? '50+ Countries' : 'أكثر من 50 دولة'}
              </span>
            </div>
          </div>

          {/* Social Links & Copyright */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="flex items-center space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-primary-foreground/60">
              © 2024 Egypt: Global Trust. {language === 'en' ? 'All rights reserved.' : 'جميع الحقوق محفوظة.'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;