import React from "react";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-blue-500 text-white py-20"
      >
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Earthquake Monitor</h1>
          <p className="text-xl">
            Stay informed about the latest earthquakes around the world.
          </p>
          <a
            href="/map"
            className="mt-6 inline-block bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
          >
            View Earthquake Map
          </a>
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">
              Real-Time Earthquake Data
            </h3>
            <p>Access up-to-date information about earthquakes worldwide.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Latest News</h3>
            <p>
              Stay updated with the latest news and articles about earthquakes.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Safety Tips</h3>
            <p>
              Learn how to protect yourself and your loved ones during an
              earthquake.
            </p>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-blue-500 text-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
          <p className="text-xl mb-6">
            Check out the interactive earthquake map or read our safety
            guidelines.
          </p>
          <div className="space-x-4">
            <a
              href="/map"
              className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              View Map
            </a>
            <a
              href="/safety"
              className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-500 transition duration-300"
            >
              Safety Tips
            </a>
          </div>
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

export default Home;
