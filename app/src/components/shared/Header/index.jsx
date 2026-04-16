import styles from "./styles.module.css"

function Header(){
    return(
        <header className={styles.main}>
            <div className={styles.container}>
                <img className={styles.logo} src="logo.png" />

                <nav className={styles.links}>
                    <a href="/medicos">
                        <ion-icon name="pulse-outline"></ion-icon>
                        <p>Médicos</p>
                    </a>
                    <a href="/pacientes">
                        <ion-icon name="person-outline"></ion-icon>
                        <p>Pacientes</p>
                    </a>
                </nav>

                <span>Desenvolvido por João Paulo Rocha</span>
            </div>
        </header>
    )
}

export default Header;