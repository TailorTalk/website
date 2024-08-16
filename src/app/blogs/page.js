import React from 'react';
import blogs from './blogData';
import Image from 'next/image';

const BlogPage = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Latest Blogs</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay informed with our curated collection of insightful articles covering various aspects of business and technology.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col">
              <Image 
                className="w-full h-48 object-cover"
                src={blog.image}
                alt={blog.title}
                width={400}
                height={200}
              />
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-1">{blog.category}</p>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{blog.title}</h2>
                  <p className="text-gray-600 mb-4">{blog.description}</p>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <a href={blog.url} className="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center">
                    Learn More
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-3 inline-flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                      {blog.views}
                    </span>
                    <span className="inline-flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                      </svg>
                      {blog.comments}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
