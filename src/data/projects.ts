export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}


export const projects: Project[] = [
  {
    id: "walletify",
    title: "Walletify",
    description: "A Kotlin + Jetpack Compose Android banking insights app that helps users visualize spending patterns and budgets. Features beautiful charts, category tracking, and personalized financial insights. No real money handling - focused on analytics and UI/UX.",
    techStack: ["Kotlin", "Jetpack Compose", "Room Database", "Material 3", "Firebase"],
    image: "/projects/walletify.png",
    githubUrl: "https://github.com/Andrew-dev-1/Walletify",
  },
  {
    id: "Assembly-simulator",
    title: "Assembly Simulator",
    description: "A terminal-based ARM64 assembly language simulator with step-by-step execution and debugging capabilities.",
    techStack: ["C", "GNU Make", "ARM Cross-Toolchain"],
    image: "/projects/assembly-simulator.png",
    githubUrl: "https://github.com/Andrew-dev1/ARM-assembly-simulator",
    // liveUrl: "",
  },
  {
    id: "Sprout-stock",
    title: "Sprout Stock",
    description: "A full-stack stock tracking application with real-time data visualization and portfolio management features.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Clerk Auth", "Tailwind CSS", "Prisma 7"],
    image: "/projects/sprout-stock.png",
    githubUrl: "https://github.com/Andrew-dev-1/sprout-stock",
    liveUrl: "https://stock-sprout.vercel.app/",
},
];