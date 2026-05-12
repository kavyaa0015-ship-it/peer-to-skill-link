import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-12 px-6 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-hero rounded-lg p-1.5"><Sparkles className="h-4 w-4 text-background" /></div>
          <span className="font-display font-bold">SkillSphere</span>
          <span className="text-xs text-muted-foreground ml-2">© 2026</span>
        </div>
        <p className="text-xs text-muted-foreground">Built by students, for students. Trade what you know.</p>
      </div>
    </footer>
  );
}
