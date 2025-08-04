import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <nav className={cn("flex items-center justify-between w-full py-6", className)}>
      <Link to="/" className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-sm">Q</span>
        </div>
        <span className="text-xl font-semibold text-foreground">QuietClub</span>
      </Link>
      
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
        {user ? (
          <>
            <span className="text-sm text-muted-foreground hidden sm:inline">
              Welcome back!
            </span>
            <Button variant="ghost" size="sm" onClick={handleSignOut}>
              Sign Out
            </Button>
          </>
        ) : (
          <>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/auth">Sign In</Link>
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg transition-all duration-300" asChild>
              <Link to="/auth">Start Focusing</Link>
            </Button>
          </>
        )}
      </div>
    </nav>
  );
}