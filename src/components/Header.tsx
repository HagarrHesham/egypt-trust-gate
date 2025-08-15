import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe, Search, User, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const navItems = [
    { label: language === 'en' ? 'Due Diligence' : 'العناية الواجبة', href: '#services' },
    { label: language === 'en' ? 'Field Verification' : 'التحقق الميداني', href: '#verification' },
    { label: language === 'en' ? 'Reports' : 'التقارير', href: '#reports' },
    { label: language === 'en' ? 'About' : 'حول', href: '#about' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-card">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
              <Search className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground font-heading">
                {language === 'en' ? 'Egypt: Global Trust' : 'مصر: الثقة العالمية'}
              </h1>
              <p className="text-xs text-muted-foreground">
                {language === 'en' ? 'Due Diligence & Verification' : 'العناية الواجبة والتحقق'}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-2"
            >
              <Globe className="h-4 w-4" />
              <span>{language === 'en' ? 'العربية' : 'English'}</span>
            </Button>
            
            <Button variant="outline" size="sm" className="hidden md:flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>{language === 'en' ? 'Login' : 'تسجيل الدخول'}</span>
            </Button>

            <Button size="sm" className="hidden md:block">
              {language === 'en' ? 'Get Started' : 'ابدأ الآن'}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button variant="outline" size="sm" className="flex items-center justify-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{language === 'en' ? 'Login' : 'تسجيل الدخول'}</span>
                </Button>
                <Button size="sm">
                  {language === 'en' ? 'Get Started' : 'ابدأ الآن'}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;