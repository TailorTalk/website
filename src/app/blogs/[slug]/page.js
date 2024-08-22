import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import blogs from '../blogData';

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.url.split('/').pop(),
  }));
}

const BlogPost = ({ params }) => {
  const blog = blogs.find((b) => b.url.split('/').pop() === params.slug);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{blog.title} | TailorTalk</title>
        <meta name="description" content={blog.description} />
        <meta property="og:title" content={`${blog.title} | TailorTalk`} />
        <meta property="og:description" content={blog.description} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={`https://tailortalk.ai/${blog.image}`} />
        <link rel="canonical" href={`https://tailortalk.ai/${blog.url}`} />
      </Head>
      <article className="container mx-auto px-4 py-16">
        <Link href="/blogs" className="text-indigo-600 hover:text-indigo-800 mb-4 inline-block text-lg font-semibold">
          &larr; Back to Blogs
        </Link>
        <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">{blog.title}</h1>
        <div className="flex items-center justify-center text-sm text-gray-500 mb-6">
          <span>{blog.author}</span>
          <span className="mx-2">•</span>
          <span>{blog.date}</span>
          <span className="mx-2">•</span>
          <span>{blog.readTime}</span>
        </div>
        <Image
          src={blog.image}
          alt={blog.title}
          width={1200}
          height={500}
          className="w-full h-auto object-cover rounded-lg mb-8"
        />
        <div className="prose max-w-none text-lg text-gray-800 leading-relaxed mx-auto">
          {/* Blog content */}
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Tags:</h2>
          <div className="flex flex-wrap gap-3">
            {blog.tags.map((tag, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 px-3 py-2 rounded-full text-sm hover:bg-gray-200 transition">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogPost;
