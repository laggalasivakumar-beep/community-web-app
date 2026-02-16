import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer"; // <--- must import

import Home from "../pages/Home";
import Welcome from "../pages/Welcome";
import Community from "../pages/Community";
import Directory from "../pages/Directory";
import Jobs from "../pages/Jobs";
import Classifieds from "../pages/Classifieds";
import LoginPage from "../pages/login";
import AdminPage from "../pages/admin"; 
import ProtectedAdminRoute from "../components/auth/ProtectedAdminRoute";
import AdminLogin from "../pages/AdminLogin";
import Dashboard from "../pages/Dashboard";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/welcome" element={<Welcome />} />
  <Route path="/community" element={<Community />} />
  <Route path="/directory" element={<Directory />} />
  <Route path="/jobs" element={<Jobs />} />
  <Route path="/classifieds" element={<Classifieds />} />
  <Route path="/login" element={<LoginPage />} />
  <Route path="/dashboard" element={<Dashboard />} />

  {/* Admin Login */}
  <Route path="/admin-login" element={<AdminLogin />} />

  {/* 🔐 Protected Admin Routes */}
  <Route element={<ProtectedAdminRoute />}>
    <Route path="/admin" element={<AdminPage />} />
  </Route>
</Routes>


      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
