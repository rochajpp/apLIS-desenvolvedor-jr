import {Outlet} from 'react-router-dom'

import Header from "../../components/shared/Header"

import styles from "./styles.module.css"

function MainLayout(){
    return(
        <div className={styles.container}>
            <Header />
            <Outlet />
        </div>
    )
}

export default MainLayout
