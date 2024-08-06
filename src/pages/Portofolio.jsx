import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';

const Portofolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.231.140:5000/projects')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the project data!", error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-12">Portfolio Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800">{project.name}</h2>
                <p className="text-gray-600 mt-3">{project.details}</p>
                <div className="mt-4">
                  <p className="text-gray-500"><strong>Start Date:</strong> {new Date(project.startDate).toLocaleDateString()}</p>
                  <p className="text-gray-500"><strong>End Date:</strong> {new Date(project.endDate).toLocaleDateString()}</p>
                </div>
                <div className="mt-4">
                  <p className="text-gray-700 font-semibold">Technologies:</p>
                  <ul className="list-disc list-inside mt-2 text-gray-600">
                    {project.technologies.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Portofolio;
