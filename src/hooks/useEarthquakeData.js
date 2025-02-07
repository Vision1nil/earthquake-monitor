import { useState, useEffect } from "react";
import { fetchEarthquakes } from "../services/earthquakeApi";

export const useEarthquakeData = () => {
  const [earthquakes, setEarthquakes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getEarthquakes = async () => {
      try {
        const data = await fetchEarthquakes();
        setEarthquakes(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    getEarthquakes();

    // Refresh data every 5 minutes
    const interval = setInterval(getEarthquakes, 300000);

    return () => clearInterval(interval);
  }, []);

  return { earthquakes, loading, error };
};
