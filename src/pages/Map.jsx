import React from "react";
import EarthquakeMap from "../components/map/EarthquakeMap";

function Map() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Earthquake Map</h1>
          <p className="text-xl">
            Explore real-time earthquake data from around the world.
          </p>
        </div>
      </div>

      {/* Map Section */}
      <div className="container mx-auto py-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <EarthquakeMap />
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="bg-gray-200 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Understanding the Map
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">
                What Do the Markers Mean?
              </h3>
              <p>
                Each marker represents an earthquake. Click on a marker to see
                details like magnitude, location, and time.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">
                How Often Is Data Updated?
              </h3>
              <p>
                The map is updated every 5 minutes with the latest earthquake
                data from the USGS.
              </p>
            </div>
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

export default Map;
