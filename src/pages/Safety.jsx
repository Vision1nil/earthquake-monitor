import React from "react";

function Safety() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gray-800 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Earthquake Safety</h1>
          <p className="text-xl">
            Learn how to protect yourself and your loved ones during an
            earthquake.
          </p>
        </div>
      </div>

      {/* Safety Tips Section */}
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Safety Tips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Before an Earthquake
            </h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Create an emergency plan.</li>
              <li>Prepare an emergency kit with food, water, and supplies.</li>
              <li>Secure heavy furniture and appliances.</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              During an Earthquake
            </h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Drop, cover, and hold on.</li>
              <li>Stay indoors and away from windows.</li>
              <li>If outside, move to an open area away from buildings.</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              After an Earthquake
            </h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Check for injuries and provide first aid if needed.</li>
              <li>Avoid damaged buildings and areas.</li>
              <li>Listen to official updates and instructions.</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Emergency Contacts
            </h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Local emergency services: 911</li>
              <li>Red Cross: 1-800-RED-CROSS</li>
              <li>FEMA: 1-800-621-FEMA</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
    </div>
  );
}

export default Safety;
