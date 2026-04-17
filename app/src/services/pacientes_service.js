import api from "../api/config"

export const getAll = async() => {
    const response = await api.get("/pacientes");
    return response.data;
}