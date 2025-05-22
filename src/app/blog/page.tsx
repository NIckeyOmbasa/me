import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';

const blogPosts = [
  {
    title: 'The Future of Web Development with AI',
    excerpt: 'Exploring how artificial intelligence is revolutionizing the way we build and maintain web applications...',
    date: 'March 15, 2024',
    readTime: '5 min read',
    category: 'Web Development',
    slug: 'future-of-web-development-with-ai',
  },
  {
    title: 'Machine Learning in Education',
    excerpt: 'How machine learning algorithms are transforming personalized learning experiences...',
    date: 'March 10, 2024',
    readTime: '7 min read',
    category: 'AI/ML',
    slug: 'machine-learning-in-education',
  },
  {
    title: 'Building Modern Web Applications with Next.js',
    excerpt: 'A comprehensive guide to building scalable and performant web applications using Next.js...',
    date: 'March 5, 2024',
    readTime: '6 min read',
    category: 'Web Development',
    slug: 'building-modern-web-applications',
  },
  {
    title: 'The Role of AI in Educational Technology',
    excerpt: 'Examining the impact of artificial intelligence on the future of educational technology...',
    date: 'February 28, 2024',
    readTime: '8 min read',
    category: 'EdTech',
    slug: 'ai-in-educational-technology',
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Blog
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Insights and thoughts on web development, AI/ML, and educational technology.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {blogPosts.map((post, index) => (
              <article key={index} className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    {post.category}
                  </span>
                  <span className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-6">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-primary hover:text-primary/90 font-medium inline-flex items-center"
                >
                  Read More
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Subscribe to Newsletter
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 