import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileCheck, 
  Shield, 
  MapPin, 
  Camera, 
  Users, 
  CreditCard,
  AlertTriangle,
  Building,
  Clock,
  CheckCircle,
  Scale,
  TrendingUp,
  Globe,
  UserCheck,
  BarChart3,
  Briefcase
} from "lucide-react";

const ServicesSection = () => {
  const [language] = useState<'en' | 'ar'>('en');

  const coreServices = [
    {
      icon: FileCheck,
      title: language === 'en' ? 'Credit Reports' : 'تقارير الائتمان',
      description: language === 'en' ? 'For companies locally and globally' : 'للشركات محلياً وعالمياً',
      features: [
        language === 'en' ? 'Local market credit analysis' : 'تحليل الائتمان في السوق المحلي',
        language === 'en' ? 'Global financial health assessment' : 'تقييم الصحة المالية العالمية',
        language === 'en' ? 'Cross-border risk evaluation' : 'تقييم المخاطر عبر الحدود'
      ],
      price: language === 'en' ? 'From $150' : 'من 150 دولار',
      deliveryTime: language === 'en' ? '24-48 hours' : '24-48 ساعة'
    },
    {
      icon: Scale,
      title: language === 'en' ? 'Legal Verification' : 'التحقق القانوني',
      description: language === 'en' ? 'Company registration and regulatory compliance' : 'تسجيل الشركة والامتثال التنظيمي',
      features: [
        language === 'en' ? 'Corporate registration verification' : 'التحقق من تسجيل الشركات',
        language === 'en' ? 'Regulatory compliance status' : 'حالة الامتثال التنظيمي',
        language === 'en' ? 'Legal documentation review' : 'مراجعة الوثائق القانونية'
      ],
      price: language === 'en' ? 'From $120' : 'من 120 دولار',
      deliveryTime: language === 'en' ? '2-5 days' : '2-5 أيام'
    },
    {
      icon: TrendingUp,
      title: language === 'en' ? 'Risk Assessment' : 'تقييم المخاطر',
      description: language === 'en' ? 'Financial and commercial risk analysis' : 'تحليل المخاطر المالية والتجارية',
      features: [
        language === 'en' ? 'Financial risk profiling' : 'تحديد المخاطر المالية',
        language === 'en' ? 'Commercial viability assessment' : 'تقييم الجدوى التجارية',
        language === 'en' ? 'Market position analysis' : 'تحليل الموقف في السوق'
      ],
      price: language === 'en' ? 'From $200' : 'من 200 دولار',
      deliveryTime: language === 'en' ? '3-7 days' : '3-7 أيام'
    },
    {
      icon: Globe,
      title: language === 'en' ? 'Industry & Country Reports' : 'تقارير الصناعة والدولة',
      description: language === 'en' ? 'Tailored to sector or geography' : 'مخصصة للقطاع أو الجغرافيا',
      features: [
        language === 'en' ? 'Sector-specific analysis' : 'تحليل خاص بالقطاع',
        language === 'en' ? 'Country risk assessment' : 'تقييم مخاطر الدولة',
        language === 'en' ? 'Regional market insights' : 'رؤى السوق الإقليمية'
      ],
      price: language === 'en' ? 'From $300' : 'من 300 دولار',
      deliveryTime: language === 'en' ? '5-10 days' : '5-10 أيام'
    }
  ];

  const advancedServices = [
    {
      icon: MapPin,
      title: language === 'en' ? 'On-the-Ground Verification' : 'التحقق الميداني',
      description: language === 'en' ? 'Through our certified offices and partner network' : 'من خلال مكاتبنا المعتمدة وشبكة الشركاء',
      features: [
        language === 'en' ? 'Certified office network' : 'شبكة مكاتب معتمدة',
        language === 'en' ? 'Partner verification services' : 'خدمات التحقق من الشركاء',
        language === 'en' ? 'Real-time field reports' : 'تقارير ميدانية في الوقت الفعلي'
      ],
      price: language === 'en' ? 'From $500' : 'من 500 دولار',
      deliveryTime: language === 'en' ? '7-14 days' : '7-14 يوم'
    },
    {
      icon: UserCheck,
      title: language === 'en' ? 'Background Checks' : 'فحوصات الخلفية',
      description: language === 'en' ? 'Comprehensive checks on companies or potential partners' : 'فحوصات شاملة للشركات أو الشركاء المحتملين',
      features: [
        language === 'en' ? 'Company history analysis' : 'تحليل تاريخ الشركة',
        language === 'en' ? 'Management background verification' : 'التحقق من خلفية الإدارة',
        language === 'en' ? 'Partnership risk assessment' : 'تقييم مخاطر الشراكة'
      ],
      price: language === 'en' ? 'From $400' : 'من 400 دولار',
      deliveryTime: language === 'en' ? '5-10 days' : '5-10 أيام'
    },
    {
      icon: BarChart3,
      title: language === 'en' ? 'Customized Reports & Analytics' : 'تقارير وتحليلات مخصصة',
      description: language === 'en' ? 'Designed to meet investors\' unique requirements' : 'مصممة لتلبية متطلبات المستثمرين الفريدة',
      features: [
        language === 'en' ? 'Tailored report formats' : 'تنسيقات تقارير مخصصة',
        language === 'en' ? 'Advanced data analytics' : 'تحليلات بيانات متقدمة',
        language === 'en' ? 'Investor-specific insights' : 'رؤى خاصة بالمستثمرين'
      ],
      price: language === 'en' ? 'From $600' : 'من 600 دولار',
      deliveryTime: language === 'en' ? '7-14 days' : '7-14 يوم'
    },
    {
      icon: Briefcase,
      title: language === 'en' ? 'Investment Advisory' : 'الاستشارات الاستثمارية',
      description: language === 'en' ? 'For M&A transactions or market entry strategies' : 'لعمليات الاندماج والاستحواذ أو استراتيجيات دخول السوق',
      features: [
        language === 'en' ? 'M&A transaction support' : 'دعم عمليات الاندماج والاستحواذ',
        language === 'en' ? 'Market entry strategy' : 'استراتيجية دخول السوق',
        language === 'en' ? 'Investment risk advisory' : 'استشارات مخاطر الاستثمار'
      ],
      price: language === 'en' ? 'From $1,000' : 'من 1000 دولار',
      deliveryTime: language === 'en' ? '10-21 days' : '10-21 يوم'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            {language === 'en' ? 'Our Services' : 'خدماتنا'}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-heading">
            {language === 'en' ? 'Comprehensive Due Diligence Solutions' : 'حلول شاملة للعناية الواجبة'}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'en' 
              ? 'Choose from our data-driven verification services or comprehensive field verification for complete business intelligence.'
              : 'اختر من خدمات التحقق المدفوعة بالبيانات أو التحقق الميداني الشامل للحصول على ذكاء أعمال كامل.'
            }
          </p>
        </div>

        {/* Core Services */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
              <CreditCard className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground font-heading">
                {language === 'en' ? 'Core Services' : 'الخدمات الأساسية'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en' ? 'Essential due diligence and verification services' : 'خدمات العناية الواجبة والتحقق الأساسية'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
            {coreServices.map((service, index) => (
              <Card key={index} className="bg-gradient-card border border-border shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="outline">{service.price}</Badge>
                  </div>
                  <CardTitle className="font-heading">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-success mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {service.deliveryTime}
                    </div>
                    <Button size="sm" variant="outline">
                      {language === 'en' ? 'Request' : 'طلب'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Advanced & Field Services */}
        <div>
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
              <MapPin className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground font-heading">
                {language === 'en' ? 'Advanced & Field Services' : 'الخدمات المتقدمة والميدانية'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en' ? 'Comprehensive verification and strategic advisory services' : 'خدمات التحقق الشاملة والاستشارات الاستراتيجية'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {advancedServices.map((service, index) => (
              <Card key={index} className="bg-gradient-card border border-border shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-accent" />
                    </div>
                    <Badge variant="outline">{service.price}</Badge>
                  </div>
                  <CardTitle className="font-heading">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-success mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {service.deliveryTime}
                    </div>
                    <Button size="sm" variant="outline">
                      {language === 'en' ? 'Request' : 'طلب'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-primary border-0 shadow-glow max-w-2xl mx-auto">
            <CardContent className="p-8">
              <AlertTriangle className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary-foreground mb-4 font-heading">
                {language === 'en' ? 'Need Custom Due Diligence?' : 'تحتاج عناية واجبة مخصصة؟'}
              </h3>
              <p className="text-primary-foreground/90 mb-6">
                {language === 'en' 
                  ? 'Contact our experts for tailored solutions combining multiple services for complex verification requirements.'
                  : 'اتصل بخبرائنا للحصول على حلول مخصصة تجمع بين خدمات متعددة لمتطلبات التحقق المعقدة.'
                }
              </p>
              <Button variant="secondary" size="lg">
                {language === 'en' ? 'Speak to Expert' : 'تحدث إلى خبير'}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;