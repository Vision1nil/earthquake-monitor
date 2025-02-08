// // // import React from "react";
// // // import { motion } from "framer-motion";

// // // function Home() {
// // //   return (
// // //     <div className="bg-gray-100 min-h-screen">
// // //       {/* Hero Section */}
// // //       <motion.div
// // //         initial={{ opacity: 0, y: -50 }}
// // //         animate={{ opacity: 1, y: 0 }}
// // //         transition={{ duration: 0.8 }}
// // //         className="bg-gray-800 text-white py-20"
// // //       >
// // //         <div className="container mx-auto text-center">
// // //           <h1 className="text-5xl font-bold mb-4">Earthquake Monitor</h1>
// // //           <p className="text-xl">
// // //             Stay informed about the latest earthquakes around the world.
// // //           </p>
// // //           <a
// // //             href="/map"
// // //             className="mt-6 inline-block bg-gray-50 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300"
// // //           >
// // //             View Earthquake Map
// // //           </a>
// // //         </div>
// // //       </motion.div>

// // //       {/* Features Section */}
// // //       <div className="container mx-auto py-12">
// // //         <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
// // //           Features
// // //         </h2>
// // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // //           <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
// // //             <h3 className="text-xl font-bold mb-4 text-gray-800">
// // //               Real-Time Earthquake Data
// // //             </h3>
// // //             <p className="text-gray-600">
// // //               Access up-to-date information about earthquakes worldwide.
// // //             </p>
// // //           </div>
// // //           <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
// // //             <h3 className="text-xl font-bold mb-4 text-gray-800">
// // //               Latest News
// // //             </h3>
// // //             <p className="text-gray-600">
// // //               Stay updated with the latest news and articles about earthquakes.
// // //             </p>
// // //           </div>
// // //           <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
// // //             <h3 className="text-xl font-bold mb-4 text-gray-800">
// // //               Safety Tips
// // //             </h3>
// // //             <p className="text-gray-600">
// // //               Learn how to protect yourself and your loved ones during an
// // //               earthquake.
// // //             </p>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Call-to-Action Section */}
// // //       <div className="bg-gray-800 text-white py-12">
// // //         <div className="container mx-auto text-center">
// // //           <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
// // //           <p className="text-xl mb-6">
// // //             Check out the interactive earthquake map or read our safety
// // //             guidelines.
// // //           </p>
// // //           <div className="space-x-4">
// // //             <a
// // //               href="/map"
// // //               className="bg-gray-50 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300"
// // //             >
// // //               View Map
// // //             </a>
// // //             <a
// // //               href="/safety"
// // //               className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition duration-300"
// // //             >
// // //               Safety Tips
// // //             </a>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Footer */}
// // //       <footer className="bg-gray-900 text-white py-8">
// // //         <div className="container mx-auto text-center">
// // //           <p>© 2024 Earthquake Monitor. All rights reserved.</p>
// // //           <div className="mt-4 space-x-4">
// // //             <a href="/" className="hover:text-gray-300 transition duration-300">
// // //               Home
// // //             </a>
// // //             <a
// // //               href="/map"
// // //               className="hover:text-gray-300 transition duration-300"
// // //             >
// // //               Map
// // //             </a>
// // //             <a
// // //               href="/news"
// // //               className="hover:text-gray-300 transition duration-300"
// // //             >
// // //               News
// // //             </a>
// // //             <a
// // //               href="/safety"
// // //               className="hover:text-gray-300 transition duration-300"
// // //             >
// // //               Safety
// // //             </a>
// // //           </div>
// // //         </div>
// // //       </footer>
// // //     </div>
// // //   );
// // // }

// // // export default Home;
import React from "react";
import { motion } from "framer-motion";

