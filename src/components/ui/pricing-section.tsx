import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "0",
    description: "Perfect for getting started with focused work",
    features: [
      "Join unlimited focus rooms",
      "Basic Pomodoro timer",
      "Simple presence indicators",
      "Community ambient sounds",
      "Basic session tracking"
    ],
    cta: "Start Focusing",
    popular: false
  },
  {
    name: "Focus Pro",
    price: "9",
    description: "Advanced tools for serious productivity",
    features: [
      "Everything in Free",
      "Create unlimited rooms",
      "Advanced focus analytics",
      "Premium ambient sound packs",
      "Custom room themes",
      "Focus streak tracking",
      "Priority support"
    ],
    cta: "Go Pro",
    popular: true
  },
  {
    name: "Team",
    price: "29",
    description: "Built for teams and organizations",
    features: [
      "Everything in Focus Pro",
      "Private team rooms",
      "Team analytics dashboard",
      "Admin controls",
      "Custom branding",
      "SSO integration",
      "Dedicated support"
    ],
    cta: "Start Team Trial",
    popular: false
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="bg-ocean/10 text-ocean border-ocean/20">
            💰 Simple Pricing
          </Badge>
          <h2 className="text-4xl font-bold text-foreground">
            Choose your
            <span className="block text-primary">focus level</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start free and upgrade when you're ready to unlock your full productivity potential.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative border-border/50 transition-all duration-300 ${
                plan.popular 
                  ? 'border-primary/50 shadow-xl scale-105 bg-gradient-to-b from-card to-primary/5' 
                  : 'hover:shadow-lg hover:border-border'
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-primary-glow">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold text-foreground">
                  {plan.name}
                </CardTitle>
                <div className="space-y-2">
                  <div className="flex items-baseline justify-center space-x-1">
                    <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-primary to-primary-glow hover:shadow-xl' 
                      : ''
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-muted-foreground">
            All plans include a 14-day free trial. Cancel anytime.
          </p>
          <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
            <span>✓ No setup fees</span>
            <span>✓ Cancel anytime</span>
            <span>✓ 30-day money back</span>
          </div>
        </div>
      </div>
    </section>
  );
}