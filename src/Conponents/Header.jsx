import styles from './Header.module.css'

export function Header() {
    return (
        <div className={styles["header"]}>
            <img id="logo" src="logo.png" alt="logo next-gen sports"></img>
            <div className={styles["menu"]}>
                <ul>
                    <li className={styles["navbar"]}>
                        <a href="/"> Sports </a>
                        <ul className={styles["sous-nav"]}>
                            <li>
                                <a href="/"> Running </a>
                            </li>
                            <li>
                                <a href="/"> Renfo musculaire </a>
                            </li>
                            <li>
                                <a href="/"> Crossfit </a>
                            </li>
                        </ul>
                    </li>
                    <li className={styles["navbar"]}>
                        <a href="/"> Activités </a>
                        <ul className={styles["sous-nav"]}>
                            <li>
                                <a href="/"> </a>
                            </li>
                        </ul>
                    </li>

                    <li className={styles["navbar"]}>
                        <a href="/"> À propos </a>
                        <ul className={styles["sous-nav"]}>
                            <li>
                                <a href="/"> </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}