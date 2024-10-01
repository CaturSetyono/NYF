import React from "react";

const ErrorPage = () => {
  return (
    <div
      id="error"
      className="bg-gray-950 text-white w-full h-screen flex flex-col justify-center items-center p-4"
    >
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold animate-bounce">
        404 PAGE NOT FOUND
      </h1>
      <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-center">
        Oops! The page you're looking for doesn't exist.
      </p>
      <a
        href="/"
        className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm sm:text-base lg:text-lg"
      >
        Go Back to Home
      </a>
    </div>
  );
};

export default ErrorPage;
