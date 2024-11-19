import React from "react";
import { HashRouter as Router, Route, Routes, useLocation } from "react-router-dom"; // Import useLocation
import Home from "./pages/home.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Navbar from './components/Navbar.jsx'; // Ensure 'Navbar' is capitalized
import Bolt from './pages/Bolt.jsx'; // Import Bolt.jsx
import ProductCatalog from './pages/productCatalog.jsx'; // Import ProductCatalog.jsx
import Login from './pages/login.jsx'; // Import Login.jsx
import Profile from './pages/Profile.jsx'; // Import Profile component

// Function to conditionally render Navbar based on route
function Layout() {
  const location = useLocation(); // Get the current path

  return (
    <div className="flex min-h-screen max-h-full bg-zinc-950 text-white">
      {/* Only render Navbar if not on the Login page */}
      {location.pathname !== "/login" && <Navbar />}
      <div className="flex-grow ml-64"> {/* Add margin to accommodate the sidebar */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/bolt" element={<Bolt />} />
          <Route path="/product-catalog" element={<ProductCatalog />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Default route goes to Login page */}
        <Route path="/" element={<Login />} />
        {/* Wrap other routes with Layout to conditionally show Navbar */}
        <Route path="/*" element={<Layout />} />
      </Routes>
    </Router>
  );
}
