import axios, { AxiosInstance } from "axios";

const Api: AxiosInstance = axios.create({
    baseURL: 'https://newsapi.org/v2',
    headers: {
        'X-Api-Key': '0a757b10cf2e44b2ba5370b9ecb8fe21'
    }
})

export default Api
