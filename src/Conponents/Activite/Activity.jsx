import React from 'react';
import styles from './Activity.module.css';

export function ActivityPage() {
    return (
        <div className={styles.activityPage}>
            <main className={styles.mainContent}>
                <h1>Activités</h1>
                <div className={styles.card}>
                    <section className={styles.section}>
                        <h2>Activité 1</h2>
                        <p>Description de l'activité 1.</p>
                    </section>
                </div>
                <div className={styles.card}>
                    <section className={styles.section}>
                        <h2>Activité 2</h2>
                        <p>Description de l'activité 2.</p>
                    </section>
                </div>
                <div className={styles.card}>
                    <section className={styles.section}>
                        <h2>Activité 3</h2>
                        <p>Description de l'activité 3.</p>
                    </section>
                </div>
                <div className={styles.card}>
                    <section className={styles.section}>
                        <h2>Activité 4</h2>
                        <p>Description de l'activité 4.</p>
                    </section>
                </div>
            </main>
        </div>
    );
}
