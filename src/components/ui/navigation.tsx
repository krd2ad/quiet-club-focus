import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  return (
    <nav className={cn("flex items-center justify-between w-full py-6", className)}>
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-sm">Q</span>
        </div>
        <span className="text-xl font-semibold text-foreground">QuietClub</span>
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
          Features
        </a>
        <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
          Pricing
        </a>
        <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
          About
        </a>
      </div>

      <div className="flex items-center space-x-3">
        <Button variant="ghost" size="sm">
          Sign In
        </Button>
        <Button size="sm" className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg transition-all duration-300">
          Start Focusing
        </Button>
      </div>
    </nav>
  );
}