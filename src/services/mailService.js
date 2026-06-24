import api from "../api/api";

export function getInbox(email)
{
    return api.get(
        `/mail/inbox/${email}`
    );
}

export function getSent(email)
{
    return api.get(
        `/mail/sent/${email}`
    );
}

export function getTrash(email)
{
    return api.get(
        `/mail/trash/${email}`
    );
}

export function getStarred(email)
{
    return api.get(
        `/mail/starred/${email}`
    );
}

import axios from "axios";

const BASE_URL = "http://localhost:8080/mail";

export const sendMail = (mail) =>
{
    return axios.post(
        `${BASE_URL}/send`,
        mail
    );
}