function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section with Enhanced Animation */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-800 text-white py-20"
      >
        <div className="container mx-auto text-center px-4">
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-6xl font-bold mb-6"
          >
            Earthquake Monitor
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl mb-8"
          >
            Real-time earthquake tracking and safety information at your
            fingertips.
          </motion.p>

          {/* Hero Image Placeholder */}
          <div className="bg-gray-700 w-full max-w-4xl mx-auto h-96 rounded-lg mb-8 flex items-center justify-center">
            {/* Uncomment and replace with actual image
            <img
              src="/path-to-hero-image.jpg"
              alt="Global earthquake visualization"
              className="w-full h-full object-cover rounded-lg"
            /> */}
            <p className="text-gray-400">Interactive Globe Visualization</p>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-x-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/map"
              className="inline-block bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
            >
              View Live Map
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/safety"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition duration-300"
            >
              Safety Guidelines
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Latest Activity Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto py-16 px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Latest Seismic Activity
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              location: "Pacific Ring of Fire",
              magnitude: "6.2",
              depth: "10km",
              time: "2 hours ago",
            },
            {
              location: "Mediterranean Region",
              magnitude: "4.8",
              depth: "15km",
              time: "4 hours ago",
            },
            {
              location: "Japan Coast",
              magnitude: "5.5",
              depth: "20km",
              time: "6 hours ago",
            },
          ].map((quake, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="bg-gray-100 w-full h-48 rounded-lg mb-4 flex items-center justify-center">
                {/* Uncomment and replace with actual image
                <img
                  src={`/path-to-quake-${index + 1}.jpg`}
                  alt={`${quake.location} seismic activity`}
                  className="w-full h-full object-cover rounded-lg"
                /> */}
                <p className="text-gray-500">Seismic Activity Map</p>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {quake.location}
              </h3>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <p className="text-sm text-gray-500">Magnitude</p>
                  <p className="text-xl font-bold text-blue-600">
                    {quake.magnitude}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500">Depth</p>
                  <p className="text-xl font-bold text-blue-600">
                    {quake.depth}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500">Time</p>
                  <p className="text-xl font-bold text-blue-600">
                    {quake.time}
                  </p>
                </div>
              </div>
              <motion.a
                href="/map"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block text-center bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition duration-300"
              >
                View Details
              </motion.a>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Features Section with Animations */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-gray-800 text-white py-16"
      >
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
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-700 p-6 rounded-lg text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
                <div className="mt-6 bg-gray-600 w-full h-48 rounded-lg flex items-center justify-center">
                  {/* Uncomment and replace with actual image
                  <img
                    src={`/path-to-feature-${index + 1}.jpg`}
                    alt={feature.title}
                    className="w-full h-full object-cover rounded-lg"
                  /> */}
                  <p className="text-gray-400">Feature Illustration</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Statistics Section */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-blue-500 text-white py-16"
      >
        {/* <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50,000+", label: "Earthquakes Monitored" },
              { value: "195", label: "Countries Covered" },
              { value: "1M+", label: "Active Users" },
              { value: "24/7", label: "Real-time Updates" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-4"
              >
                <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
                <p className="text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div> */}
      {/* </motion.div> */}

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto py-16 px-4 text-center"
      >
        <h2 className="text-4xl font-bold mb-8">Stay Informed and Prepared</h2>
        <div className="bg-gray-200 w-full max-w-4xl mx-auto h-96 rounded-lg mb-8 flex items-center justify-center">
          {/* Uncomment and replace with actual image
          <img
            src="/path-to-cta-image.jpg"
            alt="Emergency preparedness"
            className="w-full h-full object-cover rounded-lg"
          /> */}
          <p className="text-gray-600">Emergency Preparedness Guide</p>
        </div>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join millions of users worldwide who rely on our platform for
          real-time earthquake monitoring and safety information.
        </p>
        <motion.a
          href="/map"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
        >
          Check out the Map
        </motion.a>
      </motion.div>
    </div>
  );
}

export default Home;
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// function Home() {
//   const [seismicData, setSeismicData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//       },
//     },
//   };

//   useEffect(() => {
//     fetchSeismicData();
//     // Fetch new data every 5 minutes
//     const interval = setInterval(fetchSeismicData, 300000);
//     return () => clearInterval(interval);
//   }, []);

//   const fetchSeismicData = async () => {
//     try {
//       // Using USGS Earthquake API
//       const response = await fetch(
//         "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson"
//       );
//       const data = await response.json();

//       // Process and sort the data
//       const processedData = data.features.slice(0, 3).map((quake) => ({
//         id: quake.id,
//         location: quake.properties.place,
//         magnitude: quake.properties.mag.toFixed(1),
//         depth: `${quake.geometry.coordinates[2].toFixed(1)}km`,
//         time: new Date(quake.properties.time).toLocaleString(),
//         coordinates: {
//           lat: quake.geometry.coordinates[1],
//           lng: quake.geometry.coordinates[0],
//         },
//       }));

//       setSeismicData(processedData);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching seismic data:", error);
//       setLoading(false);
//     }
//   };

//   const handleViewDetails = (quake) => {
//     // Navigate to map page with location parameters
//     navigate(
//       `/map?lat=${quake.coordinates.lat}&lng=${quake.coordinates.lng}&zoom=8`
//     );
//   };

//   // Rest of the component remains the same until Latest Activity Section
//   return (
//     <div className="bg-gray-100 min-h-screen">
//       {/* Hero Section with Enhanced Animation */}
//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="bg-gray-800 text-white py-20"
//       >
//         {/* ... Hero section content ... */}
//       </motion.div>

