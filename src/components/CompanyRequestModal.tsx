import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Plus, ArrowLeft, Building2, Globe, Briefcase, FileText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "@/hooks/use-toast";
import PaymentModal from "./PaymentModal";

interface CompanyRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService: {
    type: string;
    price: string;
    description: string;
  } | null;
}

const CompanyRequestModal = ({ isOpen, onClose, selectedService }: CompanyRequestModalProps) => {
  const { language } = useLanguage();
  const [step, setStep] = useState<'search' | 'company-form' | 'payment'>('search');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCompany, setSelectedCompany] = useState<string>('');
  const [companyDetails, setCompanyDetails] = useState({
    name: '',
    country: '',
    field: '',
    description: '',
    website: '',
    address: ''
  });
  const [showPayment, setShowPayment] = useState(false);

  // Mock existing companies data
  const existingCompanies = [
    { id: '1', name: 'ADNOC', country: 'UAE', field: 'Oil & Gas' },
    { id: '2', name: 'Saudi Aramco', country: 'Saudi Arabia', field: 'Oil & Gas' },
    { id: '3', name: 'Qatar Airways', country: 'Qatar', field: 'Aviation' },
    { id: '4', name: 'Emirates Group', country: 'UAE', field: 'Aviation' },
    { id: '5', name: 'SABIC', country: 'Saudi Arabia', field: 'Chemicals' }
  ];

  const filteredCompanies = existingCompanies.filter(company =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.field.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCompanySelect = (companyId: string) => {
    if (companyId === 'other') {
      setStep('company-form');
    } else {
      const company = existingCompanies.find(c => c.id === companyId);
      if (company) {
        setSelectedCompany(company.name);
        setShowPayment(true);
      }
    }
  };

  const handleCompanyFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyDetails.name || !companyDetails.country || !companyDetails.field) {
      toast({
        title: language === 'en' ? "Missing Information" : "معلومات ناقصة",
        description: language === 'en' 
          ? "Please fill in all required fields" 
          : "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive",
      });
      return;
    }
    setSelectedCompany(companyDetails.name);
    setShowPayment(true);
  };

  const handleClose = () => {
    setStep('search');
    setSearchTerm('');
    setSelectedCompany('');
    setCompanyDetails({ name: '', country: '', field: '', description: '', website: '', address: '' });
    setShowPayment(false);
    onClose();
  };

  return (
    <>
      <Dialog open={isOpen && !showPayment} onOpenChange={handleClose}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold flex items-center space-x-2">
              <Building2 className="h-6 w-6 text-primary" />
              <span>
                {step === 'search' && (language === 'en' ? 'Search Company' : 'البحث عن الشركة')}
                {step === 'company-form' && (language === 'en' ? 'Company Details' : 'تفاصيل الشركة')}
              </span>
            </DialogTitle>
          </DialogHeader>

          {step === 'search' && (
            <div className="space-y-6">
              <div className="bg-muted/30 rounded-lg p-4">
                <h3 className="font-semibold mb-2">
                  {language === 'en' ? 'Selected Service:' : 'الخدمة المختارة:'}
                </h3>
                <p className="text-primary font-medium">{selectedService?.type}</p>
                <p className="text-sm text-muted-foreground">{selectedService?.description}</p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="company-search">
                    {language === 'en' ? 'Search for a company' : 'ابحث عن شركة'}
                  </Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="company-search"
                      placeholder={language === 'en' ? 'Enter company name, country, or industry...' : 'أدخل اسم الشركة أو البلد أو الصناعة...'}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {searchTerm && (
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">
                      {language === 'en' ? 'Search Results:' : 'نتائج البحث:'}
                    </h4>
                    <div className="max-h-60 overflow-y-auto space-y-2">
                      {filteredCompanies.length > 0 ? (
                        filteredCompanies.map((company) => (
                          <Card 
                            key={company.id}
                            className="cursor-pointer hover:shadow-md transition-all duration-200 hover:border-primary"
                            onClick={() => handleCompanySelect(company.id)}
                          >
                            <CardContent className="flex items-center justify-between p-4">
                              <div>
                                <p className="font-medium">{company.name}</p>
                                <p className="text-sm text-muted-foreground">
                                  {company.country} • {company.field}
                                </p>
                              </div>
                              <div className="w-4 h-4 rounded-full border-2 border-primary"></div>
                            </CardContent>
                          </Card>
                        ))
                      ) : (
                        <p className="text-muted-foreground text-center py-4">
                          {language === 'en' ? 'No companies found' : 'لم يتم العثور على شركات'}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                <div className="border-t pt-4">
                  <Card 
                    className="cursor-pointer hover:shadow-md transition-all duration-200 hover:border-primary"
                    onClick={() => handleCompanySelect('other')}
                  >
                    <CardContent className="flex items-center space-x-4 p-4">
                      <Plus className="h-6 w-6 text-primary" />
                      <div className="flex-1">
                        <p className="font-medium">
                          {language === 'en' ? 'Company not found? Add new company' : 'لم تجد الشركة؟ أضف شركة جديدة'}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {language === 'en' ? 'Provide company details manually' : 'قدم تفاصيل الشركة يدوياً'}
                        </p>
                      </div>
                      <div className="w-4 h-4 rounded-full border-2 border-muted-foreground"></div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}

          {step === 'company-form' && (
            <div className="space-y-6">
              <Button 
                variant="ghost" 
                onClick={() => setStep('search')}
                className="w-fit p-0 h-auto"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                {language === 'en' ? 'Back to search' : 'العودة للبحث'}
              </Button>

              <form onSubmit={handleCompanyFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company-name" className="flex items-center space-x-2">
                      <Building2 className="h-4 w-4" />
                      <span>{language === 'en' ? 'Company Name' : 'اسم الشركة'} *</span>
                    </Label>
                    <Input
                      id="company-name"
                      value={companyDetails.name}
                      onChange={(e) => setCompanyDetails(prev => ({ ...prev, name: e.target.value }))}
                      placeholder={language === 'en' ? 'Enter company name' : 'أدخل اسم الشركة'}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="country" className="flex items-center space-x-2">
                      <Globe className="h-4 w-4" />
                      <span>{language === 'en' ? 'Country' : 'البلد'} *</span>
                    </Label>
                    <Select 
                      value={companyDetails.country} 
                      onValueChange={(value) => setCompanyDetails(prev => ({ ...prev, country: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder={language === 'en' ? 'Select country' : 'اختر البلد'} />
                      </SelectTrigger>
                      <SelectContent className="bg-background border border-border z-50">
                        <SelectItem value="UAE">UAE</SelectItem>
                        <SelectItem value="Saudi Arabia">Saudi Arabia</SelectItem>
                        <SelectItem value="Qatar">Qatar</SelectItem>
                        <SelectItem value="Kuwait">Kuwait</SelectItem>
                        <SelectItem value="Bahrain">Bahrain</SelectItem>
                        <SelectItem value="Oman">Oman</SelectItem>
                        <SelectItem value="Egypt">Egypt</SelectItem>
                        <SelectItem value="Jordan">Jordan</SelectItem>
                        <SelectItem value="Lebanon">Lebanon</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="field" className="flex items-center space-x-2">
                      <Briefcase className="h-4 w-4" />
                      <span>{language === 'en' ? 'Industry/Field' : 'الصناعة/المجال'} *</span>
                    </Label>
                    <Select 
                      value={companyDetails.field} 
                      onValueChange={(value) => setCompanyDetails(prev => ({ ...prev, field: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder={language === 'en' ? 'Select industry' : 'اختر الصناعة'} />
                      </SelectTrigger>
                      <SelectContent className="bg-background border border-border z-50">
                        <SelectItem value="Oil & Gas">Oil & Gas</SelectItem>
                        <SelectItem value="Banking & Finance">Banking & Finance</SelectItem>
                        <SelectItem value="Construction">Construction</SelectItem>
                        <SelectItem value="Healthcare">Healthcare</SelectItem>
                        <SelectItem value="Technology">Technology</SelectItem>
                        <SelectItem value="Manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="Aviation">Aviation</SelectItem>
                        <SelectItem value="Real Estate">Real Estate</SelectItem>
                        <SelectItem value="Retail">Retail</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website">
                      {language === 'en' ? 'Website' : 'الموقع الإلكتروني'}
                    </Label>
                    <Input
                      id="website"
                      type="url"
                      value={companyDetails.website}
                      onChange={(e) => setCompanyDetails(prev => ({ ...prev, website: e.target.value }))}
                      placeholder={language === 'en' ? 'https://company.com' : 'https://company.com'}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">
                    {language === 'en' ? 'Address' : 'العنوان'}
                  </Label>
                  <Input
                    id="address"
                    value={companyDetails.address}
                    onChange={(e) => setCompanyDetails(prev => ({ ...prev, address: e.target.value }))}
                    placeholder={language === 'en' ? 'Company address' : 'عنوان الشركة'}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="flex items-center space-x-2">
                    <FileText className="h-4 w-4" />
                    <span>{language === 'en' ? 'Description' : 'الوصف'}</span>
                  </Label>
                  <Textarea
                    id="description"
                    value={companyDetails.description}
                    onChange={(e) => setCompanyDetails(prev => ({ ...prev, description: e.target.value }))}
                    placeholder={language === 'en' ? 'Brief description of the company and its activities' : 'وصف موجز للشركة وأنشطتها'}
                    rows={4}
                  />
                </div>

                <div className="flex space-x-4 pt-4">
                  <Button type="submit" className="flex-1" size="lg">
                    {language === 'en' ? 'Continue to Payment' : 'المتابعة للدفع'}
                  </Button>
                </div>
              </form>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {showPayment && selectedService && (
        <PaymentModal
          isOpen={showPayment}
          onClose={() => {
            setShowPayment(false);
            handleClose();
          }}
          service={selectedService}
          companyName={selectedCompany}
        />
      )}
    </>
  );
};

export default CompanyRequestModal;