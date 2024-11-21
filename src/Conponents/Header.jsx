

export function Header() {
    return (
        <div className="header">
            <img id="logo" src="logo.png" alt="logo next-gen sports"></img>
            <div className="menu">
                <ul>
                    <li className="navbar">
                        <a href="/"> Sports </a>
                        <ul className="sous-nav">
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
                    <li className="navbar">
                        <a href="/"> Activités </a>
                        <ul className="sous-nav">
                            <li>
                                <a href="/"> </a>
                            </li>
                        </ul>
                    </li>

                    <li className="navbar">
                        <a href="/"> À propos </a>
                        <ul className="sous-nav">
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