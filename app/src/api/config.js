import axios from 'axios'

export const apiPatients = axios.create({
    baseURL: import.meta.env.VITE_API_PATIENTS_URL
});

export const apiDoctors = axios.create({
    baseURL: import.meta.env.VITE_API_DOCTORS_URL
});

