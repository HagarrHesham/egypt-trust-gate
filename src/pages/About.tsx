import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Eye, Target, Users, Lightbulb, Heart, Award, Globe2 } from "lucide-react";

const About = () => {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  const coreValues = [
    {
      number: "01",
      title: language === 'en' ? 'Trust' : 'الثقة',
      description: language === 'en' 
        ? 'Building strong, sustainable relationships with investors and local entities.'
        : 'بناء علاقات قوية ومستدامة مع المستثمرين والجهات المحلية.',
      icon: Shield
    },
    {
      number: "02", 
      title: language === 'en' ? 'Transparency' : 'الشفافية',
      description: language === 'en'
        ? 'Providing clear and accurate reports that support investors\' sound decisions.'
        : 'تقديم تقارير واضحة ودقيقة تدعم القرارات السليمة للمستثمرين.',
      icon: Eye
    },
    {
      number: "03",
      title: language === 'en' ? 'Social Responsibility' : 'المسؤولية المجتمعية', 
      description: language === 'en'
        ? 'Contributing to economic development and creating a united community that achieves sustainable economic and social progress.'
        : 'الإسهام في تنمية الاقتصاد ووحدة المجتمع بما يحقق تقدما اقتصاديا واجتماعيا مستداما.',
      icon: Users
    },
    {
      number: "04",
      title: language === 'en' ? 'Professionalism' : 'الاحترافية',
      description: language === 'en'
        ? 'High-quality performance according to the highest international standards.'
        : 'أداء عالي الجودة بتوافق أعلى المعايير العالمية.',
      icon: Award
    }
  ];

  const teamMembers = [
    {
      name: "Ahmed Hesham",
      role: "Business Development", 
      roleAr: "مسؤول بناء شبكة العلاقات وتحليل البيانات",
      image: "/lovable-uploads/d34bef7e-db28-41ce-9bff-0f360d9e0d9e.png"
    },
    {
      name: "Alaa Hesham",
      role: "Founder - CEO",
      roleAr: "مسؤول إدارة المخاطر وال Due Diligence",
      image: "/lovable-uploads/d34bef7e-db28-41ce-9bff-0f360d9e0d9e.png"
    },
    {
      name: "Hagar Hesham", 
      role: "Operations Management",
      roleAr: "مسؤول العمليات والتشغيل التقني",
      image: "/lovable-uploads/d34bef7e-db28-41ce-9bff-0f360d9e0d9e.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - About Global Trust */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-primary/85"></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <img 
                src="/lovable-uploads/5c73632b-646a-4bab-b94f-3e7e3dd4296e.png" 
                alt="Global Trust Logo" 
                className="h-24 w-auto filter brightness-0 invert"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 font-heading">
              About Global Trust
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12">
              A national platform that bridges the gap between global investors and local entities in Egypt, 
              providing accurate and reliable reports on Egyptian companies to support safe and transparent investment decisions.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
              <span className="text-white/90 text-lg">Who We Are</span>
              <div className="ml-3 w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Mission */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                <Target className="h-8 w-8 text-accent-foreground" />
              </div>
              <div className="bg-card p-8 rounded-3xl border border-border shadow-elegant ml-8 mt-8">
                <div className="flex justify-end mb-4">
                  <span className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full border border-accent/20 text-accent text-sm font-medium">
                    Mission
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-accent mb-6 font-heading">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Providing comprehensive and reliable reports on Egyptian companies to support investors' decisions, 
                  enhance integrity, and prevent corruption through accurate and detailed reports covering legal, 
                  financial, and reputational aspects to build a transparent business environment.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <Eye className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="bg-card p-8 rounded-3xl border border-border shadow-elegant mr-8 mt-8">
                <div className="flex justify-start mb-4">
                  <span className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20 text-primary text-sm font-medium">
                    Vision
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-primary mb-6 font-heading">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be Egypt's safe and attractive investment destination through the highest standards of due diligence and compliance, 
                  accelerating trust and promoting sustainable development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Journey Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-3 bg-accent/10 rounded-full border border-accent/20 mb-8">
              <Globe2 className="h-5 w-5 text-accent mr-2" />
              <span className="text-accent font-medium">Investment Journey</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-accent mb-8 font-heading">
              Invest with Confidence...
              <br />
              <span className="text-primary">Your Safe Investment Journey...</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The first national platform connecting global investors with local entities in Egypt through providing 
              reliable and comprehensive reports on Egyptian companies to support safe and transparent investment decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 rounded-full border border-white/20 mb-8">
              <span className="text-white font-medium">Core Values</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-accent mb-8 font-heading">
              Core Values
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Building trust and enabling investors to safely and immediately contribute to strengthening the sustainable economy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {coreValues.map((value, index) => (
              <div key={index} className="relative group">
                <div className={`p-8 rounded-3xl border-2 backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                  index === 0 ? 'bg-accent border-accent text-primary' : 'bg-primary/20 border-white/20 text-white'
                }`}>
                  <div className="flex items-start justify-between mb-6">
                    <div className={`text-5xl font-bold ${index === 0 ? 'text-primary' : 'text-white/60'}`}>
                      {value.number}
                    </div>
                    <value.icon className={`h-12 w-12 ${index === 0 ? 'text-primary' : 'text-white/80'}`} />
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 font-heading ${index === 0 ? 'text-primary' : 'text-white'}`}>
                    {value.title}
                  </h3>
                  <p className={`text-lg leading-relaxed ${index === 0 ? 'text-primary/80' : 'text-white/90'}`}>
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Reports Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 font-heading">
              Reliable Reports Supporting Investment Confidence in Egyptian Companies
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="aspect-[4/5] bg-muted rounded-2xl overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105">
                <div className="w-full h-full bg-gradient-to-br from-muted-foreground/10 to-muted-foreground/30 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Lightbulb className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Sample Report {index}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-accent/10 rounded-full border border-accent/20 mb-8">
              <span className="text-accent font-medium">Management Team</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 font-heading">
              Distinguished Leadership
              <br />
              <span className="text-accent">Future Vision</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-48 h-48 mx-auto rounded-3xl overflow-hidden bg-muted shadow-elegant group-hover:shadow-glow transition-all duration-300">
                    <div className="w-full h-full bg-gradient-to-br from-muted-foreground/20 to-muted-foreground/40 flex items-center justify-center">
                      <Users className="h-16 w-16 text-muted-foreground/60" />
                    </div>
                  </div>
                </div>
                <div className="bg-accent/5 px-8 py-4 rounded-2xl border border-accent/10 inline-block mb-4">
                  <h3 className="text-xl font-bold text-foreground font-heading">{member.name}</h3>
                </div>
                <p className="text-muted-foreground font-medium">{member.role}</p>
                <p className="text-sm text-muted-foreground/80 mt-2">{member.roleAr}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;