import { useEffect, useState } from 'react'
import {getAll, add} from "../../../services/doctors_service"

import Ln from "../../UI/Ln"
import Table from "../../shared/Table"
import Notification from "../../shared/Notification"

import styles from "./styles.module.css"

function Medicos(){
    const [doctors, setDoctors] = useState([]);
    const [name, setName] = useState("");
    const [crm, setCrm] = useState("");
    const [ufcrm, setUfcrm] = useState(""); 
    const [notification, setNotification] = useState(null);
    const [openForm, setOpenForm] = useState(false);

    async function submit(e){
        e.preventDefault();

        const data = {
            nome: name,
            CRM: crm,
            UFCRM: ufcrm
        };

        const res = await add(data);

        if(res.status != 200){
            setNotification({
                title: "Erro",
                message: res.data.msg,
                type: 2
            });

            return;
        }

        const doctors = await getAll();
        setDoctors(doctors.data);

        setName("");
        setCrm("");
        setUfcrm("");
        setNotification({
            title: "Sucesso",
            message: res.data.msg,
            type: 1
        });
    }

    async function init(){
        const res = await getAll();
        setDoctors(res.data);
    }

    useEffect(() => {
        init();
    }, [])

    return(
        <section className={styles.main}>
            {notification && <Notification title={notification.title} message={notification.message} type={notification.type} onClose={() => setNotification(null)}/>}
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>Médicos</h1>
                </div>

                <Ln />

                <div className={styles.content}>
                    <div className={`${styles.input} ${openForm ? styles.open : ""}`}>
                        <div className={styles.title} onClick={() => { setOpenForm(!openForm) }}>
                            <h2>Novo médico</h2>
                            <ion-icon name="chevron-down-outline"></ion-icon>
                        </div>
                        <form onSubmit={submit}>
                            <div className={styles.inputArea}>
                                <label>Nome:</label>
                                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Insira o nome do médico" required />
                            </div>

                            <div className={styles.detailsInput}>
                                <div className={styles.inputArea}>
                                    <label>CRM:</label>
                                    <input value={crm} onChange={(e) => setCrm(e.target.value)} placeholder="Insira o número da CRM do médico" required />
                                </div>

                                <div className={styles.inputArea}>
                                    <label>UFCRM:</label>
                                    <input value={ufcrm} onChange={(e) => setUfcrm(e.target.value)} placeholder="Insira o número da UFCRM do médico" required />
                                </div>
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
                                    <th>CRM</th>
                                    <th>UFCRM</th>
                                </tr>
                            </thead>

                            <tbody>
                                {doctors.map((doctor) => (
                                    <tr key={doctor.Id}>
                                        <td>{doctor.Id}</td>
                                        <td>{doctor.Nome}</td>
                                        <td>{doctor.CRM}</td>
                                        <td>{doctor.UFCRM}</td>
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

export default Medicos;