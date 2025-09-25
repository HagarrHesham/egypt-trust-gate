import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, Smartphone, Wallet, Check, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "@/hooks/use-toast";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    type: string;
    price: string;
    description: string;
  };
  companyName: string;
}

const PaymentModal = ({ isOpen, onClose, service, companyName }: PaymentModalProps) => {
  const { language } = useLanguage();
  const [step, setStep] = useState<'payment-method' | 'card-details' | 'confirmation'>('payment-method');
  const [selectedMethod, setSelectedMethod] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);

  // Don't render if service is null
  if (!service) return null;

  const paymentMethods = [
    {
      id: 'card',
      name: language === 'en' ? 'Credit / Debit Card' : 'بطاقة ائتمان / خصم',
      icon: CreditCard,
      description: language === 'en' ? 'Visa, Mastercard, American Express' : 'فيزا، ماستركارد، أمريكان إكسبريس'
    },
    {
      id: 'apple-pay',
      name: language === 'en' ? 'Apple Pay' : 'آبل باي',
      icon: Smartphone,
      description: language === 'en' ? 'Touch ID or Face ID' : 'معرف اللمس أو معرف الوجه'
    },
    {
      id: 'google-pay',
      name: language === 'en' ? 'Google Pay' : 'جوجل باي',
      icon: Wallet,
      description: language === 'en' ? 'One-tap payment' : 'دفع بلمسة واحدة'
    }
  ];

  const handlePaymentMethodSelect = (methodId: string) => {
    setSelectedMethod(methodId);
    if (methodId === 'card') {
      setStep('card-details');
    } else {
      // For digital wallets, simulate direct payment
      handlePayment();
    }
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setStep('confirmation');
      toast({
        title: language === 'en' ? "Payment Successful!" : "تم الدفع بنجاح!",
        description: language === 'en' ? "Your report will be ready shortly." : "سيكون تقريرك جاهزاً قريباً.",
      });
    }, 2000);
  };

  const handleClose = () => {
    setStep('payment-method');
    setSelectedMethod('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            {step === 'payment-method' && (language === 'en' ? 'Choose Payment Method' : 'اختر طريقة الدفع')}
            {step === 'card-details' && (language === 'en' ? 'Card Details' : 'تفاصيل البطاقة')}
            {step === 'confirmation' && (language === 'en' ? 'Payment Confirmed' : 'تأكيد الدفع')}
          </DialogTitle>
        </DialogHeader>

        {step === 'payment-method' && (
          <div className="space-y-6">
            {/* Order Summary */}
            <div className="bg-muted/30 rounded-lg p-4 space-y-2">
              <h3 className="font-semibold text-sm text-muted-foreground">
                {language === 'en' ? 'Order Summary' : 'ملخص الطلب'}
              </h3>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">{service.type}</p>
                  <p className="text-sm text-muted-foreground">{companyName}</p>
                </div>
                <p className="font-bold text-lg">{service.price}</p>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="space-y-3">
              <h3 className="font-semibold">
                {language === 'en' ? 'Select Payment Method' : 'اختر طريقة الدفع'}
              </h3>
              {paymentMethods.map((method) => (
                <Card 
                  key={method.id}
                  className="cursor-pointer hover:shadow-md transition-all duration-200 hover:border-primary"
                  onClick={() => handlePaymentMethodSelect(method.id)}
                >
                  <CardContent className="flex items-center space-x-4 p-4">
                    <method.icon className="h-6 w-6 text-primary" />
                    <div className="flex-1">
                      <p className="font-medium">{method.name}</p>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                    </div>
                    <div className="w-4 h-4 rounded-full border-2 border-muted-foreground"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {step === 'card-details' && (
          <div className="space-y-6">
            {/* Back Button */}
            <Button 
              variant="ghost" 
              onClick={() => setStep('payment-method')}
              className="w-fit p-0 h-auto"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              {language === 'en' ? 'Back' : 'رجوع'}
            </Button>

            {/* Order Summary */}
            <div className="bg-muted/30 rounded-lg p-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">{service.type}</span>
                <span className="font-bold">{service.price}</span>
              </div>
            </div>

            {/* Card Form */}
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handlePayment(); }}>
              <div className="space-y-2">
                <Label htmlFor="cardNumber">
                  {language === 'en' ? 'Card Number' : 'رقم البطاقة'}
                </Label>
                <Input 
                  id="cardNumber" 
                  placeholder="1234 5678 9012 3456" 
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">
                    {language === 'en' ? 'Expiry Date' : 'تاريخ الانتهاء'}
                  </Label>
                  <Input 
                    id="expiry" 
                    placeholder="MM/YY" 
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input 
                    id="cvv" 
                    placeholder="123" 
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cardName">
                  {language === 'en' ? 'Cardholder Name' : 'اسم حامل البطاقة'}
                </Label>
                <Input 
                  id="cardName" 
                  placeholder={language === 'en' ? 'John Smith' : 'أحمد محمد'} 
                  required
                />
              </div>

              <Separator />

              <Button 
                type="submit" 
                className="w-full" 
                size="lg"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>{language === 'en' ? 'Processing...' : 'جاري المعالجة...'}</span>
                  </div>
                ) : (
                  `${language === 'en' ? 'Pay' : 'ادفع'} ${service.price}`
                )}
              </Button>
            </form>
          </div>
        )}

        {step === 'confirmation' && (
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-foreground">
                {language === 'en' ? 'Payment Successful!' : 'تم الدفع بنجاح!'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en' 
                  ? 'Your report request has been submitted and payment confirmed.' 
                  : 'تم إرسال طلب التقرير وتأكيد الدفع.'}
              </p>
            </div>

            <div className="bg-muted/30 rounded-lg p-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  {language === 'en' ? 'Report Type:' : 'نوع التقرير:'}
                </span>
                <span className="font-medium">{service.type}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  {language === 'en' ? 'Company:' : 'الشركة:'}
                </span>
                <span className="font-medium">{companyName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  {language === 'en' ? 'Amount Paid:' : 'المبلغ المدفوع:'}
                </span>
                <span className="font-bold">{service.price}</span>
              </div>
              <Separator />
              <div className="text-sm text-muted-foreground">
                {language === 'en' 
                  ? 'You will receive an email confirmation shortly with your report delivery timeline.'
                  : 'ستتلقى رسالة تأكيد بالبريد الإلكتروني قريباً مع الجدول الزمني لتسليم التقرير.'}
              </div>
            </div>

            <Button onClick={handleClose} className="w-full" size="lg">
              {language === 'en' ? 'Close' : 'إغلاق'}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;