import { Link } from "@tanstack/react-router";
import { ArrowRight, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />

      {/* floating orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-neon-purple/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl animate-float [animation-delay:2s]" />

      <div className="relative max-w-5xl mx-auto px-6 text-center animate-fade-up">
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium mb-8">
          <Zap className="h-3.5 w-3.5 text-neon-cyan" />
          <span className="text-muted-foreground">Built for the next gen of college students</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6">
          Trade skills.<br />
          <span className="text-gradient">Not money.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          The campus marketplace where students swap coding for design, music for editing,
          and AI tools for photography. Learn anything from your peers — for free.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/marketplace"
            className="group bg-gradient-hero text-background font-semibold px-7 py-3.5 rounded-xl shadow-neon hover:scale-105 transition-transform inline-flex items-center gap-2"
          >
            Start swapping skills
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/dashboard"
            className="glass-strong px-7 py-3.5 rounded-xl font-semibold hover:border-primary/50 transition-colors"
          >
            View dashboard
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-3 max-w-2xl mx-auto gap-6">
          {[
            { v: "12K+", l: "Students" },
            { v: "180+", l: "Campuses" },
            { v: "45K+", l: "Swaps" },
          ].map((s) => (
            <div key={s.l} className="glass rounded-2xl p-4">
              <div className="text-2xl md:text-3xl font-bold text-gradient">{s.v}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
