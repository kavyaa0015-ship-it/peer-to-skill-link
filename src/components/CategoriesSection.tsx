import { categories } from "@/lib/data";

export function CategoriesSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-3">Explore <span className="text-gradient">categories</span></h2>
            <p className="text-muted-foreground">Find the skills your future self will thank you for.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((c) => (
            <div
              key={c.name}
              className="group glass-strong rounded-2xl p-6 cursor-pointer hover:border-primary/40 hover:-translate-y-1 transition-all"
            >
              <div className={`text-4xl mb-3 group-hover:scale-110 transition-transform`}>{c.icon}</div>
              <div className="font-semibold mb-1">{c.name}</div>
              <div className="text-xs text-muted-foreground">{c.count} students</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
