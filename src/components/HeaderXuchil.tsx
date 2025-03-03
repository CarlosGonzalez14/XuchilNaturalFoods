import React from "react";
import styles from "../styles/Header.module.css";
import XuchilLogo from "../assets/images/Xuchil.svg";

const HeaderXuchil: React.FC = () => {
  return (
    <header className={styles.header}>
      <img src={XuchilLogo} alt="Logo de la empresa" className={styles.logo} />
    </header>
  );
};

export default HeaderXuchil;
