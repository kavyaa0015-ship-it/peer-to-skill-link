import { Brain, MessagesSquare, Trophy, Users2, Sparkles, BarChart3 } from "lucide-react";

const features = [
  { icon: Brain, title: "AI Skill Matching", desc: "Our AI analyzes your goals and pairs you with the perfect swap partner across campus." },
  { icon: MessagesSquare, title: "Realtime Chat & Calls", desc: "Message, voice & video call peers. Share files, code snippets, and study notes instantly." },
  { icon: Trophy, title: "XP & Leaderboards", desc: "Earn XP for every session, unlock badges, and climb your campus leaderboard." },
  { icon: Users2, title: "College Communities", desc: "Join your campus hub. Find hackathon teams, discussions, and exclusive events." },
  { icon: Sparkles, title: "Skill Certificates", desc: "Complete swaps and earn verified certificates you can flex on your portfolio." },
  { icon: BarChart3, title: "Progress Analytics", desc: "Track every skill you've learned and taught with beautiful analytics dashboards." },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex glass rounded-full px-3 py-1 text-xs text-muted-foreground mb-4">Why SkillSphere</div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Everything you need to <span className="text-gradient">level up</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto">A complete operating system for peer-to-peer learning on campus.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group glass-strong rounded-3xl p-7 hover:border-primary/40 transition-all hover:-translate-y-1 hover:shadow-glow"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="inline-flex p-3 rounded-2xl bg-gradient-hero/10 border border-primary/20 mb-5 group-hover:scale-110 transition-transform">
                <f.icon className="h-5 w-5 text-neon-cyan" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
