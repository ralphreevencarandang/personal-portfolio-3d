import axios from 'axios'

const BASE_URL = import.meta.env.MODE == 'development' ? 'http://localhost:5001/api' : 'https://ralph-reeven.vercel.app/api'
const instance = axios.create({
    baseURL: "https://ralph-reeven.vercel.app/api"
})

export default instance
