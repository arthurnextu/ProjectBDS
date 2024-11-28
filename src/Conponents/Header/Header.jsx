import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Logobds from "./logobds.png";
import Menu from "./menu-btn.png";
import { Link } from "react-router-dom";  // Importer Link depuis react-router-dom

export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false); // Pour le menu hamburger
  const [isScreenLarge, setScreenLarge] = useState(window.innerWidth > 900); // Taille de l'écran

  // Mettre à jour la taille de l'écran lors des redimensionnements
  useEffect(() => {
    const handleResize = () => {
      setScreenLarge(window.innerWidth > 900);
      if (window.innerWidth > 900) {
        setMenuOpen(false); // Ferme le menu mobile si la taille devient grande
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles["header"]}>
      <img className={styles["logo"]} src={Logobds} alt="logo next-gen sports" />

      {/* Affichage conditionnel du menu */}
      <nav className={styles["menu"]}>
        {/* Si écran large, afficher le menu complet */}
        {isScreenLarge ? (
          <ul>
            <li className={styles["navbar"]}>
              <Link to='/'>Accueil</Link>
            </li>
            <li className={styles["navbar"]}>
              <Link to="/">Sports</Link>
              <ul className={styles["sous-nav"]}>
                <li><Link to="/running">Running</Link></li>
                <li><Link to="/CrossFit">Crossfit</Link></li>
                <li><Link to="/RenfoMusculaire">Renfo Musculaire</Link></li>
              </ul>
            </li>
            <li className={styles["navbar"]}>
              <Link to="/activity">Activités</Link>
            </li>
            <li className={styles["navbar"]}>
              <Link to="/about">À propos</Link>
            </li>
          </ul>
        ) : (
          // Si écran petit, afficher le menu hamburger
          <>
            <div
              className={`${styles["nav-links"]} ${
                isMenuOpen ? styles["mobile-menu"] : ""
              }`}
            >
              <ul>
                <li>
                  <Link to="/">Sports</Link>
                </li>
                <li>
                  <Link to="/activity">Activité</Link>
                </li>
                <li>
                  <Link to="/about">À propos</Link>
                </li>
              </ul>
            </div>

            <img
              src={Menu} alt="menu hamburger" className={styles["menu-ham"]}
              onClick={toggleMenu} />
          </>
        )}
      </nav>
    </div>
  );
}