//       {/* Latest Activity Section with Live Data */}
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="container mx-auto py-16 px-4"
//       >
//         <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
//           Latest Seismic Activity
//         </h2>

//         {loading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {seismicData.map((quake, index) => (
//               <motion.div
//                 key={quake.id}
//                 variants={itemVariants}
//                 className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
//               >
//                 <div className="bg-gray-100 w-full h-48 rounded-lg mb-4 flex items-center justify-center">
//                   {/* You can add a static map image here using coordinates */}
//                   <div className="text-center">
//                     <span className="text-4xl font-bold text-blue-500">
//                       M {quake.magnitude}
//                     </span>
//                     <p className="text-gray-500 mt-2">Magnitude</p>
//                   </div>
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-800 mb-2">
//                   {quake.location}
//                 </h3>
//                 <div className="grid grid-cols-2 gap-4 mb-4">
//                   <div className="text-center">
//                     <p className="text-sm text-gray-500">Depth</p>
//                     <p className="text-xl font-bold text-blue-600">
//                       {quake.depth}
//                     </p>
//                   </div>
//                   <div className="text-center">
//                     <p className="text-sm text-gray-500">Time</p>
//                     <p className="text-base font-bold text-blue-600">
//                       {new Date(quake.time).toLocaleTimeString()}
//                     </p>
//                   </div>
//                 </div>
//                 <motion.button
//                   onClick={() => handleViewDetails(quake)}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition duration-300"
//                 >
//                   View Details
//                 </motion.button>
//               </motion.div>
//             ))}
//           </div>
//         )}

//         <div className="text-center mt-8">
//           <motion.a
//             href="/map"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
//           >
//             View All Seismic Activity
//           </motion.a>
//         </div>
//       </motion.div>

//       {/* ... Rest of the component (Features, Statistics, CTA, Footer) ... */}
//     </div>
//   );
// }

// export default Home;

//below is making the seismic things work with real time data
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// function Home() {
//   const [seismicData, setSeismicData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//       },
//     },
//   };

//   useEffect(() => {
//     fetchSeismicData();
//     // Fetch new data every 5 minutes
//     const interval = setInterval(fetchSeismicData, 300000);
//     return () => clearInterval(interval);
//   }, []);

//   const fetchSeismicData = async () => {
//     try {
//       const response = await fetch(
//         "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson"
//       );
//       const data = await response.json();

//       const processedData = data.features.slice(0, 3).map((quake) => ({
//         id: quake.id,
//         location: quake.properties.place,
//         magnitude: quake.properties.mag.toFixed(1),
//         depth: `${quake.geometry.coordinates[2].toFixed(1)}`,
//         time: new Date(quake.properties.time).toLocaleString(),
//         coordinates: {
//           lat: quake.geometry.coordinates[1],
//           lng: quake.geometry.coordinates[0],
//         },
//       }));

//       setSeismicData(processedData);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching seismic data:", error);
//       setLoading(false);
//     }
//   };

//   const handleViewDetails = (quake) => {
//     navigate(
//       `/map?lat=${quake.coordinates.lat}&lng=${quake.coordinates.lng}&zoom=8`
//     );
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       {/* Hero Section with Enhanced Animation */}
//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="bg-gray-800 text-white py-20"
//       >
//         <div className="container mx-auto text-center px-4">
//           <motion.h1
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="text-6xl font-bold mb-6"
//           >
//             Earthquake Monitor
//           </motion.h1>
//           <motion.p
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="text-2xl mb-8"
//           >
//             Real-time earthquake tracking and safety information at your
//             fingertips.
//           </motion.p>

//           {/* Hero Image Placeholder */}
//           <div className="bg-gray-700 w-full max-w-4xl mx-auto h-96 rounded-lg mb-8 flex items-center justify-center">
//             <p className="text-gray-400">Interactive Globe Visualization</p>
//           </div>

//           <motion.div
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.6 }}
//             className="space-x-4"
//           >
//             <motion.a
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               href="/map"
//               className="inline-block bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
//             >
//               View Live Map
//             </motion.a>
//             <motion.a
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               href="/safety"
//               className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition duration-300"
//             >
//               Safety Guidelines
//             </motion.a>
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Latest Activity Section */}
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="container mx-auto py-16 px-4"
//       >
//         <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
//           Latest Seismic Activity
//         </h2>

