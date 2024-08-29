import React, { useEffect, useState } from "react";
import axios from "axios";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("https://gorest.co.in/public/v2/posts");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className=" p-24 bg-gray-950 min-h-screen">
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-gray-800 text-white p-4 rounded-lg shadow-lg hover:bg-gray-700">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-300">{post.body}</p>
              <a
                href={`#post-${post.id}`}
                className="text-blue-500 mt-4 inline-block"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
