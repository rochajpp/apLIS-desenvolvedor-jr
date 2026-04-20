import styles from "./styles.module.css"

function Notification({ title, message, type }) {
    if (type == 1) {
        return (
            <div className={styles.main}>
                <div className={styles.title}>
                    <ion-icon name="checkmark-circle"></ion-icon>
                    <h2>{title}</h2>
                </div>
                {message}
            </div>
        )
    } else if(type == 2){
         return (
            <div className={styles.main}>
                <div className={styles.title}>
                    <ion-icon name="close-circle"></ion-icon>
                    <h2>{title}</h2>
                </div>
                {message}
            </div>
        )
    }
}

export default Notification;
