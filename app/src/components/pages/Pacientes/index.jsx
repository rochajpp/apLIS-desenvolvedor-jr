import Ln from "../../UI/Ln"

import styles from "./styles.module.css"

function Pacientes(){
    return(
        <section className={styles.main}>
            <div className={styles.container}>
                <h1>Pacientes</h1>
                <Ln />
                <div className={styles.list}>
                    
                </div>
            </div>
        </section>
    )
}

export default Pacientes