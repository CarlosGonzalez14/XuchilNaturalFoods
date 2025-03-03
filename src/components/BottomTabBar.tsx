import { NavLink } from "react-router-dom";
import { Wheat, ClipboardList, Package, Truck, User } from "lucide-react";
import "../styles/BottomTabBar.css";

const tabs = [
  { name: "ProcessControl", path: "/process-control", icon: <Wheat /> },
  { name: "Logbook", path: "/logbook", icon: <ClipboardList /> },
  { name: "Inventory", path: "/inventory", icon: <Package /> },
  { name: "Orders", path: "/orders", icon: <Truck /> },
  { name: "User", path: "/user", icon: <User /> },
];

const BottomTabBar = () => {
  return (
    <nav className="bottom-tab-bar">
      {tabs.map((tab) => (
        <NavLink
          key={tab.name}
          to={tab.path}
          className={({ isActive }) => (isActive ? "tab active" : "tab")}
        >
          <div className="tab-icon">{tab.icon}</div>
          {/* <span className="tab-text">{tab.name}</span> */}
        </NavLink>
      ))}
    </nav>
  );
};

export default BottomTabBar;
