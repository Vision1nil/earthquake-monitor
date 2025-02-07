// src/components/map/LocationSearch.jsx
import React, { useState } from "react";
import { useLocation } from "../../contexts/LocationContext";
import { searchLocation } from "../../services/geocodingApi";
import { fetchLocationRisk } from "../../services/earthquakeApi";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Search } from "lucide-react";

const LocationSearch = ({ onRiskData, className }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setLocation } = useLocation();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      const [latitude, longitude] = await searchLocation(searchQuery);

      // Update location in context
      setLocation({
        latitude,
        longitude,
        name: searchQuery,
      });

      // Fetch risk data for the location
      const riskData = await fetchLocationRisk(latitude, longitude);
      onRiskData?.(riskData);
    } catch (error) {
      console.error("Error searching location:", error);
      setError("Failed to find location. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className={`p-4 bg-white/90 backdrop-blur-sm ${className}`}>
      <form onSubmit={handleSearch} className="space-y-2">
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Search your location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-64"
            disabled={isLoading}
          />
          <Button type="submit" size="icon" disabled={isLoading}>
            {isLoading ? (
              <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
            ) : (
              <Search className="h-4 w-4" />
            )}
          </Button>
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
      </form>
    </Card>
  );
};

export default LocationSearch;
