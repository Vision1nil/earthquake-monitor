import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-gray-300">
              Earthquake Monitor provides real-time earthquake data and safety
              information to help communities stay informed and prepared.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/map" className="text-gray-300 hover:text-white">
                  Interactive Map
                </a>
              </li>
              <li>
                <a href="/news" className="text-gray-300 hover:text-white">
                  Latest News
                </a>
              </li>
              <li>
                <a href="/safety" className="text-gray-300 hover:text-white">
                  Safety Guidelines
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300">
              Have questions or feedback? Reach out to us at:
              contact@earthquakemonitor.com
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>
            © {new Date().getFullYear()} Earthquake Monitor. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
