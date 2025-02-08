import React, { useRef, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
  useMap,
} from "react-leaflet";
import { useEarthquakeData } from "../../hooks/useEarthquakeData";
import { useLocation } from "../../hooks/useLocation";
import MapControls from "./MapControls";
import LocationSearch from "./LocationSearch";
import { getCircleSize, getCircleColor } from "../../utils/mapHelpers";
import "leaflet/dist/leaflet.css";

const MapUpdater = () => {
  const map = useMap();
  const { location } = useLocation();

  useEffect(() => {
    if (location?.latitude && location?.longitude) {
      map.setView([location.latitude, location.longitude], 10, {
        animate: true,
      });
    }
  }, [location, map]);

  return null;
};

const EarthquakeMap = () => {
  const { earthquakes, loading, error } = useEarthquakeData();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[70vh] bg-gray-50">
        <div className="text-lg">Loading earthquake data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-[70vh] bg-red-50">
        <div className="text-lg text-red-600">
          Error loading earthquake data
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[70vh]">
      <LocationSearch
        className="absolute top-4 left-4 z-[1000]"
        onRiskData={(data) => console.log("Risk data:", data)}
      />
      <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{ height: "100%", width: "100%" }}
        className="rounded-lg shadow-lg z-0"
        maxBounds={[
          [-90, -180],
          [90, 180],
        ]}
        minZoom={2.5}
        worldCopyJump={false}
      >
        <MapUpdater />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          noWrap={true}
        />
        {earthquakes.map((earthquake) => {
          const { coordinates } = earthquake.geometry;
          const { mag, place, time } = earthquake.properties;

          return (
            <CircleMarker
              key={earthquake.id}
              center={[coordinates[1], coordinates[0]]}
              radius={getCircleSize(mag)}
              fillOpacity={0.5}
              stroke={false}
              fillColor={getCircleColor(mag)}
            >
              <Popup>
                <div className="p-2">
                  <h3 className="font-bold text-lg">{place}</h3>
                  <p className="text-sm">Magnitude: {mag}</p>
                  <p className="text-sm">
                    Time: {new Date(time).toLocaleString()}
                  </p>
                </div>
              </Popup>
            </CircleMarker>
          );
        })}
        <MapControls />
      </MapContainer>
    </div>
  );
};

export default EarthquakeMap;

// import React, { useEffect, useState } from "react";
// import {
//   MapContainer,
//   TileLayer,
//   CircleMarker,
//   Popup,
//   useMap,
// } from "react-leaflet";
// import { useEarthquakeData } from "../../hooks/useEarthquakeData";
// import { useLocation } from "../../hooks/useLocation";
// import MapControls from "./MapControls";
// import LocationSearch from "./LocationSearch";
// import { getCircleSize, getCircleColor } from "../../utils/mapHelpers";
// import "leaflet/dist/leaflet.css";

// // MapUpdater component to handle location updates
// const MapUpdater = () => {
//   const map = useMap();
//   const { location } = useLocation();

//   useEffect(() => {
//     if (location?.latitude && location?.longitude) {
//       map.setView([location.latitude, location.longitude], 10, {
//         animate: true,
//         duration: 1,
//       });
//     }
//   }, [location, map]);

//   return null;
// };

// const EarthquakeMap = () => {
//   const { earthquakes, loading, error } = useEarthquakeData();
//   const [selectedEarthquake, setSelectedEarthquake] = useState(null);
//   const { location } = useLocation();

//   const defaultCenter = [20, 0];
//   const defaultZoom = 2;

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-full bg-gray-100">
//         <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex items-center justify-center h-full bg-gray-100">
//         <div className="text-red-500 text-center">
//           <p className="text-xl font-bold">Error loading earthquake data</p>
//           <p className="text-gray-600">Please try again later</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="relative h-full w-full">
//       <LocationSearch className="absolute top-4 left-4 z-10 w-64" />

//       <MapContainer
//         center={
//           location ? [location.latitude, location.longitude] : defaultCenter
//         }
//         zoom={location ? 10 : defaultZoom}
//         className="h-full w-full"
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />
//         <MapUpdater />
//         <MapControls />
//         {earthquakes.map((earthquake) => {
//           const { coordinates } = earthquake.geometry;
//           const { mag, place, time, depth } = earthquake.properties;

