import Navbar from '@/components/Navbar';
import { CodeBracketIcon, AcademicCapIcon, CpuChipIcon } from '@heroicons/react/24/outline';

export default function About() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* About Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              About Me
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              I'm a passionate web developer and AI/ML enthusiast, currently pursuing technical training in computer studies.
              My focus is on creating innovative solutions that combine modern web technologies with artificial intelligence.
            </p>
          </div>

          {/* Skills Section */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mb-16">
            <div className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
              <div className="flex items-center gap-4">
                <CodeBracketIcon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold text-gray-900">Web Development</h3>
              </div>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• React & Next.js</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• Node.js</li>
                <li>• RESTful APIs</li>
              </ul>
            </div>

            <div className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
              <div className="flex items-center gap-4">
                <CpuChipIcon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold text-gray-900">AI/ML</h3>
              </div>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Machine Learning</li>
                <li>• Deep Learning</li>
                <li>• Natural Language Processing</li>
                <li>• Computer Vision</li>
                <li>• AI Integration</li>
              </ul>
            </div>

            <div className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
              <div className="flex items-center gap-4">
                <AcademicCapIcon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold text-gray-900">Education</h3>
              </div>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Technical Training in Computer Studies</li>
                <li>• Web Development Certification</li>
                <li>• AI/ML Specialization</li>
                <li>• Educational Technology</li>
                <li>• Continuous Learning</li>
              </ul>
            </div>
          </div>

          {/* Experience Section */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Experience</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Web Developer</h3>
                <p className="text-gray-600">Developing modern web applications using React, Next.js, and TypeScript</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">AI/ML Enthusiast</h3>
                <p className="text-gray-600">Exploring and implementing AI/ML solutions in web applications</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Technical Trainer</h3>
                <p className="text-gray-600">Pursuing technical training in computer studies with focus on edtech</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 