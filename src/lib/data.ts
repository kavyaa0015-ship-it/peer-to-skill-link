export const categories = [
  { name: "Programming", icon: "💻", color: "from-blue-500 to-cyan-500", count: 1240 },
  { name: "Design", icon: "🎨", color: "from-pink-500 to-purple-500", count: 890 },
  { name: "Editing", icon: "🎬", color: "from-orange-500 to-red-500", count: 612 },
  { name: "Gaming", icon: "🎮", color: "from-green-500 to-emerald-500", count: 540 },
  { name: "Communication", icon: "💬", color: "from-yellow-500 to-orange-500", count: 320 },
  { name: "Music", icon: "🎵", color: "from-violet-500 to-fuchsia-500", count: 470 },
  { name: "AI Tools", icon: "🤖", color: "from-cyan-500 to-blue-500", count: 980 },
  { name: "Marketing", icon: "📈", color: "from-rose-500 to-pink-500", count: 410 },
];

export type Student = {
  id: string;
  name: string;
  college: string;
  avatar: string;
  bio: string;
  offers: string[];
  wants: string[];
  level: number;
  xp: number;
  rating: number;
  swaps: number;
  badges: string[];
};

export const students: Student[] = [
  {
    id: "1", name: "Aria Chen", college: "MIT", avatar: "AC",
    bio: "Full-stack dev obsessed with React & AI. Teaching what I wish I learned freshman year.",
    offers: ["React", "TypeScript", "AI Tools"], wants: ["Video Editing", "UI Design"],
    level: 24, xp: 12480, rating: 4.9, swaps: 47, badges: ["🚀", "🧠", "⭐"],
  },
  {
    id: "2", name: "Marcus Rivera", college: "Stanford", avatar: "MR",
    bio: "Music producer turning beats into business. Logic Pro wizard.",
    offers: ["Music Production", "Sound Design"], wants: ["Marketing", "Branding"],
    level: 18, xp: 8200, rating: 4.8, swaps: 32, badges: ["🎵", "🔥"],
  },
  {
    id: "3", name: "Priya Sharma", college: "IIT Bombay", avatar: "PS",
    bio: "Designer who codes. Figma to Framer in record time.",
    offers: ["UI/UX", "Figma", "Branding"], wants: ["Backend", "Python"],
    level: 30, xp: 18900, rating: 5.0, swaps: 68, badges: ["🎨", "👑", "💎"],
  },
  {
    id: "4", name: "Jordan Park", college: "UCLA", avatar: "JP",
    bio: "Cinematographer and editor. Made 200+ student films.",
    offers: ["Premiere Pro", "DaVinci", "Cinematography"], wants: ["3D Modeling"],
    level: 22, xp: 11200, rating: 4.9, swaps: 41, badges: ["🎬", "⭐"],
  },
  {
    id: "5", name: "Sofia Müller", college: "ETH Zürich", avatar: "SM",
    bio: "ML researcher by day, indie hacker by night.",
    offers: ["Machine Learning", "Python", "Research"], wants: ["Public Speaking"],
    level: 28, xp: 16400, rating: 4.95, swaps: 55, badges: ["🤖", "🧪", "🚀"],
  },
  {
    id: "6", name: "Kenji Tanaka", college: "U of Tokyo", avatar: "KT",
    bio: "Pro gamer turned coach. Helping you climb any rank.",
    offers: ["Esports Coaching", "Game Strategy"], wants: ["Spanish", "Streaming"],
    level: 16, xp: 6800, rating: 4.7, swaps: 28, badges: ["🎮", "🏆"],
  },
];
