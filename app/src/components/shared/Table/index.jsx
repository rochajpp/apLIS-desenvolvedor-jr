import styles from "./styles.module.css"

function Table({children}){
    return(
        <div className={styles.container}>
            <table className={styles.table}>
                {children}
            </table>
        </div>
    )
}

export default Table
