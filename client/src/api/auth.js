import axios from "axios";

let serverEndpoint;

if(process.env.NODE_ENV = "production") {
    serverEndpoint = process.env.SERVER_ENDPOINT
}else{
    serverEndpoint = "http://localhost:5000/wenote/api/v1/user"
}

export default {
    oauth: (token) => axios.post(`${serverEndpoint}/auth/google`, {token}).then((res) => res.data),
    login: (email, password) => axios.post(`${serverEndpoint}/login`, {email, password}).then((res) => res.data),
    signup: (email, password) => axios.post(`${serverEndpoint}/signup`, {email, password}).then((res) => res.data),
}
