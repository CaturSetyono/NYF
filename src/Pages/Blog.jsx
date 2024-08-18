import React from 'react';

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-950 p-8 pt-24">
      <div className="container mx-auto text-white">
        <h1 className="text-3xl font-bold mb-8">Blog</h1>
        <div className="space-y-8">
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg flex flex-col space-y-4">
            <h2 className="text-2xl font-bold">Blog Post Title</h2>
            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet sapien nunc sit.</p>
          </div>
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold">Another Blog Post</h2>
            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet sapien nunc sit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
