import {NavLink} from 'react-router-dom'
import NavItem from "../NavItem"

import styles from "./styles.module.css"

function Header(){
    return(
        <header className={styles.main}>
            <div className={styles.container}>
                <img className={styles.logo} src="logo.png" />

                <nav className={styles.links}>
                    <NavItem to="/medicos" icon="pulse-outline">
                        Médicos
                    </NavItem>

                    <NavItem to="/pacientes" icon="person-outline">
                        Pacientes
                    </NavItem>
                </nav>
            </div>
        </header>
    )
}

export default Header;
