import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CreditCard, 
  Banknote, 
  Smartphone, 
  CheckCircle, 
  ArrowLeft, 
  Shield,
  X
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    price: string;
  } | null;
  companyName: string;
}

const PaymentModal = ({ isOpen, onClose, service, companyName }: PaymentModalProps) => {
  const { t } = useLanguage();
  const [step, setStep] = useState<'payment-method' | 'card-details' | 'confirmation'>('payment-method');
  const [selectedMethod, setSelectedMethod] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);

  // Don't render if service is null
  if (!service) return null;

  const paymentMethods = [
    {
      id: 'card',
      name: 'Credit/Debit Card',
      description: 'Visa, Mastercard, American Express',
      icon: CreditCard
    },
    {
      id: 'bank',
      name: 'Bank Transfer',
      description: 'Direct bank transfer',
      icon: Banknote
    },
    {
      id: 'mobile',
      name: 'Mobile Payment',
      description: 'Mobile wallet payment',
      icon: Smartphone
    }
  ];

  const handleMethodSelect = (methodId: string) => {
    setSelectedMethod(methodId);
    setStep('card-details');
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setStep('confirmation');
    }, 3000);
  };

  const handleClose = () => {
    setStep('payment-method');
    setSelectedMethod('');
    onClose();
  };

  const renderPaymentMethodStep = () => (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold mb-2 font-heading">Choose Payment Method</h3>
        <p className="text-muted-foreground">Select your preferred payment method</p>
      </div>

      <Card className="p-4 mb-4 bg-muted/30">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="font-medium font-heading">{service.title}</h4>
            <p className="text-sm text-muted-foreground">For {companyName}</p>
          </div>
          <Badge variant="secondary" className="text-lg font-bold">
            {service.price}
          </Badge>
        </div>
      </Card>

      <div className="space-y-3">
        {paymentMethods.map((method) => (
          <Card 
            key={method.id}
            className="cursor-pointer hover:border-primary transition-colors"
            onClick={() => handleMethodSelect(method.id)}
          >
            <CardContent className="flex items-center p-4">
              <method.icon className="h-6 w-6 text-primary mr-3" />
              <div className="flex-1">
                <h4 className="font-medium font-heading">{method.name}</h4>
                <p className="text-sm text-muted-foreground">{method.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderCardDetailsStep = () => (
    <div className="space-y-4">
      <div className="flex items-center mb-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setStep('payment-method')}
          className="mr-2"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h3 className="text-lg font-semibold font-heading">Payment Details</h3>
          <p className="text-muted-foreground">Enter your payment information</p>
        </div>
      </div>

      <Card className="p-4 mb-4 bg-muted/30">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="font-medium font-heading">{service.title}</h4>
            <p className="text-sm text-muted-foreground">For {companyName}</p>
          </div>
          <Badge variant="secondary" className="text-lg font-bold">
            {service.price}
          </Badge>
        </div>
      </Card>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" placeholder="John" />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" placeholder="Doe" />
          </div>
        </div>

        <div>
          <Label htmlFor="cardNumber">Card Number</Label>
          <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="expiry">Expiry Date</Label>
            <Input id="expiry" placeholder="MM/YY" />
          </div>
          <div>
            <Label htmlFor="cvv">CVV</Label>
            <Input id="cvv" placeholder="123" />
          </div>
        </div>

        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" placeholder="john@example.com" />
        </div>

        <div className="flex items-center p-3 bg-muted/30 rounded-lg">
          <Shield className="h-5 w-5 text-green-600 mr-2" />
          <span className="text-sm text-muted-foreground">
            Your payment is secured with 256-bit SSL encryption
          </span>
        </div>

        <Button 
          onClick={handlePayment} 
          className="w-full" 
          size="lg"
          disabled={isProcessing}
        >
          {isProcessing ? 'Processing Payment...' : `Pay ${service.price}`}
        </Button>
      </div>
    </div>
  );

  const renderConfirmationStep = () => (
    <div className="text-center space-y-6">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
        <CheckCircle className="h-8 w-8 text-green-600" />
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-2 font-heading text-green-600">Payment Successful!</h3>
        <p className="text-muted-foreground">Your report request has been processed</p>
      </div>

      <Card className="p-4 bg-muted/30 text-left">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="font-medium">Service:</span>
            <span>{service.title}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Company:</span>
            <span>{companyName}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Amount:</span>
            <span className="font-bold">{service.price}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Status:</span>
            <Badge className="bg-green-100 text-green-800 border-0">Confirmed</Badge>
          </div>
        </div>
      </Card>

      <div className="space-y-3">
        <p className="text-sm text-muted-foreground">
          Your report will be prepared within 24-48 hours. You will receive an email notification 
          when it's ready for download.
        </p>
        
        <Button onClick={handleClose} className="w-full" size="lg">
          Close
        </Button>
      </div>
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="font-heading">
              {step === 'payment-method' ? 'Payment' : 
               step === 'card-details' ? 'Payment Details' : 
               'Payment Confirmation'}
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
          {step === 'payment-method' && renderPaymentMethodStep()}
          {step === 'card-details' && renderCardDetailsStep()}
          {step === 'confirmation' && renderConfirmationStep()}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;