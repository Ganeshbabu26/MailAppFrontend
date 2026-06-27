import api from "../api/api";

export const checkUserExists =
    (email) =>
        api.get(
            `/api/users/check?email=${email}`
        );