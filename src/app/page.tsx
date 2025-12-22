import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Andrew Li
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-6">
          Software Engineer
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          I&apos;m a passionate software engineer specializing in fintech and mobile application development. 
          I love building elegant solutions to complex problems and creating intuitive user experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/projects"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            View Projects
          </Link>
          <Link 
            href="/resume.pdf"
            target="_blank"
            className="px-8 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium"
          >
            Download Resume
          </Link>
          <Link 
            href="/contact"
            className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg hover:border-gray-400 dark:hover:border-gray-500 transition-colors font-medium"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}
