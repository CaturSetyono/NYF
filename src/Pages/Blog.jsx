import React, { useEffect, useState } from "react";

// Data Dummy - Dalam aplikasi nyata, ini akan berasal dari API
const dummyPosts = [
  {
    id: 1,
    title: "Memulai dengan React Hooks",
    author: "Jane Doe",
    authorAvatar: "https://randomuser.me/api/portraits/women/1.jpg",
    date: "25 Mei 2025",
    readingTime: "5 menit baca",
    snippet: "Panduan komprehensif untuk memahami dan menggunakan React Hooks secara efektif dalam proyek Anda. Pelajari tentang useState, useEffect, dan lainnya.",
    imageUrl: "https://images.unsplash.com/photo-1521185496955-15097b20c5fe?q=80&w=1000&auto=format&fit=crop",
    tags: ["React", "JavaScript", "Web Development"]
  },
  {
    id: 2,
    title: "Masa Depan AI: Tren yang Perlu Diperhatikan",
    author: "John Smith",
    authorAvatar: "https://randomuser.me/api/portraits/men/2.jpg",
    date: "23 Mei 2025",
    readingTime: "7 menit baca",
    snippet: "Kecerdasan Buatan berkembang pesat. Temukan tren utama yang akan membentuk masa depannya dan memengaruhi berbagai industri.",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
    tags: ["AI", "Teknologi", "Masa Depan"]
  },
  {
    id: 3,
    title: "Menguasai Tailwind CSS untuk Desain Web Modern",
    author: "Alice Green",
    authorAvatar: "https://randomuser.me/api/portraits/women/3.jpg",
    date: "20 Mei 2025",
    readingTime: "6 menit baca",
    snippet: "Pelajari bagaimana Tailwind CSS dapat menyederhanakan alur kerja pengembangan web Anda dan membantu Anda membangun antarmuka yang indah dan responsif dengan mudah.",
    tags: ["TailwindCSS", "CSS", "Desain Web"]
  },
  {
    id: 4,
    title: "Optimalisasi Performa Node.js Secara Mendalam",
    author: "Bob White",
    authorAvatar: "https://randomuser.me/api/portraits/men/4.jpg",
    date: "18 Mei 2025",
    readingTime: "8 menit baca",
    snippet: "Jelajahi teknik lanjutan untuk mengoptimalkan aplikasi Node.js Anda, memastikan aplikasi berjalan lebih cepat dan lebih efisien.",
    imageUrl: "https://images.unsplash.com/photo-1542903660-eedba2cda473?q=80&w=1000&auto=format&fit=crop",
    tags: ["Node.js", "Backend", "Performa"]
  },
  {
    id: 5,
    title: "Strategi Pembuatan Konten untuk Tahun 2025",
    author: "Laura Blue",
    authorAvatar: "https://randomuser.me/api/portraits/women/5.jpg",
    date: "15 Mei 2025",
    readingTime: "4 menit baca",
    snippet: "Temukan strategi pembuatan konten yang efektif yang akan membantu Anda melibatkan audiens dan menumbuhkan kehadiran online Anda di tahun mendatang.",
    imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000&auto=format&fit=crop",
    tags: ["Pemasaran Konten", "SEO", "Strategi Digital"]
  },
  {
    id: 6,
    title: "Pentingnya User Experience (UX) dalam Desain Produk",
    author: "Chris Black",
    authorAvatar: "https://randomuser.me/api/portraits/men/6.jpg",
    date: "12 Mei 2025",
    readingTime: "6 menit baca",
    snippet: "Pahami mengapa User Experience sangat penting untuk kesuksesan produk dan pelajari prinsip-prinsip utama untuk merancang produk yang intuitif dan ramah pengguna.",
    tags: ["Desain UX", "Pengembangan Produk", "UI"]
  }
];

const BlogPageContent = () => { // Mengganti nama komponen agar lebih jelas
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = () => {
      try {
        setPosts(dummyPosts);
      } catch (error) {
        console.error("Error mengatur posts:", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    };

    fetchPosts();
  }, []);

  const StarIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-400 hover:text-gray-600 cursor-pointer">
      <path d="M11.995 18.632L5.535 22.224L6.94 14.94L1.389 9.775L8.515 8.91L11.995 2L15.475 8.91L22.601 9.775L17.05 14.94L18.455 22.224L11.995 18.632Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  );

  return (
    // Kontainer utama untuk konten blog. Anda bisa membungkusnya dengan div lain di halaman utama jika perlu.
    // font-['Georgia',_serif] bisa Anda atur di level yang lebih tinggi (misalnya di body atau div utama layout Anda)
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 max-w-4xl font-['Georgia',_serif]">
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-center text-gray-500 text-lg">Memuat postingan...</p>
        </div>
      ) : (
        <div className="space-y-12 md:space-y-16 p-10 mt-4"> {/* Ruang antar postingan */}
          {posts.map((post) => (
            <article key={post.id} className="pb-8 border-b border-gray-200 last:border-b-0">
              <div className="flex items-center mb-3">
                {post.authorAvatar && (
                    <img src={post.authorAvatar} alt={post.author} className="w-6 h-6 rounded-full mr-2"/>
                )}
                <p className="text-sm text-gray-800 font-medium">{post.author}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 group">
                  <div className="flex-1"> {/* Konten teks */}
                      <a href={`#post-${post.id}`} className="block">
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-150">{post.title}</h2>
                      <p className="text-gray-600 text-base mb-3 leading-relaxed hidden sm:block">{post.snippet}</p>
                      </a>
                      <div className="flex items-center justify-between text-xs text-gray-500 mt-4">
                      <div className="flex items-center space-x-2">
                          <span>{post.date}</span>
                          <span className="text-gray-300">&middot;</span>
                          <span>{post.readingTime}</span>
                          {post.tags && post.tags.length > 0 && (
                          <>
                              <span className="text-gray-300">&middot;</span>
                              <a href={`#tag-${post.tags[0].toLowerCase()}`} className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full hover:bg-gray-200 transition-colors duration-150">{post.tags[0]}</a>
                          </>
                          )}
                      </div>
                      <button aria-label="Bookmark post">
                          <StarIcon />
                      </button>
                      </div>
                  </div>
                  {post.imageUrl && (
                  <div className="w-full sm:w-1/3 lg:w-1/4 h-32 sm:h-auto order-first sm:order-last"> {/* Gambar */}
                      <a href={`#post-${post.id}`} className="block h-full">
                      <img
                          src={post.imageUrl}
                          alt={post.title}
                          className="object-cover w-full h-full rounded-md group-hover:opacity-90 transition-opacity duration-150"
                          loading="lazy"
                      />
                      </a>
                  </div>
                  )}
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
};

export default BlogPageContent; // Ganti nama export jika perlu