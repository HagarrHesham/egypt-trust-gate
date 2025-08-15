import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Shield, Globe, TrendingUp, FileText, MapPin } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [language] = useState<'en' | 'ar'>('en');

  const features = [
    {
      icon: Shield,
      title: language === 'en' ? 'Trusted Verification' : 'التحقق الموثوق',
      description: language === 'en' ? 'Global compliance screening' : 'فحص الامتثال العالمي'
    },
    {
      icon: Globe,
      title: language === 'en' ? 'Global Coverage' : 'التغطية العالمية',
      description: language === 'en' ? 'Local presence worldwide' : 'وجود محلي في جميع أنحاء العالم'
    },
    {
      icon: TrendingUp,
      title: language === 'en' ? 'Real-time Data' : 'البيانات الفورية',
      description: language === 'en' ? 'Live financial insights' : 'رؤى مالية مباشرة'
    },
    {
      icon: FileText,
      title: language === 'en' ? 'Detailed Reports' : 'تقارير مفصلة',
      description: language === 'en' ? 'Comprehensive analysis' : 'تحليل شامل'
    }
  ];

  const handleSearch = () => {
    if (searchTerm.trim()) {
      console.log("Searching for:", searchTerm);
      // Here we would implement actual search functionality
    }
  };

  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Financial data background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-subtle"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Hero Content */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <MapPin className="h-4 w-4 text-accent mr-2" />
              <span className="text-sm font-medium text-accent">
                {language === 'en' ? 'Operating in 50+ Countries' : 'نعمل في أكثر من 50 دولة'}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 font-heading leading-tight">
              {language === 'en' ? (
                <>
                  <span className="bg-gradient-primary bg-clip-text text-transparent">Global Trust</span>
                  <br />
                  Due Diligence Platform
                </>
              ) : (
                <>
                  <span className="bg-gradient-primary bg-clip-text text-transparent">منصة الثقة العالمية</span>
                  <br />
                  للعناية الواجبة
                </>
              )}
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              {language === 'en' 
                ? 'Comprehensive background checks, company verification, and investor due diligence services powered by global data networks and local field verification.'
                : 'فحوصات شاملة للخلفيات، والتحقق من الشركات، وخدمات العناية الواجبة للمستثمرين مدعومة بشبكات البيانات العالمية والتحقق الميداني المحلي.'
              }
            </p>

            {/* Search Interface */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <div className="flex rounded-xl border border-border bg-card shadow-card overflow-hidden">
                  <Input
                    placeholder={language === 'en' ? "Search for companies, individuals, or entities..." : "البحث عن الشركات أو الأفراد أو الكيانات..."}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border-0 bg-transparent text-lg py-6 px-6 focus-visible:ring-0 focus-visible:ring-offset-0"
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  />
                  <Button 
                    onClick={handleSearch}
                    className="m-2 px-8 py-4 rounded-lg"
                    size="lg"
                  >
                    <Search className="h-5 w-5 mr-2" />
                    {language === 'en' ? 'Search' : 'بحث'}
                  </Button>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mt-3">
                {language === 'en' 
                  ? 'Try searching: "Apple Inc", "ADNOC", or any company name'
                  : 'جرب البحث: "شركة آبل"، "أدنوك"، أو أي اسم شركة'
                }
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" className="px-8 py-4 text-lg">
                {language === 'en' ? 'Start Due Diligence' : 'ابدأ العناية الواجبة'}
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                {language === 'en' ? 'View Sample Report' : 'عرض تقرير نموذجي'}
              </Button>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-card rounded-xl p-6 border border-border shadow-card hover:shadow-elegant transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 font-heading">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;