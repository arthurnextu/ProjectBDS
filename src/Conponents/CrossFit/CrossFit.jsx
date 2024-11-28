import React from 'react';
import style from './CrossFit.module.css';

export function CrossFitPage() {
    return (
        <div className={style.crossfitPage}>
            <main className={style.mainContent}>
                <h1>Bienvenue sur la page CrossFit</h1>
                <div className={style.card}>
                <section className={style.section}>
                    <p>Le CrossFit est une méthode d'entraînement intensif qui combine force, endurance et agilité.</p>
                </section>
                </div>
                <div className={style.card}>
                    <section className={style.section}>
                    <h2>Nos Programmes de CrossFit</h2>
                    <p>
                        Nous proposons des programmes de CrossFit adaptés à tous les niveaux, pour repousser vos limites
                        et atteindre vos objectifs.
                    </p>
                    </section>
                </div>
            </main>
        </div>
    );
}

