import React from 'react';

const Sosmed = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white flex justify-center items-center p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Connect with Us on Social Media</h1>
        <div className="flex space-x-4 justify-center mt-8">
          <a href="#" className="bg-blue-500 p-4 rounded-full hover:bg-blue-600">Facebook</a>
          <a href="#" className="bg-blue-400 p-4 rounded-full hover:bg-blue-500">Twitter</a>
          <a href="#" className="bg-pink-500 p-4 rounded-full hover:bg-pink-600">Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default Sosmed;
