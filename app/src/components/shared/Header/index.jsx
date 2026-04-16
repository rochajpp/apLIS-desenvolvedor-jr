import styles from "./styles.module.css"

function Header(){
    return(
        <header className={styles.main}>
            <div className={styles.container}>
                <img className={styles.logo} src="logo.png" />

                <nav className={styles.links}>
                    <a href="/medicos">Médicos</a>
                    <a href="/pacientes">Pacientes</a>
                </nav>

                <span>Desenvolvido por João Paulo Rocha</span>
            </div>
        </header>
    )
}

export default Header;