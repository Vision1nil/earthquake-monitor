// src/components/map/RiskDisplay.jsx
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

const RiskDisplay = ({ riskData, location }) => {
  if (!riskData) return null;

  const getRiskColor = (level) => {
    switch (level.toLowerCase()) {
      case "low":
        return "bg-green-100 text-green-800";
      case "moderate":
        return "bg-yellow-100 text-yellow-800";
      case "high":
        return "bg-orange-100 text-orange-800";
      case "very high":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Seismic Risk Assessment</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div
            className={`p-4 rounded-md ${getRiskColor(
              riskData.seismicRiskLevel.level
            )}`}
          >
            <h4 className="font-semibold">
              Risk Level: {riskData.seismicRiskLevel.level}
            </h4>
            <p>{riskData.seismicRiskLevel.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-gray-50 rounded-md">
              <p className="text-sm text-gray-600">Short-Period Acceleration</p>
              <p className="text-lg font-semibold">{riskData.ss}g</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-md">
              <p className="text-sm text-gray-600">1-Second Period</p>
              <p className="text-lg font-semibold">{riskData.s1}g</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-md">
              <p className="text-sm text-gray-600">Peak Ground Acceleration</p>
              <p className="text-lg font-semibold">{riskData.pga}g</p>
            </div>
          </div>

          <div className="text-sm text-gray-600 mt-4">
            <p>
              Location:{" "}
              {location.name || `${location.latitude}, ${location.longitude}`}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RiskDisplay;
