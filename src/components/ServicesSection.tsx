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
  CheckCircle
} from "lucide-react";

const ServicesSection = () => {
  const [language] = useState<'en' | 'ar'>('en');

  const segment1Services = [
    {
      icon: FileCheck,
      title: language === 'en' ? 'Credit Reports' : 'تقارير الائتمان',
      description: language === 'en' ? 'Comprehensive financial health analysis' : 'تحليل شامل للصحة المالية',
      features: [
        language === 'en' ? 'Financial statements analysis' : 'تحليل البيانات المالية',
        language === 'en' ? 'Credit scoring & risk assessment' : 'تقييم الائتمان والمخاطر',
        language === 'en' ? 'Payment history tracking' : 'تتبع تاريخ الدفع'
      ],
      price: language === 'en' ? 'From $99' : 'من 99 دولار',
      deliveryTime: language === 'en' ? '24-48 hours' : '24-48 ساعة'
    },
    {
      icon: Shield,
      title: language === 'en' ? 'Sanctions Screening' : 'فحص العقوبات',
      description: language === 'en' ? 'Global sanctions and watchlist verification' : 'التحقق من العقوبات والقوائم المراقبة العالمية',
      features: [
        language === 'en' ? 'OFAC, UN, EU sanctions check' : 'فحص عقوبات OFAC وUN وEU',
        language === 'en' ? 'PEP (Politically Exposed Persons)' : 'الأشخاص المعرضون سياسياً',
        language === 'en' ? 'Real-time monitoring' : 'المراقبة في الوقت الفعلي'
      ],
      price: language === 'en' ? 'From $49' : 'من 49 دولار',
      deliveryTime: language === 'en' ? 'Instant' : 'فوري'
    },
    {
      icon: Building,
      title: language === 'en' ? 'Company Registration' : 'تسجيل الشركة',
      description: language === 'en' ? 'Verify business registration and legal status' : 'التحقق من تسجيل الأعمال والوضع القانوني',
      features: [
        language === 'en' ? 'Corporate registry verification' : 'التحقق من سجل الشركات',
        language === 'en' ? 'Directors & shareholders info' : 'معلومات المديرين والمساهمين',
        language === 'en' ? 'Legal status confirmation' : 'تأكيد الوضع القانوني'
      ],
      price: language === 'en' ? 'From $79' : 'من 79 دولار',
      deliveryTime: language === 'en' ? '2-6 hours' : '2-6 ساعات'
    }
  ];

  const segment2Services = [
    {
      icon: MapPin,
      title: language === 'en' ? 'Physical Site Verification' : 'التحقق من الموقع المادي',
      description: language === 'en' ? 'On-ground confirmation of business presence' : 'تأكيد وجود الأعمال على الأرض',
      features: [
        language === 'en' ? 'Physical address verification' : 'التحقق من العنوان المادي',
        language === 'en' ? 'Business operations assessment' : 'تقييم العمليات التجارية',
        language === 'en' ? 'Detailed site report' : 'تقرير مفصل للموقع'
      ],
      price: language === 'en' ? 'From $299' : 'من 299 دولار',
      deliveryTime: language === 'en' ? '3-7 days' : '3-7 أيام'
    },
    {
      icon: Camera,
      title: language === 'en' ? 'Documentation & Photography' : 'التوثيق والتصوير',
      description: language === 'en' ? 'Visual evidence and documentation services' : 'خدمات الأدلة البصرية والتوثيق',
      features: [
        language === 'en' ? 'Office & facility photography' : 'تصوير المكاتب والمرافق',
        language === 'en' ? 'Equipment & inventory documentation' : 'توثيق المعدات والمخزون',
        language === 'en' ? 'Compliance photo verification' : 'التحقق الفوتوغرافي للامتثال'
      ],
      price: language === 'en' ? 'From $199' : 'من 199 دولار',
      deliveryTime: language === 'en' ? '2-5 days' : '2-5 أيام'
    },
    {
      icon: Users,
      title: language === 'en' ? 'Representative Interviews' : 'مقابلات الممثلين',
      description: language === 'en' ? 'Direct verification through key personnel' : 'التحقق المباشر من خلال الموظفين الرئيسيين',
      features: [
        language === 'en' ? 'Management team interviews' : 'مقابلات فريق الإدارة',
        language === 'en' ? 'Business legitimacy verification' : 'التحقق من شرعية الأعمال',
        language === 'en' ? 'Operational capacity assessment' : 'تقييم القدرة التشغيلية'
      ],
      price: language === 'en' ? 'From $399' : 'من 399 دولار',
      deliveryTime: language === 'en' ? '5-10 days' : '5-10 أيام'
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

        {/* Segment 1: Data & Verification */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
              <CreditCard className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground font-heading">
                {language === 'en' ? 'Segment 1: Data & Verification' : 'القطاع الأول: البيانات والتحقق'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en' ? 'Instant digital verification services' : 'خدمات التحقق الرقمي الفوري'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {segment1Services.map((service, index) => (
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

        {/* Segment 2: Field Verification */}
        <div>
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
              <MapPin className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground font-heading">
                {language === 'en' ? 'Segment 2: On-Demand Field Verification' : 'القطاع الثاني: التحقق الميداني عند الطلب'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en' ? 'Physical verification and documentation services' : 'خدمات التحقق المادي والتوثيق'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {segment2Services.map((service, index) => (
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