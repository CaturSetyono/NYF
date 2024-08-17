import React from 'react';

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-800 p-8 ">
      <div className="container mx-auto text-white">
        <h1 className="text-3xl font-bold mb-6">Blog</h1>
        <div className="space-y-6">
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md animate-pulse flex space-x-4">
            <h2 className="text-2xl font-bold">Blog Post Title</h2>
            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet sapien nunc.</p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">Another Blog Post</h2>
            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet sapien nunc.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
