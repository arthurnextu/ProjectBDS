import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src="logo.png" alt="Logo Next-Gen Sports" />
            <nav className={styles.menu}>
                <ul>
                    <li className={styles.navbar}><Link to='/'>Accueil</Link></li>
                    <li className={styles.navbar}>
                        <Link to="/">Sports</Link>
                        <ul className={styles.sousNav}>
                            <li><Link to="/running">Running</Link></li>
                            <li><Link to="/CrossFit">Crossfit</Link></li>
                            <li><Link to="/RenfoMusculaire">Renfo Musculaire</Link></li>
                        </ul>
                    </li>
                    <li className={styles.navbar}><Link to="/activity">Activités</Link></li>
                    <li className={styles.navbar}><Link to="/about">À propos</Link></li>
                </ul>
            </nav>
        </header>

        
    );
}
