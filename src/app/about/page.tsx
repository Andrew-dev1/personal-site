import { Metadata } from "next";
import Image from "next/image";
import { skillsData, education } from "@/data/skills";


export const metadata: Metadata = {
  title: "About | Andrew Li",
  description: "Learn more about Andrew Li's skills, education, and professional interests in software engineering",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-900 dark:text-white">
        About Me
      </h1>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Professional Interests
        </h2>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I&apos;m passionate about building technology that makes a real difference in people{"'"}s lives. 
            My focus areas include fintech applications, mobile development with modern Android technologies, 
            and creating intuitive user experiences. I believe in writing clean, maintainable code and 
            staying up-to-date with the latest development practices and tools.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Personal Interests
        </h2>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            When I&apos;m not coding, I enjoy cooking, watching anime, trying new music genres (give me recs!), reading about emerging trends in software development, 
            and working on side projects. 
            A lot of interests yes, but I also love staying active through walking, bouldering, or gyming. 
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((category) => (
            <div
              key={category.category}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Education
        </h2>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-start gap-4">
          <Image
            src="/projects/school-logo.png" 
            alt="Logo of Colgate University"
            width={40}
            height={40}
            className="object-contain opacity-80 flex-shrink-0"
          />
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {education.degree}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              {education.school}
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              {education.duration} • GPA: {education.gpa}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

