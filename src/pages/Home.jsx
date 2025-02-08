import React, { useEffect, useState } from "react";

const Home = () => {
  const [earthquakeData, setEarthquakeData] = useState({
    earthquakes: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch earthquake data");
        }
        const data = await response.json();

        const significantQuakes = data.features
          .filter((quake) => quake.properties.mag >= 5.0)
          .sort((a, b) => b.properties.time - a.properties.time)
          .slice(0, 3);

        setEarthquakeData({
          earthquakes: significantQuakes,
          loading: false,
          error: null,
        });
      } catch (error) {
        console.error("Error fetching earthquake data:", error);
        setEarthquakeData({
          earthquakes: [],
          loading: false,
          error: "Failed to load earthquake data. Please try again later.",
        });
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 300000); // Update every 5 minutes
    return () => clearInterval(interval);
  }, []);

  const formatTimeAgo = (timestamp) => {
    const minutes = Math.floor((Date.now() - timestamp) / 60000);
    if (minutes < 60) return `${minutes} minutes ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hours ago`;
    const days = Math.floor(hours / 24);
    return `${days} days ago`;
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gray-800 text-white py-20">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-6xl font-bold mb-6">Earthquake Monitor</h1>
          <p className="text-2xl mb-8">
            Real-time earthquake tracking and safety information at your
            fingertips.
          </p>

          <div className="w-full max-w-4xl mx-auto h-96 rounded-lg mb-8 bg-gray-700 flex items-center justify-center">
            <p className="text-gray-400">Interactive Globe Visualization</p>
          </div>

          <div className="space-x-4">
            <a
              href="/map"
              className="inline-block bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
            >
              View Live Map
            </a>
            <a
              href="/safety"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition duration-300"
            >
              Safety Guidelines
            </a>
          </div>
        </div>
      </div>

      {/* Latest Activity Section */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Latest Significant Earthquakes
        </h2>

        {earthquakeData.loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : earthquakeData.error ? (
          <div className="text-center text-red-600 p-8 bg-red-50 rounded-lg">
            <p className="text-xl">{earthquakeData.error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {earthquakeData.earthquakes.map((quake) => (
              <div
                key={quake.id}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="bg-gray-100 w-full h-48 rounded-lg mb-4 flex items-center justify-center text-4xl">
                  🌋
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {quake.properties.place || "Location unknown"}
                </h3>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Magnitude</p>
                    <p className="text-xl font-bold text-blue-600">
                      {quake.properties.mag.toFixed(1)}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Depth</p>
                    <p className="text-xl font-bold text-blue-600">
                      {quake.geometry.coordinates[2].toFixed(1)}km
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Time</p>
                    <p className="text-xl font-bold text-blue-600">
                      {formatTimeAgo(quake.properties.time)}
                    </p>
                  </div>
                </div>
                <a
                  href={`/map?quake=${quake.id}`}
                  className="block text-center bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition duration-300"
                >
                  View Details
                </a>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Features Section */}
      <div className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Real-Time Monitoring",
                description:
                  "Access live earthquake data from seismic stations worldwide",
                icon: "🌍",
              },
              {
                title: "Risk Assessment",
                description:
                  "Evaluate seismic risks for your location with advanced analytics",
                icon: "📊",
              },
              {
                title: "Emergency Preparedness",
                description:
                  "Get expert safety guidelines and emergency checklists",
                icon: "🚨",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-700 p-6 rounded-lg text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
                <div className="mt-6 bg-gray-600 w-full h-48 rounded-lg flex items-center justify-center">
                  <p className="text-gray-400">Feature Illustration</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto py-16 px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Stay Informed and Prepared</h2>
        <div className="bg-gray-200 w-full max-w-4xl mx-auto h-96 rounded-lg mb-8 flex items-center justify-center">
          <p className="text-gray-600">Emergency Preparedness Guide</p>
        </div>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join millions of users worldwide who rely on our platform for
          real-time earthquake monitoring and safety information.
        </p>
        <a
          href="/map"
          className="inline-block bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
        >
          Check out the Map
        </a>
      </div>
    </div>
  );
};

export default Home;
