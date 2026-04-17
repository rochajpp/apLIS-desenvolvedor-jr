import {NavLink} from 'react-router-dom'

import styles from "./styles.module.css"

function Header(){
    return(
        <header className={styles.main}>
            <div className={styles.container}>
                <img className={styles.logo} src="logo.png" />

                <nav className={styles.links}>
                    <NavLink to="/medicos" className={({isActive}) => isActive ? `${styles.link} ${styles.linkActive}` : styles.link} href="/medicos">
                        <ion-icon name="pulse-outline"></ion-icon>
                        <p>Médicos</p>
                    </NavLink>

                    <NavLink to="/pacientes" className={({isActive}) => isActive ? `${styles.link} ${styles.linkActive}` : styles.link}  href="/pacientes">
                        <ion-icon name="person-outline"></ion-icon>
                        <p>Pacientes</p>
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header;
