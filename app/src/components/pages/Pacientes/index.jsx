import { useEffect, useState } from 'react'
import { getAll } from "../../../services/pacientes_service"

import Ln from "../../UI/Ln"

import styles from "./styles.module.css"

function Pacientes() {
    const [openForm, setOpenForm] = useState(false);
    const [name, setName] = useState("");
    const [card, setCard] = useState("");
    const [cpf, setCpf] = useState("");
    const [date, setDate] = useState("");
    const [patients, setPatients] = useState([])

    function add(e) {
        e.preventDefault();

        console.log(name);
        console.log(card);
        console.log(cpf);
        console.log(date);
    }

    async function init() {
        const data = await getAll();
        setPatients(data);
    }


    useEffect(() => {
        init();
    }, [])


    return (
        <section className={styles.main}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>Pacientes</h1>
                </div>

                <Ln />

                <div className={styles.content}>
                    <div className={`${styles.input} ${openForm ? styles.open : ""}`}>
                        <div className={styles.title} onClick={() => { setOpenForm(!openForm) }}>
                            <h2>Novo paciente</h2>
                            <ion-icon name="chevron-down-outline"></ion-icon>
                        </div>
                        <form onSubmit={add}>
                            <div className={styles.inputArea}>
                                <label>Nome:</label>
                                <input onChange={(e) => setName(e.target.value)} placeholder="Insira o nome do paciente" required />
                            </div>

                            <div className={styles.detailsInput}>
                                <div className={styles.inputArea}>
                                    <label>Carteirinha:</label>
                                    <input onChange={(e) => setCard(e.target.value)} placeholder="Insira o número da carteirinha do paciente" required />
                                </div>

                                <div className={styles.inputArea}>
                                    <label>CPF:</label>
                                    <input onChange={(e) => setCpf(e.target.value)} placeholder="Insira o CPF do paciente" required />
                                </div>
                            </div>

                            <div className={styles.inputArea}>
                                <label>Data de Nascimento:</label>
                                <input onChange={(e) => setDate(e.target.value)} type="date" required />
                            </div>

                            <button className={styles.addButton}>Criar</button>
                        </form>
                    </div>

                    <Ln />

                    <div className={styles.list}>
                        <h2>Pacientes</h2>
                        {patients.map((patient) => (
                            <div key={patient.Id} className={styles.patient}>
                                <div className={styles.identity}>
                                    <h2>{patient.Nome}</h2>
                                    <p>{patient.CPF}</p>
                                </div>

                                <div className={styles.details}>
                                    <p>
                                        <strong>Carteirinha</strong>
                                        {patient.Carteirinha}
                                    </p>
                                    <p>
                                        <strong>Nascimento</strong>
                                        {patient.DataNascimento}
                                    </p>
                                </div>

                                <div className={styles.actions}>
                                    <button><ion-icon name="create-outline"></ion-icon></button>
                                    <button><ion-icon name="trash-outline"></ion-icon></button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pacientes