import axios from "axios";

const Axios = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
        "content-type": "application/json"
    }
});

export default Axios;