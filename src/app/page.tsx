import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Hi, I'm Nickey Ombasa
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Web Developer & AI/ML Enthusiast | Technical Trainer in Computer Studies
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/projects"
                className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                View My Work
              </Link>
              <Link href="/contact" className="text-sm font-semibold leading-6 text-gray-900">
                Contact Me <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Web Development */}
            <div className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">Web Development</h3>
              <p className="mt-4 text-gray-600">
                Specializing in modern web technologies and creating responsive, user-friendly applications.
              </p>
              <Link href="/projects" className="mt-6 inline-flex items-center text-primary hover:text-primary/90">
                View Projects <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* AI/ML */}
            <div className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">AI/ML Enthusiast</h3>
              <p className="mt-4 text-gray-600">
                Passionate about artificial intelligence and machine learning applications in modern technology.
              </p>
              <Link href="/blog" className="mt-6 inline-flex items-center text-primary hover:text-primary/90">
                Read Articles <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Technical Training */}
            <div className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">Technical Training</h3>
              <p className="mt-4 text-gray-600">
                Currently pursuing technical training in computer studies with a focus on educational technology.
              </p>
              <Link href="/about" className="mt-6 inline-flex items-center text-primary hover:text-primary/90">
                Learn More <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts Preview */}
      <section className="py-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Latest Articles</h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {/* Sample blog post previews - replace with actual content */}
            <article className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">The Future of Web Development</h3>
              <p className="mt-4 text-gray-600">
                Exploring the latest trends and technologies shaping the future of web development...
              </p>
              <Link href="/blog" className="mt-6 inline-flex items-center text-primary hover:text-primary/90">
                Read More <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </article>
            <article className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">AI in Education</h3>
              <p className="mt-4 text-gray-600">
                How artificial intelligence is transforming the landscape of education and learning...
              </p>
              <Link href="/blog" className="mt-6 inline-flex items-center text-primary hover:text-primary/90">
                Read More <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
