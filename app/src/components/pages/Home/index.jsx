import styles from "./styles.module.css"

function Home(){
    return(
        <section className={styles.main}>
            <div className={styles.container}>
                <h1>Bem-Vindo</h1>
            </div>
        </section>
    )
}

export default Home;