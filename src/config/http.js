  
import axios from 'axios'

export const http = axios.create({
  baseURL : `http://localhost:${process.env.SERVER_PORT}/api`
})