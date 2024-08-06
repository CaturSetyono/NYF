import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

const Home = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.231.140:5000/cards')
      .then(response => {
        console.log(response.data); // Tambahkan log ini untuk melihat data
        setCards(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);
  
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold">{card.title}</h2>
                <p className="text-gray-600">{card.description}</p>
                <div className="flex items-center mt-2">
                  {Array.from({ length: 5 }, (_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 ${
                        index < Math.floor(card.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674h4.911c.97 0 1.372 1.24.588 1.81l-3.978 2.892 1.518 4.674c.3.921-.755 1.688-1.54 1.168l-3.978-2.892-3.978 2.892c-.784.52-1.838-.247-1.539-1.168l1.518-4.674-3.978-2.892c-.783-.57-.382-1.81.588-1.81h4.911l1.518-4.674z" />
                    </svg>
                  ))}
                  <span className="text-gray-600 ml-2">
                    {card.rating.toFixed(1)}
                  </span>
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

export default Home;
