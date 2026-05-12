import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { CategoriesSection } from "@/components/CategoriesSection";
import { TrendingStudents } from "@/components/TrendingStudents";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SkillSphere — Trade skills, not money" },
      { name: "description", content: "The campus marketplace where students swap skills. Learn coding, design, music, AI tools and more from your peers — for free." },
      { property: "og:title", content: "SkillSphere — Trade skills, not money" },
      { property: "og:description", content: "Swap skills with college students worldwide. Built like Discord meets LinkedIn for campus." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CategoriesSection />
        <TrendingStudents />
      </main>
      <Footer />
    </div>
  );
}
