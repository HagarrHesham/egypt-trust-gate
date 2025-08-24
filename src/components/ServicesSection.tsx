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
  Briefcase,
  Search,
  Link,
  ShieldCheck,
  FileText
} from "lucide-react";

const ServicesSection = () => {
  const [language] = useState<'en' | 'ar'>('en');

  const coreServices = [
    {
      icon: Building,
      title: 'Basic Company Profiles',
      description: 'Providing reliable information about Egyptian companies.',
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
      title: 'Legal & Tax Verification',
      description: 'Reviewing commercial registration and tax records for compliance.',
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
      title: 'Simplified Reports',
      description: 'Summarizing the company\'s legal and financial status in an easy-to-read format.',
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
      title: 'Media Monitoring Services',
      description: 'Tracking media coverage about companies to enhance transparency.',
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
      title: 'Operational Verification',
      description: 'Assessing actual company operations, quality certifications, and industry licenses.',
      features: [
        'Operations assessment',
        'Quality certifications check',
        'Industry licenses verification',
        'Facility inspection reports'
      ],
      price: 'From $300',
      deliveryTime: '5-7 days'
    },
    {
      icon: Link,
      title: 'Detailed Supply Chain Audits',
      description: 'Examining suppliers, business partners, and client networks.',
      features: [
        'Supplier verification',
        'Partner relationship mapping',
        'Client network analysis',
        'Supply chain risk assessment'
      ],
      price: 'From $400',
      deliveryTime: '7-10 days'
    },
    {
      icon: ShieldCheck,
      title: 'Comprehensive Legal, Financial & Criminal Checks',
      description: 'In-depth due diligence across all risk areas.',
      features: [
        'Legal background verification',
        'Financial health assessment',
        'Criminal record checks',
        'Litigation history review'
      ],
      price: 'From $500',
      deliveryTime: '10-14 days'
    },
    {
      icon: FileText,
      title: 'Official Document Retrieval',
      description: 'Providing certified copies of commercial registry and official records.',
      features: [
        'Commercial registry documents',
        'Certified official records',
        'Legal entity certificates',
        'Government filing copies'
      ],
      price: 'From $250',
      deliveryTime: '3-5 days'
    }
  ];

  const fieldServices = [
    {
      icon: MapPin,
      title: 'On-Site Verification',
      description: 'Direct company visits with photo-documented reports confirming actual operations.',
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
      title: 'Industry-Specific Reports',
      description: 'Tailored insights based on sector or specific investor needs.',
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
      title: 'Investment Advisory',
      description: 'Guidance for mergers, acquisitions, or market entry strategies.',
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
      title: 'Compliance & Reputation Checks',
      description: 'Legal record verification, regulatory compliance, reputation assessments, and full-spectrum due diligence.',
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
                    <Button size="sm" variant="outline">
                      {language === 'en' ? 'Request' : 'طلب'}
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
                Advanced Services
              </h3>
              <p className="text-muted-foreground">
                In-depth analysis and comprehensive verification services
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
                    <Button size="sm" variant="outline">
                      Request
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
                Field Services
              </h3>
              <p className="text-muted-foreground">
                On-site verification and specialized advisory services
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
                    <Button size="sm" variant="outline">
                      Request
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