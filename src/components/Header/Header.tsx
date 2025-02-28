import React from "react";
import styles from "./Header.module.css";
import XuchilLogo from "../../assets/images/Xuchil.svg";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img src={XuchilLogo} alt="Logo de la empresa" className={styles.logo} />
    </header>
  );
};

export default Header;
