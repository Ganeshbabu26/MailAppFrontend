import api from "../api/api";

export function getInbox()
{
    return api.get("/mail/inbox");
}

export function getSent()
{
    return api.get("/mail/sent");
}

export function getTrash()
{
    return api.get("/mail/trash");
}

export function getStarred()
{
    return api.get("/mail/starred");
}

export function getDraft()
{
    return api.get("/mail/draft");
}


export const sendMail = (mail) =>
{
        return api.post("/mail/send", mail);
}