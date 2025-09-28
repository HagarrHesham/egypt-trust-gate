import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Building2, ArrowLeft, X, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import PaymentModal from "./PaymentModal";

interface CompanyRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService: {
    title: string;
    description: string;
    price?: string;
  } | null;
}

const CompanyRequestModal = ({ isOpen, onClose, selectedService }: CompanyRequestModalProps) => {
  const { t } = useLanguage();
  const [step, setStep] = useState<'search' | 'company-form' | 'payment'>('search');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCompany, setSelectedCompany] = useState<string>('');
  const [companyDetails, setCompanyDetails] = useState({
    name: '',
    country: '',
    field: '',
    description: '',
    website: '',
    phone: '',
    address: ''
  });
  const [paymentModal, setPaymentModal] = useState({
    isOpen: false,
    service: null as any,
    companyName: ''
  });

  // Don't render if selectedService is null
  if (!selectedService) return null;

  const existingCompanies = [
    { id: 1, name: "Apple Inc.", country: "USA", field: "Technology" },
    { id: 2, name: "ADNOC", country: "UAE", field: "Oil & Gas" },
    { id: 3, name: "Saudi Aramco", country: "Saudi Arabia", field: "Oil & Gas" },
    { id: 4, name: "Emirates Airlines", country: "UAE", field: "Aviation" },
    { id: 5, name: "Etisalat", country: "UAE", field: "Telecommunications" }
  ];

  const filteredCompanies = existingCompanies.filter(company =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.field.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCompanySelect = (company: any) => {
    setSelectedCompany(company.name);
    setCompanyDetails({
      name: company.name,
      country: company.country,
      field: company.field,
      description: '',
      website: '',
      phone: '',
      address: ''
    });
    setStep('payment');
  };

  const handleOtherSelect = () => {
    setSelectedCompany('other');
    setStep('company-form');
  };

  const handleFormSubmit = () => {
    if (companyDetails.name && companyDetails.country && companyDetails.field) {
      setStep('payment');
    }
  };

  const handlePaymentRequest = () => {
    const serviceForPayment = {
      ...selectedService,
      price: selectedService.price || "$150"
    };
    
    setPaymentModal({
      isOpen: true,
      service: serviceForPayment,
      companyName: selectedCompany === 'other' ? companyDetails.name : selectedCompany
    });
  };

  const handleClose = () => {
    setStep('search');
    setSearchTerm('');
    setSelectedCompany('');
    setCompanyDetails({
      name: '',
      country: '',
      field: '',
      description: '',
      website: '',
      phone: '',
      address: ''
    });
    onClose();
  };

  const renderSearchStep = () => (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold mb-2 font-heading">Search Company</h3>
        <p className="text-muted-foreground">
          Search for an existing company or select "Other" to add a new one
        </p>
      </div>

      <Card className="p-4 mb-6 bg-accent/5">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium font-heading">{selectedService.title}</h4>
            <p className="text-sm text-muted-foreground">{selectedService.description}</p>
          </div>
          <Badge variant="secondary">Service Request</Badge>
        </div>
      </Card>

      <div className="relative mb-4">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search for companies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="space-y-2 max-h-60 overflow-y-auto">
        {searchTerm && filteredCompanies.map((company) => (
          <Card 
            key={company.id}
            className="cursor-pointer hover:border-primary transition-colors"
            onClick={() => handleCompanySelect(company)}
          >
            <CardContent className="flex items-center p-3">
              <Building2 className="h-5 w-5 text-primary mr-3" />
              <div className="flex-1">
                <h4 className="font-medium font-heading">{company.name}</h4>
                <p className="text-sm text-muted-foreground">{company.field} • {company.country}</p>
              </div>
            </CardContent>
          </Card>
        ))}

        <Card 
          className="cursor-pointer hover:border-accent transition-colors border-accent/50"
          onClick={handleOtherSelect}
        >
          <CardContent className="flex items-center p-3">
            <Building2 className="h-5 w-5 text-accent mr-3" />
            <div className="flex-1">
              <h4 className="font-medium font-heading text-accent">Other</h4>
              <p className="text-sm text-muted-foreground">Company not listed? Add new company details</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {!searchTerm && (
        <p className="text-sm text-muted-foreground text-center py-4">
          Start typing to search for companies or select "Other" to add a new company
        </p>
      )}
    </div>
  );

  const renderCompanyFormStep = () => (
    <div className="space-y-4">
      <div className="flex items-center mb-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setStep('search')}
          className="mr-2"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h3 className="text-lg font-semibold font-heading">Company Details</h3>
          <p className="text-muted-foreground">Enter the company information</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="companyName">Company Name *</Label>
          <Input
            id="companyName"
            value={companyDetails.name}
            onChange={(e) => setCompanyDetails(prev => ({ ...prev, name: e.target.value }))}
            placeholder="Enter company name"
          />
        </div>
        <div>
          <Label htmlFor="country">Country *</Label>
          <Input
            id="country"
            value={companyDetails.country}
            onChange={(e) => setCompanyDetails(prev => ({ ...prev, country: e.target.value }))}
            placeholder="Enter country"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="field">Business Field *</Label>
        <Input
          id="field"
          value={companyDetails.field}
          onChange={(e) => setCompanyDetails(prev => ({ ...prev, field: e.target.value }))}
          placeholder="e.g., Technology, Oil & Gas, Manufacturing"
        />
      </div>

      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={companyDetails.description}
          onChange={(e) => setCompanyDetails(prev => ({ ...prev, description: e.target.value }))}
          placeholder="Brief description of the company's activities"
          rows={3}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="website">Website</Label>
          <Input
            id="website"
            value={companyDetails.website}
            onChange={(e) => setCompanyDetails(prev => ({ ...prev, website: e.target.value }))}
            placeholder="https://company.com"
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            value={companyDetails.phone}
            onChange={(e) => setCompanyDetails(prev => ({ ...prev, phone: e.target.value }))}
            placeholder="+1 234 567 8900"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="address">Address</Label>
        <Textarea
          id="address"
          value={companyDetails.address}
          onChange={(e) => setCompanyDetails(prev => ({ ...prev, address: e.target.value }))}
          placeholder="Company address"
          rows={2}
        />
      </div>

      <Button 
        onClick={handleFormSubmit} 
        className="w-full" 
        size="lg"
        disabled={!companyDetails.name || !companyDetails.country || !companyDetails.field}
      >
        Continue to Payment
      </Button>
    </div>
  );

  const renderPaymentStep = () => (
    <div className="space-y-4">
      <div className="flex items-center mb-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setStep(selectedCompany === 'other' ? 'company-form' : 'search')}
          className="mr-2"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h3 className="text-lg font-semibold font-heading">Confirm Request</h3>
          <p className="text-muted-foreground">Review your service request</p>
        </div>
      </div>

      <Card className="p-4 bg-muted/30">
        <div className="space-y-3">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-medium font-heading">{selectedService.title}</h4>
              <p className="text-sm text-muted-foreground">{selectedService.description}</p>
            </div>
            <Badge variant="secondary">
              {selectedService.price || "$150"}
            </Badge>
          </div>
          
          <div className="border-t pt-3">
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-primary" />
              <span className="font-medium">
                {selectedCompany === 'other' ? companyDetails.name : selectedCompany}
              </span>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </div>
            {selectedCompany === 'other' && (
              <p className="text-sm text-muted-foreground mt-1">
                {companyDetails.field} • {companyDetails.country}
              </p>
            )}
          </div>
        </div>
      </Card>

      <div className="bg-accent/5 p-4 rounded-lg">
        <h5 className="font-medium mb-2">What happens next?</h5>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Payment processing (secure & encrypted)</li>
          <li>• Report preparation begins within 24 hours</li>
          <li>• Delivery via email (24-48 hours)</li>
          <li>• Full customer support available</li>
        </ul>
      </div>

      <Button 
        onClick={handlePaymentRequest} 
        className="w-full" 
        size="lg"
      >
        Proceed to Payment
      </Button>
    </div>
  );

  return (
    <>
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="font-heading">
                Service Request
              </DialogTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClose}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </DialogHeader>

          <div className="mt-4">
            {step === 'search' && renderSearchStep()}
            {step === 'company-form' && renderCompanyFormStep()}
            {step === 'payment' && renderPaymentStep()}
          </div>
        </DialogContent>
      </Dialog>

      <PaymentModal
        isOpen={paymentModal.isOpen}
        onClose={() => setPaymentModal({ isOpen: false, service: null, companyName: '' })}
        service={paymentModal.service}
        companyName={paymentModal.companyName}
      />
    </>
  );
};

export default CompanyRequestModal;