import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    title: 'AI-Powered Learning Platform',
    description: 'An educational platform that uses machine learning to personalize learning experiences for students.',
    technologies: ['React', 'Next.js', 'TensorFlow.js', 'Tailwind CSS'],
    image: '/projects/ai-learning.jpg',
    link: '#',
  },
  {
    title: 'Smart Task Manager',
    description: 'A task management application with AI-powered task prioritization and smart scheduling.',
    technologies: ['React', 'Node.js', 'MongoDB', 'OpenAI API'],
    image: '/projects/task-manager.jpg',
    link: '#',
  },
  {
    title: 'E-Learning Dashboard',
    description: 'A comprehensive dashboard for educational institutions to track student progress and performance.',
    technologies: ['Next.js', 'TypeScript', 'Chart.js', 'Tailwind CSS'],
    image: '/projects/dashboard.jpg',
    link: '#',
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              My Projects
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my expertise in web development and AI/ML integration.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {projects.map((project, index) => (
              <div key={index} className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
                <div className="aspect-w-16 aspect-h-9 mb-6 bg-gray-100 rounded-lg overflow-hidden">
                  {/* Add actual project images later */}
                  <div className="w-full h-48 bg-gray-200 rounded-lg"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                <p className="mt-4 text-gray-600">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.link}
                  className="mt-6 inline-flex items-center text-primary hover:text-primary/90"
                >
                  View Project <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Let&apos;s Work Together
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 