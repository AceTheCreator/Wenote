import axios from 'axios';

let serverEndpoint = (serverEndpoint =
  "http://localhost:5000/wenote/api/v1/note");

if (process.env.NODE_ENV === "production") {
  serverEndpoint = `${process.env.SERVER_ENDPOINT}/api/v1/tasks`;
}

export default {
  create: (token, title, description) => axios.post(`serverEndpoint/new`, {
      title,
      description
  },{
      headers: {
          "auth-token": token
      }
  }).then((res) => res.data),
};