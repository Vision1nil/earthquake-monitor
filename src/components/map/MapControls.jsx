import React from "react";
import { Card } from "@/components/ui/card";

const MapControls = () => {
  const legendItems = [
    { color: "#00ff00", label: "Magnitude < 2", description: "Minor" },
    { color: "#ffff00", label: "Magnitude 2-4", description: "Light" },
    { color: "#ff9900", label: "Magnitude 4-6", description: "Moderate" },
    { color: "#ff0000", label: "Magnitude > 6", description: "Strong" },
  ];

  return (
    <Card className="absolute bottom-4 right-4 z-[1000] p-4 bg-white/90 backdrop-blur-sm">
      <h3 className="font-semibold mb-2">Earthquake Magnitude Scale</h3>
      <div className="space-y-2">
        {legendItems.map(({ color, label, description }) => (
          <div key={color} className="flex items-center gap-2">
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: color }}
            />
            <span className="text-sm">{label}</span>
            <span className="text-xs text-gray-500">({description})</span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default MapControls;
