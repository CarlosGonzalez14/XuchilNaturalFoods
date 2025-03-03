import { NavLink } from "react-router-dom";
import { Wheat, ClipboardList, Package, Truck, User } from "lucide-react";
import styles from "../styles/BottomTabBar.module.css";

const tabs = [
  { name: "Control de procesos", path: "/process-control", icon: <Wheat /> },
  { name: "Bitácora", path: "/logbook", icon: <ClipboardList /> },
  { name: "Inventario", path: "/inventory", icon: <Package /> },
  { name: "Pedidos", path: "/orders", icon: <Truck /> },
  { name: "Usuario", path: "/user", icon: <User /> },
];

const BottomTabBar = () => {
  return (
    <nav className={styles.bottomTabBar}>
      {tabs.map((tab) => (
        <NavLink
          key={tab.name}
          to={tab.path}
          className={({ isActive }) =>
            isActive ? `${styles.tab} ${styles.tabActive}` : styles.tab
          }
        >
          <div className={styles.tabIcon}>{tab.icon}</div>
          <span className={styles.tabText}>{tab.name}</span> 
        </NavLink>
      ))}
    </nav>
  );
};

export default BottomTabBar;
