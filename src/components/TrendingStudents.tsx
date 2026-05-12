import { students } from "@/lib/data";
import { StudentCard } from "./StudentCard";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function TrendingStudents() {
  return (
    <section id="community" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex glass rounded-full px-3 py-1 text-xs text-muted-foreground mb-3">Trending this week</div>
            <h2 className="text-4xl md:text-5xl font-bold">Top <span className="text-gradient">swappers</span> on campus</h2>
          </div>
          <Link to="/marketplace" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {students.slice(0, 6).map((s) => <StudentCard key={s.id} s={s} />)}
        </div>
      </div>
    </section>
  );
}
