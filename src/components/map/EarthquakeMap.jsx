// // import React from "react";
// // import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
// // import { useEarthquakeData } from "../../hooks/useEarthquakeData";
// // import { useLocation } from "../../hooks/useLocation";
// // import MapControls from "./MapControls";
// // import LocationSearch from "./LocationSearch";
// // import { getCircleSize, getCircleColor } from "../../utils/mapHelpers";
// // import "leaflet/dist/leaflet.css";

// // const EarthquakeMap = () => {
// //   const { earthquakes, loading, error } = useEarthquakeData();
// //   const { location } = useLocation();

// //   // Default center and zoom when no location is set
// //   const defaultCenter = [20, 0];
// //   const defaultZoom = 2;

// //   // Determine center and zoom based on location
// //   const mapCenter =
// //     location.latitude && location.longitude
// //       ? [location.latitude, location.longitude]
// //       : defaultCenter;

// //   const mapZoom = location.latitude && location.longitude ? 8 : defaultZoom;

// //   if (loading) {
// //     return (
// //       <div className="flex items-center justify-center h-[70vh] bg-gray-50">
// //         <div className="text-lg">Loading earthquake data...</div>
// //       </div>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <div className="flex items-center justify-center h-[70vh] bg-red-50">
// //         <div className="text-lg text-red-600">
// //           Error loading earthquake data
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="relative w-full h-[70vh]">
// //       <LocationSearch className="absolute top-4 left-4 z-[1000]" />
// //       <MapContainer
// //         center={mapCenter}
// //         zoom={mapZoom}
// //         style={{ height: "100%", width: "100%" }}
// //         className="rounded-lg shadow-lg z-0"
// //       >
// //         <TileLayer
// //           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// //           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// //         />
// //         {earthquakes.map((earthquake) => {
// //           const { coordinates } = earthquake.geometry;
// //           const { mag, place, time } = earthquake.properties;

// //           return (
// //             <CircleMarker
// //               key={earthquake.id}
// //               center={[coordinates[1], coordinates[0]]}
// //               radius={getCircleSize(mag)}
// //               fillOpacity={0.7}
// //               stroke={false}
// //               fillColor={getCircleColor(mag)}
// //             >
// //               <Popup>
// //                 <div className="p-2">
// //                   <h3 className="font-bold text-lg">{place}</h3>
// //                   <p className="text-sm">Magnitude: {mag}</p>
// //                   <p className="text-sm">
// //                     Time: {new Date(time).toLocaleString()}
// //                   </p>
// //                 </div>
// //               </Popup>
// //             </CircleMarker>
// //           );
// //         })}
// //         <MapControls />
// //       </MapContainer>
// //     </div>
// //   );
// // };

// // export default EarthquakeMap;
// import React, { useRef, useEffect } from "react";
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

// // This component handles map updates when location changes
// const MapUpdater = () => {
//   const map = useMap();
//   const { location } = useLocation();

//   useEffect(() => {
//     if (location?.latitude && location?.longitude) {
//       map.setView([location.latitude, location.longitude], 10);
//     }
//   }, [location, map]);

//   return null;
// };

// const EarthquakeMap = () => {
//   const { earthquakes, loading, error } = useEarthquakeData();
//   const { location } = useLocation();

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-[70vh] bg-gray-50">
//         <div className="text-lg">Loading earthquake data...</div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex items-center justify-center h-[70vh] bg-red-50">
//         <div className="text-lg text-red-600">
//           Error loading earthquake data
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="relative w-full h-[70vh]">
//       <LocationSearch className="absolute top-4 left-4 z-[1000]" />
//       <MapContainer
//         center={[20, 0]}
//         zoom={2}
//         style={{ height: "100%", width: "100%" }}
//         className="rounded-lg shadow-lg z-0"
//       >
//         <MapUpdater />
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         {earthquakes.map((earthquake) => {
//           const { coordinates } = earthquake.geometry;
//           const { mag, place, time } = earthquake.properties;

//           return (
//             <CircleMarker
//               key={earthquake.id}
//               center={[coordinates[1], coordinates[0]]}
//               radius={getCircleSize(mag)}
//               fillOpacity={0.7}
//               stroke={false}
//               fillColor={getCircleColor(mag)}
//             >
//               <Popup>
//                 <div className="p-2">
//                   <h3 className="font-bold text-lg">{place}</h3>
//                   <p className="text-sm">Magnitude: {mag}</p>
//                   <p className="text-sm">
//                     Time: {new Date(time).toLocaleString()}
//                   </p>
//                 </div>
//               </Popup>
//             </CircleMarker>
//           );
//         })}
//         <MapControls />
//       </MapContainer>
//     </div>
//   );
// };

// export default EarthquakeMap;
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
        minZoom={2}
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
              fillOpacity={0.7}
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
