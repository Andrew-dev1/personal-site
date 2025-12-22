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
    id: "task-manager",
    title: "Task Manager Pro",
    description: "A full-stack task management application with real-time collaboration features. Users can create projects, assign tasks, set deadlines, and track progress with an intuitive dashboard.",
    techStack: ["React", "Node.js", "PostgreSQL", "Socket.io", "Tailwind CSS"],
    image: "/projects/in-progress.jpg",
    githubUrl: "https://github.com/Andrew-dev-1/task-manager-app",
    // liveUrl: "https://taskmanager-demo.vercel.app",
},
];