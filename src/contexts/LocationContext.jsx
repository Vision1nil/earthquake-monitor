// src/contexts/LocationContext.jsx
import React, { createContext, useState, useContext } from "react";

// Create the context and export it
export const LocationContext = createContext(undefined);

// Provider component
export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    name: "",
  });

  const value = {
    location,
    setLocation: (coords) => {
      setLocation((prev) => ({
        ...prev,
        ...coords,
      }));
    },
  };

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};

// Custom hook for using the location context
export const useLocation = () => {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error("useLocation must be used within a LocationProvider");
  }
  return context;
};
