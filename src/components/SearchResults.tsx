import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, MapPin, Clock, DollarSign } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import PaymentModal from "./PaymentModal";

interface SearchResultsProps {
  searchTerm: string;
  onClose: () => void;
}

const SearchResults = ({ searchTerm, onClose }: SearchResultsProps) => {
  const { language } = useLanguage();
  const [paymentModal, setPaymentModal] = useState<{
    isOpen: boolean;
    service: any;
    companyName: string;
  }>({ isOpen: false, service: null, companyName: '' });

  const handleRequestReport = (service: any) => {
    setPaymentModal({
      isOpen: true,
      service,
      companyName: searchTerm
    });
  };

  const searchResults = [
    {
      type: language === 'en' ? 'Core Service' : 'الخدمة الأساسية',
      price: language === 'en' ? '$299' : '299 دولار',
      duration: language === 'en' ? '2-3 business days' : '2-3 أيام عمل',
      icon: Shield,
      description: language === 'en' 
        ? 'Basic company profile and regulatory compliance check'
        : 'الملف الأساسي للشركة وفحص الامتثال التنظيمي',
      features: language === 'en' 
        ? ['Company registration verification', 'Tax compliance check', 'Basic legal status', 'Initial compliance review']
        : ['التحقق من تسجيل الشركة', 'فحص الامتثال الضريبي', 'الوضع القانوني الأساسي', 'مراجعة الامتثال الأولية'],
      badge: language === 'en' ? 'Most Popular' : 'الأكثر شعبية',
      badgeColor: 'bg-primary'
    },
    {
      type: language === 'en' ? 'Advanced Service' : 'الخدمة المتقدمة',
      price: language === 'en' ? '$699' : '699 دولار',
      duration: language === 'en' ? '5-7 business days' : '5-7 أيام عمل',
      icon: Zap,
      description: language === 'en' 
        ? 'Comprehensive due diligence with supply chain analysis'
        : 'العناية الواجبة الشاملة مع تحليل سلسلة التوريد',
      features: language === 'en' 
        ? ['Operational verification & licenses', 'Supply chain analysis', 'Legal, financial & criminal background', 'Official records extraction']
        : ['التحقق التشغيلي والتراخيص', 'تحليل سلسلة التوريد', 'الخلفية القانونية والمالية والجنائية', 'استخراج السجلات الرسمية'],
      badge: language === 'en' ? 'Recommended' : 'موصى به',
      badgeColor: 'bg-accent'
    },
    {
      type: language === 'en' ? 'Field Service' : 'الخدمة الميدانية',
      price: language === 'en' ? '$1,299' : '1,299 دولار',
      duration: language === 'en' ? '10-14 business days' : '10-14 يوم عمل',
      icon: MapPin,
      description: language === 'en' 
        ? 'On-site verification with specialized industry reports'
        : 'التحقق الميداني مع تقارير متخصصة بالصناعة',
      features: language === 'en' 
        ? ['Physical site verification visit', 'Industry-specific reports', 'Investment advisory services', 'Legal compliance & reputation reports']
        : ['زيارة التحقق الميداني', 'تقارير متخصصة بالصناعة', 'خدمات الاستشارات الاستثمارية', 'تقارير الامتثال القانوني والسمعة'],
      badge: language === 'en' ? 'Premium' : 'متميز',
      badgeColor: 'bg-gradient-primary'
    }
  ];

  return (
    <div className="mt-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-2">
            {language === 'en' 
              ? `Search Results for "${searchTerm}"` 
              : `نتائج البحث عن "${searchTerm}"`
            }
          </h3>
          <p className="text-muted-foreground">
            {language === 'en' 
              ? 'Choose the right service level for your needs'
              : 'اختر مستوى الخدمة المناسب لاحتياجاتك'
            }
          </p>
        </div>
        <Button variant="outline" onClick={onClose}>
          {language === 'en' ? 'Close' : 'إغلاق'}
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {searchResults.map((service, index) => (
          <Card key={index} className="relative overflow-hidden hover:shadow-elegant transition-all duration-300 group">
            {service.badge && (
              <div className="absolute top-4 right-4 z-10">
                <Badge className={`${service.badgeColor} text-white font-medium`}>
                  {service.badge}
                </Badge>
              </div>
            )}
            
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl font-bold">{service.type}</CardTitle>
              <CardDescription className="text-muted-foreground">
                {service.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-4 w-4 text-primary" />
                  <span className="text-2xl font-bold text-foreground">{service.price}</span>
                </div>
                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{service.duration}</span>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-sm text-foreground">
                  {language === 'en' ? 'Includes:' : 'يشمل:'}
                </h4>
                <ul className="space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>

            <CardFooter>
              <Button 
                className="w-full" 
                size="lg"
                onClick={() => handleRequestReport(service)}
              >
                {language === 'en' ? 'Request Report' : 'طلب التقرير'}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <PaymentModal
        isOpen={paymentModal.isOpen}
        onClose={() => setPaymentModal({ isOpen: false, service: null, companyName: '' })}
        service={paymentModal.service}
        companyName={paymentModal.companyName}
      />
    </div>
  );
};

export default SearchResults;