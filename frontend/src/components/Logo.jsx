// src/components/Logo.jsx
import React from 'react';
import logo from '../assets/logo.png'; // place your logo image at src/assets/logo.png

export default function Logo() {
  return (
    <div className="flex items-center">
      <img src={logo} alt="AlgoBlocks Logo" className="h-10 w-auto  "  />
      {/* <span className="text-xl font-bold text-gray-800">AlgoBlocks</span> */}
    </div>
  );
}