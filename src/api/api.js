// import axios from "axios";

// export default axios.create({
//     baseURL: "http://localhost:8080"
//     //baseURL: "https://mailappbackend-ck1y.onrender.com"
// });


import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080"
    //baseURL: "https://mailappbackend-ck1y.onrender.com"
});

api.interceptors.request.use((config) => {

    const token =
        localStorage.getItem("token");

    if(token)
    {
        config.headers.Authorization =
            `Bearer ${token}`;
    }

    return config;
});

export default api;