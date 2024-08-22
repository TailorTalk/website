import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import blogs from './blogData'; 

const BlogPage = () => {
  return (
    <>
      <Head>
        <title>Our Blog | Your Company Name</title>
        <meta name="description" content="Stay informed with our curated collection of insightful articles covering various aspects of business and technology." />
        <meta property="og:title" content="Our Blog | Your Company Name" />
        <meta property="og:description" content="Stay informed with our curated collection of insightful articles covering various aspects of business and technology." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://tailortalk.ai/og-image.jpg" />
        <link rel="canonical" href="https://tailortalk.ai/blog" />
      </Head>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-800 mb-4 text-center">Latest Blogs</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center mb-16">
            Stay informed with our curated collection of insightful articles covering various aspects of business and technology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col">
                <Link href={`/blogs/${blog.url.split('/').pop()}`}>
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </Link>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span>{blog.date}</span>
                      <span className="mx-2">•</span>
                      <span>{blog.readTime}</span>
                    </div>
                    <Link href={`/blogs/${blog.url.split('/').pop()}`} className="text-xl font-bold text-gray-900 mb-2 hover:text-indigo-600">
                      {blog.title}
                    </Link>
                    <p className="text-gray-600 mb-4">{blog.description}</p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <Link href={`/blogs/${blog.url.split('/').pop()}`} className="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center">
                      Read More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;