//         {loading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {seismicData.map((quake) => (
//               <motion.div
//                 key={quake.id}
//                 variants={itemVariants}
//                 className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
//               >
//                 <div className="bg-gray-100 w-full h-48 rounded-lg mb-4 flex items-center justify-center">
//                   <div className="text-center">
//                     <span className="text-4xl font-bold text-blue-500">
//                       M {quake.magnitude}
//                     </span>
//                     <p className="text-gray-500 mt-2">Magnitude</p>
//                   </div>
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-800 mb-2">
//                   {quake.location}
//                 </h3>
//                 <div className="grid grid-cols-3 gap-4 mb-4">
//                   <div className="text-center">
//                     <p className="text-sm text-gray-500">Magnitude</p>
//                     <p className="text-xl font-bold text-blue-600">
//                       {quake.magnitude}
//                     </p>
//                   </div>
//                   <div className="text-center">
//                     <p className="text-sm text-gray-500">Depth</p>
//                     <p className="text-xl font-bold text-blue-600">
//                       {quake.depth}km
//                     </p>
//                   </div>
//                   <div className="text-center">
//                     <p className="text-sm text-gray-500">Time</p>
//                     <p className="text-base font-bold text-blue-600">
//                       {new Date(quake.time).toLocaleTimeString()}
//                     </p>
//                   </div>
//                 </div>
//                 <motion.button
//                   onClick={() => handleViewDetails(quake)}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="w-full text-center bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition duration-300"
//                 >
//                   View Details
//                 </motion.button>
//               </motion.div>
//             ))}
//           </div>
//         )}
//       </motion.div>

//       {/* Features Section */}
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="bg-gray-800 text-white py-16"
//       >
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Real-Time Monitoring",
//                 description:
//                   "Access live earthquake data from seismic stations worldwide",
//                 icon: "🌍",
//               },
//               {
//                 title: "Risk Assessment",
//                 description:
//                   "Evaluate seismic risks for your location with advanced analytics",
//                 icon: "📊",
//               },
//               {
//                 title: "Emergency Preparedness",
//                 description:
//                   "Get expert safety guidelines and emergency checklists",
//                 icon: "🚨",
//               },
//             ].map((feature, index) => (
//               <motion.div
//                 key={index}
//                 variants={itemVariants}
//                 className="bg-gray-700 p-6 rounded-lg text-center"
//               >
//                 <div className="text-4xl mb-4">{feature.icon}</div>
//                 <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
//                 <p className="text-gray-300">{feature.description}</p>
//                 <div className="mt-6 bg-gray-600 w-full h-48 rounded-lg flex items-center justify-center">
//                   <p className="text-gray-400">Feature Illustration</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.div>

//       {/* Call to Action */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         className="container mx-auto py-16 px-4 text-center"
//       >
//         <h2 className="text-4xl font-bold mb-8">Stay Informed and Prepared</h2>
//         <div className="bg-gray-200 w-full max-w-4xl mx-auto h-96 rounded-lg mb-8 flex items-center justify-center">
//           <p className="text-gray-600">Emergency Preparedness Guide</p>
//         </div>
//         <p className="text-xl mb-8 max-w-2xl mx-auto">
//           Join millions of users worldwide who rely on our platform for
//           real-time earthquake monitoring and safety information.
//         </p>
//         <motion.a
//           href="/map"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="inline-block bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
//         >
//           Check out the Map
//         </motion.a>
//       </motion.div>

//       {/* Enhanced Footer */}
//       <footer className="bg-gray-900 text-white py-12">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
//             <div>
//               <h3 className="text-xl font-bold mb-4">About Us</h3>
//               <p className="text-gray-400">
//                 Dedicated to providing real-time earthquake data and safety
//                 information to help communities stay prepared and informed.
//               </p>
//             </div>
//             <div>
//               <h3 className="text-xl font-bold mb-4">Quick Links</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <a
//                     href="/"
//                     className="text-gray-400 hover:text-white transition duration-300"
//                   >
//                     Home
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/map"
//                     className="text-gray-400 hover:text-white transition duration-300"
//                   >
//                     Map
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/news"
//                     className="text-gray-400 hover:text-white transition duration-300"
//                   >
//                     News
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/safety"
//                     className="text-gray-400 hover:text-white transition duration-300"
//                   >
//                     Safety
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-xl font-bold mb-4">Resources</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-white transition duration-300"
//                   >
//                     API Access
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-white transition duration-300"
//                   >
//                     Documentation
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-white transition duration-300"
//                   >
//                     Research
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-white transition duration-300"
//                   >
//                     Partners
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-xl font-bold mb-4">Contact</h3>
//               <ul className="space-y-2">
//                 <li className="text-gray-400">support@earthquakemonitor.com</li>
//                 <li className="text-gray-400">1-800-EARTHQUAKE</li>
//                 <li className="text-gray-400">123 Seismic Street</li>
//                 <li className="text-gray-400">San Francisco, CA 94105</li>
//               </ul>
//             </div>
//           </div>
//           <div className="text-center pt-8 border-t border-gray-800">
//             <p>© 2024 Earthquake Monitor. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Home;