//           return (
//             <CircleMarker
//               key={earthquake.id}
//               center={[coordinates[1], coordinates[0]]}
//               radius={getCircleSize(mag)}
//               fillColor={getCircleColor(mag)}
//               color={getCircleColor(mag)}
//               weight={1}
//               opacity={0.8}
//               fillOpacity={0.6}
//               eventHandlers={{
//                 click: () => setSelectedEarthquake(earthquake),
//               }}
//             >
//               <Popup>
//                 <div className="p-2">
//                   <h3 className="font-bold text-lg mb-2">{place}</h3>
//                   <div className="grid grid-cols-2 gap-2 text-sm">
//                     <div>
//                       <p className="font-semibold">Magnitude:</p>
//                       <p>{mag.toFixed(1)}</p>
//                     </div>
//                     <div>
//                       <p className="font-semibold">Depth:</p>
//                       <p>{depth.toFixed(1)} km</p>
//                     </div>
//                     <div className="col-span-2">
//                       <p className="font-semibold">Time:</p>
//                       <p>{new Date(time).toLocaleString()}</p>
//                     </div>
//                   </div>
//                 </div>
//               </Popup>
//             </CircleMarker>
//           );
//         })}
//         ma
//       </MapContainer>
//     </div>
//   );
// };

// export default EarthquakeMap;

//below is work on more interactive home page
// import React, { useEffect, useState } from "react";
// import {
//   MapContainer,
//   TileLayer,
//   CircleMarker,
//   Popup,
//   useMap,
// } from "react-leaflet";
// import { useEarthquakeData } from "../../hooks/useEarthquakeData";
// import { useLocation } from "../../hooks/useLocation";
// import MapControls from "./MapControls";
// import LocationSearch from "./LocationSearch";
// import { getCircleSize, getCircleColor } from "../../utils/mapHelpers";
// import "leaflet/dist/leaflet.css";

// // MapUpdater component to handle location updates
// const MapUpdater = () => {
//   const map = useMap();
//   const { location } = useLocation();

//   useEffect(() => {
//     if (location?.latitude && location?.longitude) {
//       map.setView([location.latitude, location.longitude], 10, {
//         animate: true,
//         duration: 1,
//       });
//     }
//   }, [location, map]);

//   return null;
// };

// const EarthquakeMap = () => {
//   const { earthquakes, loading, error } = useEarthquakeData();
//   const [selectedEarthquake, setSelectedEarthquake] = useState(null);
//   const { location } = useLocation();

//   const defaultCenter = [20, 0];
//   const defaultZoom = 2;

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-full bg-gray-100">
//         <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex items-center justify-center h-full bg-gray-100">
//         <div className="text-red-500 text-center">
//           <p className="text-xl font-bold">Error loading earthquake data</p>
//           <p className="text-gray-600">Please try again later</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="relative h-full w-full">
//       <LocationSearch className="absolute top-4 left-4 z-10 w-64" />

//       <MapContainer
//         center={
//           location ? [location.latitude, location.longitude] : defaultCenter
//         }
//         zoom={location ? 10 : defaultZoom}
//         className="h-full w-full"
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />

//         <MapUpdater />
//         <MapControls />

//         {earthquakes.map((earthquake) => {
//           if (!earthquake?.geometry?.coordinates || !earthquake?.properties) {
//             return null; // Skip invalid earthquake data
//           }

//           const { coordinates } = earthquake.geometry;
//           const {
//             mag = 0,
//             place = "Unknown Location",
//             time = Date.now(),
//           } = earthquake.properties;
//           // Safely access depth with a default value
//           const depth = earthquake.geometry.coordinates[2] || 0;

//           return (
//             <CircleMarker
//               key={earthquake.id || Math.random().toString()}
//               center={[coordinates[1], coordinates[0]]}
//               radius={getCircleSize(mag)}
//               fillColor={getCircleColor(mag)}
//               color={getCircleColor(mag)}
//               weight={1}
//               opacity={0.8}
//               fillOpacity={0.6}
//             >
//               <Popup>
//                 <div className="p-2">
//                   <h3 className="font-bold text-lg mb-2">{place}</h3>
//                   <div className="grid grid-cols-2 gap-2 text-sm">
//                     <div>
//                       <p className="font-semibold">Magnitude:</p>
//                       <p>{typeof mag === "number" ? mag.toFixed(1) : "N/A"}</p>
//                     </div>
//                     <div>
//                       <p className="font-semibold">Depth:</p>
//                       <p>
//                         {typeof depth === "number" ? depth.toFixed(1) : "N/A"}{" "}
//                         km
//                       </p>
//                     </div>
//                     <div className="col-span-2">
//                       <p className="font-semibold">Time:</p>
//                       <p>{new Date(time).toLocaleString()}</p>
//                     </div>
//                   </div>
//                 </div>
//               </Popup>
//             </CircleMarker>
//           );
//         })}
//       </MapContainer>
//     </div>
//   );
// };

// export default EarthquakeMap;
