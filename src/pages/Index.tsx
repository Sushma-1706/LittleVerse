import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Baby, 
  Heart, 
  Calendar, 
  Activity, 
  Users, 
  BookOpen, 
  Stethoscope,
  Bell,
  MessageCircle,
  TrendingUp,
  Shield,
  Sparkles
} from "lucide-react";
import heroImage from "@/assets/hero-babycare.jpg";
import babyBuddyIcon from "@/assets/babybuddy-icon.png";
import growthTracking from "@/assets/growth-tracking.jpg";

const Index = () => {
  const features = [
    {
      icon: Sparkles,
      title: "AI Health Assistant",
      description: "Get instant AI-powered insights on your baby's symptoms, sleep patterns, and nutrition needs.",
      color: "text-primary"
    },
    {
      icon: Stethoscope,
      title: "Pediatric Consultations",
      description: "Connect with verified pediatricians through video calls, chat, and digital prescriptions.",
      color: "text-secondary"
    },
    {
      icon: Activity,
      title: "Health & Growth Tracker",
      description: "Monitor vaccinations, growth milestones, feeding schedules, and sleep patterns all in one place.",
      color: "text-accent"
    },
    {
      icon: TrendingUp,
      title: "Smart Analytics",
      description: "Visualize your baby's development with beautiful charts and personalized recommendations.",
      color: "text-success"
    },
    {
      icon: Users,
      title: "Parent Community",
      description: "Share experiences, get advice, and connect with other parents on similar journeys.",
      color: "text-primary"
    },
    {
      icon: BookOpen,
      title: "Expert Resources",
      description: "Access curated articles, videos, and guides from pediatric experts and specialists.",
      color: "text-secondary"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Navigation */}
      <nav className="border-b border-border/50 bg-card/80 backdrop-blur-sm sticky top-0 z-50 shadow-[var(--shadow-soft)]">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Baby className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              LittleVerse
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-[var(--transition-smooth)]">
              Features
            </a>
            <a href="#chatbot" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-[var(--transition-smooth)]">
              AI Assistant
            </a>
            <a href="#community" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-[var(--transition-smooth)]">
              Community
            </a>
            <Button variant="soft" size="sm">Sign In</Button>
            <Button variant="hero" size="sm">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-20" />
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
              <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                <Sparkles className="w-3 h-3 mr-1" />
                AI-Powered Baby Care Platform
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Complete Care for Your{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Little One
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Track health, connect with pediatricians, monitor growth, and get AI-powered insights—all in one beautiful platform designed for modern parents.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" className="text-base">
                  <Baby className="mr-2" />
                  Start Free Trial
                </Button>
                <Button variant="soft" size="lg" className="text-base">
                  <MessageCircle className="mr-2" />
                  Meet BabyBuddy
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-background" />
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground">10,000+ Happy Parents</p>
                  <p>Trusted by families worldwide</p>
                </div>
              </div>
            </div>
            <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-200">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
              <img 
                src={heroImage} 
                alt="Happy parents with babies" 
                className="relative rounded-3xl shadow-[var(--shadow-hover)] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="mb-2">
              <Heart className="w-3 h-3 mr-1" />
              Comprehensive Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">
              Everything You Need in One Place
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From AI-powered health insights to expert consultations, we've got every aspect of baby care covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-border/50 hover:border-primary/50 transition-[var(--transition-smooth)] hover:shadow-[var(--shadow-card)] bg-gradient-to-br from-card to-card/50 group"
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-[var(--transition-bounce)]`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Chatbot Section */}
      <section id="chatbot" className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <Card className="shadow-[var(--shadow-hover)] border-primary/20 bg-gradient-to-br from-card to-primary/5">
                <CardHeader className="border-b border-border/50">
                  <div className="flex items-center gap-3">
                    <img src={babyBuddyIcon} alt="BabyBuddy" className="w-12 h-12" />
                    <div>
                      <CardTitle>BabyBuddy AI</CardTitle>
                      <CardDescription>Your 24/7 Baby Care Assistant</CardDescription>
                    </div>
                    <Badge variant="secondary" className="ml-auto">
                      <div className="w-2 h-2 bg-success rounded-full mr-2 animate-pulse" />
                      Online
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div className="bg-muted/50 rounded-2xl p-4 max-w-[80%]">
                    <p className="text-sm text-muted-foreground mb-1">You</p>
                    <p>My baby has been crying a lot today and seems uncomfortable. What could it be?</p>
                  </div>
                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-4 max-w-[85%] ml-auto">
                    <p className="text-sm text-primary mb-1">BabyBuddy</p>
                    <p>I understand your concern. Let me ask a few questions to help identify the issue:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                      <li>Has your baby been fed recently?</li>
                      <li>When was the last diaper change?</li>
                      <li>Is there any fever or rash?</li>
                    </ul>
                    <p className="mt-2 text-sm text-muted-foreground">Based on your answers, I can provide personalized guidance or suggest when to consult a pediatrician.</p>
                  </div>
                  <div className="pt-4 border-t border-border/50">
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        placeholder="Type your question..." 
                        className="flex-1 px-4 py-2 rounded-xl bg-muted/50 border border-border/50 focus:border-primary focus:outline-none transition-[var(--transition-smooth)]"
                      />
                      <Button size="icon" variant="hero">
                        <MessageCircle className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <Badge variant="secondary">
                <Sparkles className="w-3 h-3 mr-1" />
                AI-Powered Intelligence
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold">
                Meet BabyBuddy, Your Smart Assistant
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Get instant answers to your parenting questions, symptom analysis, and personalized care recommendations—available 24/7 with our AI-powered assistant.
              </p>
              <ul className="space-y-4">
                {[
                  "Instant symptom analysis and health guidance",
                  "Personalized feeding and sleep recommendations",
                  "Developmental milestone tracking",
                  "Emergency triage and doctor referrals"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Shield className="w-4 h-4 text-success" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="hero" size="lg">
                <MessageCircle className="mr-2" />
                Try BabyBuddy Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Tracking Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary">
                <TrendingUp className="w-3 h-3 mr-1" />
                Smart Tracking
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold">
                Watch Your Baby Grow & Thrive
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Track every milestone, feeding, sleep pattern, and health metric with beautiful visualizations and AI-powered insights.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Calendar, label: "Vaccination Reminders", color: "primary" },
                  { icon: Activity, label: "Growth Charts", color: "secondary" },
                  { icon: Bell, label: "Smart Alerts", color: "accent" },
                  { icon: TrendingUp, label: "Milestone Tracking", color: "success" }
                ].map((item, index) => (
                  <Card key={index} className="border-border/50 bg-gradient-to-br from-card to-card/50 hover:shadow-[var(--shadow-card)] transition-[var(--transition-smooth)]">
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br from-${item.color}/10 to-${item.color}/5 flex items-center justify-center`}>
                        <item.icon className={`w-5 h-5 text-${item.color}`} />
                      </div>
                      <span className="text-sm font-medium">{item.label}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Button variant="default" size="lg">
                <Activity className="mr-2" />
                View Dashboard
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-3xl blur-3xl" />
              <img 
                src={growthTracking} 
                alt="Growth tracking dashboard" 
                className="relative rounded-3xl shadow-[var(--shadow-hover)] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4">
            <Users className="w-3 h-3 mr-1" />
            Parent Community
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            You're Not Alone on This Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Join thousands of parents sharing experiences, asking questions, and supporting each other through every stage of parenthood.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { value: "10K+", label: "Active Parents" },
              { value: "50K+", label: "Discussions" },
              { value: "500+", label: "Expert Articles" }
            ].map((stat, index) => (
              <Card key={index} className="border-border/50 bg-gradient-to-br from-card to-primary/5 hover:shadow-[var(--shadow-card)] transition-[var(--transition-smooth)]">
                <CardContent className="p-8">
                  <p className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button variant="hero" size="lg">
            <Users className="mr-2" />
            Join the Community
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Transform Your Baby Care Experience?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of parents who trust LittleVerse for comprehensive baby care support.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button variant="hero" size="lg" className="text-lg">
                <Baby className="mr-2" />
                Get Started Free
              </Button>
              <Button variant="soft" size="lg" className="text-lg">
                <BookOpen className="mr-2" />
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/50 backdrop-blur-sm py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Baby className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">LittleVerse</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Comprehensive baby care platform powered by AI, designed for modern parents.
              </p>
            </div>
            {[
              {
                title: "Features",
                links: ["AI Assistant", "Health Tracking", "Consultations", "Community"]
              },
              {
                title: "Resources",
                links: ["Expert Articles", "Guides", "FAQs", "Support"]
              },
              {
                title: "Company",
                links: ["About Us", "Careers", "Privacy", "Terms"]
              }
            ].map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-semibold">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-[var(--transition-smooth)]">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-border/50 mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 LittleVerse. All rights reserved. Made with {" "}
              <Heart className="inline w-4 h-4 text-secondary" /> for parents everywhere.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
