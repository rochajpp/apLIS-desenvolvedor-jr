import { useEffect, useState } from 'react'

import styles from "./styles.module.css"

function Notification({ title, message, type, onClose }) {

    const [open, setOpen] = useState(false);

    useEffect(() => {
        const main = document.querySelector(`.${styles.main}`);

        main.style.right = "0";

        setTimeout(() => {
            main.style.right = "-100%";
            setTimeout(() => {
                onClose();
            }, 1000);

        }, 5000);


    }, [])


    if (type == 1) {
        return (
            <div className={`${styles.main} ${styles.type1}`}>
                <ion-icon className={styles.iconMain} name="checkmark-circle"></ion-icon>
                <div className={styles.message}>
                    <h2>{title}</h2>
                    {message}
                </div>
            </div>
        )
    } else if (type == 2) {
        return (
            <div className={`${styles.main} ${styles.type2}`}>
                <ion-icon className={styles.iconMain} name="close-circle"></ion-icon>
                <div className={styles.message}>
                    <h2>{title}</h2>
                    {message}
                </div>
            </div>
        )
    }
}

export default Notification;
