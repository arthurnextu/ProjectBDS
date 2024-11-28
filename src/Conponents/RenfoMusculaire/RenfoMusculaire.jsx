import React from 'react';
import style from './RenfoMusculaire.module.css' 

export function RenfoMusculairePage() {
    return (
        <div className={style.renfoMusculairePage}>
            <main className={style.mainContent}>
                <h1>Bienvenue sur la page Renforcement Musculaire</h1>
                <div className={style.card}>
                    <section className={style.section}>
                        <p>Le renforcement musculaire est essentiel 
                        pour développer votre force et améliorer votre santé globale.</p>
                    </section>
                </div>
                <div className={style.card}>   
                    <section className={style.section}>
                        <h2>Nos Programmes de Renforcement Musculaire</h2>
                        <p>Nous proposons des programmes adaptés à tous les niveaux, 
                            du débutant à l'expert. Découvrez nos entraînements et 
                            atteignez vos objectifs !</p>
                    </section>
                </div> 
            </main>
        </div>
    );
}



