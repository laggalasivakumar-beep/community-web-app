import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient";

import Sidebar from "./Sidebar";
import Profile from "./Profile";
import MyJobs from "./MyJobs";
import PostJob from "./PostJob";
import DashboardHome from "./DashboardHome";
import MyDirectory from "./MyDirectory";
import MyClassifieds from "./MyClassifieds";
import MyCommunity from "./MyCommunity";

import "./dashboard.css";

const Dashboard = () => {
  const [activePage, setActivePage] = useState("profile");
  const navigate = useNavigate(); // must be before useEffect

  // ✅ MOVE useEffect INSIDE component
  useEffect(() => {
    const session = localStorage.getItem("loggedUser");
    if (!session) navigate("/login");
  }, [navigate]);

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <DashboardHome />;
      case "profile":
        return <Profile />;
      case "jobs":
        return <MyJobs />;
      case "postjob":
        return <PostJob />;
      case "mydirectory":
        return <MyDirectory />;
      case "myclassifieds":
        return <MyClassifieds />;
      case "mycommunity":
        return <MyCommunity />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="dashboard-main">{renderPage()}</div>
    </div>
  );
};

export default Dashboard;
