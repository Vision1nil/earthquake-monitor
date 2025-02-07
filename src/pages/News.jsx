import React from "react";

function News() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Earthquake News</h1>
          <p className="text-xl">
            Stay updated with the latest news and articles about earthquakes.
          </p>
        </div>
      </div>

      {/* News Articles Section */}
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder for News Articles */}
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">
                Earthquake in Region {item}
              </h3>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>© 2024 Earthquake Monitor. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="/" className="hover:underline">
              Home
            </a>
            <a href="/map" className="hover:underline">
              Map
            </a>
            <a href="/news" className="hover:underline">
              News
            </a>
            <a href="/safety" className="hover:underline">
              Safety
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default News;
