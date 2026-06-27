import api from "../api/api";

export const checkUserExists = (email) =>
{
    return api.get(
        `/users/check?email=${email}`
    );
};