import React from "react";
import "./css/Footer.css";

function Footer() {
  return (
    <>
      <footer className="mt-14">
        <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium">Getting started</h2>
            <div className="flex flex-col space-y-3 text-sm">
              <a className="Poppins text-gray-300" rel="noopener noreferrer" href="#">
                Installation
              </a>
              <a className="Poppins text-gray-300" rel="noopener noreferrer" href="#">
                Release Notes
              </a>
              <a className="Poppins text-gray-300" rel="noopener noreferrer" href="#">
                Upgrade Guide
              </a>
              <a className="Poppins text-gray-300" rel="noopener noreferrer" href="#">
                Using with Preprocessors
              </a>
              <a className="Poppins text-gray-300" rel="noopener noreferrer" href="#">
                Optimizing for Production
              </a>
              <a className="Poppins text-gray-300" rel="noopener noreferrer" href="#">
                Browser Support
              </a>
              <a className="Poppins text-gray-300" rel="noopener noreferrer" href="#">
                IntelliSense
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium">Core Concepts</h2>
            <div className="flex flex-col space-y-3 text-sm">
              <a className="Poppins text-gray-300" rel="noopener noreferrer" href="#">
                Utility-First
              </a>
              <a className="Poppins text-gray-300" rel="noopener noreferrer" href="#">
                Responsive Design
              </a>
              <a className="Poppins text-gray-300" rel="noopener noreferrer" href="#">
                Hover, Focus, &amp; Other States
              </a>
              <a className="Poppins text-gray-300" rel="noopener noreferrer" href="#">
                Dark Mode
              </a>
              <a className="Poppins text-gray-300" rel="noopener noreferrer" href="#">
                Adding Base Styles
              </a>
              <a className="Poppins text-gray-300" rel="noopener noreferrer" href="#">
                Extracting Components
              </a>
              <a className="Poppins text-gray-300" rel="noopener noreferrer" href="#">
                Adding New Utilities
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium">Customization</h2>
            <div className="flex flex-col space-y-3 text-sm">
              <a className="Poppins text-gray-300" rel="noopener noreferrer" href="#">
                Configuration
              </a>
              <a className="Poppins text-gray-300" rel="noopener noreferrer" href="#">
                Theme Configuration
              </a>
              <a className="Poppins text-gray-300" rel="noopener noreferrer" href="#">
                Breakpoints
              </a>
              <a className="Poppins text-gray-300" rel="noopener noreferrer" href="#">
                Customizing Colors
              </a>
              <a className="Poppins text-gray-300" rel="noopener noreferrer" href="#">
                Customizing Spacing
              </a>
              <a className="Poppins text-gray-300" rel="noopener noreferrer" href="#">
                Configuring Variants
              </a>
              <a className="Poppins text-gray-300" rel="noopener noreferrer" href="#">
                Plugins
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium">Community</h2>
            <div className="flex flex-col space-y-3 text-sm">
              <a className="Poppins text-gray-300" rel="noopener noreferrer" href="#">
                GitHub
              </a>
              <a className="Poppins text-gray-300" rel="noopener noreferrer" href="#">
                Discord
              </a>
              <a className="Poppins text-gray-300" rel="noopener noreferrer" href="#">
                Twitter
              </a>
              <a className="Poppins text-gray-300" rel="noopener noreferrer" href="#">
                YouTube
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center px-6 pt-12 text-sm">
          <span className="Poppins">
            © Copyright 2024. All Rights Reserved by <span className="font-medium">Whatever UIKit</span>
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
