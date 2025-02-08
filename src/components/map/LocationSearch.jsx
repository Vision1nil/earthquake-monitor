import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "../../contexts/LocationContext";
import { searchLocationSuggestions } from "../../services/geocodingApi";
import { fetchLocationRisk } from "../../services/earthquakeApi";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Search } from "lucide-react";

const LocationSearch = ({ className }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [riskData, setRiskData] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { setLocation } = useLocation();
  const suggestionsRef = useRef(null);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchQuery.length < 2) {
        setSuggestions([]);
        return;
      }
      const results = await searchLocationSuggestions(searchQuery);
      setSuggestions(results);
    };

    const debounceTimer = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSuggestionClick = async (suggestion) => {
    setSearchQuery(suggestion.name);
    setShowSuggestions(false);
    setIsLoading(true);
    setError(null);
    setRiskData(null);

    try {
      const [longitude, latitude] = suggestion.coordinates;

      // Set location first
      setLocation({
        latitude,
        longitude,
        name: suggestion.name,
      });

      // Then fetch risk data
      const risk = await fetchLocationRisk(latitude, longitude);
      setRiskData(risk);
    } catch (err) {
      console.error("Error processing location:", err);
      setError("Unable to retrieve seismic risk data for this location.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className={`p-4 bg-white/90 backdrop-blur-sm ${className}`}>
      <form onSubmit={(e) => e.preventDefault()} className="relative">
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Search your location..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowSuggestions(true);
              setRiskData(null);
              setError(null);
            }}
            onFocus={() => setShowSuggestions(true)}
            className="w-64"
            disabled={isLoading}
          />
          <Button type="button" size="icon" disabled={isLoading}>
            {isLoading ? (
              <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
            ) : (
              <Search className="h-4 w-4" />
            )}
          </Button>
        </div>

        {showSuggestions && suggestions.length > 0 && (
          <div
            ref={suggestionsRef}
            className="absolute z-50 w-64 mt-1 bg-white rounded-md shadow-lg max-h-60 overflow-auto"
          >
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion.name}
              </div>
            ))}
          </div>
        )}

        {error && <p className="text-sm text-red-500 mt-2">{error}</p>}

        {riskData && !error && (
          <div className="mt-2 text-sm">
            <p className="font-semibold">
              Seismic Risk Level: {riskData.seismicRiskLevel.level}
            </p>
            <p className="text-gray-600">
              {riskData.seismicRiskLevel.description}
            </p>
          </div>
        )}
      </form>
    </Card>
  );
};

export default LocationSearch;
