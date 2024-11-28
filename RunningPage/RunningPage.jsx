import React from 'react';
import styles from './RunningPage.module.css';

export function RunningPage() {
    return (
        <div className={styles.runningPage}>
            <main className={styles.mainContent}>
            <h1>Bienvenue sur la page Running</h1>
            <div className={styles.card}>
                <section className={styles.section}>
                    <p>Le Running est un excellent moyen d'améliorer votre santé et votre endurance.</p>
                </section>
            </div>
                <div className={styles.card}>
                    <section className={styles.section}>
                        <h2>Nos Programmes de Running</h2>
                        <p>Nous proposons des programmes adaptés à tous les niveaux, du débutant au coureur expérimenté.</p>
                    </section>
                </div>
            </main>
        </div>
    );
}

