import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Logobds from "./logobds.png";
import Menu from "./menu-btn.png";

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
      <img className={styles["logo"]} src={Logobds} alt="logo next-gen sports"/>

      {/* Affichage conditionnel du menu */}
      <nav className={styles["menu"]}>
        {/* Si écran large, afficher le menu complet */}
        {isScreenLarge ? (
            <ul>
              <li className={styles["navbar"]}>
                <a href="/">Sports</a>
                <ul className={styles["sous-nav"]}>
                  <li><a href="RunningPage.html">Running</a></li>
                  <li><a href="RenfoMusculaire.html">Renfo musculaire</a></li>
                  <li><a href="CrossFit.html">Crossfit</a></li>
                </ul>
              </li>
              <li className={styles["navbar"]}>
                <a href="Activite.html">Activités</a>
              </li>
              <li className={styles["navbar"]}>
                <a href="about.html">À propos</a>
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
                  <a href="/">Sports</a>
                </li>
                <li>
                  <a href="Activite.html">Activité</a>
                </li>
                <li>
                  <a href="about.html">À propos</a>
                </li>
              </ul>
            </div>

            <img
              src={Menu} alt="menu hamburger" className={styles["menu-ham"]}
              onClick={toggleMenu}/>
          </>
        )}
      </nav>
    </div>
  );
}
