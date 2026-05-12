import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <nav className="glass-strong flex items-center justify-between rounded-2xl px-5 py-3">
          <Link to="/" className="flex items-center gap-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero blur-md opacity-70" />
              <div className="relative bg-gradient-hero rounded-lg p-1.5">
                <Sparkles className="h-4 w-4 text-background" />
              </div>
            </div>
            <span className="font-display font-bold text-lg tracking-tight">SkillSphere</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <Link to="/marketplace" className="hover:text-foreground transition-colors">Marketplace</Link>
            <Link to="/dashboard" className="hover:text-foreground transition-colors">Dashboard</Link>
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#community" className="hover:text-foreground transition-colors">Community</a>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/dashboard" className="hidden sm:inline-flex text-sm text-muted-foreground hover:text-foreground px-3 py-1.5">
              Sign in
            </Link>
            <Link
              to="/marketplace"
              className="bg-gradient-hero text-background text-sm font-semibold px-4 py-2 rounded-xl shadow-glow hover:scale-105 transition-transform"
            >
              Join free
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
