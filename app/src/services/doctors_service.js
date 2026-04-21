import api from "../api/config"

export const getAll = async() => {
    const response = await api.get("/medicos");
    return response;
}

export const add = async(data) =>{
    const response = await api.post("/medicos", data);
    return response;
}
