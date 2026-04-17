import {NavLink} from 'react-router-dom'

import styles from "./styles.module.css"

function NavItem({to, icon, children}) {
    return (
        <NavLink to={to} className={({ isActive }) => isActive ? `${styles.main} ${styles.active}` : styles.main} >
            {icon ? <ion-icon name={icon}></ion-icon> : {Teste} }
            <p>{children}</p>
        </NavLink>

    )
}

export default NavItem;