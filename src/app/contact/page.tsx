import { Metadata } from "next";
import { contactInfo } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact | Andrew Li",
  description: "Get in touch with Andrew Li - Software Engineer",
};
  
export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-900 dark:text-white">
        Get In Touch
      </h1>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
          I'm always open to discussing new opportunities, collaborations, or just chatting 
          about technology. Feel free to reach out through any of the following channels:
        </p>

        <div className="space-y-6">
          <div className="flex items-center justify-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <span className="text-gray-700 dark:text-gray-300 font-medium">Email:</span>
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              {contactInfo.email}
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <span className="text-gray-700 dark:text-gray-300 font-medium">LinkedIn:</span>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              linkedin.com/in/andrew-li27
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <span className="text-gray-700 dark:text-gray-300 font-medium">GitHub:</span>
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              github.com/Andrew-dev-1
            </a>
          </div>
        </div>
      </div>
{/* 
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
          Optional Contact Form
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Want to add a contact form? You can integrate services like:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li><strong>Formspree</strong> - Simple form backend</li>
          <li><strong>EmailJS</strong> - Send emails directly from client-side</li>
          <li><strong>Netlify Forms</strong> - If deploying on Netlify</li>
          <li><strong>Resend</strong> - Modern email API with React support</li>
        </ul>
      </div> */}
    </div>
  );
}
