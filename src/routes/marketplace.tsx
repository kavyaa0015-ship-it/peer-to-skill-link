import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Search } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StudentCard } from "@/components/StudentCard";
import { categories, students } from "@/lib/data";

export const Route = createFileRoute("/marketplace")({
  head: () => ({
    meta: [
      { title: "Marketplace — SkillSphere" },
      { name: "description", content: "Browse thousands of student skills. Filter by category and find your next swap." },
    ],
  }),
  component: Marketplace,
});

function Marketplace() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string | null>(null);

  const filtered = students.filter((s) => {
    const matchesQ = q === "" || (s.name + s.bio + s.offers.join(" ")).toLowerCase().includes(q.toLowerCase());
    const matchesC = !cat || s.offers.some((o) => o.toLowerCase().includes(cat.toLowerCase().split(" ")[0]));
    return matchesQ && matchesC;
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 px-6 pb-20 max-w-7xl mx-auto">
        <div className="mb-10 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-3">Skill <span className="text-gradient">Marketplace</span></h1>
          <p className="text-muted-foreground">Discover students ready to swap skills with you right now.</p>
        </div>

        <div className="glass-strong rounded-2xl p-2 mb-6 flex items-center gap-2">
          <Search className="h-4 w-4 text-muted-foreground ml-3" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search skills, names or colleges..."
            className="flex-1 bg-transparent outline-none py-2 text-sm placeholder:text-muted-foreground"
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setCat(null)}
            className={`text-xs px-3 py-1.5 rounded-full transition-all ${!cat ? "bg-gradient-hero text-background font-semibold" : "glass hover:border-primary/40"}`}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c.name}
              onClick={() => setCat(c.name)}
              className={`text-xs px-3 py-1.5 rounded-full transition-all ${cat === c.name ? "bg-gradient-hero text-background font-semibold" : "glass hover:border-primary/40"}`}
            >
              {c.icon} {c.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((s) => <StudentCard key={s.id} s={s} />)}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">No students match — try another search.</div>
        )}
      </main>
      <Footer />
    </div>
  );
}
