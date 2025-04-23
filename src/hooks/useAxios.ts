/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import axios, {AxiosRequestConfig} from 'axios'
import Cookies from 'js-cookie';

const axioInstance = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/`,
});


export const useGet = <T>(endpoint: string, config?: AxiosRequestConfig) => {

    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState(false) 
    const [error, setError] = useState<number | null>(null)

    const getData = async () => {
        setData(null)
        setLoading(true)
        setError(null)

            try {
                const response = await axioInstance({
                    url: endpoint,
                    method: 'GET', 
                    
                    headers:{
                        'Authorization': `Bearer ${Cookies.get('Authorization')}`,
                       'Content-Type': 'application/json', 
                        ...config?.headers  
                    },
                     ...config                          
                })
                setData(response.data);
                

            } catch (e: any) {
                setError(e.response?.status || 500);      
            } finally {
           setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { data, loading, error, getData };



}