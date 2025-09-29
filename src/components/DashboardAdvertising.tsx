import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart, 
  FileText, 
  Shield,
  TrendingUp,
  Users,
  Building,
  DollarSign,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const DashboardAdvertising = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");

  const features = [
    {
      icon: FileText,
      title: "Comprehensive Reports",
      description: "Access detailed due diligence reports with risk scores and actionable insights"
    },
    {
      icon: BarChart,
      title: "Advanced Analytics", 
      description: "Track portfolio performance and monitor risk distribution across investments"
    },
    {
      icon: Shield,
      title: "Real-time Monitoring",
      description: "Stay updated with continuous monitoring of your verified companies"
    },
    {
      icon: TrendingUp,
      title: "Investment Insights",
      description: "Make informed decisions with data-driven investment recommendations"
    }
  ];

  const benefits = [
    "Track 247+ due diligence reports in one dashboard",
    "Monitor 189 verified companies and their risk profiles", 
    "Access real-time analytics and performance metrics",
    "Download official documents and certificates",
    "Manage active verification requests seamlessly",
    "Get instant alerts on risk changes"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign up form submission
    console.log("Sign up:", { name, email, company });
    // Reset form
    setName("");
    setEmail("");
    setCompany("");
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            Investor Dashboard
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-heading">
            Your Complete Due Diligence Command Center
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join hundreds of investors who trust our platform to manage their due diligence portfolio, track verification progress, and make informed investment decisions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Features Preview */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 font-heading">
              Everything You Need to Manage Your Investments
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <Card key={index} className="bg-gradient-card border border-border shadow-card">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sign Up Form */}
          <div>
            <Card className="bg-gradient-card border border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-center font-heading">
                  Get Started Today
                </CardTitle>
                <CardDescription className="text-center">
                  Create your account and access your personalized dashboard
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name">Full Name</Label>
                    <Input
                      id="signup-name"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email Address</Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="signup-company">Company Name</Label>
                    <Input
                      id="signup-company"
                      placeholder="Enter your company name"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Create My Dashboard
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <Button variant="link" className="p-0 h-auto text-primary">
                      Sign in here
                    </Button>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gradient-card border border-border shadow-card text-center">
            <CardContent className="p-6">
              <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-2xl font-bold text-foreground mb-1">$24,580</div>
              <div className="text-sm text-muted-foreground">Average Portfolio Value</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border border-border shadow-card text-center">
            <CardContent className="p-6">
              <Building className="h-12 w-12 text-success mx-auto mb-4" />
              <div className="text-2xl font-bold text-foreground mb-1">189</div>
              <div className="text-sm text-muted-foreground">Companies Verified</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border border-border shadow-card text-center">
            <CardContent className="p-6">
              <FileText className="h-12 w-12 text-accent mx-auto mb-4" />
              <div className="text-2xl font-bold text-foreground mb-1">247</div>
              <div className="text-sm text-muted-foreground">Reports Generated</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border border-border shadow-card text-center">
            <CardContent className="p-6">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-2xl font-bold text-foreground mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Active Investors</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DashboardAdvertising;