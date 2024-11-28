import React from 'react';
import styles from './HomePage.module.css';

export function HomePage() {
        return (
            <div className={styles.HomePage}>
                <main className={styles.mainContent}>
                        <h1>Bienvenue chez Next-Gen Sports</h1>
                        <p>Découvrez notre mission, nos engagements et nos programmes
                            sportifs conçus pour vous.</p>

                    <div className={styles.card}>
                    <section className={styles.section}>
                        <h2>À Propos de Nous</h2>
                        <p>Next-Gen Sports est une organisation dédiée à la promotion
                            du sport et du bien-être. Nous croyons en l'importance de
                            la communauté, de la performance et de la santé globale.</p>
                    </section>
                    </div>
                    <div className={styles.card}>
                    <section className={styles.section}>
                        <h2>Notre Mission</h2>
                        <p>Notre mission est de fournir des programmes sportifs adaptés à tous les niveaux, du débutant au professionnel. Nous voulons inspirer chacun à repousser ses limites et atteindre ses objectifs personnels.</p>
                    </section>
                    </div>
                </main>
            </div>
    )
}