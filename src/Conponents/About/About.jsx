import React from 'react';
import styles from './About.module.css';

export function AboutPage() {
    return (
        <div className={styles.aboutPage}>
            <main className={styles.mainContent}>
                    <h1>À Propos de Nous</h1>
                    <div className={styles.card}>
                        <section className={styles.section}>
                            <p>
                            Next-Gen Sports est une organisation dédiée à la promotion du sport
                            et du bien-être. Nous croyons en l'importance de la communauté,
                            de la performance et de la santé globale.
                            </p>
                        </section>
                    </div>
                    
                <div className={styles.card}>
                <section className={styles.section}>
                    <h2>Notre Mission</h2>
                    <p>
                        Notre mission est d'offrir des programmes sportifs accessibles
                        et adaptés à tous, qu'il s'agisse de débutants cherchant à
                        découvrir une activité physique ou de professionnels souhaitant
                        optimiser leurs performances. Nous nous engageons à inspirer
                        et motiver chacun à dépasser ses limites, à renforcer son corps
                        et son esprit, et à atteindre des objectifs personnels ambitieux.
                        Chez Next-Gen Sports, nous croyons fermement que chaque individu
                        a le potentiel de se transformer et de se dépasser, peu importe
                        son point de départ.
                    </p>
                </section>
                </div>
                <div className={styles.card}>
                <section className={styles.section}>
                    <h2>Nos Engagements</h2>
                    <ul>
                        <li>Offrir des services de qualité.</li>
                        <li>Favoriser l'inclusivité et le respect dans toutes nos activités.</li>
                        <li>Créer une communauté sportive forte et soudée.</li>
                    </ul>
                </section>
                </div>
            </main>
        </div>
    );
}
