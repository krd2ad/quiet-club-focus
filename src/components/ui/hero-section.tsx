import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-image.jpg";

export function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-background to-ocean-light/20" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge variant="secondary" className="w-fit bg-primary/10 text-primary border-primary/20">
              🎯 Focus Together, Silently
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Your Virtual
                <span className="block bg-gradient-to-r from-primary to-ocean bg-clip-text text-transparent">
                  Focus Room
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Join silent co-working sessions with remote workers worldwide. 
                No distractions, just pure focus and gentle accountability.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-xl transition-all duration-300 px-8"
              >
                Join a Focus Room
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-border hover:bg-accent/50 transition-all duration-300"
              >
                Create Your Room
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">2.5k+</div>
                <div className="text-sm text-muted-foreground">Active Focusers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">45min</div>
                <div className="text-sm text-muted-foreground">Avg Session</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Focus Rate</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Peaceful workspace for focused productivity"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-card border shadow-lg rounded-xl p-4 animate-pulse">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-sm font-medium">3 people focusing</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card border shadow-lg rounded-xl p-4">
              <div className="text-center">
                <div className="text-lg font-bold text-primary">25:00</div>
                <div className="text-xs text-muted-foreground">Focus Timer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}