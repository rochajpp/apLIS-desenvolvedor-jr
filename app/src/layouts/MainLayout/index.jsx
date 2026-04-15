import {Outlet} from 'react-router-dom'

import styles from "./styles.module.css"

function MainLayout(){
    return(
        <>
            <Outlet />
        </>
    )
}

export default MainLayout
