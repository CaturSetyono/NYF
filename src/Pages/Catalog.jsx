import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdStar } from "react-icons/md";

const API_URL = "https://api.example.com/products"; // Ganti sesuai URL API Anda

const ProductCatalog = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [rating, setRating] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(API_URL);
        setProducts(response.data);
      } catch (err) {
        setError("Error fetching products");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleRating = (productId, ratingValue) => {
    setRating((prevRating) => ({ ...prevRating, [productId]: ratingValue }));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div id="catalog" className="min-h-screen bg-gray-950 py-16">
      <div className="container mx-auto px-8">
        <h1 className="text-white text-3xl font-bold mb-8">Product Catalog</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-800 text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
              <img src={product.image} alt={product.title} className="w-full h-52 object-cover rounded-lg mb-4" />
              <h2 className="text-xl font-bold mb-2">{product.title}</h2>
              <p className="text-sm text-gray-300 mb-2">{product.description}</p>
              <p className="text-lg font-semibold mb-2">$ {product.price}</p>
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <MdStar
                    key={index}
                    size={24}
                    color={rating[product.id] > index ? "gold" : "gray"}
                    onClick={() => handleRating(product.id, index + 1)}
                    className="cursor-pointer"
                  />
                ))}
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4 w-full">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog;
