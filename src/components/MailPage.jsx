import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";
import "../styles/MailPage.css";

export default function MailPage()
{
    const { id } = useParams();

    const [mail, setMail] = useState(null);

    useEffect(() =>
    {
        fetchMail();
    }, []);

    async function fetchMail()
    {
        try
        {
            const response =
                await axios.get(`/mail/${id}`);

            setMail(response.data);
        }
        catch (error)
        {
            console.log(error);
        }
    }

    if (!mail)
    {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="mail-page">

            <h2 className="subject">
                {mail.subject}
            </h2>

            <hr/>

            <div className="details">

                <p>
                    <strong>From :</strong>
                    {mail.sender}
                </p>

                <p>
                    <strong>To :</strong>
                    {mail.receiver}
                </p>

                <p>
                    <strong>Date :</strong>
                    {mail.sentTime}
                </p>

            </div>

            <hr/>

            <div className="body">

                {mail.body}

            </div>

        </div>
    );
}