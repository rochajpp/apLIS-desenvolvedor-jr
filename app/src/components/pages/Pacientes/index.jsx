import { useEffect, useState } from 'react'
import { getAll, add } from "../../../services/pacientes_service"

import Ln from "../../UI/Ln"
import Table from "../../shared/Table"

import styles from "./styles.module.css"

function Pacientes() {
    const [openForm, setOpenForm] = useState(false);
    const [name, setName] = useState("");
    const [card, setCard] = useState("");
    const [cpf, setCpf] = useState("");
    const [date, setDate] = useState("");
    const [patients, setPatients] = useState([])

    async function submit(e) {
        e.preventDefault();

        const data = {
            nome: name,
            dataNascimento: date,
            carteirinha: card,
            cpf: cpf
        }

        const res = await add(data);

        if(res.status != 200){
            
        }

        const patients = await getAll();
        setPatients(patients.data);
        setName("");
        setDate("");
        setCpf("");
        setCard("");
    }

    async function init() {
        const res = await getAll();
        setPatients(res.data);
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
                        <form onSubmit={submit}>
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
                        <Table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                    <th>CPF</th>
                                    <th>Carteirinha</th>
                                    <th>Data Nascimento</th>
                                </tr>
                            </thead>

                            <tbody>
                                {patients.map((patient) => (
                                    <tr key={patient.Id}>
                                        <td>{patient.Id}</td>
                                        <td>{patient.Nome}</td>
                                        <td>{patient.CPF}</td>
                                        <td>{patient.Carteirinha}</td>
                                        <td>{(() => {
                                            const date = new Date(patient.DataNascimento);
                                            return date.toLocaleDateString('pt-BR');
                                        })()}   </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pacientes