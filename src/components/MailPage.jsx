import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/api";
import "../styles/MailPage.css";

import { LuStar } from "react-icons/lu";
import { IoArrowBack } from "react-icons/io5";

export default function MailPage()
{
    const { id } = useParams();
    const navigate = useNavigate();

    const [mail, setMail] = useState(null);
    const [starred, setStarred] = useState(false);

    useEffect(() =>
    {
        fetchMail();
    }, []);

    async function fetchMail()
    {
        try
        {
            const response =
                await api.get(`/mail/${id}`);

            setMail(response.data);

            // if backend returns label STARRED
            setStarred(
                response.data.label === "STARRED"
            );
        }
        catch(error)
        {
            console.log(error);
        }
    }

    async function handleStar()
    {
        try
        {
            await api.put(`/mail/star/${id}`);

            setStarred(!starred);
        }
        catch(error)
        {
            console.log(error);
        }
    }

    // IMPORTANT: don't render until mail is loaded
    if(!mail)
    {
        return (
            <div className="mail-page">
                <h2>Loading...</h2>
            </div>
        );
    }

    return (
        <div className="mail-page">

            <IoArrowBack
                onClick={() => navigate(-1)}
                className="leftarrow-icon"
                size={28}
            />

            <div className="mail-header">

                <h2 className="subject">
                    {mail.subject}
                </h2>

                <button
                    className="star-btn"
                    onClick={handleStar}
                >
                    <LuStar
                        size={26}
                        fill={starred ? "gold" : "none"}
                    />
                </button>

            </div>

            <div className="details-card">

                <div className="detail-row">
                    <span className="label">
                        From
                    </span>

                    <span>
                        {mail.sender}
                    </span>
                </div>

                <div className="detail-row">
                    <span className="label">
                        To
                    </span>

                    <span>
                        {mail.receiver}
                    </span>
                </div>

                <div className="detail-row">
                    <span className="label">
                        Date
                    </span>

                    <span>
                        {new Date(
                            mail.sentTime
                        ).toLocaleString()}
                    </span>
                </div>

            </div>

            <div className="mail-body">
                {mail.body}
            </div>

        </div>
    );
}