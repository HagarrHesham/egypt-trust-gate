import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
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
  Briefcase,
  Search,
  Link,
  ShieldCheck,
  FileText
} from "lucide-react";
import CompanyRequestModal from "./CompanyRequestModal";

const ServicesSection = () => {
  const { t } = useLanguage();
  const [requestModal, setRequestModal] = useState<{
    isOpen: boolean;
    service: any;
  }>({ isOpen: false, service: null });

  const handleServiceRequest = (service: any) => {
    setRequestModal({
      isOpen: true,
      service: {
        type: service.title,
        price: service.price,
        description: service.description
      }
    });
  };

  const coreServices = [
    {
      icon: Building,
      title: t('services.core.basicProfiles.title'),
      description: t('services.core.basicProfiles.desc'),
      features: [
        'Company registration details',
        'Basic financial overview',
        'Management structure',
        'Business activity verification'
      ],
      price: 'From $100',
      deliveryTime: '24-48 hours'
    },
    {
      icon: Scale,
      title: t('services.core.legalTax.title'),
      description: t('services.core.legalTax.desc'),
      features: [
        'Commercial registration check',
        'Tax compliance status',
        'Legal entity verification',
        'Regulatory compliance review'
      ],
      price: 'From $150',
      deliveryTime: '2-3 days'
    },
    {
      icon: FileCheck,
      title: t('services.core.simplified.title'),
      description: t('services.core.simplified.desc'),
      features: [
        'Executive summary format',
        'Key findings highlight',
        'Risk level assessment',
        'Easy-to-understand format'
      ],
      price: 'From $120',
      deliveryTime: '1-2 days'
    },
    {
      icon: TrendingUp,
      title: t('services.core.media.title'),
      description: t('services.core.media.desc'),
      features: [
        'News and media coverage',
        'Social media monitoring',
        'Reputation tracking',
        'Public sentiment analysis'
      ],
      price: 'From $200',
      deliveryTime: '3-5 days'
    }
  ];

  const advancedServices = [
    {
      icon: Search,
      title: t('services.advanced.operational.title'),
      description: t('services.advanced.operational.desc'),
      features: [
        t('services.advanced.operational.feature1'),
        t('services.advanced.operational.feature2'),
        t('services.advanced.operational.feature3'),
        t('services.advanced.operational.feature4')
      ],
      price: 'From $300',
      deliveryTime: '5-7 days'
    },
    {
      icon: Link,
      title: t('services.advanced.supplyChain.title'),
      description: t('services.advanced.supplyChain.desc'),
      features: [
        t('services.advanced.supplyChain.feature1'),
        t('services.advanced.supplyChain.feature2'),
        t('services.advanced.supplyChain.feature3'),
        t('services.advanced.supplyChain.feature4')
      ],
      price: 'From $400',
      deliveryTime: '7-10 days'
    },
    {
      icon: ShieldCheck,
      title: t('services.advanced.comprehensive.title'),
      description: t('services.advanced.comprehensive.desc'),
      features: [
        t('services.advanced.comprehensive.feature1'),
        t('services.advanced.comprehensive.feature2'),
        t('services.advanced.comprehensive.feature3'),
        t('services.advanced.comprehensive.feature4')
      ],
      price: 'From $500',
      deliveryTime: '10-14 days'
    },
    {
      icon: FileText,
      title: t('services.advanced.documents.title'),
      description: t('services.advanced.documents.desc'),
      features: [
        t('services.advanced.documents.feature1'),
        t('services.advanced.documents.feature2'),
        t('services.advanced.documents.feature3'),
        t('services.advanced.documents.feature4')
      ],
      price: 'From $250',
      deliveryTime: '3-5 days'
    }
  ];

  const fieldServices = [
    {
      icon: MapPin,
      title: t('services.field.onSite.title'),
      description: t('services.field.onSite.desc'),
      features: [
        'Physical site inspection',
        'Photo-documented reports',
        'Operations confirmation',
        'Facility assessment'
      ],
      price: 'From $600',
      deliveryTime: '7-14 days'
    },
    {
      icon: BarChart3,
      title: t('services.field.industrySpecific.title'),
      description: t('services.field.industrySpecific.desc'),
      features: [
        'Sector-specific analysis',
        'Industry benchmarking',
        'Market positioning',
        'Competitive landscape'
      ],
      price: 'From $450',
      deliveryTime: '5-10 days'
    },
    {
      icon: Briefcase,
      title: t('services.field.investment.title'),
      description: t('services.field.investment.desc'),
      features: [
        'M&A due diligence',
        'Market entry strategies',
        'Investment risk analysis',
        'Strategic recommendations'
      ],
      price: 'From $800',
      deliveryTime: '10-21 days'
    },
    {
      icon: Shield,
      title: t('services.field.compliance.title'),
      description: t('services.field.compliance.desc'),
      features: [
        'Regulatory compliance review',
        'Reputation assessment',
        'Legal record verification',
        'Full-spectrum due diligence'
      ],
      price: 'From $550',
      deliveryTime: '7-12 days'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            {t('services.badge')}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-heading">
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('services.subtitle')}
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
                {t('services.core.title')}
              </h3>
              <p className="text-muted-foreground">
                {t('services.core.subtitle')}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
                    <Button size="sm" variant="outline" onClick={() => handleServiceRequest(service)}>
                      {t('services.request')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Advanced Services */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
              <Search className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground font-heading">
                {t('services.advanced.title')}
              </h3>
              <p className="text-muted-foreground">
                {t('services.advanced.subtitle')}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
                    <Button size="sm" variant="outline" onClick={() => handleServiceRequest(service)}>
                      {t('services.request')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Field Services */}
        <div>
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
              <MapPin className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground font-heading">
                {t('services.field.title')}
              </h3>
              <p className="text-muted-foreground">
                {t('services.field.subtitle')}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fieldServices.map((service, index) => (
              <Card key={index} className="bg-gradient-card border border-border shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-secondary" />
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
                    <Button size="sm" variant="outline" onClick={() => handleServiceRequest(service)}>
                      {t('services.request')}
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
                {t('services.cta.title')}
              </h3>
              <p className="text-primary-foreground/90 mb-6">
                {t('services.cta.subtitle')}
              </p>
              <Button variant="secondary" size="lg">
                {t('services.cta.button')}
              </Button>
            </CardContent>
          </Card>
        </div>

        <CompanyRequestModal
          isOpen={requestModal.isOpen}
          onClose={() => setRequestModal({ isOpen: false, service: null })}
          selectedService={requestModal.service}
        />
      </div>
    </section>
  );
};

export default ServicesSection;