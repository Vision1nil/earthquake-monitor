import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Map from "./pages/Map";
import News from "./pages/News";
import Safety from "./pages/Safety";
import Layout from "./components/layout/Layout";
import { LocationProvider } from "./contexts/LocationContext";

function App() {
  return (
    <LocationProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/map" element={<Map />} />
            <Route path="/news" element={<News />} />
            <Route path="/safety" element={<Safety />} />
          </Routes>
        </Layout>
      </Router>
    </LocationProvider>
  );
}

export default App;
