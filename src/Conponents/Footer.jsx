import styles from "./Footer.module.css";
import Logobds from "./logobds.png";
import logoinsta from "./logo-insta.jpeg";

export function Footer(){
    return (
        <div className={styles["footer"]}>
            <div className={styles["container"]}>
                <div className={styles["footer-top"]}>
                    <img src={Logobds} className={styles["logo-bds"]}></img>
                </div>
                <div className={styles["contact"]}>
                    <h2> Suivez-nous: </h2>
                    <ul className={styles["liste-logo"]}>
                        <li className={styles["logo-item"]}>
                            <a href="https://www.instagram.com/bds_nextu/?next=%2F" target="_blank">
                                <img src={logoinsta} className={styles["insta"]}></img>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}