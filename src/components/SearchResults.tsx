import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, MapPin, Users, Calendar, AlertTriangle, CheckCircle, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";
import PaymentModal from "./PaymentModal";
import LoginModal from "./LoginModal";

interface SearchResultsProps {
  searchTerm: string;
  onClose: () => void;
}

const SearchResults = ({ searchTerm, onClose }: SearchResultsProps) => {
  const { t } = useLanguage();
  const { isAuthenticated } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [paymentModal, setPaymentModal] = useState<{
    isOpen: boolean;
    service: any;
    companyName: string;
  }>({ isOpen: false, service: null, companyName: '' });

  const companies = [
    {
      id: 1,
      name: "Advanced Petroleum Services LLC",
      industry: "Oil & Gas",
      location: "Dubai, UAE",
      employees: "500-1000",
      founded: "2018",
      description: "Leading provider of petroleum engineering services",
      riskLevel: "Low",
      status: "Active",
      verificationBadge: true,
      lastUpdate: "2024-01-15"
    },
    {
      id: 2,
      name: "Global Manufacturing Co.",
      industry: "Manufacturing",
      location: "Cairo, Egypt",
      employees: "200-500",
      founded: "2015",
      description: "Industrial manufacturing and export company",
      riskLevel: "Medium",
      status: "Active",
      verificationBadge: false,
      lastUpdate: "2024-01-10"
    },
    {
      id: 3,
      name: "Tech Innovations Ltd.",
      industry: "Technology",
      location: "Alexandria, Egypt",
      employees: "50-100",
      founded: "2020",
      description: "Software development and IT services",
      riskLevel: "Low",
      status: "Active",
      verificationBadge: true,
      lastUpdate: "2024-01-12"
    }
  ];

  const services = [
    {
      title: "Basic Company Profile",
      description: "Essential company information and verification",
      price: "$50"
    },
    {
      title: "Legal & Tax Verification",
      description: "Comprehensive legal and tax compliance check",
      price: "$150"
    },
    {
      title: "Comprehensive Due Diligence",
      description: "Full background check and risk assessment",
      price: "$500"
    }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low':
        return 'text-green-600 bg-green-100';
      case 'Medium':
        return 'text-yellow-600 bg-yellow-100';
      case 'High':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const handleRequestReport = (service: any, companyName: string) => {
    if (!isAuthenticated) {
      setShowLoginModal(true);
      return;
    }
    
    setPaymentModal({
      isOpen: true,
      service,
      companyName
    });
  };

  return (
    <>
      <Dialog open={true} onOpenChange={onClose}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader className="sticky top-0 bg-background z-10 pb-4 border-b">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-2xl font-heading">
                Search Results for "{searchTerm}"
              </DialogTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-muted-foreground">
              Found {companies.length} companies matching your search
            </p>
          </DialogHeader>

          <div className="space-y-6 mt-4">
            {companies.map((company) => (
              <Card key={company.id} className="border shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Building2 className="h-6 w-6 text-primary" />
                        <CardTitle className="text-xl font-heading">{company.name}</CardTitle>
                        {company.verificationBadge && (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        )}
                      </div>
                      <CardDescription className="text-base mb-3">
                        {company.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Building2 className="h-4 w-4" />
                          {company.industry}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {company.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {company.employees} employees
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          Founded {company.founded}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge className={`${getRiskColor(company.riskLevel)} border-0`}>
                        <AlertTriangle className="h-3 w-3 mr-1" />
                        {company.riskLevel} Risk
                      </Badge>
                      <Badge variant="outline" className="text-green-600 border-green-200">
                        {company.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-3 font-heading">Available Reports</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {services.map((service, index) => (
                        <div key={index} className="border rounded-lg p-4 bg-muted/30 hover:bg-muted/50 transition-colors">
                          <div className="flex justify-between items-start mb-2">
                            <h5 className="font-medium text-sm font-heading">{service.title}</h5>
                            <span className="font-bold text-primary">{service.price}</span>
                          </div>
                          <p className="text-xs text-muted-foreground mb-3">
                            {service.description}
                          </p>
                          <Button 
                            size="sm" 
                            className="w-full"
                            onClick={() => handleRequestReport(service, company.name)}
                          >
                            Request Report
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 text-xs text-muted-foreground">
                    Last updated: {company.lastUpdate}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      <PaymentModal
        isOpen={paymentModal.isOpen}
        onClose={() => setPaymentModal({ isOpen: false, service: null, companyName: '' })}
        service={paymentModal.service}
        companyName={paymentModal.companyName}
      />

      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </>
  );
};

export default SearchResults;