import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Mail, Phone, MapPin, Globe, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email.trim()) {
      console.log("Subscribing email:", email);
      setEmail("");
    }
  };

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" }
  ];

  const services = [
    { label: "Company Verification", href: "#" },
    { label: "Due Diligence", href: "#" },
    { label: "Risk Assessment", href: "#" },
    { label: "Compliance Check", href: "#" }
  ];

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+971 4 123 4567" },
    { icon: Mail, label: "Email", value: "info@globaltrust.com" },
    { icon: MapPin, label: "Address", value: "Dubai, UAE" }
  ];

  return (
    <footer className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/5c73632b-646a-4bab-b94f-3e7e3dd4296e.png" 
                alt="Global Trust Logo" 
                className="h-12 w-auto filter brightness-0 invert mr-3"
              />
              <div>
                <h3 className="text-2xl font-bold font-heading">Global Trust</h3>
                <p className="text-white/80 text-sm">{t('hero.title')}</p>
              </div>
            </div>
            
            <p className="text-white/90 mb-6 leading-relaxed text-lg">
              {t('footer.tagline')}
            </p>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3 font-heading">Stay Updated</h4>
              <div className="flex gap-2 max-w-sm">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
                />
                <Button 
                  onClick={handleSubscribe}
                  variant="secondary"
                  className="shrink-0"
                >
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <Button size="sm" variant="ghost" className="text-white hover:bg-white/10 p-2">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:bg-white/10 p-2">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:bg-white/10 p-2">
                <Globe className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg font-heading">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-lg font-heading">{t('footer.services')}</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="text-white/80 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {service.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <h4 className="font-semibold mb-6 text-lg font-heading text-center">{t('footer.contact')}</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center justify-center md:justify-start">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-3">
                  <info.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">{info.label}</p>
                  <p className="text-white font-medium">{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70">
              © 2024 Global Trust. {t('footer.rights')}
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;