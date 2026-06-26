import api from "../api/api";

export const registerUser = (user) => {
    return api.post("/auth/register", user);
};

export const loginUser = (user) => {
    return api.post("/auth/login", user);
};

