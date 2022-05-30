import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styles from "./index.scss";

const Header = () => {
  const pageLocation = useLocation();

  return (
    <div className={styles.header}>
      <div className={styles.headerButton}>
        <Link
          className={`${styles.headerNav} ${
            pageLocation.pathname === "/" && styles.active
          }`}
          to="/"
        >
          Popular
        </Link>
      </div>
      <div className={styles.headerButton}>
        <Link
          className={`${styles.headerNav} ${
            pageLocation.pathname === "/battle" && styles.active
          }`}
          to="/battle"
        >
          Battle
        </Link>
      </div>
    </div>
  );
};

export default Header;
