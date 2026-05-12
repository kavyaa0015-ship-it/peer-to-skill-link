import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Calendar, Flame, MessagesSquare, Trophy, TrendingUp, Award } from "lucide-react";
import { students } from "@/lib/data";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — SkillSphere" },
      { name: "description", content: "Your sessions, swaps, XP and progress all in one place." },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  const stats = [
    { icon: Flame, label: "Day streak", value: "12", color: "text-neon-pink" },
    { icon: Trophy, label: "Level", value: "24", color: "text-neon-cyan" },
    { icon: TrendingUp, label: "XP", value: "12,480", color: "text-neon-purple" },
    { icon: Award, label: "Badges", value: "9", color: "text-neon-cyan" },
  ];

  const upcoming = [
    { time: "Today · 4:00 PM", title: "React Hooks Deep Dive", with: "Aria Chen", skill: "React" },
    { time: "Tomorrow · 11:00 AM", title: "Figma Auto Layout 101", with: "Priya Sharma", skill: "Design" },
    { time: "Fri · 7:00 PM", title: "Beat Production Basics", with: "Marcus Rivera", skill: "Music" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 px-6 pb-20 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10 animate-fade-up">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Welcome back, Alex 👋</p>
            <h1 className="text-4xl md:text-5xl font-bold">Your <span className="text-gradient">SkillSphere</span></h1>
          </div>
          <button className="bg-gradient-hero text-background font-semibold px-5 py-2.5 rounded-xl shadow-glow hover:scale-105 transition-transform">
            New swap request
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((s) => (
            <div key={s.label} className="glass-strong rounded-2xl p-5 hover:border-primary/40 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <s.icon className={`h-5 w-5 ${s.color}`} />
                <span className="text-[10px] glass rounded-full px-2 py-0.5 text-muted-foreground">+12%</span>
              </div>
              <div className="text-3xl font-bold">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Upcoming sessions */}
          <div className="glass-strong rounded-3xl p-6 lg:col-span-2">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-semibold flex items-center gap-2"><Calendar className="h-4 w-4 text-neon-cyan" /> Upcoming sessions</h2>
              <button className="text-xs text-muted-foreground hover:text-foreground">View all</button>
            </div>
            <div className="space-y-3">
              {upcoming.map((u) => (
                <div key={u.title} className="glass rounded-2xl p-4 flex items-center justify-between gap-3 hover:border-primary/40 transition-colors">
                  <div className="min-w-0">
                    <div className="text-xs text-neon-cyan mb-1">{u.time}</div>
                    <div className="font-semibold truncate">{u.title}</div>
                    <div className="text-xs text-muted-foreground">with {u.with}</div>
                  </div>
                  <span className="text-xs bg-gradient-hero/15 border border-primary/30 rounded-lg px-2 py-1 shrink-0">{u.skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Leaderboard */}
          <div className="glass-strong rounded-3xl p-6">
            <h2 className="font-semibold flex items-center gap-2 mb-5"><Trophy className="h-4 w-4 text-neon-pink" /> Campus leaderboard</h2>
            <div className="space-y-3">
              {students.slice(0, 5).map((s, i) => (
                <div key={s.id} className="flex items-center gap-3">
                  <div className={`w-7 text-center font-bold text-sm ${i === 0 ? "text-neon-cyan" : "text-muted-foreground"}`}>#{i + 1}</div>
                  <div className="w-9 h-9 rounded-xl bg-gradient-hero flex items-center justify-center text-xs font-bold text-background">{s.avatar}</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">{s.name}</div>
                    <div className="text-[10px] text-muted-foreground">Lv {s.level} · {s.xp.toLocaleString()} XP</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI recommendations */}
          <div className="glass-strong rounded-3xl p-6 lg:col-span-3">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="font-semibold flex items-center gap-2"><MessagesSquare className="h-4 w-4 text-neon-purple" /> AI recommends for you</h2>
                <p className="text-xs text-muted-foreground mt-1">Based on your skills and goals</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {students.slice(2, 5).map((s) => (
                <div key={s.id} className="glass rounded-2xl p-4 hover:border-primary/40 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center text-xs font-bold text-background">{s.avatar}</div>
                    <div className="min-w-0">
                      <div className="font-semibold text-sm truncate">{s.name}</div>
                      <div className="text-xs text-muted-foreground truncate">{s.college}</div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{s.bio}</p>
                  <button className="w-full text-xs glass-strong border-primary/30 hover:border-primary/60 rounded-lg py-2 transition-colors">
                    Connect
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
