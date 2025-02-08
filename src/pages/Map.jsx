import React from "react";
import EarthquakeMap from "../components/map/EarthquakeMap";

function Map() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gray-800 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Earthquake Map</h1>
          <p className="text-xl">
            Explore real-time earthquake data from around the world.
          </p>
        </div>
      </div>

      {/* Map Section */}
      <div className="container mx-auto py-12">
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <EarthquakeMap />
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="bg-gray-200 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Understanding the Map
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                What Do the Markers Mean?
              </h3>
              <p className="text-gray-600">
                Each marker represents an earthquake. Click on a marker to see
                details like magnitude, location, and time.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                How Often Is Data Updated?
              </h3>
              <p className="text-gray-600">
                The map is updated every 5 minutes with the latest earthquake
                data from the USGS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
//below is work on more interactive main page
export default Map;
// import React from "react";
// import EarthquakeMap from "../components/map/EarthquakeMap";
// import { motion } from "framer-motion";

// function Map() {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Hero Section */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="bg-gray-800 text-white py-12 px-4"
//       >
//         <div className="container mx-auto">
//           <h1 className="text-4xl font-bold mb-4">Earthquake Map</h1>
//           <p className="text-xl">
//             Explore real-time earthquake data from around the world.
//           </p>
//         </div>
//       </motion.div>

//       {/* Map Section */}
//       <div className="container mx-auto px-4 py-8">
//         <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//           <div className="h-[600px] w-full">
//             <EarthquakeMap />
//           </div>
//         </div>
//       </div>

//       {/* Additional Information Section */}
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid md:grid-cols-2 gap-8">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             className="bg-white p-6 rounded-lg shadow-lg"
//           >
//             <h2 className="text-2xl font-bold mb-4">
//               What Do the Markers Mean?
//             </h2>
//             <p className="text-gray-600">
//               Each marker represents an earthquake. The size and color indicate
//               magnitude - larger, darker markers represent stronger earthquakes.
//               Click on any marker to see details including magnitude, location,
//               time, and depth.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             className="bg-white p-6 rounded-lg shadow-lg"
//           >
//             <h2 className="text-2xl font-bold mb-4">Search Your Location</h2>
//             <p className="text-gray-600">
//               Use the search feature to find your location and assess earthquake
//               risk in your area. Our system analyzes historical data and
//               geological factors to provide risk assessments and recommended
//               safety measures.
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Map;
