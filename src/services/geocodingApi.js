const GEOCODING_API_URL = "https://api.mapbox.com/geocoding/v5/mapbox.places";

export const searchLocation = async (query) => {
  try {
    const response = await fetch(
      `${GEOCODING_API_URL}/${encodeURIComponent(query)}.json?access_token=${
        import.meta.env.VITE_MAPBOX_API_KEY
      }`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch location data");
    }

    const data = await response.json();

    if (data.features && data.features.length > 0) {
      const [longitude, latitude] = data.features[0].center;
      return [latitude, longitude];
    }

    throw new Error("No results found");
  } catch (error) {
    console.error("Error searching location:", error);
    throw error;
  }
};

export const searchLocationSuggestions = async (query) => {
  if (query.length < 2) return [];

  try {
    const response = await fetch(
      `${GEOCODING_API_URL}/${encodeURIComponent(query)}.json?access_token=${
        import.meta.env.VITE_MAPBOX_API_KEY
      }&types=place,locality,neighborhood,address&limit=5`
    );

    if (!response.ok) throw new Error("Failed to fetch suggestions");

    const data = await response.json();
    return data.features.map((feature) => ({
      name: feature.place_name,
      coordinates: feature.center,
    }));
  } catch (error) {
    console.error("Error fetching suggestions:", error);
    return [];
  }
};
