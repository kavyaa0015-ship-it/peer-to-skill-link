import { Star } from "lucide-react";
import type { Student } from "@/lib/data";

export function StudentCard({ s }: { s: Student }) {
  return (
    <div className="group glass-strong rounded-3xl p-6 hover:border-primary/50 hover:shadow-glow transition-all hover:-translate-y-1">
      <div className="flex items-start gap-4 mb-4">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-hero blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
          <div className="relative w-14 h-14 rounded-2xl bg-gradient-hero flex items-center justify-center font-bold text-background text-lg">
            {s.avatar}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-semibold truncate">{s.name}</h3>
            <div className="flex items-center gap-1 text-xs">
              <Star className="h-3 w-3 fill-neon-cyan text-neon-cyan" />
              <span className="font-medium">{s.rating}</span>
            </div>
          </div>
          <div className="text-xs text-muted-foreground">{s.college}</div>
          <div className="flex items-center gap-2 mt-1.5">
            <span className="text-[10px] glass rounded-full px-2 py-0.5">Lv {s.level}</span>
            <span className="text-[10px] text-muted-foreground">{s.swaps} swaps</span>
          </div>
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{s.bio}</p>

      <div className="space-y-2 mb-4">
        <div>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5">Offers</div>
          <div className="flex flex-wrap gap-1.5">
            {s.offers.map((t) => (
              <span key={t} className="text-xs bg-gradient-hero/15 border border-primary/30 text-foreground rounded-lg px-2 py-1">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5">Wants</div>
          <div className="flex flex-wrap gap-1.5">
            {s.wants.map((t) => (
              <span key={t} className="text-xs glass rounded-lg px-2 py-1 text-muted-foreground">{t}</span>
            ))}
          </div>
        </div>
      </div>

      <button className="w-full bg-gradient-hero text-background font-semibold py-2.5 rounded-xl hover:shadow-neon transition-shadow">
        Send swap request
      </button>
    </div>
  );
}
