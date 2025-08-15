import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart, 
  FileText, 
  Download, 
  Eye, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  TrendingUp,
  Users,
  Building,
  DollarSign
} from "lucide-react";

const DashboardSection = () => {
  const [language] = useState<'en' | 'ar'>('en');

  const recentReports = [
    {
      id: "DD-2024-001",
      company: "ADNOC Trading Ltd.",
      type: language === 'en' ? 'Full Due Diligence' : 'العناية الواجبة الكاملة',
      status: 'completed',
      date: "2024-01-15",
      score: 85
    },
    {
      id: "DD-2024-002", 
      company: "Cairo Steel Industries",
      type: language === 'en' ? 'Credit Report' : 'تقرير ائتماني',
      status: 'in-progress',
      date: "2024-01-16",
      score: null
    },
    {
      id: "DD-2024-003",
      company: "Emirates Global Investments",
      type: language === 'en' ? 'Field Verification' : 'التحقق الميداني',
      status: 'pending',
      date: "2024-01-17", 
      score: null
    }
  ];

  const stats = [
    {
      title: language === 'en' ? 'Total Reports' : 'إجمالي التقارير',
      value: "247",
      change: "+12%",
      icon: FileText,
      color: "text-primary"
    },
    {
      title: language === 'en' ? 'Companies Verified' : 'الشركات المتحققة',
      value: "189",
      change: "+8%", 
      icon: Building,
      color: "text-success"
    },
    {
      title: language === 'en' ? 'Active Requests' : 'الطلبات النشطة',
      value: "12",
      change: "+3",
      icon: Clock,
      color: "text-accent"
    },
    {
      title: language === 'en' ? 'Total Investment' : 'إجمالي الاستثمار',
      value: "$24,580",
      change: "+18%",
      icon: DollarSign,
      color: "text-primary"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-success';
      case 'in-progress': return 'text-accent';
      case 'pending': return 'text-muted-foreground';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-4 w-4" />;
      case 'in-progress': return <Clock className="h-4 w-4" />;
      case 'pending': return <AlertCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return language === 'en' ? 'Completed' : 'مكتمل';
      case 'in-progress': return language === 'en' ? 'In Progress' : 'قيد التنفيذ';
      case 'pending': return language === 'en' ? 'Pending' : 'في الانتظار';
      default: return status;
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            {language === 'en' ? 'Investor Dashboard' : 'لوحة تحكم المستثمر'}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-heading">
            {language === 'en' ? 'Manage Your Due Diligence Portfolio' : 'إدارة محفظة العناية الواجبة'}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'en' 
              ? 'Track requests, download reports, and monitor your investment due diligence activities from one centralized dashboard.'
              : 'تتبع الطلبات، وتحميل التقارير، ومراقبة أنشطة العناية الواجبة للاستثمار من لوحة تحكم مركزية واحدة.'
            }
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gradient-card border border-border shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {stat.change}
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1 font-heading">
                  {stat.value}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {stat.title}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dashboard Tabs */}
        <Tabs defaultValue="reports" className="w-full">
          <TabsList className="grid w-full lg:w-auto grid-cols-3 mb-8">
            <TabsTrigger value="reports" className="flex items-center space-x-2">
              <FileText className="h-4 w-4" />
              <span>{language === 'en' ? 'Reports' : 'التقارير'}</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center space-x-2">
              <BarChart className="h-4 w-4" />
              <span>{language === 'en' ? 'Analytics' : 'التحليلات'}</span>
            </TabsTrigger>
            <TabsTrigger value="requests" className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>{language === 'en' ? 'Requests' : 'الطلبات'}</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="reports">
            <Card className="bg-gradient-card border border-border shadow-card">
              <CardHeader>
                <CardTitle className="font-heading">
                  {language === 'en' ? 'Recent Due Diligence Reports' : 'تقارير العناية الواجبة الحديثة'}
                </CardTitle>
                <CardDescription>
                  {language === 'en' ? 'View and download your completed reports' : 'عرض وتحميل التقارير المكتملة'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentReports.map((report) => (
                    <div key={report.id} className="flex items-center justify-between p-4 border border-border rounded-lg bg-background/50">
                      <div className="flex items-center space-x-4">
                        <div className={`flex items-center space-x-2 ${getStatusColor(report.status)}`}>
                          {getStatusIcon(report.status)}
                          <span className="text-sm font-medium">
                            {getStatusText(report.status)}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{report.company}</h4>
                          <p className="text-sm text-muted-foreground">{report.type}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        {report.score && (
                          <div className="text-center">
                            <div className="text-lg font-bold text-foreground">{report.score}</div>
                            <div className="text-xs text-muted-foreground">
                              {language === 'en' ? 'Risk Score' : 'نقاط المخاطر'}
                            </div>
                          </div>
                        )}
                        
                        <div className="text-right">
                          <div className="text-sm text-muted-foreground">{report.date}</div>
                          <div className="text-xs text-muted-foreground">#{report.id}</div>
                        </div>
                        
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-2" />
                            {language === 'en' ? 'View' : 'عرض'}
                          </Button>
                          {report.status === 'completed' && (
                            <Button size="sm">
                              <Download className="h-4 w-4 mr-2" />
                              {language === 'en' ? 'Download' : 'تحميل'}
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-gradient-card border border-border shadow-card">
                <CardHeader>
                  <CardTitle className="font-heading">
                    {language === 'en' ? 'Risk Distribution' : 'توزيع المخاطر'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{language === 'en' ? 'Low Risk' : 'مخاطر منخفضة'}</span>
                        <span className="text-sm text-muted-foreground">65%</span>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{language === 'en' ? 'Medium Risk' : 'مخاطر متوسطة'}</span>
                        <span className="text-sm text-muted-foreground">25%</span>
                      </div>
                      <Progress value={25} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{language === 'en' ? 'High Risk' : 'مخاطر عالية'}</span>
                        <span className="text-sm text-muted-foreground">10%</span>
                      </div>
                      <Progress value={10} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border border-border shadow-card">
                <CardHeader>
                  <CardTitle className="font-heading">
                    {language === 'en' ? 'Monthly Activity' : 'النشاط الشهري'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 mb-4">
                    <TrendingUp className="h-8 w-8 text-success" />
                    <div>
                      <div className="text-2xl font-bold text-foreground">+24%</div>
                      <div className="text-sm text-muted-foreground">
                        {language === 'en' ? 'vs last month' : 'مقارنة بالشهر الماضي'}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === 'en' 
                      ? 'Your due diligence activity has increased significantly this month.'
                      : 'زاد نشاط العناية الواجبة بشكل كبير هذا الشهر.'
                    }
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="requests">
            <Card className="bg-gradient-card border border-border shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="font-heading">
                      {language === 'en' ? 'Submit New Request' : 'إرسال طلب جديد'}
                    </CardTitle>
                    <CardDescription>
                      {language === 'en' ? 'Request due diligence services for new entities' : 'طلب خدمات العناية الواجبة للكيانات الجديدة'}
                    </CardDescription>
                  </div>
                  <Button>
                    {language === 'en' ? 'New Request' : 'طلب جديد'}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="border border-border">
                    <CardContent className="p-6 text-center">
                      <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">
                        {language === 'en' ? 'Data Verification' : 'التحقق من البيانات'}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {language === 'en' ? 'Quick digital checks' : 'فحوصات رقمية سريعة'}
                      </p>
                      <Button variant="outline" size="sm">
                        {language === 'en' ? 'Start Request' : 'بدء الطلب'}
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border border-border">
                    <CardContent className="p-6 text-center">
                      <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">
                        {language === 'en' ? 'Field Verification' : 'التحقق الميداني'}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {language === 'en' ? 'On-site investigations' : 'تحقيقات في الموقع'}
                      </p>
                      <Button variant="outline" size="sm">
                        {language === 'en' ? 'Start Request' : 'بدء الطلب'}
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border border-border">
                    <CardContent className="p-6 text-center">
                      <Building className="h-12 w-12 text-success mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">
                        {language === 'en' ? 'Full Due Diligence' : 'العناية الواجبة الكاملة'}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {language === 'en' ? 'Comprehensive analysis' : 'تحليل شامل'}
                      </p>
                      <Button variant="outline" size="sm">
                        {language === 'en' ? 'Start Request' : 'بدء الطلب'}
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default DashboardSection;