// src/MainApp.jsx
import React, { useState, useContext } from "react";
import { AuthContext } from "./auth/AuthContext";
import Logo from "./components/Logo";
import DashboardLayout from "./pages/DashboardLayout";

export default function MainApp() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white p-4 shadow flex justify-between items-center">
        <Logo />
        <div className="flex items-center space-x-4">
          <span className="text-gray-700">
            Hello, {user?.username || "Guest"}
          </span>
          <button
            onClick={logout}
            className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </header>
      <DashboardLayout />
    </div>
  );
}
