import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Andrew Li",
  description: "Andrew Li's resume - Software Engineer specializing in fintech and mobile applications",
};

export default function ResumePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white">
          Resume
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          View or download my resume below
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Andrew Li - Resume
          </h2>
          <a
            href="/Andrew_Li_Resume.pdf"
            download
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            Download PDF
          </a>
        </div>
        <div className="w-full h-[calc(100vh-250px)] min-h-[800px]">
          <iframe
            src="/Andrew_Li_Resume.pdf#toolbar=1"
            className="w-full h-full border-0"
            title="Andrew Li Resume"
            loading="lazy"
          />
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
            Having trouble viewing? <a href="/Andrew_Li_Resume.pdf" download className="text-blue-600 dark:text-blue-400 hover:underline">Download the PDF</a>
          </p>
        </div>
      </div>
    </div>
  );
}

