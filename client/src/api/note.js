import axios from "axios";

let serverEndpoint = serverEndpoint = "http://localhost:5000/wenote/api/v1/user"


if(process.env.NODE_ENV = "production") {
    serverEndpoint = `${process.env.SERVER_ENDPOINT}/api/v1/note`
}

export default {
    create: (token, body, title, tags) => axios.post(`${serverEndpoint}/new`, {
        title,
        body,
        tags
    }, {
        headers: {
            "auth-token": token
        }
    }).then((res) => res.data),
    retrieve: (noteId) => axios.get(`${serverEndpoint}/${noteId}`).then((res) => res.data),
    update: (token, title, body, tags) => axios.put(`${serverEndpoint}/update/${id}`, {
        title,
        body,
        tags
    }, {
        headers: {
            "auth-token": token
        }
    }).then((res) => res.data),
    delete: (token, noteId) => axios.delete(`${serverEndpoint}/delete/${noteId}`, {
        headers: {
            "auth-token": token
        }
    }).then((res) => res.data)
}
