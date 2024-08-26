import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdStar } from 'react-icons/md'; // Using Material UI star icon

const API_URL = 'https://fakestoreapi.com/products'; // Menggunakan Fake Store API

const ProductCatalog = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [rating, setRating] = useState({});

  useEffect(() => {
    // Fetch data dari API
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

  if (loading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-950 p-8 pt-24">
      <div className="container mx-auto text-white">
        <h1 className="text-3xl font-bold mb-8">Product Catalog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-t-lg" />
              <h2 className="text-2xl font-bold">{product.title}</h2>
              <p className="mt-2">{product.description}</p>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog;