export const getCircleSize = (magnitude) => {
  return Math.max(magnitude * 4, 8);
};

export const getCircleColor = (magnitude) => {
  if (magnitude < 2) return "#00ff00";
  if (magnitude < 4) return "#ffff00";
  if (magnitude < 6) return "#ff9900";
  return "#ff0000";
};

export const calculateRiskLevel = (magnitude) => {
  if (magnitude < 2) return "Very Low";
  if (magnitude < 4) return "Low";
  if (magnitude < 6) return "Moderate";
  return "High";
};

export const getBounds = (earthquakes) => {
  if (!earthquakes.length) return null;

  const coordinates = earthquakes.map((eq) => eq.geometry.coordinates);
  const lngs = coordinates.map((coord) => coord[0]);
  const lats = coordinates.map((coord) => coord[1]);

  return [
    [Math.min(...lats), Math.min(...lngs)],
    [Math.max(...lats), Math.max(...lngs)],
  ];
};
