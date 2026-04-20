import api from "../api/config"

export const getAll = async() => {
    const response = await api.get("/pacientes");
    return response;
}

export const add = async(data) =>{
    const response = await api.post("/pacientes", data);
    return response;
}
