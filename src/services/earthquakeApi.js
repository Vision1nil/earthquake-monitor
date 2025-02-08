// const USGS_ENDPOINT =
//   "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary";
// const DESIGN_MAPS_ENDPOINT = "https://earthquake.usgs.gov/ws/designmaps/2.1.0";

// export const fetchEarthquakes = async (
//   timeRange = "month",
//   magnitude = "all"
// ) => {
//   try {
//     const response = await fetch(
//       `${USGS_ENDPOINT}/${magnitude}_${timeRange}.geojson`
//     );
//     if (!response.ok) {
//       throw new Error("Failed to fetch earthquake data");
//     }
//     const data = await response.json();
//     return data.features;
//   } catch (error) {
//     console.error("Error fetching earthquake data:", error);
//     throw error;
//   }
// };

// export const fetchLocationRisk = async (latitude, longitude) => {
//   try {
//     // Using the USGS Design Maps API for seismic hazard data
//     const params = {
//       latitude: latitude,
//       longitude: longitude,
//       riskCategory: "II", // Standard building risk category
//       siteClass: "D", // Default site class for general soil conditions
//       title: "Site-Specific Seismic Design",
//     };

//     const response = await fetch(`${DESIGN_MAPS_ENDPOINT}/risk.json`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(params),
//     });

//     if (!response.ok) {
//       throw new Error("Failed to fetch location risk data");
//     }

//     const data = await response.json();

//     // Process the response to get relevant seismic hazard values
//     return {
//       ss: data.response.data.ss, // Short-period spectral acceleration
//       s1: data.response.data.s1, // 1-second period spectral acceleration
//       pga: data.response.data.pga, // Peak ground acceleration
//       seismicRiskLevel: calculateRiskLevel(data.response.data.ss),
//     };
//   } catch (error) {
//     console.error("Error fetching location risk:", error);
//     throw error;
//   }
// };

// // Helper function to calculate risk level based on spectral acceleration
// const calculateRiskLevel = (ss) => {
//   if (ss < 0.25)
//     return { level: "Low", description: "Lower seismic hazard area" };
//   if (ss < 0.5)
//     return { level: "Moderate", description: "Moderate seismic hazard area" };
//   if (ss < 1.0)
//     return { level: "High", description: "Higher seismic hazard area" };
//   return { level: "Very High", description: "Very high seismic hazard area" };
// };
const USGS_ENDPOINT =
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary";
const DESIGN_MAPS_ENDPOINT = "https://earthquake.usgs.gov/ws/designmaps/2.1.0";

export const fetchEarthquakes = async (
  timeRange = "month",
  magnitude = "all"
) => {
  try {
    const response = await fetch(
      `${USGS_ENDPOINT}/${magnitude}_${timeRange}.geojson`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch earthquake data");
    }
    const data = await response.json();
    return data.features;
  } catch (error) {
    console.error("Error fetching earthquake data:", error);
    throw error;
  }
};

export const fetchLocationRisk = async (latitude, longitude) => {
  try {
    // First, check if the location is within continental US (rough boundaries)
    if (
      latitude < 24.396308 ||
      latitude > 49.384358 ||
      longitude < -125.0 ||
      longitude > -66.93457
    ) {
      return {
        seismicRiskLevel: {
          level: "Unknown",
          description: "Risk data not available for this location",
        },
        ss: null,
        s1: null,
        pga: null,
      };
    }

    const params = {
      latitude: latitude,
      longitude: longitude,
      riskCategory: "II",
      siteClass: "D",
      title: "Site-Specific Seismic Design",
    };

    const response = await fetch(`${DESIGN_MAPS_ENDPOINT}/risk`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      // If the API fails, provide estimated risk based on historical data
      return estimateRiskFromHistoricalData(latitude, longitude);
    }

    const data = await response.json();

    return {
      ss: data.response?.data?.ss || null,
      s1: data.response?.data?.s1 || null,
      pga: data.response?.data?.pga || null,
      seismicRiskLevel: calculateRiskLevel(data.response?.data?.ss || 0),
    };
  } catch (error) {
    console.error("Error fetching location risk:", error);
    // Fallback to estimated risk
    return estimateRiskFromHistoricalData(latitude, longitude);
  }
};

// Helper function to estimate risk based on historical data and known seismic zones
const estimateRiskFromHistoricalData = (latitude, longitude) => {
  // Simple risk estimation based on known seismic zones
  // California
  if (
    longitude >= -124.409591 &&
    longitude <= -114.131211 &&
    latitude >= 32.534156 &&
    latitude <= 42.009518
  ) {
    return {
      seismicRiskLevel: {
        level: "High",
        description: "Located in a known seismically active region",
      },
      ss: null,
      s1: null,
      pga: null,
    };
  }

  // Pacific Northwest
  if (
    longitude >= -124.848974 &&
    longitude <= -116.916351 &&
    latitude >= 41.991794 &&
    latitude <= 49.002494
  ) {
    return {
      seismicRiskLevel: {
        level: "Moderate to High",
        description: "Located in the Pacific Northwest seismic zone",
      },
      ss: null,
      s1: null,
      pga: null,
    };
  }

  // New Madrid Seismic Zone
  if (
    longitude >= -90.730621 &&
    longitude <= -87.358398 &&
    latitude >= 35.78551 &&
    latitude <= 38.251377
  ) {
    return {
      seismicRiskLevel: {
        level: "Moderate",
        description: "Located in the New Madrid Seismic Zone",
      },
      ss: null,
      s1: null,
      pga: null,
    };
  }

  return {
    seismicRiskLevel: {
      level: "Low to Moderate",
      description: "Based on historical seismic activity in the region",
    },
    ss: null,
    s1: null,
    pga: null,
  };
};

const calculateRiskLevel = (ss) => {
  if (ss === null || ss === undefined) {
    return {
      level: "Unknown",
      description: "Unable to determine seismic hazard",
    };
  }
  if (ss < 0.25)
    return {
      level: "Low",
      description: "Lower seismic hazard area",
    };
  if (ss < 0.5)
    return {
      level: "Moderate",
      description: "Moderate seismic hazard area",
    };
  if (ss < 1.0)
    return {
      level: "High",
      description: "Higher seismic hazard area",
    };
  return {
    level: "Very High",
    description: "Very high seismic hazard area",
  };
};
