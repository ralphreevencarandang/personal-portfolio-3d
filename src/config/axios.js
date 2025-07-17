import axios from 'axios'

const BASE_URL = import.meta.env.MODE == 'development' ? 'http://localhost:5001/api' : 'https://personal-fortfolio-backend.onrender.com'
const instance = axios.create({
    baseURL: "https://ralph-reeven.vercel.app/api"
})

export default instance
