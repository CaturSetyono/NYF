import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdStar } from 'react-icons/md'; // Using Material UI star icon

const API_URL = 'https://fakestoreapi.com/products'; // Using Fake Store API

const ProductCatalog = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [rating, setRating] = useState({});
  const [showFullDescription, setShowFullDescription] = useState({});
  const [cart, setCart] = useState({});

  useEffect(() => {
    // Fetch data from API
    const fetchProducts = async () => {
      try {
        const response = await axios.get(API_URL);
        setProducts(response.data);
      } catch (err) {
        setError('Error fetching products');
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

  const toggleDescription = (productId) => {
    setShowFullDescription((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  const handleAddToCart = (productId, quantity) => {
    setCart((prevCart) => ({
      ...prevCart,
      [productId]: (prevCart[productId] || 0) + quantity,
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        {/* Animasi spinner loading */}
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div id="catalog" className="min-h-screen bg-gray-950 p-24">
      <div className="container mx-auto text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-t-lg" />
              <h2 className="text-2xl font-bold">{product.title}</h2>
              <p className="mt-2">
                {showFullDescription[product.id]
                  ? product.description
                  : `${product.description.substring(0, 100)}...`}
                <button
                  className="text-blue-500 ml-2"
                  onClick={() => toggleDescription(product.id)}
                >
                  {showFullDescription[product.id] ? 'Read less' : 'Read more'}
                </button>
              </p>
              <p className="mt-2">$ {product.price}</p>
              <div className="flex items-center mt-4">
                <span className="text-lg font-bold"></span>
                {[...Array(5)].map((_, index) => (
                  <MdStar
                    key={index}
                    size={24}
                    color={rating[product.id] > index ? 'gold' : 'gray'}
                    onClick={() => handleRating(product.id, index + 1)}
                  />
                ))}
              </div>
              <div className="mt-4 flex items-center">
                <input
                  type="number"
                  min="1"
                  defaultValue="1"
                  className="w-16 p-1 border border-gray-700 rounded text-gray-950"
                  onChange={(e) => handleAddToCart(product.id, parseInt(e.target.value, 10))}
                />
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-4 rounded ml-2"
                  onClick={() => handleAddToCart(product.id, 1)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog;
