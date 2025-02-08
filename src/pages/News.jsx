import React from "react";

function News() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gray-800 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Earthquake News</h1>
          <p className="text-xl">
            Stay updated with the latest news and articles about earthquakes.
          </p>
        </div>
      </div>

      {/* News Articles Section */}
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Latest News
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder for News Articles */}
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Earthquake in Region {item}
              </h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 transition duration-300"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
    </div>
  );
}

export default News;
