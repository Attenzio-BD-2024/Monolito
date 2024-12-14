import axios from 'axios';
import { useUser } from '@/hooks/UserContext';

const BASE_URL = 'http://api.attenzio.com'; 

export const instance = axios.create({
    baseURL: BASE_URL
    });

instance.interceptors.request.use((config) => {
    const { user } = useUser();
    if(user?.token){
        config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
    },
    (error) => Promise.reject(error)
);

export default instance;