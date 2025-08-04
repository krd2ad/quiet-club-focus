import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: "🤝",
    title: "Silent Co-working",
    description: "Work alongside others in peaceful, distraction-free rooms. See gentle presence indicators without the noise.",
    highlight: "Core Feature"
  },
  {
    icon: "⏱️",
    title: "Pomodoro Timer",
    description: "Built-in focus cycles with gentle breaks. Stay in flow with time-tested productivity techniques.",
    highlight: "Focus Tool"
  },
  {
    icon: "📊",
    title: "Focus Insights",
    description: "Track your focus streaks and session quality. Build better habits with meaningful data.",
    highlight: "Premium"
  },
  {
    icon: "🎵",
    title: "Ambient Sounds",
    description: "Curated soundscapes to enhance concentration. From nature sounds to gentle white noise.",
    highlight: "Premium"
  },
  {
    icon: "🏢",
    title: "Team Rooms",
    description: "Private focus spaces for your team. Foster deep work culture across your organization.",
    highlight: "Teams"
  },
  {
    icon: "🎨",
    title: "Custom Themes",
    description: "Personalize your focus environment. Beautiful themes designed to reduce visual stress.",
    highlight: "Premium"
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="bg-sage/20 text-sage-foreground border-sage/30">
            ✨ Features
          </Badge>
          <h2 className="text-4xl font-bold text-foreground">
            Everything you need to
            <span className="block text-primary">focus deeply</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple tools designed to minimize distractions and maximize your productive potential.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-border/50 hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="text-3xl">{feature.icon}</div>
                  <Badge 
                    variant="secondary" 
                    className={`text-xs ${
                      feature.highlight === 'Premium' ? 'bg-primary/10 text-primary border-primary/20' :
                      feature.highlight === 'Teams' ? 'bg-ocean/10 text-ocean border-ocean/20' :
                      feature.highlight === 'Core Feature' ? 'bg-sage/10 text-sage-foreground border-sage/20' :
                      'bg-accent/50 text-accent-foreground border-accent'
                    }`}
                  >
                    {feature.highlight}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}